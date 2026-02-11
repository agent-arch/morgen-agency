import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Propositie — heymorgen.agency",
  description: "De volledige propositie van heymorgen.agency: AI-native advertising voor webshops.",
};

function TOC() {
  const items = [
    { id: "positionering", label: "1. Positionering" },
    { id: "doelgroep", label: "2. Doelgroep" },
    { id: "diensten", label: "3. Diensten" },
    { id: "pricing", label: "4. Pricing" },
    { id: "proces", label: "5. Proces" },
    { id: "concurrentie", label: "6. Concurrentievoordeel" },
  ];
  return (
    <nav className="bg-warm-bg rounded-xl p-6 md:p-8 mb-16">
      <p className="font-mono text-xs text-teal tracking-wider mb-4">INHOUDSOPGAVE</p>
      <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-2">
        {items.map((item) => (
          <a
            key={item.id}
            href={`#${item.id}`}
            className="text-sm text-charcoal/70 hover:text-teal transition-colors py-1"
          >
            {item.label}
          </a>
        ))}
      </div>
    </nav>
  );
}

function SectionHeader({ id, num, title }: { id: string; num: string; title: string }) {
  return (
    <div id={id} className="scroll-mt-24 mb-8 pt-16 first:pt-0">
      <p className="font-mono text-sm text-teal tracking-wide mb-2">{num}</p>
      <h2 className="font-headline text-2xl md:text-4xl font-bold tracking-tight">{title}</h2>
    </div>
  );
}

function Card({ children, className = "" }: { children: React.ReactNode; className?: string }) {
  return (
    <div className={`bg-white border border-charcoal/8 rounded-xl p-6 md:p-8 ${className}`}>
      {children}
    </div>
  );
}

