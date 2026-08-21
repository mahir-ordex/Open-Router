import { Container } from "./Container";

const FEATURES = [
  {
    title: "Text, images, video, and audio",
    body: "One request format for every modality. Swap models without rewriting your client.",
  },
  {
    title: "Higher availability",
    body: "If a provider errors or times out, traffic fails over to the next healthy endpoint automatically.",
  },
  {
    title: "Price and performance",
    body: "Compare cost and latency per model, then pin a route or let the router pick the cheapest healthy option.",
  },
  {
    title: "Data policies you control",
    body: "Restrict prompts to providers that match your retention and training rules. No surprise training use.",
  },
];

export function Features() {
  return (
    <section id="features" className="w-full py-14 sm:py-16">
      <Container>
        <div className="text-center">
          <h2 className="text-2xl font-semibold tracking-tight text-fg">
            One API. Every major lab.
          </h2>
          <p className="mx-auto mt-2 max-w-xl text-pretty text-sm leading-6 text-muted">
            Aperture sits between your product and the providers. You keep a
            single key, a single schema, and a single bill.
          </p>
        </div>
        <ul className="mt-8 grid w-full grid-cols-1 gap-3 sm:grid-cols-2">
          {FEATURES.map((feature) => (
            <li
              key={feature.title}
              className="border border-border bg-surface p-5 text-left"
            >
              <h3 className="text-base font-medium text-fg">{feature.title}</h3>
              <p className="mt-2 text-sm leading-6 text-muted">{feature.body}</p>
            </li>
          ))}
        </ul>
      </Container>
    </section>
  );
}
