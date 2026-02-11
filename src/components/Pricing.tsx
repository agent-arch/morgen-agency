const features = [
  { name: "Meta Ads (Facebook & Instagram)", launch: true, growth: true, scale: true },
  { name: "Google Ads (Search & Shopping)", launch: true, growth: true, scale: true },
  { name: "TikTok Ads", launch: false, growth: true, scale: true },
  { name: "LinkedIn Ads", launch: false, growth: false, scale: "Optioneel" },
  { name: "Dagelijkse AI-optimalisatie", launch: true, growth: true, scale: true },
  { name: "Actieve campagnes", launch: "4", growth: "8", scale: "Onbeperkt" },
  { name: "Ad copy variaties / maand", launch: "8", growth: "16", scale: "Onbeperkt" },
  { name: "Strategiegesprek", launch: "1×/mnd", growth: "2×/mnd", scale: "Wekelijks" },
  { name: "Realtime dashboard", launch: true, growth: true, scale: true },
  { name: "Wekelijkse rapportage", launch: true, growth: true, scale: true },
  { name: "A/B testing", launch: true, growth: true, scale: true },
  { name: "Retargeting funnel setup", launch: true, growth: true, scale: true },
  { name: "Creative briefings & feedback", launch: true, growth: true, scale: true },
  { name: "Creative productie support", launch: false, growth: true, scale: true },
  { name: "Priority support (< 4 uur)", launch: false, growth: false, scale: true },
  { name: "Dedicated account lead", launch: false, growth: true, scale: true },
  { name: "Custom integraties", launch: false, growth: false, scale: "Op aanvraag" },
  { name: "Aanbevolen ad spend", launch: "< €2K", growth: "€2K–€5K", scale: "€5K–€15K" },
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
        <div className="mt-16 grid md:grid-cols-3 gap-6">
          {/* Launch */}
          <div className="rounded-2xl p-8 bg-white border border-charcoal/10 hover:border-teal/30 transition-colors">
            <h3 className="font-headline text-xl font-bold">Launch</h3>
            <div className="mt-4 flex items-baseline gap-1">
              <span className="font-mono text-4xl font-medium text-teal">€750</span>
              <span className="text-sm text-charcoal/50">/maand</span>
            </div>
            <p className="mt-3 text-sm text-charcoal/50">
              Meta + Google Ads beheer. Perfect om professioneel te starten.
            </p>
            <ul className="mt-6 space-y-2 text-sm text-charcoal/70">
              <li className="flex items-center gap-2">
                <span className="text-teal">✓</span> Meta + Google Ads
              </li>
              <li className="flex items-center gap-2">
                <span className="text-teal">✓</span> 4 actieve campagnes
              </li>
              <li className="flex items-center gap-2">
                <span className="text-teal">✓</span> Wekelijkse rapportage
              </li>
              <li className="flex items-center gap-2">
                <span className="text-teal">✓</span> Dedicated AI-agent
              </li>
              <li className="flex items-center gap-2">
                <span className="text-charcoal/40">↳</span> Tot €2.000 ad spend
              </li>
            </ul>
            <a
              href="#start"
              className="mt-8 block text-center py-3 rounded-lg font-headline font-medium bg-charcoal hover:bg-charcoal/90 text-white transition-colors text-sm"
            >
              Start vandaag →
            </a>
          </div>

          {/* Growth */}
          <div className="rounded-2xl p-8 bg-gradient-to-br from-teal to-teal/90 text-white ring-2 ring-teal relative shadow-lg shadow-teal/20">
            <span className="absolute -top-3 left-1/2 -translate-x-1/2 font-mono text-xs tracking-wider bg-coral text-white px-4 py-1.5 rounded-full shadow-md">
              POPULAIR
            </span>
            <h3 className="font-headline text-xl font-bold mt-2">Growth</h3>
            <div className="mt-4 flex items-baseline gap-1">
              <span className="font-mono text-4xl font-medium">€1.250</span>
              <span className="text-sm text-white/60">/maand</span>
            </div>
            <p className="mt-3 text-sm text-white/70">
              Volledige funnel. TikTok erbij. Voor serieuze groei.
            </p>
            <ul className="mt-6 space-y-2 text-sm text-white/80">
              <li className="flex items-center gap-2">
                <span className="text-coral">✓</span> Meta + Google + TikTok
              </li>
              <li className="flex items-center gap-2">
                <span className="text-coral">✓</span> 8 actieve campagnes
              </li>
              <li className="flex items-center gap-2">
                <span className="text-coral">✓</span> 2× strategiegesprek/mnd
              </li>
              <li className="flex items-center gap-2">
                <span className="text-coral">✓</span> Creative productie support
              </li>
              <li className="flex items-center gap-2">
                <span className="text-white/50">↳</span> €2K–€5K ad spend
              </li>
            </ul>
            <a
              href="#start"
              className="mt-8 block text-center py-3 rounded-lg font-headline font-medium bg-coral hover:bg-coral-dark text-white transition-colors text-sm shadow-md"
            >
              Start vandaag →
            </a>
          </div>

          {/* Scale */}
          <div className="rounded-2xl p-8 bg-gradient-to-br from-charcoal to-charcoal/90 text-white relative overflow-hidden hover:shadow-lg transition-shadow">
            <div className="absolute top-0 right-0 w-32 h-32 bg-coral/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2"></div>
            <h3 className="font-headline text-xl font-bold">Scale</h3>
            <div className="mt-4 flex items-baseline gap-1">
              <span className="font-mono text-4xl font-medium text-coral">€1.750</span>
              <span className="text-sm text-white/50">/maand</span>
            </div>
            <p className="mt-3 text-sm text-white/60">
              Alle platformen. Wekelijks contact. Maximale schaal.
            </p>
            <ul className="mt-6 space-y-2 text-sm text-white/70">
              <li className="flex items-center gap-2">
                <span className="text-coral">✓</span> Alle platformen
              </li>
              <li className="flex items-center gap-2">
                <span className="text-coral">✓</span> Onbeperkte campagnes
              </li>
              <li className="flex items-center gap-2">
                <span className="text-coral">✓</span> Wekelijks strategiegesprek
              </li>
              <li className="flex items-center gap-2">
                <span className="text-coral">✓</span> Priority support (< 4 uur)
              </li>
              <li className="flex items-center gap-2">
                <span className="text-white/40">↳</span> €5K–€15K ad spend
              </li>
            </ul>
            <a
              href="#start"
              className="mt-8 block text-center py-3 rounded-lg font-headline font-medium bg-white text-charcoal hover:bg-white/90 transition-colors text-sm"
            >
              Start vandaag →
            </a>
          </div>
        </div>

        {/* Feature comparison */}
        <div className="mt-16 overflow-x-auto">
          <table className="w-full text-sm min-w-[700px]">
            <thead>
              <tr className="border-b border-charcoal/10">
                <th className="text-left py-3 font-medium text-charcoal/60">Feature</th>
                <th className="text-center py-3 font-mono text-xs tracking-wider text-charcoal/40 w-24">LAUNCH</th>
                <th className="text-center py-3 font-mono text-xs tracking-wider text-teal w-24">GROWTH</th>
                <th className="text-center py-3 font-mono text-xs tracking-wider text-charcoal w-24">SCALE</th>
              </tr>
            </thead>
            <tbody>
              {features.map((f) => (
                <tr key={f.name} className="border-b border-charcoal/5">
                  <td className="py-3 text-charcoal/70">{f.name}</td>
                  <td className="py-3 text-center"><FeatureCell value={f.launch} /></td>
                  <td className="py-3 text-center"><FeatureCell value={f.growth} /></td>
                  <td className="py-3 text-center"><FeatureCell value={f.scale} /></td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Add-ons */}
        <div className="mt-8 flex flex-wrap gap-4">
          <div className="bg-warm-bg rounded-lg px-4 py-3 text-sm">
            <span className="text-charcoal/40">Add-on:</span>{" "}
            <span className="font-medium">LinkedIn Ads</span>{" "}
            <span className="font-mono text-teal">+€300/mnd</span>
          </div>
          <div className="bg-warm-bg rounded-lg px-4 py-3 text-sm">
            <span className="text-charcoal/40">Add-on:</span>{" "}
            <span className="font-medium">Extra strategy call</span>{" "}
            <span className="font-mono text-teal">€95/sessie</span>
          </div>
          <div className="bg-warm-bg rounded-lg px-4 py-3 text-sm">
            <span className="text-charcoal/40">Eenmalig:</span>{" "}
            <span className="font-medium">Tracking audit + setup</span>{" "}
            <span className="font-mono text-teal">€250</span>
          </div>
        </div>

        {/* Nodefy CTA - voor grotere budgetten */}
        <div className="mt-12 bg-gradient-to-r from-teal/5 via-coral/5 to-teal/5 border border-teal/20 rounded-2xl p-8 md:p-10">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6">
            <div>
              <div className="flex items-center gap-2 mb-3">
                <span className="text-2xl">🚀</span>
                <span className="font-mono text-xs tracking-wider bg-coral/10 text-coral px-3 py-1 rounded-full">
                  ENTERPRISE
                </span>
              </div>
              <h3 className="font-headline text-xl md:text-2xl font-bold text-charcoal">
                Meer dan €15K ad spend per maand?
              </h3>
              <p className="mt-2 text-charcoal/60 max-w-lg">
                Voor grotere budgetten en complexere setups werken we samen met{" "}
                <span className="font-semibold text-teal">Nodefy</span> — ons zusterbedrijf 
                met 10+ specialisten, enterprise tracking, en dedicated teams.
              </p>
              <ul className="mt-4 flex flex-wrap gap-x-6 gap-y-2 text-sm text-charcoal/50">
                <li className="flex items-center gap-1">
                  <span className="text-teal">✓</span> Dedicated team
                </li>
                <li className="flex items-center gap-1">
                  <span className="text-teal">✓</span> Enterprise tracking
                </li>
                <li className="flex items-center gap-1">
                  <span className="text-teal">✓</span> Custom dashboards
                </li>
                <li className="flex items-center gap-1">
                  <span className="text-teal">✓</span> Multi-market
                </li>
              </ul>
            </div>
            <a
              href="https://nodefy.nl"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-charcoal hover:bg-charcoal/90 text-white font-headline font-medium rounded-xl transition-colors whitespace-nowrap shadow-lg"
            >
              Bekijk Nodefy →
            </a>
          </div>
        </div>

        {/* FOMO */}
        <div className="mt-8 bg-coral/5 border border-coral/15 rounded-xl p-5 flex items-start gap-3">
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
