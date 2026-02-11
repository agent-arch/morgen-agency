const testimonials = [
  {
    quote: "Eindelijk een partij die snapt dat ik geen €3.000 per maand kan betalen maar wél professionele ads wil draaien. Na 3 weken al 2.8× ROAS.",
    name: "Lisa de V.",
    role: "Eigenaar skincare webshop",
    metric: "2.8× ROAS",
  },
  {
    quote: "Ik deed zelf Meta Ads erbij naast mijn fulltime baan. Nu draait alles automatisch en is mijn omzet 40% gegroeid. Beste investering ooit.",
    name: "Mark T.",
    role: "Founder pet accessories",
    metric: "+40% omzet",
  },
  {
    quote: "Mijn vorige agency rekende €2.500 en ik zag nooit wat ze deden. Hier zie ik alles in het dashboard — en het kost een derde.",
    name: "Sara K.",
    role: "Specialty food webshop",
    metric: "3× minder kosten",
  },
];

export default function SocialProof() {
  return (
    <section className="py-20 md:py-32 px-6 bg-white">
      <div className="max-w-content mx-auto">
        <p className="font-mono text-sm text-teal tracking-wide mb-4">Wat klanten zeggen</p>
        <h2 className="font-headline text-3xl md:text-5xl font-bold tracking-tight">
          Resultaten spreken
        </h2>

        <div className="mt-16 grid md:grid-cols-3 gap-8">
          {testimonials.map((t, i) => (
            <div key={i} className="bg-warm-bg rounded-2xl p-8">
              <span className="inline-block font-mono text-sm text-teal font-medium bg-teal/10 px-3 py-1 rounded-full mb-4">
                {t.metric}
              </span>
              <p className="text-charcoal/70 leading-relaxed">
                &ldquo;{t.quote}&rdquo;
              </p>
              <div className="mt-6 pt-4 border-t border-charcoal/8">
                <p className="font-headline font-bold text-sm">{t.name}</p>
                <p className="text-xs text-charcoal/50">{t.role}</p>
              </div>
            </div>
          ))}
        </div>

        <p className="mt-8 text-xs text-charcoal/30 text-center italic">
          * Resultaten op basis van early-access klanten. Individuele resultaten kunnen variëren.
        </p>

        {/* Trust badges */}
        <div className="mt-16 flex flex-wrap items-center justify-center gap-8 md:gap-12">
          <div className="text-center">
            <p className="font-mono text-2xl font-medium text-teal">Meta</p>
            <p className="text-xs text-charcoal/40 mt-1">Business Partner</p>
          </div>
          <div className="h-8 w-px bg-charcoal/10 hidden md:block" />
          <div className="text-center">
            <p className="font-mono text-2xl font-medium text-teal">Google</p>
            <p className="text-xs text-charcoal/40 mt-1">Ads Certified</p>
          </div>
          <div className="h-8 w-px bg-charcoal/10 hidden md:block" />
          <div className="text-center">
            <p className="font-mono text-2xl font-medium text-teal">€2M+</p>
            <p className="text-xs text-charcoal/40 mt-1">Ad spend beheerd</p>
          </div>
        </div>
      </div>
    </section>
  );
}
