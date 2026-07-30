import type { Metadata } from 'next'
import InsightsClient from './InsightsClient'

export const metadata: Metadata = {
  title: 'Insights on Legal AI, Copilot & Workflow Intelligence',
  description:
    'Field-tested writing on AI adoption, Microsoft Copilot for legal and business workflows, training, and the future of human-AI work. Workflow intelligence from the field.',
  alternates: { canonical: '/insights' },
  openGraph: {
    title: 'Insights — Workflow Intelligence from the Field',
    description: 'Practical, opinionated writing on legal AI, Copilot, and workflow design.',
    images: [{ url: '/api/og?eyebrow=INSIGHTS&title=Workflow%20Intelligence', width: 1200, height: 630 }],
  },
}

export default function Page() {
  return <InsightsClient />
}
