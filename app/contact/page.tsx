import type { Metadata } from 'next'
import ContactClient from './ContactClient'

export const metadata: Metadata = {
  title: 'Contact Monique Hawkins',
  description:
    'Start a conversation about AI workflow consulting, Microsoft Copilot training, or an AI adoption program for your team. Get in touch with Monique Hawkins.',
  alternates: { canonical: '/contact' },
}

export default function Page() {
  return <ContactClient />
}
