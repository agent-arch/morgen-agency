const comparisons = [
  {
    label: "Optimalisatie frequentie",
    traditional: "Wekelijks (als het meezit)",
    morgen: "Dagelijks, automatisch",
  },
  {
    label: "Wie doet het werk?",
    traditional: "Junior met 20+ accounts",
    morgen: "AI met dedicated focus op jouw shop",
  },
  {
    label: "Beschikbaarheid",
    traditional: "Kantoortijden, min vakantie",
    morgen: "24/7, 365 dagen per jaar",
  },
  {
    label: "Maandelijkse kosten",
    traditional: "€1.500 – €3.000",
    morgen: "€500 – €900",
  },
  {
    label: "Minimale contractduur",
    traditional: "6 – 12 maanden",
    morgen: "2 maanden, daarna maandelijks",
  },
  {
    label: "Rapportage",
    traditional: "Maandelijks PDF",
    morgen: "Live dashboard + wekelijkse updates",
  },
];

export default function AIAdvantage() {
  return (
    <section className="py-20 md:py-32 px-6 bg-white">
      <div className="max-w-content mx-auto">
        <p className="font-mono text-sm text-teal tracking-wide mb-4">Transparant over AI</p>
        <h2 className="font-headline text-3xl md:text-5xl font-bold tracking-tight max-w-[640px]">
          Hoe AI het verschil maakt
        </h2>
        <p className="mt-4 text-charcoal/60 max-w-[560px]">
          AI doet de dagelijkse executie — bids, budgets, audiences optimaliseren. 
          Mensen doen de strategie. Zo krijg je het beste van beide werelden.
        </p>

        {/* Comparison table */}
        <div className="mt-16 max-w-[800px]">
          <div className="grid grid-cols-3 gap-4 mb-4">
            <div />
            <p className="font-mono text-xs text-charcoal/40 tracking-wider">TRADITIONELE AGENCY</p>
            <p className="font-mono text-xs text-teal tracking-wider">MORGEN.AGENCY</p>
          </div>
          {comparisons.map((row) => (
            <div key={row.label} className="grid grid-cols-3 gap-4 py-4 border-t border-charcoal/8">
              <p className="text-sm font-medium">{row.label}</p>
              <p className="text-sm text-charcoal/50">{row.traditional}</p>
              <p className="text-sm text-teal font-medium">{row.morgen}</p>
            </div>
          ))}
        </div>

        {/* Honest note */}
        <div className="mt-12 bg-warm-bg rounded-xl p-6 md:p-8 max-w-[800px]">
          <h3 className="font-headline font-bold text-lg mb-2">🎯 Eerlijk over AI</h3>
          <ul className="space-y-2 text-sm text-charcoal/70">
            <li>✅ AI monitort je campagnes dagelijks en optimaliseert automatisch</li>
            <li>✅ AI analyseert patronen sneller dan een mens</li>
            <li>✅ Er is altijd een mens betrokken bij strategie en kwaliteitscontrole</li>
            <li className="text-charcoal/50">❌ We beloven geen gegarandeerde ROAS — niemand kan dat</li>
            <li className="text-charcoal/50">❌ AI vervangt niet alles — mensen doen de strategie</li>
          </ul>
        </div>
      </div>
    </section>
  );
}
