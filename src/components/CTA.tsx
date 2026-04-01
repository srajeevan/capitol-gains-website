"use client";

import { motion } from "motion/react";

export function CTA() {
  return (
    <section className="border-t border-card-border bg-card-bg/30 py-20 md:py-28">
      <div className="mx-auto max-w-4xl px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
            Congressional stock trading is public information.
            <br />
            <span className="text-accent">Make sure it&apos;s actually accessible.</span>
          </h2>
          <p className="mt-6 text-lg text-muted">
            Download Capitol Gains and see what your representatives are trading.
          </p>
          <div className="mt-8">
            <a
              href="https://apps.apple.com/us/app/capitol-gains-trade-tracker/id6760779864"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 rounded-2xl bg-white px-8 py-4 text-black transition-transform hover:scale-105"
            >
              <svg width="22" height="26" viewBox="0 0 20 24" fill="currentColor">
                <path d="M15.87 12.35c-.03-2.87 2.34-4.25 2.45-4.32-1.33-1.95-3.41-2.22-4.15-2.25-1.77-.18-3.45 1.04-4.34 1.04-.9 0-2.28-1.01-3.75-.99-1.93.03-3.71 1.12-4.71 2.85-2.01 3.49-.51 8.66 1.44 11.49.96 1.39 2.1 2.95 3.6 2.89 1.45-.06 1.99-.93 3.74-.93s2.24.93 3.77.9c1.55-.03 2.53-1.41 3.47-2.81 1.1-1.61 1.55-3.17 1.57-3.25-.03-.01-3.02-1.16-3.05-4.6h-.04zM13.05 3.85c.8-.97 1.34-2.31 1.19-3.65-1.15.05-2.54.77-3.37 1.73-.74.86-1.39 2.23-1.21 3.55 1.28.1 2.58-.65 3.39-1.63z" />
              </svg>
              <div className="text-left">
                <div className="text-[10px] leading-none opacity-60">Download on the</div>
                <div className="text-lg font-semibold leading-tight">App Store</div>
              </div>
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
