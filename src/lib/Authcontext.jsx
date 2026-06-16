import { createContext, useState, useContext, useEffect, useCallback } from 'react';

const LOCAL_USERS_KEY = 'shop_local_users';
const CURRENT_USER_KEY = 'shop_current_user';
const RESET_TOKENS_KEY = 'shop_reset_tokens';

const getStoredUsers = () => {
  if (typeof window === 'undefined') return [];
  return JSON.parse(localStorage.getItem(LOCAL_USERS_KEY) || '[]');
};

const setStoredUsers = (users) => {
  if (typeof window === 'undefined') return;
  localStorage.setItem(LOCAL_USERS_KEY, JSON.stringify(users));
};

const getCurrentUser = () => {
  if (typeof window === 'undefined') return null;
  return JSON.parse(localStorage.getItem(CURRENT_USER_KEY) || 'null');
};

const setCurrentUser = (user) => {
  if (typeof window === 'undefined') return;
  localStorage.setItem(CURRENT_USER_KEY, JSON.stringify(user));
};

const clearCurrentUser = () => {
  if (typeof window === 'undefined') return;
  localStorage.removeItem(CURRENT_USER_KEY);
};

const getResetTokens = () => {
  if (typeof window === 'undefined') return {};
  return JSON.parse(localStorage.getItem(RESET_TOKENS_KEY) || '{}');
};

const setResetTokens = (tokens) => {
  if (typeof window === 'undefined') return;
  localStorage.setItem(RESET_TOKENS_KEY, JSON.stringify(tokens));
};

const AuthContext = createContext();

export function AuthProvider({ children }) {
  const [currentUser, setCurrentUserState] = useState(null);
  const [isLoadingAuth, setIsLoadingAuth] = useState(true);

  useEffect(() => {
    const user = getCurrentUser();
    setCurrentUserState(user);
    setIsLoadingAuth(false);
  }, []);

  const register = useCallback(async (email, password, name) => {
    const users = getStoredUsers();
    
    if (users.some(u => u.email === email)) {
      throw new Error('Email already registered');
    }

    const newUser = {
      id: Date.now().toString(),
      email,
      password,
      name,
      createdAt: new Date().toISOString()
    };

    users.push(newUser);
    setStoredUsers(users);
    setCurrentUser(newUser);
    setCurrentUserState(newUser);

    return newUser;
  }, []);

  const login = useCallback(async (email, password) => {
    const users = getStoredUsers();
    const user = users.find(u => u.email === email && u.password === password);

    if (!user) {
      throw new Error('Invalid email or password');
    }

    setCurrentUser(user);
    setCurrentUserState(user);

    return user;
  }, []);

  const logout = useCallback(() => {
    clearCurrentUser();
    setCurrentUserState(null);
  }, []);

  const resetPasswordRequest = useCallback(async (email) => {
    const users = getStoredUsers();
    const user = users.find(u => u.email === email);

    if (!user) {
      throw new Error('Email not found');
    }

    const token = Math.random().toString(36).substring(2, 15);
    const tokens = getResetTokens();
    tokens[token] = {
      email,
      createdAt: Date.now(),
      expiresAt: Date.now() + 3600000
    };

    setResetTokens(tokens);

    return { token };
  }, []);

  const resetPassword = useCallback(async (token, newPassword) => {
    const tokens = getResetTokens();
    const resetData = tokens[token];

    if (!resetData) {
      throw new Error('Invalid or expired reset token');
    }

    if (resetData.expiresAt < Date.now()) {
      delete tokens[token];
      setResetTokens(tokens);
      throw new Error('Reset token has expired');
    }

    const users = getStoredUsers();
    const userIndex = users.findIndex(u => u.email === resetData.email);

    if (userIndex === -1) {
      throw new Error('User not found');
    }

    users[userIndex].password = newPassword;
    setStoredUsers(users);
    delete tokens[token];
    setResetTokens(tokens);

    return { success: true };
  }, []);

  const value = {
    currentUser,
    isLoadingAuth,
    register,
    login,
    logout,
    resetPasswordRequest,
    resetPassword
  };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}

export function useAuth() {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
}
