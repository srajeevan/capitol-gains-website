"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";

const faqs = [
  {
    question: "Where does Capitol Gains get its data?",
    answer:
      "All trade data comes from official U.S. government sources. House member disclosures come from the U.S. House Clerk's office. Senate disclosures come from the Senate's Electronic Financial Disclosure system. Member data (party, committees) comes from Congress.gov. Stock prices and company data come from Financial Modeling Prep (FMP). Lobbying data comes from the Senate LDA (Lobbying Disclosure Act) database. These are the same public records that journalists and watchdog organizations use.",
  },
  {
    question: "What is the STOCK Act?",
    answer:
      "The Stop Trading on Congressional Knowledge (STOCK) Act was signed into law in 2012. It requires members of Congress to disclose stock trades within 45 days. The law was designed to prevent insider trading by lawmakers who have access to non-public information through their legislative duties. Capitol Gains makes these legally required disclosures easy to search and analyze.",
  },
  {
    question: "How quickly do trades appear in the app?",
    answer:
      "Trades appear as soon as the disclosures are filed and processed. Our AI parses new filings automatically, so most trades appear within minutes of the official filing hitting the House Clerk or Senate disclosure system. Note that members have up to 45 days to file, so there can be a delay between the actual trade date and when it appears.",
  },
  {
    question: "What does the AI analysis do?",
    answer:
      "Our AI analyzes each member's trading patterns and flags trades that deserve a closer look. This includes: detecting when members trade in sectors they oversee through committee assignments, identifying unusual timing or position sizing, scoring trade significance (routine, notable, or highly notable), and connecting trades to lobbying expenditures in the same sector. These are patterns — not accusations.",
  },
  {
    question: "Is this investment advice?",
    answer:
      "No. Capitol Gains is an informational tool that organizes publicly available government data. It does not provide investment advice, recommendations, or endorsements. Always do your own research and consult a qualified financial advisor before making investment decisions.",
  },
  {
    question: "What's the difference between Free and Pro?",
    answer:
      "Free gives you access to the live trade feed (last 30 days with a 48-hour delay), 3 member profiles per day, up to 3 bookmarks, and basic overview analytics. Pro unlocks the full 2-year history with real-time access, unlimited member profiles, AI-powered notable trade detection, pattern analysis, P/L tracking, lobbying context, copy trade alerts, sector heatmaps, push notifications, CSV export, and unlimited bookmarks. Pro is $6.99/month or $49.99/year.",
  },
  {
    question: "Can I export the data?",
    answer:
      "Yes! Pro subscribers can export trade data to CSV format. The export includes member name, party, chamber, state, ticker, asset description, trade type, amount range, transaction date, and disclosure date. Perfect for journalists, researchers, and anyone who wants to do their own analysis.",
  },
  {
    question: "How do push notifications work?",
    answer:
      "Pro subscribers can enable push notifications for: trades by bookmarked members, large trades (over $100K) from any member, notable/AI-flagged trades, and a weekly summary digest. You can configure quiet hours so you're not disturbed outside your preferred times.",
  },
  {
    question: "Is my personal data safe?",
    answer:
      "We take privacy seriously. We only collect what's needed to run the app (account info for sync, device tokens for push notifications). We don't sell your data. See our full Privacy Policy for details.",
  },
  {
    question: "Which devices are supported?",
    answer:
      "Capitol Gains is currently available as a native iOS app for iPhone. We're building the best possible experience on iOS first before expanding to other platforms.",
  },
];

function FAQItem({ question, answer }: { question: string; answer: string }) {
  const [open, setOpen] = useState(false);

  return (
    <div className="border-b border-card-border">
      <button
        className="flex w-full items-center justify-between py-5 text-left"
        onClick={() => setOpen(!open)}
      >
        <span className="text-base font-medium pr-4">{question}</span>
        <svg
          width="20"
          height="20"
          viewBox="0 0 20 20"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          className={`shrink-0 text-muted transition-transform duration-200 ${open ? "rotate-45" : ""}`}
        >
          <line x1="10" y1="4" x2="10" y2="16" />
          <line x1="4" y1="10" x2="16" y2="10" />
        </svg>
      </button>
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="overflow-hidden"
          >
            <p className="pb-5 text-sm leading-relaxed text-muted">{answer}</p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export function FAQ() {
  return (
    <section id="faq" className="py-20 md:py-32">
      <div className="mx-auto max-w-3xl px-6">
        <motion.div
          className="text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
            Frequently asked questions
          </h2>
          <p className="mt-4 text-lg text-muted">
            Everything you need to know about Capitol Gains.
          </p>
        </motion.div>

        <div className="mt-12">
          {faqs.map((faq) => (
            <FAQItem key={faq.question} {...faq} />
          ))}
        </div>
      </div>
    </section>
  );
}
