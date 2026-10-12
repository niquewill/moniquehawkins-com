// Published Insights articles. Add new articles to the top of this list.
// Each one also needs its own folder under app/insights/<slug>/page.tsx.

export type Article = {
  slug: string
  title: string
  excerpt: string
  category: string
  date: string        // shown to readers
  isoDate: string     // used by Google
  readTime: string
  image: string       // header image in /public
  shareImage: string  // 1200x630 image for LinkedIn and link previews
  imageAlt: string
}

export const ARTICLES: Article[] = [
  {
    slug: 'ai-doesnt-fix-unclear-thinking',
    title: "AI Doesn't Fix Unclear Thinking. It Mirrors It.",
    excerpt:
      'Vague request, vague result. Why prompting is really delegating, how to let AI find the gaps in your thinking, and six things to put in every prompt.',
    category: 'Workflow Intelligence',
    date: 'October 11, 2026',
    isoDate: '2026-10-11',
    readTime: '7 min read',
    image: '/insights/ai-mirrors-unclear-thinking.jpg',
    shareImage: '/insights/ai-mirrors-unclear-thinking-share.jpg',
    imageAlt:
      'A professional at a desk covered in crumpled, scribbled sticky notes, looking at a laptop screen that reflects the same mess back',
  },
  {
    slug: 'the-real-reason-ai-rollouts-fail',
    title: "The Real Reason AI Rollouts Fail Isn't the AI",
    excerpt:
      'Companies buy the tool and skip the people. Why AI rollouts stall, what education taught me about technology budgets, and what to do instead.',
    category: 'AI Adoption',
    date: 'October 11, 2026',
    isoDate: '2026-10-11',
    readTime: '9 min read',
    image: '/insights/real-reason-ai-rollouts-fail.jpg',
    shareImage: '/insights/real-reason-ai-rollouts-fail-share.jpg',
    imageAlt:
      'A tired professional at a laptop late at night, while her shadow on the wall is a curious child reaching toward the screen',
  },
]

export const articleUrl = (slug: string) => `/insights/${slug}`
