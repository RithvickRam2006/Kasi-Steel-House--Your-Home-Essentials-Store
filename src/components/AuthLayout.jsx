import React from "react";

export default function AuthLayout({ icon: Icon, title, subtitle, footer, children }) {
  return (
    <div className="min-h-screen flex items-center justify-center bg-slate-50 px-4 py-10">
      <div className="w-full max-w-lg">
        <div className="rounded-[2rem] border border-slate-200 bg-white p-10 shadow-xl">
          {Icon && (
            <div className="mx-auto mb-6 inline-flex h-16 w-16 items-center justify-center rounded-2xl bg-primary/10 text-primary">
              <Icon className="h-8 w-8" />
            </div>
          )}
          <div className="mb-8 text-center">
            <h1 className="text-3xl font-semibold text-slate-900">{title}</h1>
            <p className="mt-2 text-sm text-slate-600">{subtitle}</p>
          </div>
          <div className="space-y-6">{children}</div>
          {footer && <div className="mt-8 text-center text-sm text-slate-500">{footer}</div>}
        </div>
      </div>
    </div>
  );
}
