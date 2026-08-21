"use client";

import { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { signUpApi } from "@/api/auth";
import { AuthShell } from "@/components/auth/AuthShell";
import { Field, PasswordField } from "@/components/auth/Field";

export default function RegisterPage() {
  const router = useRouter();
  const [details, setDetails] = useState({
    first_name: "",
    last_name: "",
    email: "",
    password: "",
    confirmPassword: "",
  });
  const [error, setError] = useState("");
  const [pending, setPending] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setDetails((prev) => ({ ...prev, [name]: value }));
  };

  const handleSignUp = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("");

    if (details.password !== details.confirmPassword) {
      setError("Password and confirm password do not match.");
      return;
    }

    setPending(true);
    try {
      const data = await signUpApi({
        first_name: details.first_name || null,
        last_name: details.last_name || null,
        email: details.email,
        password: details.password,
      });
      localStorage.setItem("token", data?.token ?? "session");
      router.push("/");
    } catch {
      setError("Could not create the account. Try a different email.");
    } finally {
      setPending(false);
    }
  };

  return (
    <AuthShell
      title="Create account"
      subtitle="Get an API key and start routing models in a few minutes."
    >
      <form onSubmit={handleSignUp} className="flex flex-col gap-4" noValidate>
        {error ? (
          <p className="rounded-md border border-red-500/40 bg-red-500/10 px-3 py-2 text-sm text-red-300" role="alert">
            {error}
          </p>
        ) : null}

        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
          <Field
            id="first_name"
            name="first_name"
            label="First name"
            autoComplete="given-name"
            value={details.first_name}
            onChange={handleChange}
            placeholder="Ada"
          />
          <Field
            id="last_name"
            name="last_name"
            label="Last name"
            autoComplete="family-name"
            value={details.last_name}
            onChange={handleChange}
            placeholder="Lovelace"
          />
        </div>
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
          autoComplete="new-password"
          required
          value={details.password}
          onChange={handleChange}
          placeholder="At least 8 characters"
        />
        <PasswordField
          id="confirmPassword"
          name="confirmPassword"
          label="Confirm password"
          autoComplete="new-password"
          required
          value={details.confirmPassword}
          onChange={handleChange}
          placeholder="Repeat password"
        />

        <button
          type="submit"
          disabled={pending}
          className="mt-2 inline-flex h-10 items-center justify-center rounded-md bg-fg text-sm font-medium text-bg transition-opacity hover:opacity-90 disabled:opacity-50"
        >
          {pending ? "Creating account…" : "Create account"}
        </button>
      </form>

      <p className="mt-6 text-center text-sm text-muted">
        Already have an account?{" "}
        <Link href="/login" className="text-fg underline-offset-4 hover:underline">
          Sign in
        </Link>
      </p>
    </AuthShell>
  );
}
