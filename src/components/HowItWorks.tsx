const steps = [
  {
    num: "01",
    title: "Intake gesprek",
    desc: "We leren je webshop, doelgroep en doelen kennen. Duurt 30 minuten — geen verplichtingen.",
  },
  {
    num: "02",
    title: "Wij bouwen je campagnes",
    desc: "Binnen 48 uur staan je eerste campagnes live. Copy, targeting, creatives — wij regelen het.",
  },
  {
    num: "03",
    title: "Optimaliseren & groeien",
    desc: "Onze AI analyseert dagelijks je resultaten en optimaliseert continu. Jij ziet de omzet stijgen.",
  },
];

export default function HowItWorks() {
  return (
    <section id="hoe-het-werkt" className="py-20 md:py-32 px-6 bg-white">
      <div className="max-w-content mx-auto">
        <p className="font-mono text-sm text-teal tracking-wide mb-4">Hoe het werkt</p>
        <h2 className="font-headline text-3xl md:text-5xl font-bold tracking-tight">
          Drie stappen naar meer omzet
        </h2>

        <div className="mt-16 grid md:grid-cols-3 gap-12 md:gap-8">
          {steps.map((step) => (
            <div key={step.num}>
              <span className="font-mono text-5xl font-medium text-teal/20">{step.num}</span>
              <h3 className="font-headline text-xl font-bold mt-4 mb-3">{step.title}</h3>
              <p className="text-charcoal/60 leading-relaxed">{step.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
