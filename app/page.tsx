export default function Home() {
  const checkoutUrl = process.env.NEXT_PUBLIC_LS_CHECKOUT_URL || "#";
  return (
    <main className="min-h-screen bg-[#0d1117] text-[#c9d1d9]">
      {/* Hero */}
      <section className="max-w-3xl mx-auto px-6 pt-24 pb-16 text-center">
        <span className="inline-block bg-[#161b22] border border-[#30363d] text-[#58a6ff] text-xs font-semibold px-3 py-1 rounded-full mb-6 uppercase tracking-widest">
          E-commerce Tool
        </span>
        <h1 className="text-4xl sm:text-5xl font-extrabold text-white leading-tight mb-5">
          Never lose checkout progress again
        </h1>
        <p className="text-lg text-[#8b949e] max-w-xl mx-auto mb-8">
          A lightweight JavaScript widget that automatically saves and restores your customers&apos; checkout form data across browser crashes, accidental closes, and tab switches — so they never have to start over.
        </p>
        <a
          href={checkoutUrl}
          className="inline-block bg-[#58a6ff] hover:bg-[#79b8ff] text-[#0d1117] font-bold px-8 py-3 rounded-lg text-base transition-colors"
        >
          Get CheckoutSaver — $29/mo
        </a>
        <p className="mt-4 text-sm text-[#8b949e]">Cancel anytime. 7-day free trial included.</p>
      </section>

      {/* Features strip */}
      <section className="max-w-3xl mx-auto px-6 pb-16 grid grid-cols-1 sm:grid-cols-3 gap-6 text-center">
        {[
          { icon: "💾", title: "Auto-Save", desc: "Every keystroke saved to localStorage in real time." },
          { icon: "⚡", title: "Instant Restore", desc: "Form data rehydrates the moment the page loads." },
          { icon: "📊", title: "Recovery Analytics", desc: "See exactly how many sales you're recovering." }
        ].map((f) => (
          <div key={f.title} className="bg-[#161b22] border border-[#30363d] rounded-xl p-6">
            <div className="text-3xl mb-3">{f.icon}</div>
            <h3 className="text-white font-semibold mb-1">{f.title}</h3>
            <p className="text-sm text-[#8b949e]">{f.desc}</p>
          </div>
        ))}
      </section>

      {/* Pricing */}
      <section className="max-w-sm mx-auto px-6 pb-20" id="pricing">
        <h2 className="text-2xl font-bold text-white text-center mb-8">Simple Pricing</h2>
        <div className="bg-[#161b22] border border-[#58a6ff] rounded-2xl p-8 text-center shadow-lg">
          <p className="text-[#58a6ff] font-semibold uppercase tracking-widest text-xs mb-3">Pro</p>
          <p className="text-5xl font-extrabold text-white mb-1">$29</p>
          <p className="text-[#8b949e] text-sm mb-6">/month per site</p>
          <ul className="text-left space-y-3 mb-8 text-sm">
            {[
              "Unlimited form saves & restores",
              "Recovery analytics dashboard",
              "Works with any checkout form",
              "One-line JS snippet install",
              "Email support"
            ].map((item) => (
              <li key={item} className="flex items-center gap-2">
                <span className="text-[#58a6ff] font-bold">✓</span>
                <span>{item}</span>
              </li>
            ))}
          </ul>
          <a
            href={checkoutUrl}
            className="block w-full bg-[#58a6ff] hover:bg-[#79b8ff] text-[#0d1117] font-bold py-3 rounded-lg transition-colors text-center"
          >
            Start Free Trial
          </a>
          <p className="mt-3 text-xs text-[#8b949e]">7-day free trial. No credit card required to start.</p>
        </div>
      </section>

      {/* FAQ */}
      <section className="max-w-2xl mx-auto px-6 pb-24" id="faq">
        <h2 className="text-2xl font-bold text-white text-center mb-8">FAQ</h2>
        <div className="space-y-6">
          {[
            {
              q: "How do I install CheckoutSaver on my store?",
              a: "Paste a single <script> tag into your checkout page. That's it — no backend changes, no framework dependencies. Works with Shopify, WooCommerce, Magento, and custom builds."
            },
            {
              q: "Is customer data stored on your servers?",
              a: "No. All form data is saved exclusively in the customer's own browser localStorage. Nothing is transmitted to our servers, keeping you fully GDPR and CCPA compliant."
            },
            {
              q: "What counts as a 'recovery'?",
              a: "A recovery is logged whenever a customer returns to a checkout page and their previously entered data is automatically restored. Your dashboard shows recovery counts and estimated revenue saved."
            }
          ].map((item) => (
            <div key={item.q} className="bg-[#161b22] border border-[#30363d] rounded-xl p-6">
              <h3 className="text-white font-semibold mb-2">{item.q}</h3>
              <p className="text-[#8b949e] text-sm leading-relaxed">{item.a}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-[#30363d] text-center py-8 text-xs text-[#8b949e]">
        &copy; {new Date().getFullYear()} CheckoutSaver. All rights reserved.
      </footer>
    </main>
  );
}
