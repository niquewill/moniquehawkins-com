'use client'

import NewsletterForm from '../components/NewsletterForm'
import Image from 'next/image'
import Link from 'next/link'
import { ARTICLES, articleUrl } from './articles'

import { useState } from 'react'

export default function InsightsPage() {
  const [hoveredHeroTag, setHoveredHeroTag] = useState(false)
  const [selectedCategory, setSelectedCategory] = useState('All')
  const [hoveredCardTag, setHoveredCardTag] = useState<number | null>(null)
  return (
    <main style={{ background: 'var(--color-ink)', paddingTop: '120px' }}>

      {/* ── Hero ─────────────────────────────────────────────────── */}
      <section style={{
        padding: '60px clamp(24px, 6vw, 120px) 80px',
        maxWidth: '1200px',
        margin: '0 auto',
        borderBottom: '1px solid rgba(245,241,232,0.15)',
      }}>
        <p style={labelStyle}>Insights</p>
        <div style={{
          display: 'grid',
          gridTemplateColumns: '1fr 1fr',
          gap: '80px',
          alignItems: 'end',
        }}>
          <h1 style={{
            fontFamily: '"DM Serif Display", Georgia, serif',
            fontStyle: 'italic',
            fontSize: 'clamp(36px, 6vw, 72px)',
            lineHeight: 1.05,
            fontWeight: 400,
          }}>
            Workflow Intelligence from the Field.
          </h1>
          <p style={{
            fontFamily: '"IBM Plex Mono", monospace',
            fontSize: '14px',
            lineHeight: 1.85,
            opacity: 0.55,
            paddingBottom: '8px',
          }}>
            Practical thinking on AI adoption, technology training, workflow
            transformation, and what it actually takes to help humans work
            better with the tools in front of them. Teaching is still the
            missing ingredient. No hype. Just what I&apos;ve seen in the field.
          </p>
        </div>
      </section>

      {/* ── Category Filter ───────────────────────────────────────── */}
      <section style={{
        padding: '32px clamp(24px, 6vw, 120px)',
        maxWidth: '1200px',
        margin: '0 auto',
        borderBottom: '1px solid rgba(245,241,232,0.15)',
        display: 'flex',
        gap: '8px',
        flexWrap: 'wrap',
      }}>
        {categories.map((cat, i) => {
          const isActive = cat === selectedCategory
          return (
          <button
            key={i}
            onClick={() => {
              setSelectedCategory(cat)
              document.getElementById('insights-grid')?.scrollIntoView({ behavior: 'smooth', block: 'start' })
            }}
            style={{
              fontFamily: '"IBM Plex Mono", monospace',
              fontSize: '11px',
              letterSpacing: '0.12em',
              textTransform: 'uppercase',
              color: isActive ? 'var(--color-ink)' : '#F5F1E8',
              background: isActive ? '#F5F1E8' : 'transparent',
              border: '1px solid rgba(245,241,232,0.2)',
              padding: '8px 16px',
              cursor: 'pointer',
              transition: 'all 0.2s',
              opacity: isActive ? 1 : 0.6,
            }}
          >
            {cat}
          </button>
        )})}
      </section>

      {/* ── Featured Article (the newest published article) ─────── */}
      <section style={{
        maxWidth: '1200px',
        margin: '0 auto',
        borderBottom: '1px solid rgba(245,241,232,0.15)',
      }}>
        <Link href={articleUrl(featuredArticle.slug)} style={{ textDecoration: 'none', color: 'inherit', display: 'block' }}>
          <div style={{
            display: 'grid',
            gridTemplateColumns: '1fr 1fr',
            minHeight: '440px',
          }}>

            {/* Visual panel */}
            <div style={{
              position: 'relative',
              minHeight: '280px',
              borderRight: '1px solid rgba(245,241,232,0.15)',
              overflow: 'hidden',
              background: '#111',
            }}>
              <Image
                src={featuredArticle.image}
                alt={featuredArticle.imageAlt}
                fill
                sizes="(max-width: 760px) 100vw, 600px"
                style={{ objectFit: 'cover', objectPosition: '60% center' }}
                priority
              />
              <span style={{
                position: 'absolute',
                top: '24px',
                left: '24px',
                fontFamily: '"IBM Plex Mono", monospace',
                fontSize: '10px',
                letterSpacing: '0.14em',
                textTransform: 'uppercase',
                color: '#F5F1E8',
                background: 'rgba(10,10,10,0.7)',
                border: '1px solid rgba(245,241,232,0.3)',
                padding: '4px 10px',
              }}>
                Featured
              </span>
            </div>

            {/* Content panel */}
            <div style={{
              padding: '48px clamp(24px, 5vw, 64px)',
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'center',
              gap: '24px',
            }}>
              <div style={{ display: 'flex', gap: '16px', alignItems: 'center', flexWrap: 'wrap' }}>
                <span
                  onMouseEnter={() => setHoveredHeroTag(true)}
                  onMouseLeave={() => setHoveredHeroTag(false)}
                  style={{
                    ...tagStyle,
                    opacity: hoveredHeroTag ? 0.9 : tagStyle.opacity,
                    textShadow: hoveredHeroTag ? '0 0 15px rgba(245,241,232,0.4)' : 'none',
                    transition: 'all 0.25s',
                  }}
                >
                  {featuredArticle.category}
                </span>
                <span style={{ fontFamily: '"IBM Plex Mono", monospace', fontSize: '11px', opacity: 0.45 }}>
                  {featuredArticle.date}
                </span>
              </div>

              <h2 style={{
                fontFamily: '"DM Serif Display", Georgia, serif',
                fontStyle: 'italic',
                fontSize: 'clamp(28px, 3.4vw, 44px)',
                lineHeight: 1.1,
                fontWeight: 400,
                color: '#F5F1E8',
              }}>
                {featuredArticle.title}
              </h2>

              <p style={{
                fontFamily: '"IBM Plex Mono", monospace',
                fontSize: '14px',
                lineHeight: 1.85,
                opacity: 0.6,
              }}>
                {featuredArticle.excerpt}
              </p>

              <div style={{ display: 'flex', gap: '24px', alignItems: 'center' }}>
                <span style={{
                  fontFamily: '"IBM Plex Mono", monospace',
                  fontSize: '12px',
                  letterSpacing: '0.1em',
                  textTransform: 'uppercase',
                  color: 'var(--color-ink)',
                  background: '#F5F1E8',
                  padding: '12px 20px',
                }}>
                  Read the article →
                </span>
                <span style={{ fontFamily: '"IBM Plex Mono", monospace', fontSize: '11px', opacity: 0.4 }}>
                  {featuredArticle.readTime}
                </span>
              </div>
            </div>
          </div>
        </Link>
      </section>

      {/* ── Article Grid ─────────────────────────────────────────── */}
      <section id="insights-grid" style={{
        padding: '80px clamp(24px, 6vw, 120px)',
        maxWidth: '1200px',
        margin: '0 auto',
        borderBottom: '1px solid rgba(245,241,232,0.15)',
      }}>
        <div style={{ ...sectionHeaderStyle, marginBottom: '48px' }}>
          <span style={labelStyle}>All Insights</span>
          <div style={ruleStyle} />
        </div>

        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
          gap: '2px',
          background: 'rgba(245,241,232,0.08)',
        }}>
          {(selectedCategory === 'All' ? articles : articles.filter(a => a.category === selectedCategory)).map((article, i) => {
            const Card = (
            <div style={{
              height: '100%',
              background: 'var(--color-ink)',
              padding: '36px 32px',
              display: 'flex',
              flexDirection: 'column',
              gap: '16px',
              position: 'relative',
              overflow: 'hidden',
            }}>
              <span style={{
                position: 'absolute',
                bottom: '-16px',
                right: '16px',
                fontFamily: '"DM Serif Display", Georgia, serif',
                fontSize: '80px',
                color: '#F5F1E8',
                opacity: 0.04,
                lineHeight: 1,
                userSelect: 'none',
                pointerEvents: 'none',
                fontStyle: 'italic',
              }}>
                {String(i + 1).padStart(2, '0')}
              </span>

              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                <span
                  onMouseEnter={() => setHoveredCardTag(i)}
                  onMouseLeave={() => setHoveredCardTag(null)}
                  style={{
                    ...tagStyle,
                    opacity: hoveredCardTag === i ? 0.9 : tagStyle.opacity,
                    textShadow: hoveredCardTag === i ? '0 0 15px rgba(245,241,232,0.4)' : 'none',
                    transition: 'all 0.25s',
                  }}
                >
                  {article.category}
                </span>
                <span style={{
                  fontFamily: '"IBM Plex Mono", monospace',
                  fontSize: '10px',
                  opacity: article.href ? 0.55 : 0.3,
                }}>
                  {article.date ?? 'Coming Soon'}
                </span>
              </div>

              <h3 style={{
                fontFamily: '"DM Serif Display", Georgia, serif',
                fontStyle: 'italic',
                fontSize: 'clamp(18px, 2vw, 24px)',
                lineHeight: 1.25,
                fontWeight: 400,
                color: '#F5F1E8',
                opacity: 0.85,
              }}>
                {article.title}
              </h3>

              <p style={{
                fontFamily: '"IBM Plex Mono", monospace',
                fontSize: '12px',
                lineHeight: 1.8,
                opacity: 0.45,
                flex: 1,
              }}>
                {article.excerpt}
              </p>

              <div style={{
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center',
                borderTop: '1px solid rgba(245,241,232,0.08)',
                paddingTop: '16px',
              }}>
                <span style={{
                  fontFamily: '"IBM Plex Mono", monospace',
                  fontSize: '10px',
                  opacity: 0.3,
                }}>
                  {article.readTime}
                </span>
                <span style={{
                  fontFamily: '"IBM Plex Mono", monospace',
                  fontSize: '10px',
                  opacity: article.href ? 0.85 : 0.25,
                  letterSpacing: '0.1em',
                  textTransform: 'uppercase',
                }}>
                  {article.href ? 'Read →' : 'In Progress'}
                </span>
              </div>
            </div>
            )
            return article.href ? (
              <Link key={i} href={article.href} style={{ textDecoration: 'none', color: 'inherit', display: 'block' }}>
                {Card}
              </Link>
            ) : (
              <div key={i}>{Card}</div>
            )
          })}
        </div>
      </section>

      {/* ── Newsletter CTA ───────────────────────────────────────── */}
      <section id="newsletter" style={{
        padding: '100px clamp(24px, 6vw, 120px)',
        maxWidth: '1200px',
        margin: '0 auto',
        display: 'grid',
        gridTemplateColumns: '1fr 1fr',
        gap: '80px',
        alignItems: 'center',
      }}>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
          <p style={labelStyle}>Stay in the Loop</p>
          <h2 style={{
            fontFamily: '"DM Serif Display", Georgia, serif',
            fontStyle: 'italic',
            fontSize: 'clamp(28px, 4vw, 48px)',
            lineHeight: 1.1,
            fontWeight: 400,
          }}>
            The Workflow — practical insight for professionals navigating AI and technology change.
          </h2>
          <p style={{
            fontFamily: '"IBM Plex Mono", monospace',
            fontSize: '14px',
            lineHeight: 1.85,
            opacity: 0.55,
          }}>
            One insight, one workflow tip, one thing worth reading. Bi-weekly.
            No noise. Written for people who are actually doing the work.
          </p>
        </div>

        <NewsletterForm />
      </section>

    </main>
  )
}

