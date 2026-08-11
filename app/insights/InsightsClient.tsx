'use client'

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

      {/* ── Featured Article ──────────────────────────────────────── */}
      <section style={{
        maxWidth: '1200px',
        margin: '0 auto',
        borderBottom: '1px solid rgba(245,241,232,0.15)',
      }}>
        <div style={{
          display: 'grid',
          gridTemplateColumns: '1fr 1fr',
          minHeight: '480px',
        }}>

          {/* Visual panel */}
          <div style={{
            background: '#0D1520',
            borderRight: '1px solid rgba(245,241,232,0.15)',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'flex-end',
            padding: '48px',
            position: 'relative',
            overflow: 'hidden',
          }}>
            <span style={{
              position: 'absolute',
              top: '-20px',
              right: '-10px',
              fontFamily: '"DM Serif Display", Georgia, serif',
              fontSize: 'clamp(120px, 18vw, 220px)',
              fontWeight: 400,
              color: '#FAFAFA',
              opacity: 0.03,
              lineHeight: 1,
              userSelect: 'none',
              pointerEvents: 'none',
              fontStyle: 'italic',
            }}>
              AI
            </span>
            <div style={{ position: 'relative', zIndex: 1 }}>
              <span style={{
                display: 'inline-block',
                fontFamily: '"IBM Plex Mono", monospace',
                fontSize: '10px',
                letterSpacing: '0.14em',
                textTransform: 'uppercase',
                color: '#F5F1E8',
                opacity: 0.5,
                border: '1px solid rgba(245,241,232,0.2)',
                padding: '4px 10px',
                marginBottom: '20px',
              }}>
                Featured
              </span>
              <p style={{
                fontFamily: '"DM Serif Display", Georgia, serif',
                fontStyle: 'italic',
                fontSize: 'clamp(22px, 3vw, 36px)',
                lineHeight: 1.25,
                color: '#F5F1E8',
                textShadow: '0 0 40px rgba(245,241,232,0.2)',
                maxWidth: '400px',
              }}>
                Why Most Organizations Will Get Copilot Wrong — And How to Not Be One of Them
              </p>
            </div>
          </div>

          {/* Content panel */}
          <div style={{
            padding: '48px clamp(24px, 5vw, 64px)',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'space-between',
            gap: '32px',
          }}>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
              <div style={{ display: 'flex', gap: '16px', alignItems: 'center' }}>
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
                  AI Adoption
                </span>
                <span style={{
                  fontFamily: '"IBM Plex Mono", monospace',
                  fontSize: '11px',
                  opacity: 0.35,
                }}>
                  Coming Soon
                </span>
              </div>

              <h2 style={{
                fontFamily: '"DM Serif Display", Georgia, serif',
                fontStyle: 'italic',
                fontSize: 'clamp(24px, 3vw, 40px)',
                lineHeight: 1.15,
                fontWeight: 400,
                color: '#F5F1E8',
              }}>
                Why Most Organizations Will Get Copilot Wrong — And How to Not Be One of Them
              </h2>

              <p style={{
                fontFamily: '"IBM Plex Mono", monospace',
                fontSize: '14px',
                lineHeight: 1.85,
                opacity: 0.55,
              }}>
                The technology is ready. The training isn&apos;t. Here&apos;s what I keep
                seeing in the field — and the decisions that separate successful
                Copilot rollouts from expensive mistakes.
              </p>

              <div style={{ display: 'flex', gap: '24px', alignItems: 'center' }}>
                <span style={{
                  fontFamily: '"IBM Plex Mono", monospace',
                  fontSize: '11px',
                  opacity: 0.4,
                }}>
                  8 min read
                </span>
                <div style={{ flex: 1, height: '1px', background: 'rgba(245,241,232,0.1)' }} />
              </div>
            </div>

            <div style={{
              border: '1px solid rgba(245,241,232,0.15)',
              padding: '20px 24px',
              display: 'flex',
              alignItems: 'center',
              gap: '16px',
            }}>
              <p style={{
                fontFamily: '"IBM Plex Mono", monospace',
                fontSize: '12px',
                lineHeight: 1.7,
                opacity: 0.5,
                flex: 1,
              }}>
                This article is in progress. Subscribe to be notified when it publishes.
              </p>
              <a
                href="#newsletter"
                style={{
                  fontFamily: '"IBM Plex Mono", monospace',
                  fontSize: '11px',
                  letterSpacing: '0.1em',
                  textTransform: 'uppercase',
                  color: 'var(--color-ink)',
                  background: '#F5F1E8',
                  textDecoration: 'none',
                  padding: '10px 20px',
                  whiteSpace: 'nowrap',
                  transition: 'all 0.2s',
                }}
                onMouseEnter={e => { e.currentTarget.style.background = '#FFFFFF' }}
                onMouseLeave={e => { e.currentTarget.style.background = '#F5F1E8' }}
              >
                Notify Me →
              </a>
            </div>
          </div>
        </div>
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
          {(selectedCategory === 'All' ? articles : articles.filter(a => a.category === selectedCategory)).map((article, i) => (
            <div key={i} style={{
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
                  opacity: 0.3,
                }}>
                  Coming Soon
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
                  opacity: 0.25,
                  letterSpacing: '0.1em',
                  textTransform: 'uppercase',
                }}>
                  In Progress
                </span>
              </div>
            </div>
          ))}
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

        <div style={{
          border: '1px solid rgba(245,241,232,0.2)',
          padding: '40px',
          display: 'flex',
          flexDirection: 'column',
          gap: '20px',
        }}>
          <p style={{
            fontFamily: '"IBM Plex Mono", monospace',
            fontSize: '12px',
            letterSpacing: '0.15em',
            textTransform: 'uppercase',
            color: '#F5F1E8',
            opacity: 0.6,
          }}>
            Get Notified When Insights Launches
          </p>
          <a
           target="_blank" rel="noopener noreferrer" href="https://c8fbe7fc.sibforms.com/serve/MUIFAD42C4KLhaPMhHPhsasVpEtNCYCse8IcBfzMS6_mP-DsZOgaTeKhYHk_LSpAwig2O3T4aqp_QKIP2ul6l8XmQu4HfMvp3-Yq1FBPWWDzK86gejAtCixOFd4mj_-u6h3ZvFPtzR_cJUGHWhQJeR62iLbrcJWE19qsfR8RN87eS7ya5gWVO364Y83hGkXgxz_SogSWnHuyr1d_LA=="
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              justifyContent: 'center',
              gap: '8px',
              fontFamily: '"IBM Plex Mono", monospace',
              fontSize: '12px',
              letterSpacing: '0.1em',
              textTransform: 'uppercase',
              color: 'var(--color-ink)',
              background: '#F5F1E8',
              textDecoration: 'none',
              padding: '16px 28px',
              transition: 'all 0.2s',
            }}
            onMouseEnter={e => { e.currentTarget.style.background = '#FFFFFF' }}
            onMouseLeave={e => { e.currentTarget.style.background = '#F5F1E8' }}
          >
            Subscribe to The Workflow →
          </a>
          <p style={{
            fontFamily: '"IBM Plex Mono", monospace',
            fontSize: '11px',
            opacity: 0.3,
            textAlign: 'center',
          }}>
            No spam. Unsubscribe anytime.
          </p>
        </div>
      </section>

    </main>
  )
}

/* ── Data ──────────────────────────────────────────────────────── */

const categories = [
  'All', 'AI Adoption', 'Microsoft Copilot', 'Workflow Intelligence',
  'Technology Training', 'Professional Development', 'Field Notes',
]

const articles = [
  {
    category: 'AI Adoption',
    title: 'Why Most Organizations Will Get Copilot Wrong — And How to Not Be One of Them',
    excerpt: 'The technology is ready. The training isn\'t. Here\'s what separates successful deployments from expensive mistakes.',
    readTime: '8 min read',
  },
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
