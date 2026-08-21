import Link from "next/link";
import { Container } from "./Container";

const PROVIDERS = [
  "Anthropic",
  "OpenAI",
  "Google",
  "Meta",
  "Mistral",
  "xAI",
  "Amazon",
  "DeepSeek",
];

export function Hero() {
  return (
    <Container className="flex flex-col items-center pb-8 pt-12 text-center sm:pt-16">
      <p className="text-[13px] text-muted">Unified inference for every model</p>
      <h1 className="mt-3 max-w-3xl text-balance text-[2rem] font-semibold leading-[1.15] tracking-tight text-fg sm:text-[2.75rem]">
        The unified interface for every model
      </h1>
      <p className="mt-4 max-w-xl text-pretty text-sm leading-6 text-muted sm:text-base sm:leading-7">
        Better prices, better uptime, no subscriptions. Route a single request
        across providers and fall back when one goes down.
      </p>
      <div className="mt-6 flex flex-wrap items-center justify-center gap-2">
        <Link
          href="/register"
          className="inline-flex h-10 min-w-36 items-center justify-center rounded-md bg-fg px-4 text-sm font-medium text-bg hover:opacity-90"
        >
          Get API key
        </Link>
        <Link
          href="#models"
          className="inline-flex h-10 min-w-36 items-center justify-center rounded-md border border-border px-4 text-sm font-medium text-fg hover:bg-elevated"
        >
          Discover models
        </Link>
      </div>

      <ul
        className="mt-8 flex max-w-2xl flex-wrap items-center justify-center gap-2"
        aria-label="Supported providers"
      >
        {PROVIDERS.map((name) => (
          <li
            key={name}
            className="rounded-md border border-border bg-surface px-2.5 py-1 text-[11px] text-muted"
          >
            {name}
          </li>
        ))}
      </ul>

      <RoutingDiagram />
    </Container>
  );
}

function RoutingDiagram() {
  return (
    <div className="mt-8 flex w-full flex-col items-center rounded-md border border-border bg-surface px-4 py-6 sm:px-8">
      <p className="mb-5 w-full text-center text-[11px] uppercase tracking-wider text-subtle">
        Request routing
      </p>
      <svg
        className="h-auto w-full max-w-2xl"
        viewBox="0 0 640 160"
        fill="none"
        role="img"
        aria-label="A client request fans out through Aperture to model providers"
      >
        <rect x="16" y="60" width="120" height="40" rx="4" stroke="#27272a" fill="#18181b" />
        <text x="76" y="85" textAnchor="middle" fill="#a1a1aa" fontSize="12">
          Your app
        </text>
        <line x1="136" y1="80" x2="220" y2="80" stroke="#3f3f46" />
        <rect x="220" y="52" width="160" height="56" rx="4" stroke="#fafafa" fill="#18181b" />
        <text x="300" y="76" textAnchor="middle" fill="#fafafa" fontSize="12">
          Aperture
        </text>
        <text x="300" y="92" textAnchor="middle" fill="#71717a" fontSize="10">
          /v1/chat/completions
        </text>
        <line x1="380" y1="80" x2="456" y2="32" stroke="#3f3f46" />
        <line x1="380" y1="80" x2="456" y2="80" stroke="#3f3f46" />
        <line x1="380" y1="80" x2="456" y2="128" stroke="#3f3f46" />
        {[
          { y: 12, label: "Anthropic" },
          { y: 60, label: "OpenAI" },
          { y: 108, label: "Google" },
        ].map((node) => (
          <g key={node.label}>
            <rect
              x="456"
              y={node.y}
              width="168"
              height="40"
              rx="4"
              stroke="#27272a"
              fill="#18181b"
            />
            <text
              x="540"
              y={node.y + 25}
              textAnchor="middle"
              fill="#a1a1aa"
              fontSize="12"
            >
              {node.label}
            </text>
          </g>
        ))}
      </svg>
    </div>
  );
}
