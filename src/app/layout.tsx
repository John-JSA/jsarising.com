import type { Metadata } from 'next'
import './globals.css'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import WhatsAppButton from '@/components/WhatsAppButton'

export const metadata: Metadata = {
  title: 'JSA Rising Business Network | We Build, Automate & Scale Businesses',
  description: 'JSA Rising Business Network empowers businesses with digital solutions, cloud & DevOps services, business automation, advisory and development services.',
  keywords: 'cloud technology, DevOps, business automation, AWS, web development, mobile apps, business advisory',
  icons: {
    icon: '/favicon.svg',
    shortcut: '/favicon.svg',
  },
  openGraph: {
    title: 'JSA Rising Business Network',
    description: 'Empowering Businesses. Building Futures.',
    url: 'https://www.jsarising.it.com',
    siteName: 'JSA Rising',
    type: 'website',
  },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <Navbar />
        <main>{children}</main>
        <Footer />
        <WhatsAppButton />
      </body>
    </html>
  )
}
