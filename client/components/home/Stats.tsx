import { Container } from "./Container";

const STATS = [
  { value: "200T+", label: "Monthly tokens" },
  { value: "10M+", label: "Global users" },
  { value: "80+", label: "Providers" },
  { value: "500+", label: "Models" },
];

export function Stats() {
  return (
    <section aria-label="Platform scale" className="w-full border-y border-border">
      <Container className="grid grid-cols-2 sm:grid-cols-4">
        {STATS.map((stat, index) => (
          <div
            key={stat.label}
            className={`px-4 py-8 text-center ${
              index % 2 === 1 ? "border-l border-border" : ""
            } ${index > 1 ? "border-t border-border sm:border-t-0" : ""} ${
              index > 0 ? "sm:border-l sm:border-border" : ""
            }`}
          >
            <p className="text-2xl font-semibold tracking-tight text-fg sm:text-3xl">
              {stat.value}
            </p>
            <p className="mt-1 text-xs text-muted sm:text-sm">{stat.label}</p>
          </div>
        ))}
      </Container>
    </section>
  );
}
