'use client'

import { useState } from 'react'

export default function WorkPage() {
  const [hoveredTag, setHoveredTag] = useState<string | null>(null)

  return (
    <main style={{ background: 'var(--color-ink)', paddingTop: '120px' }}>

      {/* ── Hero ─────────────────────────────────────────────────── */}
      <section style={{
        padding: '60px clamp(24px, 6vw, 120px) 80px',
        maxWidth: '1200px',
        margin: '0 auto',
        borderBottom: '1px solid rgba(245,241,232,0.15)',
      }}>
        <p style={labelStyle}>Work</p>
        <h1 style={{
          fontFamily: '"DM Serif Display", Georgia, serif',
          fontStyle: 'italic',
          fontSize: 'clamp(36px, 6vw, 72px)',
          lineHeight: 1.05,
          fontWeight: 400,
          maxWidth: '860px',
          marginBottom: '32px',
        }}>
          Built with intention. Powered by AI.
        </h1>
        <p style={{
          fontFamily: '"IBM Plex Mono", monospace',
          fontSize: '15px',
          lineHeight: 1.85,
          opacity: 0.6,
          maxWidth: '560px',
        }}>
          The best way to teach technology is to keep building with it.
          These are projects created outside of the classroom — real products,
          live on the internet, built by me using AI tools.
        </p>
      </section>

      {/* ── Project 01: Pickleball Florida USA ───────────────────── */}
      <section style={{
        maxWidth: '1200px',
        margin: '0 auto',
        borderBottom: '1px solid rgba(245,241,232,0.15)',
      }}>
        <div style={{
          display: 'grid',
          gridTemplateColumns: '1fr 1fr',
          minHeight: '560px',
        }}>

          {/* Left — dark info panel */}
          <div style={{
            padding: '64px clamp(24px, 5vw, 80px)',
            borderRight: '1px solid rgba(245,241,232,0.15)',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'space-between',
            gap: '40px',
          }}>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '32px' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
                <span style={projectNumberStyle}>01</span>
                <div style={{ flex: 1, height: '1px', background: 'rgba(245,241,232,0.15)' }} />
                <span
                  onMouseEnter={() => setHoveredTag('platform')}
                  onMouseLeave={() => setHoveredTag(null)}
                  style={{
                    ...tagStyle,
                    opacity: hoveredTag === 'platform' ? 0.9 : tagStyle.opacity,
                    textShadow: hoveredTag === 'platform' ? '0 0 15px rgba(245,241,232,0.4)' : 'none',
                    transition: 'all 0.25s',
                  }}
                >
                  Digital Platform
                </span>
              </div>

              <h2 style={{
                fontFamily: '"DM Serif Display", Georgia, serif',
                fontStyle: 'italic',
                fontSize: 'clamp(28px, 4vw, 48px)',
                lineHeight: 1.1,
                fontWeight: 400,
                color: '#F5F1E8',
                textShadow: '0 0 40px rgba(245,241,232,0.2)',
              }}>
                Pickleball Florida USA
              </h2>

              <p style={{
                fontFamily: '"IBM Plex Mono", monospace',
                fontSize: '14px',
                lineHeight: 1.85,
                opacity: 0.6,
              }}>
                A fully automated pickleball media, affiliate, and e-commerce
                platform built from scratch using AI tools — with zero prior
                development experience. A live demonstration of what human
                vision plus AI execution can produce.
              </p>

              {/* Stats row */}
              <div style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(3, 1fr)',
                gap: '2px',
                background: 'rgba(245,241,232,0.08)',
              }}>
                {[
                  { number: '29', label: 'Live Pages' },
                  { number: '5', label: 'Revenue Channels' },
                  { number: '3', label: 'API Integrations' },
                ].map((stat, i) => (
                  <div key={i} style={{
                    background: 'var(--color-ink)',
                    padding: '20px 16px',
                    textAlign: 'center',
                  }}>
                    <p style={{
                      fontFamily: '"DM Serif Display", Georgia, serif',
                      fontStyle: 'italic',
                      fontSize: 'clamp(28px, 3vw, 40px)',
                      lineHeight: 1,
                      color: '#F5F1E8',
                      textShadow: '0 0 30px rgba(245,241,232,0.4)',
                      marginBottom: '6px',
                    }}>
                      {stat.number}
                    </p>
                    <p style={{
                      fontFamily: '"IBM Plex Mono", monospace',
                      fontSize: '10px',
                      letterSpacing: '0.12em',
                      textTransform: 'uppercase',
                      opacity: 0.45,
                    }}>
                      {stat.label}
                    </p>
                  </div>
                ))}
              </div>

              {/* Tools */}
              <div>
                <p style={{
                  fontFamily: '"IBM Plex Mono", monospace',
                  fontSize: '10px',
                  letterSpacing: '0.15em',
                  textTransform: 'uppercase',
                  opacity: 0.4,
                  marginBottom: '12px',
                }}>
                  Built With
                </p>
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px' }}>
                  {['Claude AI', 'ChatGPT', 'Midjourney', 'Google Maps API', 'GitHub', 'Cloudflare', 'Ionos', 'Google Analytics', 'Google Search Console', 'Amazon Associates', 'Etsy', 'Brevo'].map(tool => (
                    <span key={tool} style={{
                      fontFamily: '"IBM Plex Mono", monospace',
                      fontSize: '11px',
                      color: '#F5F1E8',
                      opacity: 0.6,
                      border: '1px solid rgba(245,241,232,0.15)',
                      padding: '4px 10px',
                    }}>
                      {tool}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            {/* CTA */}
            <div style={{ display: 'flex', gap: '16px', alignItems: 'center' }}>
              <a
                href="https://pickleballfloridausa.com"
                target="_blank"
                rel="noopener noreferrer"
                style={primaryBtnStyle}
                onMouseEnter={e => { e.currentTarget.style.background = '#FFFFFF' }}
                onMouseLeave={e => { e.currentTarget.style.background = '#F5F1E8' }}
              >
                Visit Live Site →
              </a>
              <a
                href="/pickleball-project-showcase_1.html"
                style={ghostBtnStyle}
                onMouseEnter={e => {
                  e.currentTarget.style.background = 'rgba(245,241,232,0.06)'
                  e.currentTarget.style.borderColor = 'rgba(245,241,232,0.4)'
                }}
                onMouseLeave={e => {
                  e.currentTarget.style.background = 'transparent'
                  e.currentTarget.style.borderColor = 'rgba(245,241,232,0.2)'
                }}
              >
                View Case Study
              </a>
            </div>
          </div>

          {/* Right — visual panel */}
          <div style={{
            background: '#0D1520',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center',
            padding: '64px 48px',
            gap: '32px',
            position: 'relative',
            overflow: 'hidden',
          }}>
            {/* Decorative large text behind */}
            <span style={{
              position: 'absolute',
              bottom: '-20px',
              right: '-10px',
              fontFamily: '"DM Serif Display", Georgia, serif',
              fontSize: 'clamp(80px, 12vw, 160px)',
              fontWeight: 400,
              color: '#FAFAFA',
              opacity: 0.03,
              lineHeight: 1,
              userSelect: 'none',
              pointerEvents: 'none',
              fontStyle: 'italic',
            }}>
              01
            </span>

            <div style={{ textAlign: 'center', position: 'relative', zIndex: 1 }}>
              <p style={{
                fontFamily: '"IBM Plex Mono", monospace',
                fontSize: '11px',
                letterSpacing: '0.2em',
                textTransform: 'uppercase',
                opacity: 0.3,
                marginBottom: '20px',
              }}>
                Live Platform
              </p>
              <p style={{
                fontFamily: '"DM Serif Display", Georgia, serif',
                fontStyle: 'italic',
                fontSize: 'clamp(18px, 2.5vw, 28px)',
                lineHeight: 1.4,
                opacity: 0.75,
                maxWidth: '320px',
              }}>
                &ldquo;You do not need to be a developer to build a real, monetized, professional web platform in 2026.&rdquo;
              </p>
            </div>

            <div style={{
              display: 'grid',
              gridTemplateColumns: '1fr 1fr',
              gap: '12px',
              width: '100%',
              maxWidth: '360px',
              position: 'relative',
              zIndex: 1,
            }}>
              {[
                'Media Platform',
                'Affiliate Revenue',
                'Email Marketing',
                'AI-Generated Content',
                'Court Discovery',
                'Tournament Calendar',
              ].map((item, i) => (
                <div key={i} style={{
                  border: '1px solid rgba(245,241,232,0.1)',
                  padding: '12px 14px',
                  fontFamily: '"IBM Plex Mono", monospace',
                  fontSize: '11px',
                  opacity: 0.55,
                  lineHeight: 1.4,
                }}>
                  {item}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── Project 02: Thrive ───────────────────────────────────── */}
      <section style={{
        maxWidth: '1200px',
        margin: '0 auto',
        borderBottom: '1px solid rgba(245,241,232,0.15)',
      }}>
        <div style={{
          display: 'grid',
          gridTemplateColumns: '1fr 1fr',
          minHeight: '560px',
        }}>

          {/* Left — visual panel (flipped order for variety) */}
          <div style={{
            background: '#111008',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center',
            padding: '64px 48px',
            borderRight: '1px solid rgba(245,241,232,0.15)',
            position: 'relative',
            overflow: 'hidden',
          }}>
            <span style={{
              position: 'absolute',
              bottom: '-20px',
              left: '-10px',
              fontFamily: '"DM Serif Display", Georgia, serif',
              fontSize: 'clamp(80px, 12vw, 160px)',
              fontWeight: 400,
              color: '#FAFAFA',
              opacity: 0.03,
              lineHeight: 1,
              userSelect: 'none',
              pointerEvents: 'none',
              fontStyle: 'italic',
            }}>
              02
            </span>

            {/* Book cover */}
            <div style={{
              position: 'relative',
              zIndex: 1,
              width: 'clamp(160px, 22vw, 220px)',
              boxShadow: '0 32px 80px rgba(0,0,0,0.6), 0 8px 24px rgba(0,0,0,0.4)',
            }}>
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="/images/publications/Thrive_10_Ways_to_Help_Your_Child_Grow_and_Flourish.jpg"
                alt="Thrive: 10 Ways to Help Your Child Grow and Flourish"
                style={{ width: '100%', height: 'auto', display: 'block' }}
              />
            </div>
          </div>

          {/* Right — info panel */}
          <div style={{
            padding: '64px clamp(24px, 5vw, 80px)',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'space-between',
            gap: '40px',
          }}>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '32px' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
                <span style={projectNumberStyle}>02</span>
                <div style={{ flex: 1, height: '1px', background: 'rgba(245,241,232,0.15)' }} />
                <span
                  onMouseEnter={() => setHoveredTag('book')}
                  onMouseLeave={() => setHoveredTag(null)}
                  style={{
                    ...tagStyle,
                    opacity: hoveredTag === 'book' ? 0.9 : tagStyle.opacity,
                    textShadow: hoveredTag === 'book' ? '0 0 15px rgba(245,241,232,0.4)' : 'none',
                    transition: 'all 0.25s',
                  }}
                >
                  Published Book
                </span>
              </div>

              <h2 style={{
                fontFamily: '"DM Serif Display", Georgia, serif',
                fontStyle: 'italic',
                fontSize: 'clamp(28px, 4vw, 48px)',
                lineHeight: 1.1,
                fontWeight: 400,
                color: '#F5F1E8',
                textShadow: '0 0 40px rgba(245,241,232,0.2)',
              }}>
                Thrive: 10 Ways to Help Your Child Grow and Flourish
              </h2>

              <p style={{
                fontFamily: '"IBM Plex Mono", monospace',
                fontSize: '14px',
                lineHeight: 1.85,
                opacity: 0.6,
              }}>
                A published non-fiction book for parents — written, designed,
                and brought to market using AI tools. From manuscript to cover
                art to Amazon listing, every step of the production process
                was AI-assisted.
              </p>

              <p style={{
                fontFamily: '"DM Serif Display", Georgia, serif',
                fontStyle: 'italic',
                fontSize: 'clamp(16px, 1.8vw, 20px)',
                lineHeight: 1.5,
                color: 'rgba(245,241,232,0.65)',
                borderLeft: '2px solid rgba(245,241,232,0.2)',
                paddingLeft: '20px',
              }}>
                The practical, honest guide a trusted teacher friend might hand you over coffee.
              </p>

              {/* Details */}
              <div style={{ display: 'flex', flexDirection: 'column' }}>
                {[
                  { label: 'Category', value: 'Non-Fiction · Parenting & Education' },
                  { label: 'Format', value: 'eBook · Available on Amazon Kindle' },
                  { label: 'AI Tools Used', value: 'Adobe Express · Claude AI · DALL-E · Midjourney' },
                ].map((item, i) => (
                  <div key={i} style={{
                    display: 'flex',
                    gap: '24px',
                    borderTop: '1px solid rgba(245,241,232,0.1)',
                    padding: '14px 0',
                  }}>
                    <span style={{
                      fontFamily: '"IBM Plex Mono", monospace',
                      fontSize: '10px',
                      letterSpacing: '0.12em',
                      textTransform: 'uppercase',
                      color: '#F5F1E8',
                      opacity: 0.4,
                      whiteSpace: 'nowrap',
                      minWidth: '100px',
                      paddingTop: '2px',
                    }}>
                      {item.label}
                    </span>
                    <span style={{
                      fontFamily: '"IBM Plex Mono", monospace',
                      fontSize: '13px',
                      lineHeight: 1.6,
                      opacity: 0.75,
                    }}>
                      {item.value}
                    </span>
                  </div>
                ))}
                <div style={{ borderTop: '1px solid rgba(245,241,232,0.1)' }} />
              </div>
            </div>

            {/* CTA */}
            <div style={{ display: 'flex', gap: '16px', alignItems: 'center' }}>
              <a
                href="https://www.amazon.com/dp/B0H6J2263Y"
                target="_blank"
                rel="noopener noreferrer"
                style={primaryBtnStyle}
                onMouseEnter={e => { e.currentTarget.style.background = '#FFFFFF' }}
                onMouseLeave={e => { e.currentTarget.style.background = '#F5F1E8' }}
              >
                View on Amazon →
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* ── More Coming ──────────────────────────────────────────── */}
      <section style={{
        padding: '80px clamp(24px, 6vw, 120px)',
        maxWidth: '1200px',
        margin: '0 auto',
        borderBottom: '1px solid rgba(245,241,232,0.15)',
        display: 'flex',
        flexDirection: 'column',
        gap: '24px',
      }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '20px' }}>
          <span style={labelStyle}>In Progress</span>
          <div style={{ flex: 1, height: '1px', background: 'rgba(245,241,232,0.15)' }} />
        </div>
        <p style={{
          fontFamily: '"DM Serif Display", Georgia, serif',
          fontStyle: 'italic',
          fontSize: 'clamp(20px, 3vw, 36px)',
          lineHeight: 1.2,
          maxWidth: '700px',
          opacity: 0.7,
        }}>
          More projects are being built. This page grows as the work does.
        </p>
        <p style={{
          fontFamily: '"IBM Plex Mono", monospace',
          fontSize: '13px',
          lineHeight: 1.85,
          opacity: 0.45,
          maxWidth: '500px',
        }}>
          New platforms, AI experiments, and workflow tools are in development.
          Check back or follow along on LinkedIn.
        </p>
      </section>

      {/* ── CTA ──────────────────────────────────────────────────── */}
      <section style={{
        padding: '100px clamp(24px, 6vw, 120px)',
        textAlign: 'center',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        gap: '32px',
      }}>
        <p style={{
          fontFamily: '"DM Serif Display", Georgia, serif',
          fontStyle: 'italic',
          fontSize: 'clamp(28px, 4vw, 52px)',
          lineHeight: 1.1,
          fontWeight: 400,
          maxWidth: '700px',
        }}>
          Want to bring this kind of thinking into your organization?
        </p>
        <a
          href="/consulting"
          style={primaryBtnStyle}
          onMouseEnter={e => { e.currentTarget.style.background = '#FFFFFF' }}
          onMouseLeave={e => { e.currentTarget.style.background = '#F5F1E8' }}
        >
          Let&apos;s Talk →
        </a>
      </section>

    </main>
  )
}

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

const projectNumberStyle: React.CSSProperties = {
  fontFamily: '"IBM Plex Mono", monospace',
  fontSize: '13px',
  letterSpacing: '0.12em',
  color: '#F5F1E8',
  opacity: 0.9,
  textShadow: '0 0 20px rgba(245,241,232,0.6)',
}

const tagStyle: React.CSSProperties = {
  fontFamily: '"IBM Plex Mono", monospace',
  fontSize: '10px',
  letterSpacing: '0.14em',
  textTransform: 'uppercase',
  color: '#F5F1E8',
  opacity: 0.45,
  border: '1px solid rgba(245,241,232,0.15)',
  padding: '4px 10px',
}

const primaryBtnStyle: React.CSSProperties = {
  display: 'inline-flex',
  alignItems: 'center',
  gap: '8px',
  fontFamily: '"IBM Plex Mono", monospace',
  fontSize: '12px',
  letterSpacing: '0.1em',
  textTransform: 'uppercase',
  color: 'var(--color-ink)',
  background: '#F5F1E8',
  textDecoration: 'none',
  padding: '14px 28px',
  transition: 'all 0.2s',
  cursor: 'pointer',
  border: 'none',
}

const ghostBtnStyle: React.CSSProperties = {
  display: 'inline-flex',
  alignItems: 'center',
  gap: '8px',
  fontFamily: '"IBM Plex Mono", monospace',
  fontSize: '12px',
  letterSpacing: '0.1em',
  textTransform: 'uppercase',
  color: '#F5F1E8',
  background: 'transparent',
  textDecoration: 'none',
  padding: '14px 28px',
  transition: 'all 0.2s',
  border: '1px solid rgba(245,241,232,0.2)',
}
