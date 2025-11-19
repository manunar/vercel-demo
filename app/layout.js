import './globals.css'

export const metadata = {
  title: 'Vercel Demo',
  description: 'Déployé automatiquement avec Vercel',
}

export default function RootLayout({ children }) {
  return (
    <html lang="fr">
      <body>{children}</body>
    </html>
  )
}