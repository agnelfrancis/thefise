import './globals.css'
import Header from '../components/header'
import Footer from '../components/footer'
import { config } from '@fortawesome/fontawesome-svg-core'
import '@fortawesome/fontawesome-svg-core/styles.css'

config.autoAddCss = false

export const metadata = {
  title: 'The Fise™ - Photography by Agnel Francis Olakkengil',
  description: 'High-quality, minimalistic photography for all life events',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className="bg-white text-green-800 font-sans">
        <Header />
        <main className="min-h-screen">{children}</main>
        <Footer />
      </body>
    </html>
  )
}

