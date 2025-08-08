import { Link } from "react-router-dom";

export default function Home() {
  return (
    <section className="grid gap-8 md:grid-cols-2 md:items-center">
      <div className="space-y-6">
        <h1 className="text-4xl font-bold md:text-5xl">
          I design DAO systems
        </h1>
        <p className="max-w-prose text-neutral-300">
          Systems to find social consensus in a world of diverse opinions.
        </p>
        <div className="flex gap-3">
          <Link
            to="/subsystems"
            className="rounded-md bg-white/10 px-4 py-2 text-sm hover:bg-white/20"
          >
            Explore Subsystems
          </Link>
          <Link
            to="/contact"
            className="rounded-md border border-white/15 px-4 py-2 text-sm hover:bg-white/10"
          >
            Connect with me
          </Link>
        </div>
      </div>

      <div className="rounded-xl border border-white/10 bg-gradient-to-br from-white/5 to-transparent p-8">
        <ul className="grid gap-3 text-sm text-neutral-300">
          <li className="flex items-start gap-2">
            <span className="mt-1 h-2 w-2 shrink-0 rounded-full bg-white/70"></span>
            Market Driven
          </li>
          <li className="flex items-start gap-2">
            <span className="mt-1 h-2 w-2 shrink-0 rounded-full bg-white/70"></span>
            Decision Making
          </li>
          <li className="flex items-start gap-2">
            <span className="mt-1 h-2 w-2 shrink-0 rounded-full bg-white/70"></span>
            Truth Seeking
          </li>
          <li className="flex items-start gap-2">
            <span className="mt-1 h-2 w-2 shrink-0 rounded-full bg-white/70"></span>
            Social Consensus
          </li>
        </ul>
      </div>
    </section>
  );
}
