const usps = [
  {
    icon: "🤖",
    title: "AI-first, niet AI-achteraf",
    desc: "Geen junior die 30 accounts tegelijk beheert. Onze AI monitort en optimaliseert jouw campagnes dagelijks — met meer precisie dan menselijk mogelijk is.",
  },
  {
    icon: "💰",
    title: "Agency-kwaliteit, freelancer-prijs",
    desc: "Geen overhead van kantoor, accountmanagers en salesteams. Die besparing gaat naar jou. Vast bedrag, geen percentage van je spend.",
  },
  {
    icon: "🔄",
    title: "Altijd aan, nooit ziek",
    desc: "Geen vakanties, geen ziektedagen, geen 'ik kijk er morgen naar'. Je campagnes worden 365 dagen per jaar geoptimaliseerd.",
  },
  {
    icon: "📊",
    title: "Transparant tot op de euro",
    desc: "Live dashboard met je resultaten. Wekelijkse rapportages. Je weet precies wat elke euro oplevert — geen black box.",
  },
  {
    icon: "🤝",
    title: "Eerlijk groeimodel",
    desc: "Groei je voorbij ons? Dan verwijzen we je actief door naar een full-service agency. Geen lock-in, geen klein-houden.",
  },
  {
    icon: "⚡",
    title: "Snel live, snel resultaat",
    desc: "Binnen 48 uur na intake staan je eerste campagnes live. Geen weken wachten op 'onboarding'.",
  },
];

export default function WhyMorgen() {
  return (
    <section className="py-20 md:py-32 px-6">
      <div className="max-w-content mx-auto">
        <p className="font-mono text-sm text-teal tracking-wide mb-4">Waarom heymorgen.agency</p>
        <h2 className="font-headline text-3xl md:text-5xl font-bold tracking-tight max-w-[600px]">
          Professioneel adverteren, zonder agency-prijzen
        </h2>
        <p className="mt-4 text-charcoal/60 max-w-[520px]">
          Er was geen optie die professioneel, betaalbaar én betrouwbaar was voor 
          webshops met minder dan €5K ad spend. Tot nu.
        </p>

        <div className="mt-16 grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {usps.map((usp) => (
            <div key={usp.title} className="group">
              <span className="text-3xl">{usp.icon}</span>
              <h3 className="font-headline text-lg font-bold mt-4 mb-2">{usp.title}</h3>
              <p className="text-charcoal/60 text-sm leading-relaxed">{usp.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
