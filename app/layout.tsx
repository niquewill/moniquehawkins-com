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
  metadataBase: new URL('https://moniquehawkins.com'),
  title: {
    default: 'Monique Hawkins — AI Workflow Consultant & Legal Tech Strategist',
    template: '%s | Monique Hawkins',
  },
  description:
    'Monique Hawkins helps law firms and businesses turn AI tools into workflows that actually get used — through training, strategy, and adoption programs built around how people really work. New Orleans & nationwide.',
  keywords: [
    'AI workflow consultant',
    'legal AI consultant',
    'AI training for businesses',
    'Microsoft Copilot consultant',
    'Microsoft 365 Copilot training',
    'legal technology strategist',
    'AI adoption consultant',
    'AI consultant New Orleans',
    'technology instructor',
    'enterprise AI enablement',
  ],
  authors: [{ name: 'Monique Hawkins', url: 'https://moniquehawkins.com/about' }],
  creator: 'Monique Hawkins',
  alternates: { canonical: '/' },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://moniquehawkins.com',
    siteName: 'Monique Hawkins',
    title: 'Monique Hawkins — AI Workflow Consultant & Legal Tech Strategist',
    description:
      'Turning AI tools into workflows that actually get used. Consulting, training, and adoption programs for law firms and businesses.',
    images: [{ url: '/api/og?title=Monique%20Hawkins', width: 1200, height: 630, alt: 'Monique Hawkins' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Monique Hawkins — AI Workflow Consultant',
    description: 'Turning AI tools into workflows that actually get used.',
    images: ['/api/og?title=Monique%20Hawkins'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true, 'max-image-preview': 'large', 'max-snippet': -1 },
  },
  // Google Search Console token is read from the Vercel environment variable
  // NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION. If it isn't set, no tag is output.
  ...(process.env.NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION
    ? { verification: { google: process.env.NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION } }
    : {}),
}

const businessSchema = {
  '@context': 'https://schema.org',
  '@type': 'ProfessionalService',
  '@id': 'https://moniquehawkins.com/#business',
  name: 'Monique Hawkins',
  description:
    'AI workflow consulting, Microsoft Copilot training, and legal technology strategy for law firms and businesses.',
  url: 'https://moniquehawkins.com',
  areaServed: [
    { '@type': 'City', name: 'New Orleans' },
    { '@type': 'State', name: 'Louisiana' },
    { '@type': 'Country', name: 'United States' },
  ],
  knowsAbout: [
    'Artificial Intelligence',
    'Microsoft Copilot',
    'Microsoft 365',
    'Legal Technology',
    'AI Workflow Design',
    'AI Training and Enablement',
    'Enterprise AI Adoption',
  ],
  founder: {
    '@type': 'Person',
    '@id': 'https://moniquehawkins.com/#monique',
    name: 'Monique Hawkins',
    jobTitle: 'AI Workflow Consultant & Legal Technology Strategist',
    url: 'https://moniquehawkins.com/about',
    sameAs: [
      // Fill these in — they are how AI engines confirm this is the same Monique Hawkins:
      // 'https://www.linkedin.com/in/YOUR_PROFILE',
      // 'https://x.com/YOUR_HANDLE',
    ],
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={`${ibmMono.variable} ${dmSerif.variable}`}>
      <body suppressHydrationWarning={true}>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(businessSchema) }}
        />
        <Navigation />
        {children}
      </body>
    </html>
  )
}
