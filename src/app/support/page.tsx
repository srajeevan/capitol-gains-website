import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Support — Capitol Gains",
  description: "Get help with the Capitol Gains iOS app.",
};

export default function Support() {
  return (
    <div className="mx-auto max-w-3xl px-6 pt-32 pb-20">
      <h1 className="text-3xl font-bold tracking-tight sm:text-4xl">Support</h1>
      <p className="mt-4 text-lg text-muted">
        Need help with Capitol Gains? We&apos;re here for you.
      </p>

      <div className="mt-12 space-y-10">
        {/* Contact */}
        <section className="rounded-2xl border border-card-border bg-card-bg p-8">
          <h2 className="text-xl font-semibold">Contact Us</h2>
          <p className="mt-3 text-sm leading-relaxed text-foreground/80">
            For questions, bug reports, feature requests, or any other inquiries, reach out to us at:
          </p>
          <a
            href="mailto:support@capitolgainsapp.com"
            className="mt-4 inline-block text-lg font-semibold text-accent hover:underline"
          >
            support@capitolgainsapp.com
          </a>
          <p className="mt-2 text-sm text-muted">
            We typically respond within 24 hours.
          </p>
        </section>

        {/* Common Questions */}
        <section>
          <h2 className="text-xl font-semibold">Common Questions</h2>
          <div className="mt-6 space-y-6">
            <div>
              <h3 className="font-medium">How do I restore my Pro subscription?</h3>
              <p className="mt-1 text-sm text-muted">
                Go to <strong>Settings</strong> in the app and tap <strong>Restore Purchases</strong>.
                This will sync your subscription status with the App Store.
              </p>
            </div>

            <div>
              <h3 className="font-medium">How do I cancel my subscription?</h3>
              <p className="mt-1 text-sm text-muted">
                Subscriptions are managed through Apple. Go to <strong>iPhone Settings</strong> &rarr;{" "}
                <strong>Apple ID</strong> &rarr; <strong>Subscriptions</strong> &rarr; select{" "}
                <strong>Capitol Gains</strong> and tap <strong>Cancel</strong>.
              </p>
            </div>

            <div>
              <h3 className="font-medium">How do I delete my account?</h3>
              <p className="mt-1 text-sm text-muted">
                Go to <strong>Settings</strong> in the app and tap <strong>Delete Account</strong>. Your
                personal data will be removed within 30 days. Remember to cancel your subscription through
                Apple first.
              </p>
            </div>

            <div>
              <h3 className="font-medium">Why am I not seeing the latest trades?</h3>
              <p className="mt-1 text-sm text-muted">
                Trade data depends on when members of Congress file their disclosures. Under the STOCK Act,
                members have up to 45 days to report trades. New filings appear in the app as soon as
                they&apos;re published by the House Clerk or Senate.
              </p>
            </div>

            <div>
              <h3 className="font-medium">How do push notifications work?</h3>
              <p className="mt-1 text-sm text-muted">
                Push notifications are available for Pro subscribers. Go to <strong>Settings</strong> in
                the app to configure alerts for bookmarked member trades, large trades, and weekly
                summaries. You can also set quiet hours.
              </p>
            </div>

            <div>
              <h3 className="font-medium">Is this investment advice?</h3>
              <p className="mt-1 text-sm text-muted">
                No. Capitol Gains is an informational tool that organizes publicly available government
                data. It does not provide investment advice. Always consult a qualified financial advisor
                before making investment decisions.
              </p>
            </div>
          </div>
        </section>

        {/* More Help */}
        <section className="rounded-2xl border border-card-border bg-card-bg p-8">
          <h2 className="text-xl font-semibold">More Help</h2>
          <p className="mt-3 text-sm leading-relaxed text-foreground/80">
            Check our <a href="/#faq" className="text-accent hover:underline">FAQ section</a> on the
            main page for detailed answers about data sources, pricing, features, and more.
          </p>
        </section>
      </div>
    </div>
  );
}
