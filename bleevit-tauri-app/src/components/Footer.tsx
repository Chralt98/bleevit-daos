export default function Footer() {
  return (
    <footer className="mt-16 border-t border-neutral-800">
      <div className="mx-auto max-w-6xl px-4 py-8 text-center text-xs text-neutral-400">
        © Bleevit DAOs {new Date().getFullYear()} — Systems for better DAO decision‑making
      </div>
    </footer>
  );
}
