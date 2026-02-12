export default function Hero() {
  return (
    <section className="pt-32 pb-20 md:pt-44 md:pb-32 px-6 relative overflow-hidden">
      {/* Subtle background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-teal/5 via-transparent to-coral/5 pointer-events-none" />
      
      <div className="max-w-content mx-auto relative">
        {/* Badge */}
        <div className="inline-flex items-center gap-2 bg-teal/10 text-teal px-4 py-2 rounded-full mb-8">
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-teal opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-teal"></span>
          </span>
          <span className="font-mono text-sm">Nog 3 plekken in februari</span>
        </div>

        {/* Headline */}
        <h1 className="font-headline text-4xl md:text-6xl lg:text-7xl font-bold leading-[1.08] tracking-tight max-w-[900px]">
          Professionele ads voor jouw webshop.{" "}
          <span className="text-teal">Zonder agency-prijzen.</span>
        </h1>

        {/* Value proposition */}
        <p className="mt-6 md:mt-8 text-lg md:text-xl text-charcoal/70 max-w-[620px] leading-relaxed">
          AI-gestuurde campagnes op Meta, Google & TikTok die dagelijks worden 
          geoptimaliseerd. Vast maandbedrag vanaf €750. Resultaat binnen 14 dagen 
          of je geld terug.
        </p>

        {/* Trust elements */}
        <div className="mt-6 flex flex-wrap gap-x-6 gap-y-2 text-sm text-charcoal/50">
          <span className="flex items-center gap-1.5">
            <svg className="w-4 h-4 text-teal" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
            </svg>
            Geen setup fees
          </span>
          <span className="flex items-center gap-1.5">
            <svg className="w-4 h-4 text-teal" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
            </svg>
            Maandelijks opzegbaar
          </span>
          <span className="flex items-center gap-1.5">
            <svg className="w-4 h-4 text-teal" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
            </svg>
            14 dagen geld-terug garantie
          </span>
        </div>

        {/* CTA */}
        <div className="mt-10 flex flex-col sm:flex-row gap-4 items-start">
          <a
            href="#start"
            className="group bg-coral hover:bg-coral-dark text-white px-8 py-4 rounded-xl font-headline font-medium text-lg transition-all shadow-lg shadow-coral/25 hover:shadow-xl hover:shadow-coral/30"
          >
            Gratis adviesgesprek plannen
            <span className="inline-block ml-2 transition-transform group-hover:translate-x-1">→</span>
          </a>
          <a
            href="#prijzen"
            className="text-charcoal/60 hover:text-charcoal px-4 py-4 font-medium transition-colors flex items-center gap-2"
          >
            <span>Bekijk prijzen</span>
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
            </svg>
          </a>
        </div>

        {/* Stats */}
        <div className="mt-20 md:mt-28 grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12">
          <div className="relative">
            <p className="font-mono text-4xl md:text-5xl font-bold text-teal">3.2×</p>
            <p className="text-sm text-charcoal/60 mt-2">Gemiddelde ROAS</p>
            <p className="text-xs text-charcoal/40 mt-1">€1 in → €3,20 omzet</p>
          </div>
          <div className="relative">
            <p className="font-mono text-4xl md:text-5xl font-bold text-teal">24/7</p>
            <p className="text-sm text-charcoal/60 mt-2">Optimalisatie</p>
            <p className="text-xs text-charcoal/40 mt-1">AI draait altijd door</p>
          </div>
          <div className="relative">
            <p className="font-mono text-4xl md:text-5xl font-bold text-teal">48u</p>
            <p className="text-sm text-charcoal/60 mt-2">Tot eerste campagne</p>
            <p className="text-xs text-charcoal/40 mt-1">Van intake tot live</p>
          </div>
          <div className="relative">
            <p className="font-mono text-4xl md:text-5xl font-bold text-teal">€750</p>
            <p className="text-sm text-charcoal/60 mt-2">Vanaf per maand</p>
            <p className="text-xs text-charcoal/40 mt-1">Geen % van ad spend</p>
          </div>
        </div>
      </div>
    </section>
  );
}
