export default function Hero() {
  return (
    <section className="pt-32 pb-20 md:pt-44 md:pb-32 px-6">
      <div className="max-w-content mx-auto">
        {/* Urgency hook */}
        <p className="font-mono text-sm text-coral tracking-wide mb-6">
          ⚡ Nog 3 plekken beschikbaar in februari
        </p>

        {/* Headline */}
        <h1 className="font-headline text-4xl md:text-6xl lg:text-7xl font-bold leading-[1.08] tracking-tight max-w-[820px]">
          Hoeveel omzet mis je{" "}
          <span className="text-teal">elke dag?</span>
        </h1>

        {/* Sub */}
        <p className="mt-6 md:mt-8 text-lg md:text-xl text-charcoal/70 max-w-[580px] leading-relaxed">
          Jouw concurrenten draaien al professionele ads. Wij geven je dezelfde 
          kracht — AI-gedreven, dagelijks geoptimaliseerd — voor een fractie van 
          de prijs van een agency.
        </p>

        {/* CTA */}
        <div className="mt-10 flex flex-col sm:flex-row gap-4 items-start">
          <a
            href="#start"
            className="bg-coral hover:bg-coral-dark text-white px-8 py-4 rounded-lg font-headline font-medium text-lg transition-colors"
          >
            Gratis intake plannen →
          </a>
          <a
            href="#hoe-het-werkt"
            className="text-charcoal/60 hover:text-charcoal px-4 py-4 font-medium transition-colors"
          >
            Bekijk hoe het werkt
          </a>
        </div>

        <p className="mt-3 text-sm text-charcoal/40">
          30 minuten. Geen verplichtingen. Direct inzicht in jouw groeikansen.
        </p>

        {/* Stats with context */}
        <div className="mt-16 md:mt-24 flex flex-wrap gap-12 md:gap-20">
          <div>
            <p className="font-mono text-3xl md:text-4xl font-medium text-teal">3.2×</p>
            <p className="text-sm text-charcoal/50 mt-1">gemiddelde ROAS</p>
            <p className="text-xs text-charcoal/35 mt-0.5">elke €1 levert €3,20 op</p>
          </div>
          <div>
            <p className="font-mono text-3xl md:text-4xl font-medium text-teal">24/7</p>
            <p className="text-sm text-charcoal/50 mt-1">AI-optimalisatie</p>
            <p className="text-xs text-charcoal/35 mt-0.5">geen vakanties, geen ziektedagen</p>
          </div>
          <div>
            <p className="font-mono text-3xl md:text-4xl font-medium text-teal">48u</p>
            <p className="text-sm text-charcoal/50 mt-1">eerste campagne live</p>
            <p className="text-xs text-charcoal/35 mt-0.5">van intake tot resultaat</p>
          </div>
          <div>
            <p className="font-mono text-3xl md:text-4xl font-medium text-teal">€500</p>
            <p className="text-sm text-charcoal/50 mt-1">vanaf / maand</p>
            <p className="text-xs text-charcoal/35 mt-0.5">vast bedrag, geen % van spend</p>
          </div>
        </div>
      </div>
    </section>
  );
}
