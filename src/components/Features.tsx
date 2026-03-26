"use client";

import Image from "next/image";
import { motion } from "motion/react";

const features = [
  {
    title: "Live Trade Feed",
    description:
      "Browse every disclosed stock transaction from Congress in real time. Filter by member, party, chamber, date, or ticker symbol.",
    screenshot: "/screenshots/feed_screen.png",
    alt: "Live trade feed showing congressional stock trades",
    badge: "Real-time",
  },
  {
    title: "Member Profiles",
    description:
      "Explore any representative or senator's full trading history. See committee assignments, trading frequency, sector preferences, and buy/sell ratios.",
    screenshot: "/screenshots/members_screen.png",
    alt: "Member profiles grid showing congress member trading activity",
    badge: "535 Members",
  },
  {
    title: "AI Trade Analysis",
    description:
      "Our AI flags trades that deserve a closer look — like when a committee member trades in a sector they directly oversee. Pattern detection, timing analysis, and concentration scoring.",
    screenshot: "/screenshots/trade_analysis_tickers_traded.png",
    alt: "AI-powered trade analysis showing patterns and insights",
    badge: "AI-Powered",
  },
  {
    title: "Sector Heatmap & Analytics",
    description:
      "Visualize where congressional money is flowing. See which sectors attract the most political capital — and spot emerging trends before they hit the headlines.",
    screenshot: "/screenshots/analytics_sector_breakdown.png",
    alt: "Sector heatmap showing where Congress invests",
    badge: "Analytics",
  },
  {
    title: "Member Deep Dives",
    description:
      "Go deep on any member's trading behavior. AI analysis covers patterns, positioning, activity trends, timing, concentration, and key findings.",
    screenshot: "/screenshots/members_details.png",
    alt: "Detailed member profile with AI analysis",
    badge: "Pro",
  },
  {
    title: "Watchlist & Alerts",
    description:
      "Bookmark members to track. Get push notifications when they trade, when notable transactions are detected, or when large trades hit.",
    screenshot: "/screenshots/bookmark_screen.png",
    alt: "Bookmarks screen showing saved member watchlist",
    badge: "Push Alerts",
  },
];

export function Features() {
  return (
    <section id="features" className="py-20 md:py-32">
      <div className="mx-auto max-w-7xl px-6">
        <motion.div
          className="text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
            Everything you need to <span className="text-accent">follow the money</span>
          </h2>
          <p className="mt-4 text-lg text-muted">
            From raw disclosures to AI-powered insights — Capitol Gains puts congressional trading data at your fingertips.
          </p>
        </motion.div>

        <div className="mt-16 space-y-24 md:space-y-32">
          {features.map((feature, i) => (
            <motion.div
              key={feature.title}
              className={`flex flex-col items-center gap-10 md:gap-16 ${
                i % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
              }`}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6 }}
            >
              {/* Screenshot */}
              <div className="flex-1 flex justify-center">
                <div className="w-[240px] overflow-hidden rounded-[2.5rem] border-2 border-card-border bg-card-bg shadow-2xl shadow-black/50 sm:w-[270px]">
                  <Image
                    src={feature.screenshot}
                    alt={feature.alt}
                    width={270}
                    height={585}
                    className="w-full"
                  />
                </div>
              </div>

              {/* Text */}
              <div className="flex-1 text-center md:text-left">
                <span className="inline-block rounded-full bg-accent/10 px-3 py-1 text-xs font-semibold text-accent">
                  {feature.badge}
                </span>
                <h3 className="mt-4 text-2xl font-bold sm:text-3xl">
                  {feature.title}
                </h3>
                <p className="mt-4 text-lg leading-relaxed text-muted">
                  {feature.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
