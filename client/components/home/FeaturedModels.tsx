import { Container } from "./Container";

const MODELS = [
  { name: "Claude Opus 4.6", lab: "Anthropic", tokens: "1.4T", trend: "New" },
  { name: "GPT-5.4", lab: "OpenAI", tokens: "1.1T", trend: "+41%" },
  { name: "Gemini 3.1 Pro", lab: "Google", tokens: "860B", trend: "+12%" },
  { name: "Llama 4 Maverick", lab: "Meta", tokens: "86.3B", trend: "−8%" },
];

export function FeaturedModels() {
  return (
    <section id="models" className="w-full py-14 sm:py-16">
      <Container>
        <div className="text-center">
          <h2 className="text-2xl font-semibold tracking-tight text-fg">
            Featured models
          </h2>
          <p className="mt-2 text-sm text-muted">
            500+ active models on 80+ providers. Figures are weekly routed volume.
          </p>
        </div>
        <div className="mt-6 w-full overflow-x-auto">
          <table className="w-full text-left text-sm">
            <caption className="sr-only">Featured models by weekly tokens</caption>
            <thead className="border-b border-border text-subtle">
              <tr>
                <th scope="col" className="py-2.5 pr-4 font-medium">
                  Model
                </th>
                <th scope="col" className="py-2.5 pr-4 font-medium">
                  Provider
                </th>
                <th scope="col" className="py-2.5 pr-4 font-medium">
                  Weekly tokens
                </th>
                <th scope="col" className="py-2.5 font-medium">
                  Trend
                </th>
              </tr>
            </thead>
            <tbody>
              {MODELS.map((model) => (
                <tr key={model.name} className="border-b border-border">
                  <td className="py-2.5 pr-4 font-medium text-fg">{model.name}</td>
                  <td className="py-2.5 pr-4 text-muted">{model.lab}</td>
                  <td className="py-2.5 pr-4 font-mono text-muted">{model.tokens}</td>
                  <td className="py-2.5 text-muted">{model.trend}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </Container>
    </section>
  );
}