/* ── Data ──────────────────────────────────────────────────────── */

const categories = [
  'All', 'AI Adoption', 'Microsoft Copilot', 'Workflow Intelligence',
  'Technology Training', 'Professional Development', 'Field Notes',
]

const featuredArticle = ARTICLES[0]

type GridArticle = { category: string; title: string; excerpt: string; readTime: string; href?: string; date?: string }

const articles: GridArticle[] = [
  // Published articles come first, straight from articles.ts.
  // The newest one is already in the Featured spot above, so it's skipped here.
  ...ARTICLES.slice(1).map((a) => ({
    category: a.category,
    title: a.title,
    excerpt: a.excerpt,
    readTime: a.readTime,
    href: articleUrl(a.slug),
    date: a.date,
  })),
  {
    category: 'Technology Training',
    title: 'You Paid for the Tool. Now Teach It.',
    excerpt: 'Organizations invest in software and skip the training — so staff stick to their original workflow. Teaching people how to actually use tools efficiently is the real investment.',
    readTime: '6 min read',
  },
  {
    category: 'Workflow Intelligence',
    title: 'Policies Before Platforms: Why Organizations Need a Technology Plan Before They Buy the Tools',
    excerpt: 'Before you adopt any technology, you need a plan — a 5-year growth strategy, clear policies, and training that is aligned from day one. The tool comes last.',
    readTime: '7 min read',
  },
  {
    category: 'Professional Development',
    title: 'What the Classroom Still Has to Teach the Boardroom',
    excerpt: 'The same principles that drive learning in K-12 education apply directly to professional development in the workplace. Teaching is still the missing ingredient in most AI rollouts.',
    readTime: '6 min read',
  },
  {
    category: 'Microsoft Copilot',
    title: 'The 5 Copilot Prompts Every Knowledge Worker Needs to Know',
    excerpt: 'Not generic prompts. Role-specific sequences built around the work your team actually does every day.',
    readTime: '5 min read',
  },
  {
    category: 'Field Notes',
    title: 'What I Learned Building a Full Platform With Nothing But AI Tools',
    excerpt: 'A practical account of building a live, monetized web platform using only AI — what worked, what didn\'t, and what it proved about where technology is headed.',
    readTime: '4 min read',
  },
]

/* ── Shared styles ─────────────────────────────────────────────── */

const labelStyle: React.CSSProperties = {
  fontFamily: '"IBM Plex Mono", monospace',
  fontSize: '13px',
  letterSpacing: '0.2em',
  textTransform: 'uppercase',
  color: '#F5F1E8',
  opacity: 0.75,
  whiteSpace: 'nowrap',
  textShadow: '0 0 20px rgba(245,241,232,0.4)',
}

const tagStyle: React.CSSProperties = {
  fontFamily: '"IBM Plex Mono", monospace',
  fontSize: '10px',
  letterSpacing: '0.14em',
  textTransform: 'uppercase',
  color: '#F5F1E8',
  opacity: 0.5,
  border: '1px solid rgba(245,241,232,0.15)',
  padding: '4px 10px',
}

const sectionHeaderStyle: React.CSSProperties = {
  display: 'flex',
  alignItems: 'center',
  gap: '20px',
}

const ruleStyle: React.CSSProperties = {
  flex: 1,
  height: '1px',
  background: 'rgba(245,241,232,0.15)',
}
