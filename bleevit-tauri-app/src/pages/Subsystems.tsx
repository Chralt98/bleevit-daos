export default function Subsystems() {
  const systems = [
    {
      title: "Logarithmic Market Scoring Rule Automated Market Maker (LMSR AMM)",
      blurb: "An algorithmic mechanism to trade assets for information markets.",
      bullets: ["Continuous signaling", "Skin in the game", "Free market"],
    },
    {
      title: "Commit and Reveal Scheme",
      blurb: "A cryptographic protocol for private voting and decision-making.",
      bullets: ["Schelling point", "Oracle", "Anti bandwagon effect"],
    },
    {
      title: "Candle Auction",
      blurb: "A time-based auction mechanism to prevent front-running and sniping.",
      bullets: ["Vote sniping", "Price discovery", "Token burning"],
    },
  ];

  return (
    <section>
      <h1 className="mb-6 text-3xl font-semibold">Subsystems</h1>
      <p className="mb-8 max-w-prose text-neutral-300">
        A composable toolbox.
      </p>
      <div className="grid gap-4 sm:grid-cols-2">
        {systems.map((s) => (
          <div key={s.title} className="rounded-lg border border-white/10 p-5">
            <h2 className="text-lg font-medium">{s.title}</h2>
            <p className="mt-2 text-sm text-neutral-300">{s.blurb}</p>
            <ul className="mt-3 space-y-1 text-sm text-neutral-400">
              {s.bullets.map((b) => (
                <li key={b}>• {b}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
}