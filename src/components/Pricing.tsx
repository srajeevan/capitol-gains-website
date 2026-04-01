"use client";

import { motion } from "motion/react";

const freeTier = {
  name: "Free",
  price: "$0",
  period: "",
  description: "Get started with the basics",
  features: [
    "Live trade feed (last 30 days, 48-hour delay)",
    "3 member profiles per day",
    "Basic analytics (overview, parties)",
    "Up to 3 bookmarks",
    "Search & filter trades",
  ],
  excluded: [
    "Notable trade detection",
    "AI trade analysis",
    "Lobbying context",
    "Sector heatmap & timeline",
    "Push notifications",
    "CSV data export",
    "Copy trade alerts",
    "Full 2-year history",
  ],
  cta: "Download Free",
  highlight: false,
};

const proTier = {
  name: "Pro",
  price: "$6.99",
  period: "/month",
  annual: "$49.99/year",
  description: "Full access to everything",
  features: [
    "Full trade feed (2 years of history, real-time)",
    "Unlimited member profiles",
    "Notable trade detection (AI-flagged)",
    "AI trade pattern analysis",
    "Lobbying context & connections",
    "Sector heatmap & timeline analytics",
    "Push notifications & alerts",
    "Copy trade alerts",
    "CSV data export",
    "Unlimited bookmarks",
    "Committee-sector relevance scoring",
  ],
  cta: "Start Pro",
  highlight: true,
};

function CheckIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" className="shrink-0 text-accent mt-0.5">
      <path d="M13.333 4L6 11.333 2.667 8" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

function XIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" className="shrink-0 text-muted/40 mt-0.5">
      <path d="M12 4L4 12M4 4l8 8" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
    </svg>
  );
}

export function Pricing() {
  return (
    <section id="pricing" className="py-20 md:py-32">
      <div className="mx-auto max-w-5xl px-6">
        <motion.div
          className="text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
            Free to start. <span className="text-accent">Pro to go deeper.</span>
          </h2>
          <p className="mt-4 text-lg text-muted">
            Browse the live trade feed for free. Unlock AI insights and full history with Pro.
          </p>
        </motion.div>

        <div className="mt-14 grid gap-8 md:grid-cols-2">
          {/* Free */}
          <motion.div
            className="rounded-2xl border border-card-border bg-card-bg p-8"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h3 className="text-xl font-bold">{freeTier.name}</h3>
            <p className="mt-1 text-sm text-muted">{freeTier.description}</p>
            <div className="mt-6">
              <span className="text-4xl font-bold">{freeTier.price}</span>
            </div>
            <a
              href="https://apps.apple.com/us/app/capitol-gains-trade-tracker/id6760779864"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-6 block w-full rounded-xl border border-card-border py-3 text-center text-sm font-semibold transition-colors hover:border-accent/40 hover:text-accent"
            >
              {freeTier.cta}
            </a>
            <ul className="mt-8 space-y-3">
              {freeTier.features.map((f) => (
                <li key={f} className="flex items-start gap-2.5 text-sm">
                  <CheckIcon /> {f}
                </li>
              ))}
              {freeTier.excluded.map((f) => (
                <li key={f} className="flex items-start gap-2.5 text-sm text-muted/50">
                  <XIcon /> {f}
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Pro */}
          <motion.div
            className="relative rounded-2xl border-2 border-accent/40 bg-card-bg p-8"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            <div className="absolute -top-3 right-6 rounded-full bg-accent px-3 py-1 text-xs font-bold text-background">
              RECOMMENDED
            </div>
            <h3 className="text-xl font-bold">{proTier.name}</h3>
            <p className="mt-1 text-sm text-muted">{proTier.description}</p>
            <div className="mt-6 flex items-baseline gap-2">
              <span className="text-4xl font-bold">{proTier.price}</span>
              <span className="text-muted">{proTier.period}</span>
            </div>
            <p className="mt-1 text-xs text-muted">or {proTier.annual} (save 40%)</p>
            <a
              href="https://apps.apple.com/us/app/capitol-gains-trade-tracker/id6760779864"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-6 block w-full rounded-xl bg-accent py-3 text-center text-sm font-bold text-background transition-colors hover:bg-accent-dim"
            >
              {proTier.cta}
            </a>
            <ul className="mt-8 space-y-3">
              {proTier.features.map((f) => (
                <li key={f} className="flex items-start gap-2.5 text-sm">
                  <CheckIcon /> {f}
                </li>
              ))}
            </ul>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
