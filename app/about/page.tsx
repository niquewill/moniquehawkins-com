import type { Metadata } from 'next'
import AboutClient from './AboutClient'

export const metadata: Metadata = {
  title: 'About Monique Hawkins — Technology Instructor & AI Strategist',
  description:
    'Monique Hawkins is an AI workflow consultant and legal technology strategist who spent her career making sure people are not left behind by technology. Her story and philosophy.',
  alternates: { canonical: '/about' },
  openGraph: {
    title: 'About Monique Hawkins',
    description: 'The educator behind the AI workflow consulting — story, philosophy, and approach.',
    images: [{ url: '/api/og?eyebrow=ABOUT&title=Monique%20Hawkins', width: 1200, height: 630 }],
  },
}

export default function Page() {
  return <AboutClient />
}
