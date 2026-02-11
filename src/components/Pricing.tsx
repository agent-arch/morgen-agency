const plans = [
  {
    name: "Starter",
    price: "500",
    desc: "Perfect om te starten met professionele ads.",
    features: [
      "Meta Ads (Facebook & Instagram)",
      "3 campagnes tegelijk",
      "AI-gedreven optimalisatie",
      "Maandelijks strategy call",
      "Realtime dashboard",
      "Maandelijkse rapportage",
    ],
    cta: "Start met Starter",
    popular: false,
  },
  {
    name: "Groei",
    price: "900",
    desc: "Voor webshops die serieus willen schalen.",
    features: [
      "Meta + Google Ads",
      "6 campagnes tegelijk",
      "AI-gedreven optimalisatie",
      "Tweewekelijks strategy call",
      "Realtime dashboard",
      "Wekelijkse rapportage",
      "A/B testing",
      "Retargeting setup",
    ],
    cta: "Start met Groei",
    popular: true,
  },
];

export default function Pricing() {
  return (
    <section id="prijzen" className="py-20 md:py-32 px-6">
      <div className="max-w-content mx-auto">
        <p className="font-mono text-sm text-teal tracking-wide mb-4">Prijzen</p>
        <h2 className="font-headline text-3xl md:text-5xl font-bold tracking-tight">
          Eerlijk & transparant
        </h2>
        <p className="mt-4 text-charcoal/60 max-w-[480px]">
          Geen lange contracten. 2 maanden minimum, daarna maandelijks opzegbaar. 
          Je ad spend regel je zelf.
        </p>

        <div className="mt-16 grid md:grid-cols-2 gap-8 max-w-[800px]">
          {plans.map((plan) => (
            <div
              key={plan.name}
              className={`rounded-2xl p-8 md:p-10 ${
                plan.popular
                  ? "bg-teal text-white ring-2 ring-teal"
                  : "bg-white border border-charcoal/10"
              }`}
            >
              {plan.popular && (
                <span className="inline-block font-mono text-xs tracking-wider bg-white/20 text-white px-3 py-1 rounded-full mb-4">
                  POPULAIR
                </span>
              )}

              <h3 className="font-headline text-2xl font-bold">{plan.name}</h3>

              <div className="mt-4 flex items-baseline gap-1">
                <span className="font-mono text-4xl md:text-5xl font-medium">€{plan.price}</span>
                <span className={`text-sm ${plan.popular ? "text-white/60" : "text-charcoal/50"}`}>
                  /maand
                </span>
              </div>

              <p className={`mt-3 text-sm ${plan.popular ? "text-white/70" : "text-charcoal/50"}`}>
                {plan.desc}
              </p>

              <ul className="mt-8 space-y-3">
                {plan.features.map((f) => (
                  <li key={f} className="flex items-start gap-3 text-sm">
                    <svg
                      className={`w-4 h-4 mt-0.5 flex-shrink-0 ${
                        plan.popular ? "text-white/80" : "text-teal"
                      }`}
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth={2.5}
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                    </svg>
                    <span className={plan.popular ? "text-white/90" : ""}>{f}</span>
                  </li>
                ))}
              </ul>

              <a
                href="#start"
                className={`mt-10 block text-center py-3.5 rounded-lg font-headline font-medium transition-colors ${
                  plan.popular
                    ? "bg-coral hover:bg-coral-dark text-white"
                    : "bg-charcoal hover:bg-charcoal/90 text-white"
                }`}
              >
                {plan.cta} →
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
