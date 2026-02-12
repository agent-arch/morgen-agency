export const metadata = {
  title: 'Morgen CMS',
  description: 'Content beheer voor heymorgen.agency',
}

export default function StudioLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="nl">
      <body style={{ margin: 0 }}>{children}</body>
    </html>
  )
}
