export default function Hero() {
  return (
    <section className="pt-32 pb-20 md:pt-44 md:pb-32 px-6">
      <div className="max-w-content mx-auto">
        {/* Tagline */}
        <p className="font-mono text-sm text-teal tracking-wide mb-6">
          Morgen begint vandaag.
        </p>

        {/* Headline */}
        <h1 className="font-headline text-4xl md:text-6xl lg:text-7xl font-bold leading-[1.08] tracking-tight max-w-[820px]">
          Meer omzet uit je ads.{" "}
          <span className="text-teal">Zonder gedoe.</span>
        </h1>

        {/* Sub */}
        <p className="mt-6 md:mt-8 text-lg md:text-xl text-charcoal/70 max-w-[560px] leading-relaxed">
          AI-native advertising voor webshops die willen groeien. 
          Wij regelen je Meta & Google Ads — jij focust op je business.
        </p>

        {/* CTA */}
        <div className="mt-10 flex flex-col sm:flex-row gap-4 items-start">
          <a
            href="#start"
            className="bg-coral hover:bg-coral-dark text-white px-8 py-4 rounded-lg font-headline font-medium text-lg transition-colors"
          >
            Plan een gratis intake →
          </a>
          <a
            href="#hoe-het-werkt"
            className="text-charcoal/60 hover:text-charcoal px-4 py-4 font-medium transition-colors"
          >
            Hoe werkt het?
          </a>
        </div>

        {/* Stats */}
        <div className="mt-16 md:mt-24 flex flex-wrap gap-12 md:gap-20">
          <div>
            <p className="font-mono text-3xl md:text-4xl font-medium text-teal">3.2×</p>
            <p className="text-sm text-charcoal/50 mt-1">gem. ROAS</p>
          </div>
          <div>
            <p className="font-mono text-3xl md:text-4xl font-medium text-teal">€500</p>
            <p className="text-sm text-charcoal/50 mt-1">vanaf / maand</p>
          </div>
          <div>
            <p className="font-mono text-3xl md:text-4xl font-medium text-teal">48u</p>
            <p className="text-sm text-charcoal/50 mt-1">eerste campagne live</p>
          </div>
        </div>
      </div>
    </section>
  );
}
