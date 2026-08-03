const codeSnippets = [
  'const portfolio = new Career();',
  'portfolio.build({ stack: "full-stack" });',
  'export default function Engineer() {}',
  'git commit -m "feat: add new project"',
  'docker compose up -d --build',
  'npm run build && npm run deploy',
  'SELECT * FROM projects WHERE status = \'deployed\';',
  'async function deploy() { await ci.cd(); }',
  'class System extends Architecture {}',
  'git push origin main --force',
  'kubectl apply -f deployment.yaml',
  'terraform apply -auto-approve',
];

const CodeSnippets = () => (
  <div className="code-snippets" aria-hidden="true">
    {codeSnippets.map((snippet, i) => (
      <div
        key={i}
        className="code-snippets__item"
        style={{
          top: `${(i * 8.5) % 100}%`,
          left: i % 2 === 0 ? '-5%' : '60%',
          animationDelay: `${i * 0.8}s`,
        }}
      >
        {snippet}
      </div>
    ))}
  </div>
);

export default CodeSnippets;
