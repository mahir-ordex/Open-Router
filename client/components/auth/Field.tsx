"use client";

import { useState, type InputHTMLAttributes } from "react";

type FieldProps = InputHTMLAttributes<HTMLInputElement> & {
  id: string;
  label: string;
  error?: string;
};

function inputClasses(hasError: boolean, extra = "") {
  return `h-10 w-full rounded-md border bg-elevated px-3 text-sm text-fg placeholder:text-subtle ${
    hasError ? "border-red-500" : "border-border"
  } ${extra}`.trim();
}

function FieldError({ id, error }: { id: string; error?: string }) {
  if (!error) return null;
  return (
    <p id={`${id}-error`} className="text-xs text-red-400" role="alert">
      {error}
    </p>
  );
}

export function Field({ id, label, error, className = "", ...props }: FieldProps) {
  return (
    <div className="flex flex-col gap-1.5">
      <label htmlFor={id} className="text-[13px] text-muted">
        {label}
      </label>
      <input
        id={id}
        aria-invalid={Boolean(error)}
        aria-describedby={error ? `${id}-error` : undefined}
        className={inputClasses(Boolean(error), className)}
        {...props}
      />
      <FieldError id={id} error={error} />
    </div>
  );
}

export function PasswordField({
  id,
  label,
  error,
  className = "",
  ...props
}: Omit<FieldProps, "type">) {
  const [visible, setVisible] = useState(false);

  return (
    <div className="flex flex-col gap-1.5">
      <label htmlFor={id} className="text-[13px] text-muted">
        {label}
      </label>
      <div className="relative">
        <input
          id={id}
          type={visible ? "text" : "password"}
          aria-invalid={Boolean(error)}
          aria-describedby={error ? `${id}-error` : undefined}
          className={inputClasses(Boolean(error), `pr-10 ${className}`)}
          {...props}
        />
        <button
          type="button"
          onClick={() => setVisible((prev) => !prev)}
          aria-label={visible ? "Hide password" : "Show password"}
          aria-pressed={visible}
          className="absolute right-1 top-1 inline-flex h-8 w-8 items-center justify-center rounded text-subtle transition-colors hover:text-fg"
        >
          {visible ? <EyeOffIcon /> : <EyeIcon />}
        </button>
      </div>
      <FieldError id={id} error={error} />
    </div>
  );
}

function EyeIcon() {
  return (
    <svg
      width="16"
      height="16"
      viewBox="0 0 16 16"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.4"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <path d="M1.5 8S4 3.5 8 3.5 14.5 8 14.5 8S12 12.5 8 12.5 1.5 8 1.5 8Z" />
      <circle cx="8" cy="8" r="2" />
    </svg>
  );
}

function EyeOffIcon() {
  return (
    <svg
      width="16"
      height="16"
      viewBox="0 0 16 16"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.4"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <path d="M6.4 4.02A6.4 6.4 0 0 1 8 3.5c4 0 6.5 4.5 6.5 4.5a13 13 0 0 1-1.9 2.5" />
      <path d="M3.6 5.1A13.3 13.3 0 0 0 1.5 8S4 12.5 8 12.5c.7 0 1.35-.13 1.95-.36" />
      <path d="M6.8 6.83a1.9 1.9 0 0 0 2.4 2.36" />
      <path d="m2.5 2.5 11 11" />
    </svg>
  );
}
