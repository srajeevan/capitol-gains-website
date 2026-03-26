import Link from "next/link";

export function Footer() {
  return (
    <footer className="border-t border-card-border bg-background">
      <div className="mx-auto max-w-7xl px-6 py-12">
        <div className="grid gap-8 md:grid-cols-4">
          {/* Brand */}
          <div className="md:col-span-1">
            <span className="text-lg font-bold tracking-tight">
              CAPITOL <span className="text-accent">GAIN$</span>
            </span>
            <p className="mt-3 text-sm text-muted">
              Congress Stock Trade Tracker
            </p>
            <p className="mt-1 text-xs text-muted">&copy; 2026 Capitol Gains</p>
          </div>

          {/* Product */}
          <div>
            <h4 className="mb-3 text-sm font-semibold uppercase tracking-wider text-muted">
              Product
            </h4>
            <ul className="space-y-2 text-sm">
              <li>
                <a href="#features" className="text-foreground/70 hover:text-foreground transition-colors">
                  Features
                </a>
              </li>
              <li>
                <a href="#pricing" className="text-foreground/70 hover:text-foreground transition-colors">
                  Pricing
                </a>
              </li>
              <li>
                <a href="#faq" className="text-foreground/70 hover:text-foreground transition-colors">
                  FAQ
                </a>
              </li>
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h4 className="mb-3 text-sm font-semibold uppercase tracking-wider text-muted">
              Legal
            </h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/privacy" className="text-foreground/70 hover:text-foreground transition-colors">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link href="/terms" className="text-foreground/70 hover:text-foreground transition-colors">
                  Terms of Service
                </Link>
              </li>
            </ul>
          </div>

          {/* Download */}
          <div>
            <h4 className="mb-3 text-sm font-semibold uppercase tracking-wider text-muted">
              Download
            </h4>
            <a
              href="https://apps.apple.com/app/capitol-gains"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-xl bg-card-bg border border-card-border px-4 py-3 text-sm font-medium transition-colors hover:border-accent/40"
            >
              <svg width="20" height="24" viewBox="0 0 20 24" fill="currentColor" className="text-foreground">
                <path d="M15.87 12.35c-.03-2.87 2.34-4.25 2.45-4.32-1.33-1.95-3.41-2.22-4.15-2.25-1.77-.18-3.45 1.04-4.34 1.04-.9 0-2.28-1.01-3.75-.99-1.93.03-3.71 1.12-4.71 2.85-2.01 3.49-.51 8.66 1.44 11.49.96 1.39 2.1 2.95 3.6 2.89 1.45-.06 1.99-.93 3.74-.93s2.24.93 3.77.9c1.55-.03 2.53-1.41 3.47-2.81 1.1-1.61 1.55-3.17 1.57-3.25-.03-.01-3.02-1.16-3.05-4.6h-.04zM13.05 3.85c.8-.97 1.34-2.31 1.19-3.65-1.15.05-2.54.77-3.37 1.73-.74.86-1.39 2.23-1.21 3.55 1.28.1 2.58-.65 3.39-1.63z" />
              </svg>
              <div className="text-left">
                <div className="text-[10px] text-muted leading-none">Download on the</div>
                <div className="text-sm font-semibold leading-tight">App Store</div>
              </div>
            </a>
            <p className="mt-4 text-xs text-muted">
              Contact: support@capitolgainsapp.com
            </p>
          </div>
        </div>

        <div className="mt-10 border-t border-card-border pt-6 text-center text-xs text-muted">
          Capitol Gains is not affiliated with the U.S. Government. All trade data is sourced from official public disclosures.
          This app does not provide investment advice.
        </div>
      </div>
    </footer>
  );
}
