import { Container } from "./Container";

export function ApiSnippet() {
  return (
    <section id="docs" className="w-full py-14 sm:py-16">
      <Container>
        <h2 className="text-center text-2xl font-semibold tracking-tight text-fg">
          Drop-in OpenAI compatible
        </h2>
        <p className="mx-auto mt-2 max-w-xl text-center text-pretty text-sm leading-6 text-muted">
          Point your existing SDK at Aperture. Same chat completions shape,
          extra routing headers when you need them.
        </p>
        <pre className="mt-6 overflow-x-auto rounded-md border border-border bg-elevated p-4 text-left text-xs leading-6 text-muted">
          <code>{`curl https://api.aperture.dev/v1/chat/completions \\
  -H "Authorization: Bearer $APERTURE_API_KEY" \\
  -H "Content-Type: application/json" \\
  -d '{
    "model": "anthropic/claude-opus-4.6",
    "messages": [{"role": "user", "content": "Summarize this PR"}]
  }'`}</code>
        </pre>
      </Container>
    </section>
  );
}
