import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Terms of Service — Capitol Gains",
  description: "Terms of Service for the Capitol Gains iOS app.",
};

export default function TermsOfService() {
  return (
    <div className="mx-auto max-w-3xl px-6 pt-32 pb-20">
      <h1 className="text-3xl font-bold tracking-tight sm:text-4xl">Terms of Service</h1>
      <p className="mt-2 text-sm text-muted">Last updated: March 26, 2026</p>

      <div className="mt-10 space-y-8 text-sm leading-relaxed text-foreground/80">
        <section>
          <h2 className="text-lg font-semibold text-foreground">1. Acceptance of Terms</h2>
          <p className="mt-3">
            By downloading, installing, or using the Capitol Gains mobile application (the &quot;App&quot;), you agree to
            be bound by these Terms of Service (&quot;Terms&quot;). If you do not agree to these Terms, do not use the App.
          </p>
        </section>

        <section>
          <h2 className="text-lg font-semibold text-foreground">2. Description of Service</h2>
          <p className="mt-3">
            Capitol Gains is an informational tool that aggregates and displays publicly available financial
            disclosure data filed by members of the United States Congress under the STOCK Act. The App
            organizes this public data and provides AI-powered analysis for informational purposes only.
          </p>
        </section>

        <section>
          <h2 className="text-lg font-semibold text-foreground">3. Not Investment Advice</h2>
          <p className="mt-3">
            <strong>
              Capitol Gains does not provide investment advice, financial advice, trading advice, or any other
              sort of professional advice.
            </strong>{" "}
            The information presented in the App is for informational and educational purposes only. You should
            not make any investment decision based solely on information provided by the App. Always consult
            with a qualified financial advisor before making investment decisions.
          </p>
        </section>

        <section>
          <h2 className="text-lg font-semibold text-foreground">4. Data Accuracy</h2>
          <p className="mt-3">
            While we strive for accuracy, Capitol Gains relies on data from public government databases and
            AI processing. We do not guarantee the accuracy, completeness, or timeliness of any information
            displayed in the App. Trade data is sourced from official filings but may contain errors from the
            original filings or our processing pipeline. Always verify important information against the
            original source documents.
          </p>
        </section>

        <section>
          <h2 className="text-lg font-semibold text-foreground">5. User Accounts</h2>
          <p className="mt-3">
            Some features require creating an account. You are responsible for maintaining the confidentiality
            of your account credentials and for all activities that occur under your account. You agree to
            provide accurate information when creating an account and to notify us immediately of any
            unauthorized use.
          </p>
        </section>

        <section>
          <h2 className="text-lg font-semibold text-foreground">6. Subscriptions and Payments</h2>
          <p className="mt-3">
            Capitol Gains offers a free tier and a paid Pro subscription. Subscriptions are processed through
            the Apple App Store and are subject to Apple&apos;s terms and conditions.
          </p>
          <ul className="mt-2 list-disc pl-6 space-y-1">
            <li>Pro Monthly: $6.99 per month</li>
            <li>Pro Annual: $49.99 per year</li>
            <li>Subscriptions automatically renew unless canceled at least 24 hours before the end of the current period</li>
            <li>You can manage and cancel subscriptions through your Apple ID settings</li>
            <li>Refunds are handled by Apple according to their refund policy</li>
          </ul>
        </section>

        <section>
          <h2 className="text-lg font-semibold text-foreground">7. Acceptable Use</h2>
          <p className="mt-3">You agree not to:</p>
          <ul className="mt-2 list-disc pl-6 space-y-1">
            <li>Use the App for any unlawful purpose</li>
            <li>Attempt to reverse engineer, decompile, or disassemble the App</li>
            <li>Scrape, crawl, or automatically extract data from the App</li>
            <li>Redistribute, resell, or sublicense the App or its data</li>
            <li>Interfere with the proper functioning of the App</li>
            <li>Use the App to harass, defame, or harm any individual</li>
          </ul>
        </section>

        <section>
          <h2 className="text-lg font-semibold text-foreground">8. Intellectual Property</h2>
          <p className="mt-3">
            The App, including its design, code, features, and original content, is owned by Capitol Gains and
            protected by intellectual property laws. The underlying government data is public domain, but our
            organization, presentation, analysis, and AI-generated insights are proprietary.
          </p>
        </section>

        <section>
          <h2 className="text-lg font-semibold text-foreground">9. Disclaimer of Warranties</h2>
          <p className="mt-3">
            THE APP IS PROVIDED &quot;AS IS&quot; AND &quot;AS AVAILABLE&quot; WITHOUT WARRANTIES OF ANY KIND, EITHER EXPRESS
            OR IMPLIED, INCLUDING BUT NOT LIMITED TO IMPLIED WARRANTIES OF MERCHANTABILITY, FITNESS FOR A
            PARTICULAR PURPOSE, AND NON-INFRINGEMENT. WE DO NOT WARRANT THAT THE APP WILL BE UNINTERRUPTED,
            ERROR-FREE, OR SECURE.
          </p>
        </section>

        <section>
          <h2 className="text-lg font-semibold text-foreground">10. Limitation of Liability</h2>
          <p className="mt-3">
            TO THE MAXIMUM EXTENT PERMITTED BY LAW, CAPITOL GAINS SHALL NOT BE LIABLE FOR ANY INDIRECT,
            INCIDENTAL, SPECIAL, CONSEQUENTIAL, OR PUNITIVE DAMAGES, INCLUDING BUT NOT LIMITED TO LOSS OF
            PROFITS, DATA, OR OTHER INTANGIBLE LOSSES, RESULTING FROM YOUR USE OF OR INABILITY TO USE THE
            APP, ANY INVESTMENT DECISIONS MADE BASED ON INFORMATION IN THE APP, OR ANY ERRORS OR OMISSIONS
            IN THE APP&apos;S CONTENT.
          </p>
        </section>

        <section>
          <h2 className="text-lg font-semibold text-foreground">11. Government Affiliation Disclaimer</h2>
          <p className="mt-3">
            Capitol Gains is not affiliated with, endorsed by, or sponsored by the United States Government,
            Congress, the House of Representatives, the Senate, or any government agency. We are an independent
            application that organizes publicly available government data.
          </p>
        </section>

        <section>
          <h2 className="text-lg font-semibold text-foreground">12. Account Deletion</h2>
          <p className="mt-3">
            You may delete your account at any time through the App&apos;s Settings screen. Upon deletion, your
            personal data will be removed within 30 days in accordance with our Privacy Policy. Active
            subscriptions should be canceled through Apple before deleting your account.
          </p>
        </section>

        <section>
          <h2 className="text-lg font-semibold text-foreground">13. Changes to Terms</h2>
          <p className="mt-3">
            We reserve the right to modify these Terms at any time. We will notify users of material changes
            by updating the &quot;Last updated&quot; date. Your continued use of the App after changes constitutes
            acceptance of the updated Terms.
          </p>
        </section>

        <section>
          <h2 className="text-lg font-semibold text-foreground">14. Governing Law</h2>
          <p className="mt-3">
            These Terms shall be governed by and construed in accordance with the laws of the United States,
            without regard to conflict of law provisions.
          </p>
        </section>

        <section>
          <h2 className="text-lg font-semibold text-foreground">15. Contact</h2>
          <p className="mt-3">
            If you have questions about these Terms, please contact us at:
          </p>
          <p className="mt-2 font-medium">support@capitolgainsapp.com</p>
        </section>
      </div>
    </div>
  );
}
