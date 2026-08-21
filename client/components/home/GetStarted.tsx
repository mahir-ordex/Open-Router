import Link from "next/link";
import { Container } from "./Container";

const STEPS = [
  {
    n: "1",
    title: "Create an account",
    body: "Register with email. You can add a team later without changing your API key.",
    href: "/register",
    cta: "Sign up",
  },
  {
    n: "2",
    title: "Sign in",
    body: "Session cookies stay on the API. Your app only needs the Aperture base URL.",
    href: "/login",
    cta: "Sign in",
  },
  {
    n: "3",
    title: "Call any model",
    body: "POST /api/v1/chat/completions with an OpenAI-compatible body. We pick the route.",
    href: "#docs",
    cta: "Read the API",
  },
];

export function GetStarted() {
  return (
    <section className="w-full border-t border-border bg-surface">
      <Container className="py-14 sm:py-16">
        <h2 className="text-center text-2xl font-semibold tracking-tight text-fg">
          Three steps to production
        </h2>
        <ol className="mt-8 grid w-full grid-cols-1 gap-8 md:grid-cols-3 md:gap-8">
          {STEPS.map((step) => (
            <li key={step.n}>
              <p className="font-mono text-xs text-subtle">{step.n}</p>
              <h3 className="mt-2 text-base font-medium text-fg">{step.title}</h3>
              <p className="mt-2 text-sm leading-6 text-muted">{step.body}</p>
              <Link
                href={step.href}
                className="mt-3 inline-block text-sm text-fg underline-offset-4 hover:underline"
              >
                {step.cta}
              </Link>
            </li>
          ))}
        </ol>
      </Container>
    </section>
  );
}
