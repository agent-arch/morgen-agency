import Link from 'next/link'

export default function NotFound() {
  return (
    <main className="min-h-screen bg-warm-white flex items-center justify-center px-6">
      <div className="text-center max-w-md">
        <p className="font-mono text-6xl font-bold text-teal mb-4">404</p>
        <h1 className="font-headline text-2xl font-bold text-charcoal mb-4">
          Pagina niet gevonden
        </h1>
        <p className="text-charcoal/60 mb-8">
          Deze pagina bestaat niet of is verplaatst. 
          Geen zorgen — je kunt terug naar de homepage.
        </p>
        <Link 
          href="/"
          className="inline-block px-6 py-3 bg-teal hover:bg-teal/90 text-white font-headline font-medium rounded-xl transition-colors"
        >
          Terug naar home →
        </Link>
      </div>
    </main>
  )
}
