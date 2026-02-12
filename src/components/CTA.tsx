export default function CTA() {
  return (
    <section id="start" className="py-20 md:py-32 px-6">
      <div className="max-w-content mx-auto">
        <div className="bg-gradient-to-br from-teal to-teal/90 rounded-2xl md:rounded-3xl px-8 py-16 md:px-16 md:py-24 relative overflow-hidden">
          {/* Background decoration */}
          <div className="absolute top-0 right-0 w-96 h-96 bg-coral/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />
          <div className="absolute bottom-0 left-0 w-64 h-64 bg-white/5 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2" />
          
          <div className="relative text-center">
            <div className="inline-flex items-center gap-2 bg-white/10 px-4 py-2 rounded-full mb-6">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-coral opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-coral"></span>
              </span>
              <span className="text-white/80 text-sm">Nog 3 plekken in februari</span>
            </div>

            <h2 className="font-headline text-3xl md:text-5xl font-bold text-white tracking-tight">
              Start vandaag met groeien
            </h2>
            <p className="mt-4 text-white/70 text-lg max-w-[520px] mx-auto">
              Plan een gratis adviesgesprek van 30 minuten. Je krijgt direct 
              bruikbare inzichten — ook als je niet klant wordt.
            </p>

            <div className="mt-10 max-w-[480px] mx-auto">
              <form
                action="https://formspree.io/f/placeholder"
                method="POST"
                className="flex flex-col gap-3"
              >
                <div className="grid grid-cols-2 gap-3">
                  <input
                    type="text"
                    name="name"
                    placeholder="Je naam"
                    required
                    className="w-full px-5 py-3.5 rounded-xl bg-white/10 border border-white/20 text-white placeholder:text-white/40 focus:outline-none focus:ring-2 focus:ring-coral focus:border-transparent font-body"
                  />
                  <input
                    type="email"
                    name="email"
                    placeholder="E-mailadres"
                    required
                    className="w-full px-5 py-3.5 rounded-xl bg-white/10 border border-white/20 text-white placeholder:text-white/40 focus:outline-none focus:ring-2 focus:ring-coral focus:border-transparent font-body"
                  />
                </div>
                <input
                  type="url"
                  name="website"
                  placeholder="Webshop URL (bijv. jouwshop.nl)"
                  className="w-full px-5 py-3.5 rounded-xl bg-white/10 border border-white/20 text-white placeholder:text-white/40 focus:outline-none focus:ring-2 focus:ring-coral focus:border-transparent font-body"
                />
                <select
                  name="adspend"
                  className="w-full px-5 py-3.5 rounded-xl bg-white/10 border border-white/20 text-white/70 focus:outline-none focus:ring-2 focus:ring-coral focus:border-transparent font-body appearance-none cursor-pointer"
                  style={{ backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 24 24' stroke='rgba(255,255,255,0.5)'%3E%3Cpath stroke-linecap='round' stroke-linejoin='round' stroke-width='2' d='M19 9l-7 7-7-7'%3E%3C/path%3E%3C/svg%3E")`, backgroundRepeat: 'no-repeat', backgroundPosition: 'right 1rem center', backgroundSize: '1.5rem' }}
                >
                  <option value="" className="text-charcoal">Huidige ad spend per maand</option>
                  <option value="0-500" className="text-charcoal">€0 - €500</option>
                  <option value="500-2000" className="text-charcoal">€500 - €2.000</option>
                  <option value="2000-5000" className="text-charcoal">€2.000 - €5.000</option>
                  <option value="5000-10000" className="text-charcoal">€5.000 - €10.000</option>
                  <option value="10000+" className="text-charcoal">€10.000+</option>
                </select>
                <button
                  type="submit"
                  className="w-full bg-coral hover:bg-coral-dark text-white py-4 rounded-xl font-headline font-medium text-lg transition-all shadow-lg shadow-black/10 hover:shadow-xl mt-2"
                >
                  Vraag gratis adviesgesprek aan →
                </button>
              </form>
              
              <div className="flex items-center justify-center gap-6 mt-6 text-white/50 text-sm">
                <span className="flex items-center gap-1.5">
                  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  Reactie binnen 24u
                </span>
                <span className="flex items-center gap-1.5">
                  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  Geen verplichtingen
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
