import type { Metadata } from 'next'
import ConsultingClient from './ConsultingClient'

export const metadata: Metadata = {
  title: 'AI Workflow Consulting & Training for Teams and Law Firms',
  description:
    'Your team is already using AI — the question is whether it is working. AI workflow consulting, Microsoft Copilot training, and adoption programs built around real workflows.',
  alternates: { canonical: '/consulting' },
  openGraph: {
    title: 'AI Workflow Consulting & Training',
    description: 'Training and AI adoption programs designed around how your people actually work.',
    images: [{ url: '/api/og?eyebrow=CONSULTING&title=Make%20AI%20Actually%20Work', width: 1200, height: 630 }],
  },
}

const serviceSchema = {
  '@context': 'https://schema.org',
  '@type': 'Service',
  serviceType: 'AI Workflow Consulting and Training',
  provider: { '@type': 'Person', name: 'Monique Hawkins', url: 'https://moniquehawkins.com/about' },
  areaServed: { '@type': 'Country', name: 'United States' },
  description:
    'AI workflow consulting, Microsoft Copilot and Microsoft 365 training, and AI adoption programs for law firms and businesses.',
}

export default function Page() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }}
      />
      <ConsultingClient />
    </>
  )
}
