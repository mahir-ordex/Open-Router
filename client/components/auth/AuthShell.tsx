import type { ReactNode } from "react";
import Link from "next/link";
import { Wordmark } from "@/components/home/Wordmark";

export function AuthShell({
  title,
  subtitle,
  children,
}: {
  title: string;
  subtitle: string;
  children: ReactNode;
}) {
  return (
    <div className="grid min-h-full w-full bg-bg lg:grid-cols-2">
      <aside className="relative hidden flex-col justify-between border-r border-border px-10 py-8 lg:flex">
        <Link href="/" aria-label="Aperture home">
          <Wordmark />
        </Link>
        <div className="max-w-sm">
          <p className="text-3xl font-semibold leading-tight tracking-tight text-fg">
            One key. Every model.
          </p>
          <p className="mt-3 text-sm leading-6 text-muted">
            Sign in to route requests across providers with a single
            OpenAI-compatible endpoint.
          </p>
        </div>
        <p className="text-xs text-subtle">Aperture inference</p>
      </aside>

      <div className="flex min-h-full flex-col">
        <header className="flex h-14 items-center justify-between border-b border-border px-6 lg:hidden">
          <Link href="/" aria-label="Aperture home">
            <Wordmark />
          </Link>
          <Link href="/" className="text-[13px] text-muted hover:text-fg">
            Home
          </Link>
        </header>

        <main className="flex flex-1 items-center justify-center px-6 py-12">
          <div className="w-full max-w-sm">
            <h1 className="text-2xl font-semibold tracking-tight text-fg">
              {title}
            </h1>
            <p className="mt-1.5 text-sm text-muted">{subtitle}</p>
            <div className="mt-8">{children}</div>
          </div>
        </main>
      </div>
    </div>
  );
}
