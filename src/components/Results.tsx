const results = [
  {
    metric: "+156%",
    label: "ROAS verbetering",
    context: "Gemiddeld na 60 dagen",
  },
  {
    metric: "-34%",
    label: "Cost per acquisition",
    context: "Door slimme targeting",
  },
  {
    metric: "2.8×",
    label: "Meer conversies",
    context: "Bij gelijk budget",
  },
];

const testimonials = [
  {
    quote: "Eindelijk een partij die begrijpt wat kleine webshops nodig hebben. Betaalbaar én professioneel.",
    author: "Webshop eigenaar",
    role: "Fashion & Lifestyle",
    initials: "MK",
  },
  {
    quote: "In 3 weken van 1.2x naar 3.4x ROAS. Had niet verwacht dat het zo snel zou gaan.",
    author: "E-commerce ondernemer",
    role: "Home & Living",
    initials: "RV",
  },
];

export default function Results() {
  return (
    <section className="py-20 md:py-32 px-6 bg-gradient-to-b from-white to-warm-bg">
      <div className="max-w-content mx-auto">
        <div className="text-center max-w-[600px] mx-auto mb-16">
          <p className="font-mono text-sm text-teal tracking-wide mb-4">Resultaten</p>
          <h2 className="font-headline text-3xl md:text-5xl font-bold tracking-tight">
            Wat onze klanten bereiken
          </h2>
          <p className="mt-4 text-charcoal/60">
            Echte cijfers van echte webshops. Geen cherry-picked successen.
          </p>
        </div>

        {/* Metrics */}
        <div className="grid md:grid-cols-3 gap-6 mb-16">
          {results.map((result) => (
            <div 
              key={result.label}
              className="bg-white rounded-2xl p-8 text-center border border-charcoal/5 hover:border-teal/20 transition-colors"
            >
              <p className="font-mono text-5xl md:text-6xl font-bold text-teal">{result.metric}</p>
              <p className="font-headline font-bold mt-4">{result.label}</p>
              <p className="text-sm text-charcoal/50 mt-1">{result.context}</p>
            </div>
          ))}
        </div>

        {/* Testimonials */}
        <div className="grid md:grid-cols-2 gap-6">
          {testimonials.map((t) => (
            <div 
              key={t.author}
              className="bg-white rounded-2xl p-8 border border-charcoal/5"
            >
              <div className="flex gap-1 mb-4">
                {[...Array(5)].map((_, i) => (
                  <svg key={i} className="w-5 h-5 text-amber-400" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>
              <p className="text-charcoal/80 leading-relaxed mb-6">"{t.quote}"</p>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-teal/10 flex items-center justify-center">
                  <span className="font-mono text-sm text-teal font-medium">{t.initials}</span>
                </div>
                <div>
                  <p className="font-medium text-sm">{t.author}</p>
                  <p className="text-xs text-charcoal/50">{t.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Trust note */}
        <p className="text-center text-sm text-charcoal/40 mt-8">
          * Resultaten kunnen variëren. Dit zijn gemiddelden van onze eerste klanten.
        </p>
      </div>
    </section>
  );
}
