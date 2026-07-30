import type { Metadata } from 'next'
import MethodologyClient from './MethodologyClient'

export const metadata: Metadata = {
  title: 'AI Training Methodology That Actually Sticks',
  description:
    'Most technology training fails for two reasons: it does not meet people where they are, and it stops before real skill is built. Here is the methodology that fixes both.',
  alternates: { canonical: '/methodology' },
  openGraph: {
    title: 'A Training Methodology That Actually Sticks',
    description: 'Why most AI training fails — and the approach that makes adoption real.',
    images: [{ url: '/api/og?eyebrow=METHODOLOGY&title=Training%20That%20Sticks', width: 1200, height: 630 }],
  },
}

export default function Page() {
  return <MethodologyClient />
}