export default function PropositiePage() {
  return (
    <>
      <Header />
      <main className="pt-32 pb-20 md:pt-40 md:pb-32 px-6">
        <div className="max-w-[860px] mx-auto">
          {/* Hero */}
          <p className="font-mono text-sm text-teal tracking-wide mb-4">Propositie</p>
          <h1 className="font-headline text-4xl md:text-6xl font-bold leading-[1.1] tracking-tight mb-6">
            Professioneel adverteren,{" "}
            <span className="text-teal">zonder agency-prijzen.</span>
          </h1>
          <p className="text-lg text-charcoal/60 max-w-[580px] leading-relaxed mb-4">
            AI-native advertising voor e-commerce webshops met €500–€10.000 ad spend per maand. 
            Dagelijkse optimalisatie, maandelijks strategiegesprek, vanaf €750/maand.
          </p>
          <p className="text-sm text-charcoal/35 mb-16">Document versie 1.0 — februari 2026</p>

          <TOC />

          {/* 1. Positionering */}
          <SectionHeader id="positionering" num="01" title="Positionering" />
          
          <Card className="mb-6">
            <p className="font-mono text-xs text-teal tracking-wider mb-3">ELEVATOR PITCH</p>
            <p className="text-charcoal/70 leading-relaxed text-lg italic">
              &ldquo;Kleine webshops willen groeien met ads, maar een agency kost €2K+ per maand 
              en een freelancer is onbetrouwbaar. heymorgen.agency draait op AI: je krijgt dagelijkse 
              optimalisatie, wekelijkse rapportages en professioneel campagnebeheer — voor een 
              fractie van de prijs.&rdquo;
            </p>
          </Card>

          <div className="grid sm:grid-cols-2 gap-4 mb-6">
            {[
              { icon: "🤖", title: "AI-first", desc: "Campagnes worden 24/7 gemonitord en geoptimaliseerd door AI, niet door een junior die 30 accounts tegelijk beheert" },
              { icon: "💰", title: "Betaalbaar", desc: "Geen overhead van kantoor, accountmanagers en salesteams — die besparing gaat naar jou" },
              { icon: "⚡", title: "Altijd aan", desc: "Geen vakanties, geen ziektedagen, geen 'ik kijk er morgen naar'" },
              { icon: "🤝", title: "Eerlijk model", desc: "Groei je voorbij ons? We verwijzen je actief door in plaats van je vast te houden" },
            ].map((usp) => (
              <Card key={usp.title}>
                <span className="text-2xl">{usp.icon}</span>
                <h3 className="font-headline font-bold mt-3 mb-1">{usp.title}</h3>
                <p className="text-sm text-charcoal/60">{usp.desc}</p>
              </Card>
            ))}
          </div>

          {/* 2. Doelgroep */}
          <SectionHeader id="doelgroep" num="02" title="Doelgroep Analyse" />

          <Card className="mb-6">
            <p className="font-mono text-xs text-teal tracking-wider mb-4">WIE ZIJN ZE?</p>
            <div className="grid sm:grid-cols-2 gap-6">
              <div>
                <p className="text-sm font-medium mb-2">Profiel</p>
                <ul className="text-sm text-charcoal/60 space-y-1.5">
                  <li>• E-commerce webshops (Shopify, WooCommerce, etc.)</li>
                  <li>• Ad spend: €500 – €10.000/maand</li>
                  <li>• Omzet: €50K – €1.5M/jaar</li>
                  <li>• Team: 1-5 personen</li>
                  <li>• Fysieke producten, eigen merk of curated</li>
                </ul>
              </div>
              <div>
                <p className="text-sm font-medium mb-2">Pijnpunten</p>
                <ul className="text-sm text-charcoal/60 space-y-1.5">
                  <li>• Geen tijd — ze runnen alles zelf</li>
                  <li>• Geen kennis van schalen met ads</li>
                  <li>• Slechte ervaringen met freelancers/agencies</li>
                  <li>• Angst voor geldverspilling</li>
                  <li>• Geen inzicht welke campagne wat oplevert</li>
                </ul>
              </div>
            </div>
          </Card>

          <div className="grid sm:grid-cols-3 gap-4 mb-6">
            {[
              { title: "Starter met tractie", desc: "Handgemaakte skincare, €80K omzet, doet zelf Meta ads maar plateaut" },
              { title: "Side-project dat groeit", desc: "Pet accessories naast fulltime baan, geen tijd voor ads" },
              { title: "Niche specialist", desc: "Specialty koffie, weet alles van product maar niks van marketing" },
            ].map((p) => (
              <Card key={p.title}>
                <h4 className="font-headline font-bold text-sm mb-1">{p.title}</h4>
                <p className="text-xs text-charcoal/60">{p.desc}</p>
              </Card>
            ))}
          </div>

          <Card className="mb-6 bg-coral/5 border-coral/15">
            <p className="font-headline font-bold text-sm mb-2">🎯 De gap in de markt</p>
            <p className="text-sm text-charcoal/70">
              Agencies vragen €1.500-3.000/maand met 6-12 maanden lock-in. Freelancers zijn 
              inconsistent. Zelf doen kost te veel tijd. Tools zijn te technisch. 
              <strong> Er is geen optie die professioneel, betaalbaar én betrouwbaar is voor shops met &lt;€5K spend.</strong>
            </p>
          </Card>

          {/* 3. Diensten */}
          <SectionHeader id="diensten" num="03" title="Diensten" />

          <div className="space-y-4 mb-6">
            {[
              {
                title: "Campagnebeheer",
                items: ["Campagne setup & structuur (Meta + Google Ads)", "Doelgroep research & targeting", "Dagelijkse bid/budget optimalisatie (AI)", "A/B testing van audiences en placements", "Wekelijkse performance check & bijsturing"],
              },
              {
                title: "Creative & Copy",
                items: ["Ad copy schrijven (variaties per doelgroep)", "Basis creative briefings", "UGC-stijl ad scripts"],
              },
              {
                title: "Rapportage & Inzicht",
                items: ["Wekelijks dashboard update (live)", "Maandelijks performance rapport", "Maandelijks strategiegesprek (video call)"],
              },
              {
                title: "Tracking & Attributie",
                items: ["Pixel/conversion setup check", "UTM structuur", "Basis attributie-inzicht"],
              },
            ].map((service) => (
              <Card key={service.title}>
                <h3 className="font-headline font-bold mb-3">{service.title}</h3>
                <ul className="grid sm:grid-cols-2 gap-1.5">
                  {service.items.map((item) => (
                    <li key={item} className="text-sm text-charcoal/60 flex items-start gap-2">
                      <span className="text-teal mt-0.5">✓</span> {item}
                    </li>
                  ))}
                </ul>
              </Card>
            ))}
          </div>

          <Card className="mb-6">
            <p className="font-mono text-xs text-charcoal/40 tracking-wider mb-3">PLATFORMEN</p>
            <div className="grid grid-cols-3 gap-4 text-sm text-center">
              <div className="bg-warm-bg rounded-lg p-4">
                <p className="font-medium">Meta Ads</p>
                <p className="text-xs text-charcoal/50 mt-1">Starter + Groei</p>
              </div>
              <div className="bg-warm-bg rounded-lg p-4">
                <p className="font-medium">Google Ads</p>
                <p className="text-xs text-charcoal/50 mt-1">Groei</p>
              </div>
              <div className="bg-warm-bg rounded-lg p-4">
                <p className="font-medium">TikTok Ads</p>
                <p className="text-xs text-charcoal/50 mt-1">Add-on €200/mnd</p>
              </div>
            </div>
          </Card>

          <Card className="mb-6 bg-charcoal/3">
            <p className="font-headline font-bold text-sm mb-2">Wat zit er niet in</p>
            <div className="flex flex-wrap gap-2">
              {["Webshop design", "SEO", "Email marketing", "Productfotografie", "Marketplace beheer", "Organic social"].map((item) => (
                <span key={item} className="text-xs bg-charcoal/5 text-charcoal/50 px-3 py-1 rounded-full">
                  ❌ {item}
                </span>
              ))}
            </div>
            <p className="text-sm text-charcoal/60 mt-3">
              We doen één ding en dat doen we goed: <strong>betaalde advertenties</strong>.
            </p>
          </Card>

          {/* 4. Pricing */}
          <SectionHeader id="pricing" num="04" title="Pricing" />

          <div className="grid sm:grid-cols-3 gap-4 mb-6">
            <Card>
              <h3 className="font-headline text-xl font-bold">Launch</h3>
              <p className="font-mono text-3xl font-medium text-teal mt-2">€750<span className="text-sm text-charcoal/40">/mnd</span></p>
              <ul className="mt-4 space-y-2 text-sm text-charcoal/60">
                <li>✓ Meta + Google Ads</li>
                <li>✓ Max 4 actieve campagnes</li>
                <li>✓ Dagelijkse AI-optimalisatie</li>
                <li>✓ Tot 8 ad variaties/maand</li>
                <li>✓ Wekelijkse rapportage + dashboard</li>
                <li>✓ 1× strategiegesprek/maand</li>
                <li className="text-charcoal/40">Aanbevolen spend: &lt;€2K/mnd</li>
              </ul>
            </Card>
            <Card className="ring-2 ring-teal">
              <span className="inline-block font-mono text-xs tracking-wider bg-teal text-white px-3 py-1 rounded-full mb-2">POPULAIR</span>
              <h3 className="font-headline text-xl font-bold">Growth</h3>
              <p className="font-mono text-3xl font-medium text-teal mt-2">€1.250<span className="text-sm text-charcoal/40">/mnd</span></p>
              <ul className="mt-4 space-y-2 text-sm text-charcoal/60">
                <li>✓ Meta + Google + TikTok Ads</li>
                <li>✓ Max 8 actieve campagnes</li>
                <li>✓ Dagelijkse AI-optimalisatie</li>
                <li>✓ Tot 16 ad variaties/maand</li>
                <li>✓ Wekelijkse rapportage + dashboard</li>
                <li>✓ 2× strategiegesprek/maand</li>
                <li>✓ Creative productie support</li>
                <li className="text-charcoal/40">Aanbevolen spend: €2K–€5K/mnd</li>
              </ul>
            </Card>
            <Card className="bg-charcoal text-white">
              <h3 className="font-headline text-xl font-bold">Scale</h3>
              <p className="font-mono text-3xl font-medium text-coral mt-2">€1.750<span className="text-sm text-white/40">/mnd</span></p>
              <ul className="mt-4 space-y-2 text-sm text-white/70">
                <li>✓ Alle platformen</li>
                <li>✓ Onbeperkte campagnes</li>
                <li>✓ Dagelijkse AI-optimalisatie</li>
                <li>✓ Onbeperkte ad variaties</li>
                <li>✓ Wekelijkse rapportage + dashboard</li>
                <li>✓ Wekelijks strategiegesprek</li>
                <li>✓ Priority support (&lt;4 uur)</li>
                <li className="text-white/40">Aanbevolen spend: €5K–€10K/mnd</li>
              </ul>
            </Card>
          </div>

          <Card className="mb-6 bg-teal/5 border-teal/20">
            <p className="font-headline font-bold text-sm mb-3">Meer dan €10K ad spend?</p>
            <p className="text-sm text-charcoal/60 mb-3">
              Voor grotere budgetten werken we samen met <strong>Nodefy</strong> — ons zusterbedrijf met 10+ specialisten en enterprise-capaciteit.
            </p>
            <a href="https://nodefy.nl" className="text-sm text-teal hover:underline">Bekijk Nodefy →</a>
          </Card>

          <Card className="mb-6">
            <p className="font-headline font-bold text-sm mb-3">Pricing logica</p>
            <ul className="text-sm text-charcoal/60 space-y-2">
              <li>• <strong>Geen percentage van ad spend</strong> — dat incentiviseert meer spenderen, niet betere resultaten</li>
              <li>• <strong>Vaste fee</strong> — voorspelbaar voor de klant</li>
              <li>• <strong>2 maanden minimum</strong> — we hebben data nodig om te optimaliseren</li>
              <li>• <strong>Daarna maandelijks opzegbaar</strong> met 14 dagen opzegtermijn</li>
              <li>• <strong>Doorverwijzing bij &gt;€10K spend</strong> — warme overdracht naar Nodefy</li>
            </ul>
          </Card>

          {/* 5. Proces */}
          <SectionHeader id="proces" num="05" title="Proces" />

          <Card className="mb-6">
            <p className="font-mono text-xs text-teal tracking-wider mb-4">ONBOARDING (WEEK 1-2)</p>
            <div className="space-y-4">
              {[
                { day: "Dag 1-2", title: "Intake", desc: "Formulier, toegang tot ad accounts en webshop analytics" },
                { day: "Dag 3-5", title: "Audit & Setup", desc: "Campagne audit, pixel/tracking check, structuur opzetten, copy klaarzetten" },
                { day: "Dag 8-10", title: "Kickoff", desc: "Kickoff call, eerste campagnes live, dashboard toegang" },
                { day: "Dag 14", title: "Eerste check", desc: "Resultaten reviewen, bijsturen waar nodig" },
              ].map((step) => (
                <div key={step.day} className="flex gap-4">
                  <span className="font-mono text-xs text-teal whitespace-nowrap mt-0.5 w-16">{step.day}</span>
                  <div>
                    <p className="text-sm font-medium">{step.title}</p>
                    <p className="text-xs text-charcoal/60">{step.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </Card>

          <Card className="mb-6">
            <p className="font-mono text-xs text-teal tracking-wider mb-4">MAANDELIJKSE CYCLUS</p>
            <div className="grid sm:grid-cols-2 gap-4">
              {[
                { week: "Week 1", task: "Performance review, strategie bijstellen" },
                { week: "Week 2", task: "Nieuwe ad variaties & tests lanceren" },
                { week: "Week 3", task: "Optimalisatie op basis van data" },
                { week: "Week 4", task: "Maandrapport + strategiegesprek" },
              ].map((w) => (
                <div key={w.week} className="bg-warm-bg rounded-lg p-4">
                  <p className="font-mono text-xs text-teal">{w.week}</p>
                  <p className="text-sm text-charcoal/70 mt-1">{w.task}</p>
                </div>
              ))}
            </div>
            <p className="text-xs text-charcoal/40 mt-4 italic">
              ↳ Doorlopend: dagelijkse AI-optimalisatie van bids, budgets, audiences
            </p>
          </Card>

          <Card className="mb-6">
            <p className="font-headline font-bold text-sm mb-3">Communicatie</p>
            <div className="space-y-2 text-sm text-charcoal/60">
              <p><strong>Dashboard:</strong> Live resultaten, always-on</p>
              <p><strong>Email/chat:</strong> Vragen en feedback, respons binnen 24u (werkdagen)</p>
              <p><strong>Maandelijks call:</strong> Strategie en alignment</p>
            </div>
            <p className="text-xs text-charcoal/40 mt-4">
              We zijn bewust async. Dat houdt de kosten laag en de kwaliteit hoog.
            </p>
          </Card>

          {/* 6. Concurrentievoordeel */}
          <SectionHeader id="concurrentie" num="06" title="Concurrentievoordeel" />

          <Card className="mb-6 overflow-x-auto">
            <p className="font-mono text-xs text-teal tracking-wider mb-4">MORGEN VS. FREELANCER VS. AGENCY</p>
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b border-charcoal/10">
                  <th className="text-left py-2 text-charcoal/50 font-medium" />
                  <th className="text-center py-2 text-charcoal/40 font-mono text-xs">Freelancer</th>
                  <th className="text-center py-2 text-charcoal/40 font-mono text-xs">Grote agency</th>
                  <th className="text-center py-2 text-teal font-mono text-xs">morgen.</th>
                </tr>
              </thead>
              <tbody className="text-charcoal/60">
                {[
                  ["Beschikbaarheid", "1 persoon", "Kantoortijden", "24/7 AI"],
                  ["Consistentie", "Wisselend", "Junior met 20+ accounts", "Gestandaardiseerd"],
                  ["Prijs / maand", "€300-800", "€1.500-3.000", "€750-1.750"],
                  ["Minimale commit", "Varieert", "6-12 maanden", "2 maanden"],
                  ["Rapportage", "Ad hoc PDF", "Maandelijks PDF", "Live dashboard"],
                  ["Eerlijk bij doorgroei", "N.v.t.", "Nee (willen je houden)", "Ja (doorverwijzing)"],
                ].map((row) => (
                  <tr key={row[0]} className="border-b border-charcoal/5">
                    <td className="py-2.5 font-medium text-charcoal/70">{row[0]}</td>
                    <td className="py-2.5 text-center text-xs">{row[1]}</td>
                    <td className="py-2.5 text-center text-xs">{row[2]}</td>
                    <td className="py-2.5 text-center text-xs text-teal font-medium">{row[3]}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </Card>

          <Card className="mb-6 bg-teal/5 border-teal/15">
            <p className="font-headline font-bold mb-3">🤖 Het AI-verhaal</p>
            <div className="grid sm:grid-cols-2 gap-6 text-sm">
              <div>
                <p className="font-medium text-teal mb-2">Wat we wél zeggen</p>
                <ul className="text-charcoal/60 space-y-1.5">
                  <li>✅ AI monitort dagelijks en optimaliseert automatisch</li>
                  <li>✅ AI analyseert patronen sneller dan een mens</li>
                  <li>✅ AI schrijft en test ad copy op schaal</li>
                  <li>✅ Mens betrokken bij strategie en kwaliteitscontrole</li>
                </ul>
              </div>
              <div>
                <p className="font-medium text-charcoal/40 mb-2">Wat we niet zeggen</p>
                <ul className="text-charcoal/40 space-y-1.5">
                  <li>❌ &quot;AI vervangt alles&quot;</li>
                  <li>❌ &quot;Gegarandeerde ROAS&quot;</li>
                  <li>❌ &quot;Volledig autonoom&quot;</li>
                </ul>
              </div>
            </div>
          </Card>

          {/* Summary */}
          <div className="mt-16 bg-teal rounded-2xl p-8 md:p-12 text-white">
            <p className="font-mono text-xs tracking-wider text-white/50 mb-4">SAMENVATTING</p>
            <div className="grid sm:grid-cols-2 gap-6 text-sm">
              <div className="space-y-3">
                <p><span className="text-white/50">Voor wie:</span> E-commerce, €500-10K ad spend</p>
                <p><span className="text-white/50">Wat:</span> AI-gedreven Meta + Google + TikTok Ads</p>
                <p><span className="text-white/50">Prijs:</span> €750 / €1.250 / €1.750 per maand</p>
              </div>
              <div className="space-y-3">
                <p><span className="text-white/50">Hoe:</span> Dagelijkse AI + maandelijks gesprek</p>
                <p><span className="text-white/50">Waarom wij:</span> Pro niveau, freelancer-prijs</p>
                <p><span className="text-white/50">Doorgroei:</span> &gt;€5K → warm naar Nodefy</p>
              </div>
            </div>
            <a
              href="/#start"
              className="inline-block mt-8 bg-coral hover:bg-coral-dark text-white px-8 py-4 rounded-lg font-headline font-medium transition-colors"
            >
              Plan een intake →
            </a>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
