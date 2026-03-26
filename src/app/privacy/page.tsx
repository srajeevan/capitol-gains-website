import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy Policy — Capitol Gains",
  description: "Privacy Policy for the Capitol Gains iOS app.",
};

export default function PrivacyPolicy() {
  return (
    <div className="mx-auto max-w-3xl px-6 pt-32 pb-20">
      <h1 className="text-3xl font-bold tracking-tight sm:text-4xl">Privacy Policy</h1>
      <p className="mt-2 text-sm text-muted">Last updated: March 26, 2026</p>

      <div className="mt-10 space-y-8 text-sm leading-relaxed text-foreground/80">
        <section>
          <h2 className="text-lg font-semibold text-foreground">1. Introduction</h2>
          <p className="mt-3">
            Capitol Gains (&quot;we,&quot; &quot;our,&quot; or &quot;us&quot;) operates the Capitol Gains mobile application (the &quot;App&quot;).
            This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you use our App.
            Please read this policy carefully. By using the App, you agree to the collection and use of information in accordance
            with this policy.
          </p>
        </section>

        <section>
          <h2 className="text-lg font-semibold text-foreground">2. Information We Collect</h2>

          <h3 className="mt-4 font-semibold text-foreground">2.1 Account Information</h3>
          <p className="mt-2">
            When you create an account, we may collect your name, email address, and authentication credentials.
            If you sign in with Apple, Google, or email/password, we receive the information you authorize those services to share.
          </p>

          <h3 className="mt-4 font-semibold text-foreground">2.2 Usage Data</h3>
          <p className="mt-2">
            We collect information about how you interact with the App, including features used, pages viewed,
            and actions taken. This helps us improve the App experience.
          </p>

          <h3 className="mt-4 font-semibold text-foreground">2.3 Device Information</h3>
          <p className="mt-2">
            We collect device-level information including device type, operating system version, and device
            identifiers. If you enable push notifications, we collect your Apple Push Notification service (APNs) device token.
          </p>

          <h3 className="mt-4 font-semibold text-foreground">2.4 Subscription Information</h3>
          <p className="mt-2">
            Subscription purchases are processed by Apple through the App Store. We do not collect or store
            your payment information. We receive confirmation of your subscription status from RevenueCat, our
            subscription management provider.
          </p>
        </section>

        <section>
          <h2 className="text-lg font-semibold text-foreground">3. How We Use Your Information</h2>
          <p className="mt-3">We use the information we collect to:</p>
          <ul className="mt-2 list-disc pl-6 space-y-1">
            <li>Provide, maintain, and improve the App</li>
            <li>Create and manage your account</li>
            <li>Sync your bookmarks and preferences across devices</li>
            <li>Send push notifications you have opted into</li>
            <li>Process and manage your subscription</li>
            <li>Respond to your requests and support inquiries</li>
            <li>Analyze usage patterns to improve features</li>
          </ul>
        </section>

        <section>
          <h2 className="text-lg font-semibold text-foreground">4. Third-Party Services</h2>
          <p className="mt-3">We use the following third-party services:</p>
          <ul className="mt-2 list-disc pl-6 space-y-1">
            <li><strong>Clerk</strong> — Authentication and user management</li>
            <li><strong>Convex</strong> — Backend data storage and real-time sync</li>
            <li><strong>RevenueCat</strong> — Subscription management</li>
            <li><strong>Apple Push Notification service (APNs)</strong> — Push notifications</li>
          </ul>
          <p className="mt-3">
            Each of these services has their own privacy policies governing their use of your data.
          </p>
        </section>

        <section>
          <h2 className="text-lg font-semibold text-foreground">5. Data Sharing</h2>
          <p className="mt-3">
            We do not sell, trade, or rent your personal information to third parties. We may share your
            information only in the following circumstances:
          </p>
          <ul className="mt-2 list-disc pl-6 space-y-1">
            <li>With service providers who assist in operating the App (listed in Section 4)</li>
            <li>If required by law or to respond to legal process</li>
            <li>To protect the rights, property, or safety of Capitol Gains, our users, or others</li>
          </ul>
        </section>

        <section>
          <h2 className="text-lg font-semibold text-foreground">6. Data Retention</h2>
          <p className="mt-3">
            We retain your account information for as long as your account is active. If you delete your account
            through the App&apos;s Settings, we will delete your personal data within 30 days. Anonymized usage
            data may be retained for analytics purposes.
          </p>
        </section>

        <section>
          <h2 className="text-lg font-semibold text-foreground">7. Data Security</h2>
          <p className="mt-3">
            We implement reasonable security measures to protect your personal information, including
            encryption in transit (HTTPS/TLS) and secure authentication. However, no method of transmission
            over the Internet is 100% secure, and we cannot guarantee absolute security.
          </p>
        </section>

        <section>
          <h2 className="text-lg font-semibold text-foreground">8. Children&apos;s Privacy</h2>
          <p className="mt-3">
            The App is rated 12+ and is not directed at children under 13. We do not knowingly collect personal
            information from children under 13. If we learn that we have collected such information, we will
            delete it promptly.
          </p>
        </section>

        <section>
          <h2 className="text-lg font-semibold text-foreground">9. Your Rights</h2>
          <p className="mt-3">You have the right to:</p>
          <ul className="mt-2 list-disc pl-6 space-y-1">
            <li>Access the personal data we hold about you</li>
            <li>Request correction of inaccurate data</li>
            <li>Request deletion of your account and data</li>
            <li>Opt out of push notifications at any time through iOS Settings</li>
            <li>Withdraw consent for data processing</li>
          </ul>
          <p className="mt-3">
            To exercise these rights, you can use the in-app account management features or contact us at
            support@capitolgainsapp.com.
          </p>
        </section>

        <section>
          <h2 className="text-lg font-semibold text-foreground">10. Changes to This Policy</h2>
          <p className="mt-3">
            We may update this Privacy Policy from time to time. We will notify you of any material changes by
            updating the &quot;Last updated&quot; date at the top of this page. Your continued use of the App after
            changes constitutes acceptance of the updated policy.
          </p>
        </section>

        <section>
          <h2 className="text-lg font-semibold text-foreground">11. Contact Us</h2>
          <p className="mt-3">
            If you have questions about this Privacy Policy, please contact us at:
          </p>
          <p className="mt-2 font-medium">support@capitolgainsapp.com</p>
        </section>
      </div>
    </div>
  );
}
