"use client";

import { useState } from "react";
import Link from "next/link";
import { Wordmark } from "./Wordmark";
import { Container } from "./Container";

const NAV = [
  { href: "/#models", label: "Models" },
  { href: "/#features", label: "Platform" },
  { href: "/login", label: "Chat" },
  { href: "/#docs", label: "Docs" },
];

export function SiteHeader() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-20 w-full border-b border-border bg-bg/90 backdrop-blur-sm">
      <Container className="flex h-14 items-center justify-between gap-6">
        <Link href="/" className="shrink-0" aria-label="Aperture home">
          <Wordmark />
        </Link>

        <nav
          className="hidden flex-1 items-center justify-center gap-8 md:flex"
          aria-label="Primary"
        >
          {NAV.map((item) => (
            <Link
              key={item.label}
              href={item.href}
              className="text-[13px] text-muted transition-colors hover:text-fg"
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="hidden shrink-0 items-center gap-2 md:flex">
          <Link
            href="/login"
            className="rounded-md px-3 py-1.5 text-[13px] text-muted transition-colors hover:text-fg"
          >
            Sign in
          </Link>
          <Link
            href="/register"
            className="rounded-md bg-fg px-3 py-1.5 text-[13px] font-medium text-bg transition-opacity hover:opacity-90"
          >
            Get API key
          </Link>
        </div>

        <button
          type="button"
          className="rounded-md p-2 text-fg md:hidden"
          aria-expanded={open}
          aria-controls="mobile-nav"
          aria-label={open ? "Close menu" : "Open menu"}
          onClick={() => setOpen((v) => !v)}
        >
          <svg width="20" height="20" viewBox="0 0 20 20" fill="none" aria-hidden="true">
            {open ? (
              <path d="M5 5l10 10M15 5L5 15" stroke="currentColor" strokeWidth="1.5" />
            ) : (
              <path d="M3 5h14M3 10h14M3 15h14" stroke="currentColor" strokeWidth="1.5" />
            )}
          </svg>
        </button>
      </Container>

      {open ? (
        <Container className="border-t border-border py-3 md:hidden">
          <nav id="mobile-nav" className="flex flex-col gap-1" aria-label="Mobile">
            {NAV.map((item) => (
              <Link
                key={item.label}
                href={item.href}
                className="rounded-md px-2 py-2 text-sm text-muted hover:bg-elevated hover:text-fg"
                onClick={() => setOpen(false)}
              >
                {item.label}
              </Link>
            ))}
            <Link
              href="/login"
              className="rounded-md px-2 py-2 text-sm text-muted hover:bg-elevated hover:text-fg"
              onClick={() => setOpen(false)}
            >
              Sign in
            </Link>
            <Link
              href="/register"
              className="mt-1 rounded-md bg-fg px-3 py-2 text-center text-sm font-medium text-bg"
              onClick={() => setOpen(false)}
            >
              Get API key
            </Link>
          </nav>
        </Container>
      ) : null}
    </header>
  );
}
