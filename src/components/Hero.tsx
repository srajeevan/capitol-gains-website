"use client";

import Image from "next/image";
import { motion } from "motion/react";

export function Hero() {
  return (
    <section className="relative overflow-hidden pt-32 pb-20 md:pt-44 md:pb-32">
      {/* Background glow */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 h-[600px] w-[600px] rounded-full bg-accent/5 blur-[120px]" />
        <div className="absolute top-0 right-0 h-[400px] w-[400px] rounded-full bg-accent/3 blur-[100px]" />
      </div>

      <div className="relative mx-auto max-w-7xl px-6">
        <div className="flex flex-col items-center gap-12 lg:flex-row lg:items-center lg:gap-16">
          {/* Text */}
          <motion.div
            className="flex-1 text-center lg:text-left"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-accent/20 bg-accent/5 px-4 py-1.5 text-xs font-medium text-accent">
              <span className="inline-block h-1.5 w-1.5 rounded-full bg-accent animate-pulse" />
              Live Congressional Trade Tracking
            </div>

            <h1 className="text-4xl font-bold leading-tight tracking-tight sm:text-5xl md:text-6xl">
              Congress is trading.
              <br />
              <span className="text-accent">Now you&apos;ll know.</span>
            </h1>

            <p className="mt-6 max-w-xl text-lg text-muted lg:text-xl">
              Track every stock trade made by members of Congress. AI-powered notable trade detection,
              lobbying context, and real-time alerts — all in one app.
            </p>

            <div className="mt-8 flex flex-col items-center gap-4 sm:flex-row lg:justify-start">
              <a
                href="https://apps.apple.com/us/app/capitol-gains-trade-tracker/id6760779864"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-3 rounded-2xl bg-white px-6 py-3.5 text-black transition-transform hover:scale-105"
              >
                <svg width="22" height="26" viewBox="0 0 20 24" fill="currentColor">
                  <path d="M15.87 12.35c-.03-2.87 2.34-4.25 2.45-4.32-1.33-1.95-3.41-2.22-4.15-2.25-1.77-.18-3.45 1.04-4.34 1.04-.9 0-2.28-1.01-3.75-.99-1.93.03-3.71 1.12-4.71 2.85-2.01 3.49-.51 8.66 1.44 11.49.96 1.39 2.1 2.95 3.6 2.89 1.45-.06 1.99-.93 3.74-.93s2.24.93 3.77.9c1.55-.03 2.53-1.41 3.47-2.81 1.1-1.61 1.55-3.17 1.57-3.25-.03-.01-3.02-1.16-3.05-4.6h-.04zM13.05 3.85c.8-.97 1.34-2.31 1.19-3.65-1.15.05-2.54.77-3.37 1.73-.74.86-1.39 2.23-1.21 3.55 1.28.1 2.58-.65 3.39-1.63z" />
                </svg>
                <div className="text-left">
                  <div className="text-[10px] leading-none opacity-60">Download on the</div>
                  <div className="text-lg font-semibold leading-tight">App Store</div>
                </div>
              </a>

              <div className="flex items-center gap-3 text-sm text-muted">
                <span className="flex items-center gap-1">
                  <span className="text-accent font-semibold">Free</span> to start
                </span>
                <span className="text-card-border">|</span>
                <span>Pro from $6.99/mo</span>
              </div>
            </div>
          </motion.div>

          {/* Phone mockups */}
          <motion.div
            className="relative flex flex-1 justify-center"
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
          >
            <div className="relative">
              {/* Main phone */}
              <div className="relative z-10 w-[260px] overflow-hidden rounded-[2.5rem] border-2 border-card-border bg-card-bg shadow-2xl shadow-accent/10 sm:w-[280px]">
                <Image
                  src="/screenshots/feed_screen.png"
                  alt="Capitol Gains feed showing live congressional trades"
                  width={280}
                  height={607}
                  className="w-full"
                  priority
                />
              </div>
              {/* Secondary phone */}
              <div className="absolute -right-16 top-12 z-0 hidden w-[240px] overflow-hidden rounded-[2.5rem] border-2 border-card-border bg-card-bg opacity-60 shadow-xl sm:block">
                <Image
                  src="/screenshots/analytics_screen.png"
                  alt="Capitol Gains analytics dashboard"
                  width={240}
                  height={520}
                  className="w-full"
                />
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
