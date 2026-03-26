"use client";

import { motion } from "motion/react";

const sources = [
  {
    name: "U.S. House Clerk",
    description: "Official financial disclosures from House members. Raw PDF filings parsed in real time using AI.",
    url: "https://disclosures-clerk.house.gov/",
    type: "Primary",
  },
  {
    name: "U.S. Senate Financial Disclosures",
    description: "Senate member financial filings as required under the STOCK Act.",
    url: "https://efdsearch.senate.gov/",
    type: "Primary",
  },
  {
    name: "Congress.gov API",
    description: "Member data, party affiliations, committee assignments, and legislative information.",
    url: "https://api.congress.gov/",
    type: "Member Data",
  },
  {
    name: "Financial Modeling Prep (FMP)",
    description: "Stock prices, company names, and market data for ticker resolution and company information.",
    url: "https://financialmodelingprep.com/",
    type: "Market Data",
  },
  {
    name: "Senate LDA (Lobbying Disclosure Act)",
    description: "Lobbying registrations, expenditures, and issue codes — connecting lobbying spend to congressional trades.",
    url: "https://lda.senate.gov/",
    type: "Lobbying",
  },
  {
    name: "AI Processing (Gemini)",
    description: "Advanced AI for PDF parsing, party resolution, trade pattern analysis, and notable trade detection.",
    type: "AI",
  },
];

export function DataSources() {
  return (
    <section id="data-sources" className="border-y border-card-border bg-card-bg/30 py-20 md:py-32">
      <div className="mx-auto max-w-7xl px-6">
        <motion.div
          className="text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
            Data you can <span className="text-accent">trust</span>
          </h2>
          <p className="mt-4 max-w-2xl mx-auto text-lg text-muted">
            Capitol Gains sources data from official government databases — the same public records that
            journalists and watchdog organizations rely on.
          </p>
        </motion.div>

        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {sources.map((source, i) => (
            <motion.div
              key={source.name}
              className="rounded-xl border border-card-border bg-background p-6"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.05 }}
            >
              <div className="flex items-center gap-2">
                <span className="rounded-md bg-accent/10 px-2 py-0.5 text-[10px] font-semibold uppercase text-accent">
                  {source.type}
                </span>
              </div>
              <h3 className="mt-3 text-base font-semibold">{source.name}</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted">{source.description}</p>
              {source.url && (
                <a
                  href={source.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-3 inline-block text-xs text-accent hover:underline"
                >
                  Official source &#8599;
                </a>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
