"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";

const links = [
  { href: "/", label: "Photographs" },
  { href: "/nocturnography", label: "Nocturnography" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
];

export default function Nav() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-40 border-b border-line/60 bg-ink/80 backdrop-blur-md">
      <nav className="mx-auto flex max-w-6xl items-center justify-between px-6 py-5">
        <Link
          href="/"
          className="font-display text-lg tracking-wide text-paper transition-opacity hover:opacity-70"
          onClick={() => setOpen(false)}
        >
          Howard Ignatius
          <span className="ml-2 hidden text-xs uppercase tracking-[0.25em] text-mist sm:inline">
            Photography
          </span>
        </Link>

        <ul className="hidden gap-8 text-sm sm:flex">
          {links.map(({ href, label }) => {
            const active = pathname === href;
            return (
              <li key={href}>
                <Link
                  href={href}
                  aria-current={active ? "page" : undefined}
                  className={`transition-colors hover:text-paper ${
                    active ? "text-paper" : "text-mist"
                  }`}
                >
                  {label}
                </Link>
              </li>
            );
          })}
        </ul>

        <button
          type="button"
          onClick={() => setOpen((v) => !v)}
          aria-expanded={open}
          aria-label="Toggle menu"
          className="text-mist transition-colors hover:text-paper sm:hidden"
        >
          {open ? "Close" : "Menu"}
        </button>
      </nav>

      {open && (
        <ul className="flex flex-col gap-1 border-t border-line/60 px-6 pb-5 pt-3 sm:hidden">
          {links.map(({ href, label }) => (
            <li key={href}>
              <Link
                href={href}
                onClick={() => setOpen(false)}
                className={`block py-2 text-sm transition-colors hover:text-paper ${
                  pathname === href ? "text-paper" : "text-mist"
                }`}
              >
                {label}
              </Link>
            </li>
          ))}
        </ul>
      )}
    </header>
  );
}
