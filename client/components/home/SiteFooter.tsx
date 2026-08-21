import Link from "next/link";
import { Wordmark } from "./Wordmark";
import { Container } from "./Container";

const COLUMNS = [
  {
    title: "Product",
    links: [
      { href: "#models", label: "Models" },
      { href: "#features", label: "Platform" },
      { href: "/login", label: "Chat" },
      { href: "#docs", label: "Docs" },
    ],
  },
  {
    title: "Account",
    links: [
      { href: "/login", label: "Sign in" },
      { href: "/register", label: "Create account" },
    ],
  },
  {
    title: "Developers",
    links: [
      { href: "#docs", label: "API reference" },
      { href: "#docs", label: "Status" },
    ],
  },
];

export function SiteFooter() {
  return (
    <footer className="w-full border-t border-border">
      <Container className="grid grid-cols-1 gap-10 py-10 md:grid-cols-4">
        <div>
          <Wordmark />
          <p className="mt-3 max-w-xs text-sm leading-6 text-muted">
            One endpoint for every major model. OpenAI-compatible, provider-aware.
          </p>
        </div>
        {COLUMNS.map((col) => (
          <div key={col.title}>
            <h2 className="text-sm font-medium text-fg">{col.title}</h2>
            <ul className="mt-3 space-y-2">
              {col.links.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="text-sm text-muted hover:text-fg"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </Container>
      <p className="border-t border-border py-4 text-center text-xs text-subtle">
        © {new Date().getFullYear()} Aperture.
      </p>
    </footer>
  );
}
