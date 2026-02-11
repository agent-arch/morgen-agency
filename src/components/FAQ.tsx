"use client";

import { useState } from "react";

const faqs = [
  {
    q: "Hoe werkt de AI-optimalisatie precies?",
    a: "Onze AI analyseert dagelijks je campagnedata — klikken, conversies, kosten per doelgroep — en past automatisch bids, budgets en targeting aan. Denk aan duizenden micro-beslissingen per week die een mens simpelweg niet kan maken. Er is altijd menselijk toezicht bij de strategie.",
  },
  {
    q: "Wat als ik al campagnes draai?",
    a: "Perfect. We beginnen met een audit van je huidige campagnes, nemen wat goed werkt mee, en bouwen een geoptimaliseerde structuur. Je bestaande data is waardevol — het geeft onze AI een voorsprong.",
  },
  {
    q: "Waarom geen percentage van mijn ad spend?",
    a: "Een percentage-model incentiviseert ons om je meer te laten uitgeven, niet om betere resultaten te leveren. Met een vast bedrag zijn onze belangen gelijk: jij wilt meer omzet per euro, wij ook.",
  },
  {
    q: "Kan ik zelf mijn ads zien en aanpassen?",
    a: "Je hebt altijd volledige toegang tot je ad accounts en ons live dashboard. Wij raden aan om ons de optimalisatie te laten doen, maar je kunt altijd meekijken en feedback geven.",
  },
  {
    q: "Wat gebeurt er na de eerste 2 maanden?",
    a: "Na de minimale commitment van 2 maanden kun je maandelijks opzeggen met 14 dagen opzegtermijn. We hebben die 2 maanden nodig om genoeg data te verzamelen en je campagnes goed te optimaliseren.",
  },
  {
    q: "Wat als mijn webshop groeit boven €5K ad spend?",
    a: "Dan wordt het tijd voor meer maatwerk. We verwijzen je proactief door naar Nodefy, ons moederbedrijf voor full-service marketing. Warme overdracht met al je data en learnings — geen lock-in.",
  },
  {
    q: "Moet ik zelf beeldmateriaal aanleveren?",
    a: "Ja, je levert productfoto's en eventueel video aan. Wij maken daar ad formats, schrijven de copy, en geven feedback op wat het beste werkt. We kunnen ook UGC-stijl scripts schrijven die jij of je team filmt.",
  },
  {
    q: "Hoe snel zie ik resultaten?",
    a: "Je eerste campagnes staan binnen 48 uur live. De eerste signalen zie je na 1-2 weken. Echte, betrouwbare data heb je na 4-6 weken. We communiceren open over wat we verwachten en wanneer.",
  },
];

export default function FAQ() {
  const [openIdx, setOpenIdx] = useState<number | null>(null);

  return (
    <section id="faq" className="py-20 md:py-32 px-6">
      <div className="max-w-content mx-auto">
        <p className="font-mono text-sm text-teal tracking-wide mb-4">FAQ</p>
        <h2 className="font-headline text-3xl md:text-5xl font-bold tracking-tight">
          Veelgestelde vragen
        </h2>

        <div className="mt-12 max-w-[720px] divide-y divide-charcoal/8">
          {faqs.map((faq, i) => (
            <div key={i}>
              <button
                onClick={() => setOpenIdx(openIdx === i ? null : i)}
                className="w-full py-5 flex items-start justify-between gap-4 text-left"
              >
                <span className="font-headline font-medium text-base md:text-lg">{faq.q}</span>
                <span className="font-mono text-teal text-xl mt-0.5 flex-shrink-0">
                  {openIdx === i ? "−" : "+"}
                </span>
              </button>
              {openIdx === i && (
                <p className="pb-5 text-charcoal/60 text-sm leading-relaxed -mt-1 pr-12">
                  {faq.a}
                </p>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
