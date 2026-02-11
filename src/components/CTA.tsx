export default function CTA() {
  return (
    <section id="start" className="py-20 md:py-32 px-6">
      <div className="max-w-content mx-auto">
        <div className="bg-teal rounded-2xl md:rounded-3xl px-8 py-16 md:px-16 md:py-24 text-center">
          <h2 className="font-headline text-3xl md:text-5xl font-bold text-white tracking-tight">
            Klaar om te groeien?
          </h2>
          <p className="mt-4 text-white/70 text-lg max-w-[480px] mx-auto">
            Plan een gratis intake van 30 minuten. Geen verplichtingen, 
            wel direct inzicht in wat er mogelijk is.
          </p>

          <div className="mt-10 max-w-[440px] mx-auto">
            <form
              action="https://formspree.io/f/placeholder"
              method="POST"
              className="flex flex-col gap-4"
            >
              <input
                type="text"
                name="name"
                placeholder="Je naam"
                required
                className="w-full px-5 py-3.5 rounded-lg bg-white/10 border border-white/20 text-white placeholder:text-white/40 focus:outline-none focus:ring-2 focus:ring-coral font-body"
              />
              <input
                type="email"
                name="email"
                placeholder="E-mailadres"
                required
                className="w-full px-5 py-3.5 rounded-lg bg-white/10 border border-white/20 text-white placeholder:text-white/40 focus:outline-none focus:ring-2 focus:ring-coral font-body"
              />
              <input
                type="url"
                name="website"
                placeholder="Webshop URL"
                className="w-full px-5 py-3.5 rounded-lg bg-white/10 border border-white/20 text-white placeholder:text-white/40 focus:outline-none focus:ring-2 focus:ring-coral font-body"
              />
              <button
                type="submit"
                className="w-full bg-coral hover:bg-coral-dark text-white py-4 rounded-lg font-headline font-medium text-lg transition-colors mt-2"
              >
                Plan mijn intake →
              </button>
            </form>
            <p className="text-white/40 text-xs mt-4">
              We nemen binnen 24 uur contact op. Geen spam, beloofd.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
