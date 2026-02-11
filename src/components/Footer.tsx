export default function Footer() {
  return (
    <footer className="py-12 px-6 border-t border-charcoal/5">
      <div className="max-w-content mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
        {/* Logo */}
        <a href="#" className="flex items-center gap-0.5">
          <span className="font-headline text-lg font-bold tracking-tight text-charcoal/40">
            morgen
          </span>
          <span className="text-coral/40 text-xl leading-none -mt-0.5">.</span>
        </a>

        {/* Links */}
        <div className="flex items-center gap-8 text-sm text-charcoal/40">
          <a href="mailto:hallo@morgen.agency" className="hover:text-charcoal transition-colors">
            hallo@morgen.agency
          </a>
          <span>KVK 00000000</span>
        </div>

        {/* Copyright */}
        <p className="text-xs text-charcoal/30">
          © {new Date().getFullYear()} morgen.agency
        </p>
      </div>
    </footer>
  );
}
