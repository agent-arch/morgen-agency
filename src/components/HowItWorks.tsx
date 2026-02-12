const steps = [
  {
    num: "01",
    title: "Gratis adviesgesprek",
    desc: "30 minuten waarin we je webshop, doelgroep en doelen leren kennen. Je krijgt direct bruikbare inzichten — ook als je niet doorgaat.",
    icon: (
      <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
      </svg>
    ),
  },
  {
    num: "02",
    title: "Campagnes live in 48 uur",
    desc: "Wij bouwen alles: strategie, copy, targeting, creatives. Jij keurt goed, wij lanceren. Binnen 2 dagen draait je eerste campagne.",
    icon: (
      <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M15.59 14.37a6 6 0 01-5.84 7.38v-4.8m5.84-2.58a14.98 14.98 0 006.16-12.12A14.98 14.98 0 009.631 8.41m5.96 5.96a14.926 14.926 0 01-5.841 2.58m-.119-8.54a6 6 0 00-7.381 5.84h4.8m2.581-5.84a14.927 14.927 0 00-2.58 5.84m2.699 2.7c-.103.021-.207.041-.311.06a15.09 15.09 0 01-2.448-2.448 14.9 14.9 0 01.06-.312m-2.24 2.39a4.493 4.493 0 00-1.757 4.306 4.493 4.493 0 004.306-1.758M16.5 9a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0z" />
      </svg>
    ),
  },
  {
    num: "03",
    title: "Dagelijkse optimalisatie",
    desc: "Onze AI analyseert elke dag je resultaten en past bids, budgets en targeting aan. Jij focust op je business, wij op je ads.",
    icon: (
      <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 3v11.25A2.25 2.25 0 006 16.5h2.25M3.75 3h-1.5m1.5 0h16.5m0 0h1.5m-1.5 0v11.25A2.25 2.25 0 0118 16.5h-2.25m-7.5 0h7.5m-7.5 0l-1 3m8.5-3l1 3m0 0l.5 1.5m-.5-1.5h-9.5m0 0l-.5 1.5M9 11.25v1.5M12 9v3.75m3-6v6" />
      </svg>
    ),
  },
];

export default function HowItWorks() {
  return (
    <section id="hoe-het-werkt" className="py-20 md:py-32 px-6 bg-white">
      <div className="max-w-content mx-auto">
        <div className="max-w-[600px]">
          <p className="font-mono text-sm text-teal tracking-wide mb-4">Zo werkt het</p>
          <h2 className="font-headline text-3xl md:text-5xl font-bold tracking-tight">
            Van intake tot resultaat in 3 stappen
          </h2>
          <p className="mt-4 text-charcoal/60">
            Geen ingewikkeld onboarding-traject van weken. Je bent sneller aan de slag dan je denkt.
          </p>
        </div>

        <div className="mt-16 grid md:grid-cols-3 gap-8 md:gap-12">
          {steps.map((step, i) => (
            <div key={step.num} className="relative">
              {/* Connector line (desktop) */}
              {i < steps.length - 1 && (
                <div className="hidden md:block absolute top-12 left-full w-full h-px bg-gradient-to-r from-teal/30 to-transparent -translate-x-8" />
              )}
              
              {/* Step card */}
              <div className="bg-warm-bg rounded-2xl p-8 h-full hover:bg-teal/5 transition-colors">
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-14 h-14 rounded-xl bg-teal/10 text-teal flex items-center justify-center">
                    {step.icon}
                  </div>
                  <span className="font-mono text-4xl font-bold text-teal/20">{step.num}</span>
                </div>
                <h3 className="font-headline text-xl font-bold mb-3">{step.title}</h3>
                <p className="text-charcoal/60 leading-relaxed">{step.desc}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="mt-12 text-center">
          <a
            href="#start"
            className="inline-flex items-center gap-2 text-teal hover:text-teal/80 font-medium transition-colors"
          >
            <span>Begin met stap 1</span>
            <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </a>
        </div>
      </div>
    </section>
  );
}
