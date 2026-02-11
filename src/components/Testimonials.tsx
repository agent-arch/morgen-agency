const placeholders = [
  {
    quote: "Binnenkort delen onze eerste klanten hun ervaring hier.",
    name: "Jouw naam hier?",
    role: "Webshop eigenaar",
  },
  {
    quote: "We zijn net gestart — de eerste resultaten volgen snel.",
    name: "Word onze eerste case",
    role: "Pionier voordeel: 1 maand gratis",
  },
];

export default function Testimonials() {
  return (
    <section className="py-20 md:py-32 px-6 bg-white">
      <div className="max-w-content mx-auto">
        <p className="font-mono text-sm text-teal tracking-wide mb-4">Wat klanten zeggen</p>
        <h2 className="font-headline text-3xl md:text-5xl font-bold tracking-tight">
          Binnenkort: echte resultaten
        </h2>

        <div className="mt-16 grid md:grid-cols-2 gap-8 max-w-[800px]">
          {placeholders.map((t, i) => (
            <div
              key={i}
              className="border border-dashed border-charcoal/15 rounded-2xl p-8 md:p-10"
            >
              <p className="text-lg text-charcoal/40 leading-relaxed italic">
                &ldquo;{t.quote}&rdquo;
              </p>
              <div className="mt-6">
                <p className="font-headline font-bold text-charcoal/40">{t.name}</p>
                <p className="text-sm text-charcoal/30">{t.role}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
