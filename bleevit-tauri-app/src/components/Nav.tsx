import { Link, NavLink } from "react-router-dom";

const link = "px-3 py-1.5 text-sm text-neutral-300 hover:text-white";
const active = "text-white";

export default function Nav() {
  return (
    <header className="sticky top-0 z-50 border-b border-neutral-800 bg-neutral-950/80 backdrop-blur">
      <nav className="mx-auto flex max-w-6xl items-center justify-between px-4 py-3">
        <Link to="/" className="font-semibold tracking-tight">
          Bleevit DAOs
        </Link>
        <div className="flex gap-2">
          <NavLink
            to="/subsystems"
            className={({ isActive }) => `${link} ${isActive ? active : ""}`}
          >
            Subsystems
          </NavLink>
          <NavLink
            to="/about"
            className={({ isActive }) => `${link} ${isActive ? active : ""}`}
          >
            About
          </NavLink>
          <NavLink
            to="/contact"
            className={({ isActive }) => `${link} ${isActive ? active : ""}`}
          >
            Contact
          </NavLink>
        </div>
      </nav>
    </header>
  );
}
