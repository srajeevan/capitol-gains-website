"use client";

import Image from "next/image";
import { motion } from "motion/react";

const features = [
  {
    title: "Live Trade Feed",
    description:
      "Every disclosed congressional stock transaction, the moment it's filed. Filter by member, party, chamber, date, or ticker — no 48-hour delay, even on the free tier.",
    screenshot: "/screenshots/feed_screen.png",
    alt: "Live trade feed showing congressional stock trades",
    badge: "Real-time",
  },
  {
    title: "Signals",
    description:
      "Every ticker Congress touches, scored 0-100. Spot cluster buys where members pile into the same stock, whale-sized bets far above a member's usual size, and repeat-buy conviction — the strongest patterns, surfaced automatically.",
    screenshot: "/screenshots/signals_screen.png",
    alt: "Signals screen scoring every ticker Congress trades",
    badge: "New",
  },
  {
    title: "Suspicious Moves",
    description:
      "The trades that moved most before the public ever saw the filing. Members get 45 days to disclose — we surface the biggest gains against the longest delays, so the ones worth a closer look rise to the top.",
    screenshot: "/screenshots/analytics_screen.png",
    alt: "Analytics screen flagging suspicious pre-disclosure moves",
    badge: "AI-Powered",
  },
  {
    title: "Committee Conflicts",
    description:
      "When a member trades the sector their own committee oversees, it gets a conflict score. See who's trading the industries they regulate, ranked 0-100 by how direct the overlap is.",
    screenshot: "/screenshots/conflicts_screen.png",
    alt: "Committee conflict scoring for congressional trades",
    badge: "Pro",
  },
  {
    title: "Top Traders",
    description:
      "Congress's best-performing traders, ranked by actual average return — not how often they trade. See win rates, best calls, and who's genuinely beating the market.",
    screenshot: "/screenshots/top_traders_screen.png",
    alt: "Leaderboard of top-performing congressional traders",
    badge: "Analytics",
  },
  {
    title: "Lobbying Context",
    description:
      "Follow the money twice. See lobbying filings cross-referenced against the trades — who's paying to influence the members whose portfolios you're watching.",
    screenshot: "/screenshots/lobbying_screen.png",
    alt: "Lobbying filings cross-referenced with congressional trades",
    badge: "Pro",
  },
  {
    title: "Member Profiles",
    description:
      "Explore any of 173 tracked members' full trading history. Committee assignments, trading frequency, buy/sell ratios, and sector preferences — ranked by how hard they trade.",
    screenshot: "/screenshots/members_screen.png",
    alt: "Member profiles grid showing congress member trading activity",
    badge: "173 Members",
  },
  {
    title: "Watchlist & Alerts",
    description:
      "Bookmark members to track. Get push notifications when they trade, when notable transactions are detected, or when large trades hit.",
    screenshot: "/screenshots/whales_screen.png",
    alt: "Whale trade alerts for outsized congressional positions",
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
