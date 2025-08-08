export default function Contact() {
  return (
    <section className="mx-auto max-w-xl">
      <h1 className="mb-6 text-3xl font-semibold">Contact</h1>
      <p className="mb-6 text-neutral-300">
        Let’s connect — reach me on LinkedIn or X.
      </p>

      <div className="flex items-center justify-center gap-6">
        {/* LinkedIn */}
        <a
          href="https://www.linkedin.com/in/christopher-maximilian-altmann-0ab0a6220/"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="LinkedIn"
          className="group inline-flex h-12 w-12 items-center justify-center rounded-full border border-white/10 transition hover:bg-white/10"
          title="LinkedIn"
        >
          <svg
            className="h-6 w-6 fill-current text-neutral-200 group-hover:text-white"
            viewBox="0 0 24 24"
            aria-hidden="true"
          >
            <path d="M22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.225.792 24 1.771 24h20.451C23.2 24 24 23.225 24 22.271V1.729C24 .774 23.2 0 22.225 0zM6.556 20.452H4.118V9h2.438v11.452zM5.337 7.433a1.815 1.815 0 1 1 0-3.63 1.815 1.815 0 0 1 0 3.63zM20.447 20.452h-3.247v-5.569c0-1.328-.025-3.037-1.852-3.037-1.853 0-2.135 1.445-2.135 2.94v5.666H9.06V9h3.123v1.561h.044c.435-.824 1.495-1.69 3.074-1.69 3.29 0 3.897 2.166 3.897 4.981v6.6z" />
          </svg>
        </a>

        {/* X (formerly Twitter) */}
        <a
          href="https://x.com/Chralt98"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="X (formerly Twitter)"
          className="group inline-flex h-12 w-12 items-center justify-center rounded-full border border-white/10 transition hover:bg-white/10"
          title="X"
        >
          {/* Simple X mark (clean + recognizable) */}
          <svg
            className="h-6 w-6 stroke-current text-neutral-200 group-hover:text-white"
            viewBox="0 0 24 24"
            fill="none"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            aria-hidden="true"
          >
            <path d="M3 3l18 18M21 3L3 21" />
          </svg>
        </a>
      </div>
    </section>
  );
}
