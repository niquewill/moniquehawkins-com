import type { Metadata } from 'next'
import HomeClient from './HomeClient'

export const metadata: Metadata = {
  title: { absolute: 'Monique Hawkins — AI Workflow Consultant & Legal Tech Strategist' },
  description:
    'Monique Hawkins helps law firms and businesses turn AI tools into workflows that actually get used — training, strategy, and adoption built around how people really work.',
  alternates: { canonical: '/' },
}

export default function Page() {
  return <HomeClient />
}
