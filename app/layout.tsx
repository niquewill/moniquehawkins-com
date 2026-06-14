import type { Metadata } from 'next'
import { IBM_Plex_Mono, DM_Serif_Display } from 'next/font/google'
import Navigation from './components/Navigation'
import './globals.css'

const ibmMono = IBM_Plex_Mono({
  weight: ['400', '500'],
  subsets: ['latin'],
  variable: '--font-mono',
  display: 'swap',
})

const dmSerif = DM_Serif_Display({
  weight: ['400'],
  style: ['normal', 'italic'],
  subsets: ['latin'],
  variable: '--font-serif',
  display: 'swap',
})

export const metadata: Metadata = {
  title: 'Monique Hawkins',
  description: 'Technology Instructor. Microsoft 365 & Copilot. Legal Technology.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={`${ibmMono.variable} ${dmSerif.variable}`}>
      <body>
        <Navigation />
        {children}
      </body>
    </html>
  )
}