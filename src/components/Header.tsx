"use client";

import Link from "next/link";
import { useState } from "react";

export function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 border-b border-card-border bg-background/80 backdrop-blur-xl">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
        <Link href="/" className="flex items-center gap-2">
          <span className="text-xl font-bold tracking-tight">
            CAPITOL <span className="text-accent">GAIN$</span>
          </span>
        </Link>

        {/* Desktop nav */}
        <nav className="hidden items-center gap-8 md:flex">
          <a href="#features" className="text-sm text-muted hover:text-foreground transition-colors">
            Features
          </a>
          <a href="#how-it-works" className="text-sm text-muted hover:text-foreground transition-colors">
            How It Works
          </a>
          <a href="#pricing" className="text-sm text-muted hover:text-foreground transition-colors">
            Pricing
          </a>
          <a href="#faq" className="text-sm text-muted hover:text-foreground transition-colors">
            FAQ
          </a>
          <a
            href="https://apps.apple.com/app/capitol-gains"
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-full bg-accent px-5 py-2 text-sm font-semibold text-background transition-colors hover:bg-accent-dim"
          >
            Download
          </a>
        </nav>

        {/* Mobile hamburger */}
        <button
          className="md:hidden text-foreground"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label="Toggle menu"
        >
          <svg width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
            {mobileOpen ? (
              <>
                <line x1="18" y1="6" x2="6" y2="18" />
                <line x1="6" y1="6" x2="18" y2="18" />
              </>
            ) : (
              <>
                <line x1="3" y1="6" x2="21" y2="6" />
                <line x1="3" y1="12" x2="21" y2="12" />
                <line x1="3" y1="18" x2="21" y2="18" />
              </>
            )}
          </svg>
        </button>
      </div>

      {/* Mobile menu */}
      {mobileOpen && (
        <nav className="flex flex-col gap-4 border-t border-card-border bg-background px-6 py-6 md:hidden">
          <a href="#features" onClick={() => setMobileOpen(false)} className="text-sm text-muted hover:text-foreground">
            Features
          </a>
          <a href="#how-it-works" onClick={() => setMobileOpen(false)} className="text-sm text-muted hover:text-foreground">
            How It Works
          </a>
          <a href="#pricing" onClick={() => setMobileOpen(false)} className="text-sm text-muted hover:text-foreground">
            Pricing
          </a>
          <a href="#faq" onClick={() => setMobileOpen(false)} className="text-sm text-muted hover:text-foreground">
            FAQ
          </a>
          <a
            href="https://apps.apple.com/app/capitol-gains"
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-full bg-accent px-5 py-2 text-center text-sm font-semibold text-background"
          >
            Download
          </a>
        </nav>
      )}
    </header>
  );
}
