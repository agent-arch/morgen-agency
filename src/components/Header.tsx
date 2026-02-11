"use client";

import { useState } from "react";

export default function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-warm-white/90 backdrop-blur-md border-b border-charcoal/5">
      <div className="max-w-content mx-auto px-6 h-16 flex items-center justify-between">
        {/* Logo */}
        <a href="#" className="flex items-center gap-0.5">
          <span className="font-headline text-xl font-bold tracking-tight text-charcoal">
            morgen
          </span>
          <span className="text-coral text-2xl leading-none -mt-1">.</span>
        </a>

        {/* Desktop nav */}
        <nav className="hidden md:flex items-center gap-8 text-sm font-medium">
          <a href="#hoe-het-werkt" className="hover:text-teal transition-colors">
            Hoe het werkt
          </a>
          <a href="#prijzen" className="hover:text-teal transition-colors">
            Prijzen
          </a>
          <a
            href="#start"
            className="bg-coral hover:bg-coral-dark text-white px-5 py-2.5 rounded-lg font-medium transition-colors"
          >
            Gratis intake →
          </a>
        </nav>

        {/* Mobile toggle */}
        <button
          onClick={() => setOpen(!open)}
          className="md:hidden p-2 -mr-2"
          aria-label="Menu"
        >
          <div className="w-5 flex flex-col gap-1">
            <span
              className={`block h-0.5 bg-charcoal transition-transform ${
                open ? "rotate-45 translate-y-1.5" : ""
              }`}
            />
            <span
              className={`block h-0.5 bg-charcoal transition-opacity ${
                open ? "opacity-0" : ""
              }`}
            />
            <span
              className={`block h-0.5 bg-charcoal transition-transform ${
                open ? "-rotate-45 -translate-y-1.5" : ""
              }`}
            />
          </div>
        </button>
      </div>

      {/* Mobile menu */}
      {open && (
        <nav className="md:hidden bg-warm-white border-t border-charcoal/5 px-6 py-6 flex flex-col gap-4">
          <a
            href="#hoe-het-werkt"
            onClick={() => setOpen(false)}
            className="text-base font-medium"
          >
            Hoe het werkt
          </a>
          <a
            href="#prijzen"
            onClick={() => setOpen(false)}
            className="text-base font-medium"
          >
            Prijzen
          </a>
          <a
            href="#start"
            onClick={() => setOpen(false)}
            className="bg-coral text-white px-5 py-3 rounded-lg font-medium text-center"
          >
            Gratis intake →
          </a>
        </nav>
      )}
    </header>
  );
}
