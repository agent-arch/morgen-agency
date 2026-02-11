const features = [
  { name: "Meta Ads (Facebook & Instagram)", starter: true, groei: true },
  { name: "Google Ads (Search & Shopping)", starter: false, groei: true },
  { name: "Dagelijkse AI-optimalisatie", starter: true, groei: true },
  { name: "Actieve campagnes", starter: "3", groei: "6" },
  { name: "Ad copy variaties / maand", starter: "6", groei: "12" },
  { name: "Strategiegesprek", starter: "1×/mnd (30 min)", groei: "1×/mnd (45 min)" },
  { name: "Realtime dashboard", starter: true, groei: true },
  { name: "Wekelijkse rapportage", starter: false, groei: true },
  { name: "Maandelijkse rapportage", starter: true, groei: true },
  { name: "A/B testing", starter: false, groei: true },
  { name: "Retargeting funnel setup", starter: false, groei: true },
  { name: "Creative briefings & feedback", starter: true, groei: true },
  { name: "Aanbevolen ad spend", starter: "€500–€2K", groei: "€2K–€5K" },
];

function FeatureCell({ value }: { value: boolean | string }) {
  if (typeof value === "string") {
    return <span className="font-mono text-xs">{value}</span>;
  }
  return value ? (
    <svg className="w-4 h-4 text-teal mx-auto" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
    </svg>
  ) : (
    <span className="text-charcoal/20">—</span>
  );
}

export default function Pricing() {
  return (
    <section id="prijzen" className="py-20 md:py-32 px-6">
      <div className="max-w-content mx-auto">
        <p className="font-mono text-sm text-teal tracking-wide mb-4">Prijzen</p>
        <h2 className="font-headline text-3xl md:text-5xl font-bold tracking-tight">
          Eerlijk & transparant
        </h2>
        <p className="mt-4 text-charcoal/60 max-w-[520px]">
          Vast bedrag per maand. Geen percentage van je ad spend — dat zou ons 
          incentiveren om meer te spenderen, niet beter. 2 maanden minimum, 
          daarna maandelijks opzegbaar.
        </p>

        {/* Cards */}
        <div className="mt-16 grid md:grid-cols-2 gap-8 max-w-[800px]">
          {/* Starter */}
          <div className="rounded-2xl p-8 md:p-10 bg-white border border-charcoal/10">
            <h3 className="font-headline text-2xl font-bold">Starter</h3>
            <div className="mt-4 flex items-baseline gap-1">
              <span className="font-mono text-4xl md:text-5xl font-medium">€500</span>
              <span className="text-sm text-charcoal/50">/maand</span>
            </div>
            <p className="mt-3 text-sm text-charcoal/50">
              Perfect om te starten met professionele Meta Ads.
            </p>
            <a
              href="#start"
              className="mt-8 block text-center py-3.5 rounded-lg font-headline font-medium bg-charcoal hover:bg-charcoal/90 text-white transition-colors"
            >
              Start met Starter →
            </a>
          </div>

          {/* Groei */}
          <div className="rounded-2xl p-8 md:p-10 bg-teal text-white ring-2 ring-teal relative">
            <span className="inline-block font-mono text-xs tracking-wider bg-coral text-white px-3 py-1 rounded-full mb-4">
              MEEST GEKOZEN
            </span>
            <h3 className="font-headline text-2xl font-bold">Groei</h3>
            <div className="mt-4 flex items-baseline gap-1">
              <span className="font-mono text-4xl md:text-5xl font-medium">€900</span>
              <span className="text-sm text-white/60">/maand</span>
            </div>
            <p className="mt-3 text-sm text-white/70">
              Meta + Google Ads. Volledige funnel. Serieus schalen.
            </p>
            <a
              href="#start"
              className="mt-8 block text-center py-3.5 rounded-lg font-headline font-medium bg-coral hover:bg-coral-dark text-white transition-colors"
            >
              Start met Groei →
            </a>
          </div>
        </div>

        {/* Feature comparison */}
        <div className="mt-12 max-w-[800px] overflow-x-auto">
          <table className="w-full text-sm">
            <thead>
              <tr className="border-b border-charcoal/10">
                <th className="text-left py-3 font-medium text-charcoal/60">Feature</th>
                <th className="text-center py-3 font-mono text-xs tracking-wider text-charcoal/40 w-28">STARTER</th>
                <th className="text-center py-3 font-mono text-xs tracking-wider text-teal w-28">GROEI</th>
              </tr>
            </thead>
            <tbody>
              {features.map((f) => (
                <tr key={f.name} className="border-b border-charcoal/5">
                  <td className="py-3 text-charcoal/70">{f.name}</td>
                  <td className="py-3 text-center"><FeatureCell value={f.starter} /></td>
                  <td className="py-3 text-center"><FeatureCell value={f.groei} /></td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Add-ons */}
        <div className="mt-8 max-w-[800px] flex flex-wrap gap-4">
          <div className="bg-warm-bg rounded-lg px-4 py-3 text-sm">
            <span className="text-charcoal/40">Add-on:</span>{" "}
            <span className="font-medium">TikTok Ads</span>{" "}
            <span className="font-mono text-teal">+€200/mnd</span>
          </div>
          <div className="bg-warm-bg rounded-lg px-4 py-3 text-sm">
            <span className="text-charcoal/40">Add-on:</span>{" "}
            <span className="font-medium">Extra strategy call</span>{" "}
            <span className="font-mono text-teal">€75/sessie</span>
          </div>
          <div className="bg-warm-bg rounded-lg px-4 py-3 text-sm">
            <span className="text-charcoal/40">Eenmalig:</span>{" "}
            <span className="font-medium">Tracking audit</span>{" "}
            <span className="font-mono text-teal">€150</span>
          </div>
        </div>

        {/* FOMO */}
        <div className="mt-8 max-w-[800px] bg-coral/5 border border-coral/15 rounded-xl p-5 flex items-start gap-3">
          <span className="text-lg">🔥</span>
          <div>
            <p className="text-sm font-medium text-charcoal">
              Nog 3 plekken beschikbaar in februari
            </p>
            <p className="text-xs text-charcoal/50 mt-1">
              We nemen bewust een beperkt aantal klanten aan zodat de kwaliteit hoog blijft. 
              Aanmelden kan tot de plekken vol zijn.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
