import type { Metadata } from 'next'
import WorkClient from './WorkClient'

export const metadata: Metadata = {
  title: 'Work — AI-Built Projects & Case Studies',
  description:
    'Real products built with AI tools, live on the internet. The best way to teach technology is to keep building with it — these are the projects that prove it.',
  alternates: { canonical: '/work' },
  openGraph: {
    title: 'Work — Built with Intention, Powered by AI',
    description: 'Real, live products built by Monique Hawkins using AI tools.',
    images: [{ url: '/api/og?eyebrow=SELECTED%20WORK&title=Built%20with%20AI', width: 1200, height: 630 }],
  },
}

export default function Page() {
  return <WorkClient />
}
