"use client";

import { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { signInApi } from "@/api/auth";
import { AuthShell } from "@/components/auth/AuthShell";
import { Field, PasswordField } from "@/components/auth/Field";

export default function LoginPage() {
  const router = useRouter();
  const [details, setDetails] = useState({ email: "", password: "" });
  const [error, setError] = useState("");
  const [pending, setPending] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setDetails((prev) => ({ ...prev, [name]: value }));
  };

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("");
    setPending(true);

    try {
      const data = await signInApi(details);
      localStorage.setItem("token", data?.token ?? "session");
      router.push("/");
    } catch {
      setError("Email or password is incorrect.");
    } finally {
      setPending(false);
    }
  };

  return (
    <AuthShell
      title="Sign in"
      subtitle="Use the email and password you registered with."
    >
      <form onSubmit={handleLogin} className="flex flex-col gap-4" noValidate>
        {error ? (
          <p className="rounded-md border border-red-500/40 bg-red-500/10 px-3 py-2 text-sm text-red-300" role="alert">
            {error}
          </p>
        ) : null}

        <Field
          id="email"
          name="email"
          label="Email"
          type="email"
          autoComplete="email"
          required
          value={details.email}
          onChange={handleChange}
          placeholder="you@company.com"
        />
        <PasswordField
          id="password"
          name="password"
          label="Password"
          autoComplete="current-password"
          required
          value={details.password}
          onChange={handleChange}
          placeholder="Your password"
        />

        <button
          type="submit"
          disabled={pending}
          className="mt-2 inline-flex h-10 items-center justify-center rounded-md bg-fg text-sm font-medium text-bg transition-opacity hover:opacity-90 disabled:opacity-50"
        >
          {pending ? "Signing in…" : "Sign in"}
        </button>
      </form>

      <p className="mt-6 text-center text-sm text-muted">
        No account?{" "}
        <Link href="/register" className="text-fg underline-offset-4 hover:underline">
          Create one
        </Link>
      </p>
    </AuthShell>
  );
}
