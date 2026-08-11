'use client'

import QuickContactForm from '../components/QuickContactForm'

import { useState, useEffect } from 'react'

export default function ConsultingPage() {
  return (
    <main style={{ background: 'var(--color-ink)', paddingTop: '120px' }}>

      {/* ── Hero ─────────────────────────────────────────────────── */}
      <section style={{
        padding: '60px clamp(24px, 6vw, 120px) 80px',
        maxWidth: '1200px',
        margin: '0 auto',
        borderBottom: '1px solid rgba(245,241,232,0.15)',
      }}>
        <p style={labelStyle}>Consulting</p>
        <h1 style={{
          fontFamily: '"DM Serif Display", Georgia, serif',
          fontStyle: 'italic',
          fontSize: 'clamp(36px, 6vw, 72px)',
          lineHeight: 1.05,
          fontWeight: 400,
          maxWidth: '860px',
          marginBottom: '32px',
        }}>
          Your team is already using AI. The question is whether it&apos;s working.
        </h1>
        <p style={{
          fontFamily: '"IBM Plex Mono", monospace',
          fontSize: '15px',
          lineHeight: 1.85,
          opacity: 0.55,
          maxWidth: '560px',
        }}>
          I work with organizations to understand how their people actually work —
          then build training and AI adoption programs designed around those real
          workflows. More efficiency. Intentional SOPs. Measurable results.
        </p>
      </section>

      {/* ── Services ─────────────────────────────────────────────── */}
      <section style={{
        padding: '80px clamp(24px, 6vw, 120px)',
        maxWidth: '1200px',
        margin: '0 auto',
        borderBottom: '1px solid rgba(245,241,232,0.15)',
      }}>
        <div style={sectionHeaderStyle}>
          <span style={labelStyle}>What I Do</span>
          <div style={ruleStyle} />
        </div>
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
          gap: '2px',
          background: 'var(--color-border)',
        }}>
          {services.map((service, i) => (
            <div key={i} style={{
              background: 'var(--color-ink)',
              padding: '40px 36px',
              display: 'flex',
              flexDirection: 'column',
              gap: '16px',
            }}>
              <span style={{
                fontFamily: '"IBM Plex Mono", monospace',
                fontSize: '11px',
                letterSpacing: '0.1em',
                color: 'var(--color-muted)',
                opacity: 0.6,
              }}>0{i + 1}</span>
              <h2 style={{
                fontFamily: '"IBM Plex Mono", monospace',
                fontSize: '16px',
                fontWeight: 500,
                lineHeight: 1.3,
                color: '#F5F1E8',
              }}>{service.title}</h2>
              <p style={{
                fontFamily: '"IBM Plex Mono", monospace',
                fontSize: '13px',
                lineHeight: 1.85,
                opacity: 0.55,
              }}>{service.description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ── How It Works ─────────────────────────────────────────── */}
      <HowItWorksSection />

      {/* ── Who This Is For ──────────────────────────────────────── */}
      <WhoSection />

      {/* ── SAMR Framework ───────────────────────────────────────── */}
      <SAMRSection />

      {/* ── Discovery Call ───────────────────────────────────────── */}
      <DiscoverySection />

      {/* ── Final CTA ────────────────────────────────────────────── */}
      <section style={{
        padding: '100px clamp(24px, 6vw, 120px)',
        textAlign: 'center',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        gap: '24px',
      }}>
        <p style={{
          fontFamily: '"DM Serif Display", Georgia, serif',
          fontStyle: 'italic',
          fontSize: 'clamp(28px, 4vw, 52px)',
          lineHeight: 1.1,
          fontWeight: 400,
          maxWidth: '700px',
        }}>
          Technology only transforms when the people using it are ready.
        </p>
        <p style={{
          fontFamily: '"IBM Plex Mono", monospace',
          fontSize: '14px',
          lineHeight: 1.8,
          opacity: 0.5,
          maxWidth: '480px',
        }}>
          Not ready to book a call? That&apos;s fine. Send a question.
          No commitment, no sales process — just a straight answer.
        </p>
        <a
          href="#consulting-contact"
          style={{
            fontFamily: '"IBM Plex Mono", monospace',
            fontSize: '12px',
            letterSpacing: '0.12em',
            textTransform: 'uppercase',
            color: 'var(--color-paper)',
            textDecoration: 'none',
            border: '1px solid rgba(255,255,255,0.25)',
            padding: '16px 32px',
            transition: 'all 0.2s',
          }}
          onMouseEnter={e => {
            e.currentTarget.style.background = 'var(--color-paper)'
            e.currentTarget.style.color = 'var(--color-ink)'
          }}
          onMouseLeave={e => {
            e.currentTarget.style.background = 'transparent'
            e.currentTarget.style.color = 'var(--color-paper)'
          }}
        >
          Just ask a question →
        </a>
        <p style={{
          fontFamily: '"IBM Plex Mono", monospace',
          fontSize: '11px',
          opacity: 0.3,
          letterSpacing: '0.05em',
        }}>
          MH@moniquehawkins.com · Response within 48 hours
        </p>
      </section>

      <QuickContactForm />

    </main>
  )
}

/* ── How It Works Stepper ──────────────────────────────────────── */

function HowItWorksSection() {
  const [active, setActive] = useState(0)
  const [animating, setAnimating] = useState(false)

  const goTo = (idx: number) => {
    if (idx === active || animating) return
    setAnimating(true)
    setTimeout(() => { setActive(idx); setAnimating(false) }, 200)
  }

  const step = steps[active]

  return (
    <section style={{
      padding: '80px clamp(24px, 6vw, 120px)',
      maxWidth: '1200px',
      margin: '0 auto',
      borderBottom: '1px solid rgba(245,241,232,0.15)',
    }}>
      <div style={sectionHeaderStyle}>
        <span style={labelStyle}>How It Works</span>
        <div style={ruleStyle} />
      </div>

      {/* Tabs */}
      <div style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(4, 1fr)',
        borderBottom: '1px solid rgba(245,241,232,0.12)',
        marginBottom: '0',
      }}>
        {steps.map((s, i) => (
          <button key={i} onClick={() => goTo(i)} style={{
            background: 'none',
            border: 'none',
            borderBottom: active === i ? '2px solid #F5F1E8' : '2px solid transparent',
            padding: '20px 0',
            textAlign: 'left',
            cursor: 'pointer',
            marginBottom: '-1px',
            transition: 'border-color 0.25s',
          }}>
            <span style={{
              display: 'block',
              fontFamily: '"IBM Plex Mono", monospace',
              fontSize: '10px',
              letterSpacing: '0.15em',
              textTransform: 'uppercase',
              color: '#F5F1E8',
              opacity: active === i ? 0.9 : 0.3,
              marginBottom: '6px',
              transition: 'opacity 0.25s',
            }}>0{i + 1}</span>
            <span style={{
              display: 'block',
              fontFamily: '"IBM Plex Mono", monospace',
              fontSize: '13px',
              fontWeight: 500,
              color: '#F5F1E8',
              opacity: active === i ? 1 : 0.4,
              transition: 'opacity 0.25s',
            }}>{s.title}</span>
          </button>
        ))}
      </div>

      {/* Progress bar */}
      <div style={{ height: '1px', background: 'rgba(245,241,232,0.06)', marginBottom: '56px' }}>
        <div style={{
          height: '1px',
          background: '#F5F1E8',
          width: `${((active + 1) / steps.length) * 100}%`,
          transition: 'width 0.4s cubic-bezier(0.16,1,0.3,1)',
          boxShadow: '0 0 8px rgba(245,241,232,0.4)',
        }} />
      </div>

      {/* Panel */}
      <div style={{
        display: 'grid',
        gridTemplateColumns: '1fr 1fr',
        gap: '80px',
        alignItems: 'start',
        opacity: animating ? 0 : 1,
        transform: animating ? 'translateY(12px)' : 'translateY(0)',
        transition: 'opacity 0.2s ease, transform 0.2s ease',
      }}>
        <div>
          <div style={{
            fontFamily: '"DM Serif Display", Georgia, serif',
            fontSize: 'clamp(72px, 10vw, 120px)',
            fontWeight: 400,
            color: '#F5F1E8',
            opacity: 0.06,
            lineHeight: 1,
            letterSpacing: '-0.04em',
            marginBottom: '-24px',
            userSelect: 'none',
          }}>{String(active + 1).padStart(2, '0')}</div>
          <h3 style={{
            fontFamily: '"DM Serif Display", Georgia, serif',
            fontStyle: 'italic',
            fontSize: 'clamp(28px, 4vw, 48px)',
            fontWeight: 400,
            lineHeight: 1.1,
            color: '#F5F1E8',
            marginBottom: '24px',
          }}>{step.title}</h3>
          <p style={{
            fontFamily: '"IBM Plex Mono", monospace',
            fontSize: '15px',
            lineHeight: 1.85,
            opacity: 0.65,
            marginBottom: '40px',
          }}>{step.description}</p>
          <div style={{ display: 'flex', gap: '12px' }}>
            {active > 0 && (
              <button onClick={() => goTo(active - 1)} style={{
                background: 'none',
                border: '1px solid rgba(245,241,232,0.2)',
                color: '#F5F1E8',
                fontFamily: '"IBM Plex Mono", monospace',
                fontSize: '11px',
                letterSpacing: '0.1em',
                textTransform: 'uppercase',
                padding: '10px 20px',
                cursor: 'pointer',
                opacity: 0.6,
                transition: 'opacity 0.2s',
              }}
                onMouseEnter={e => e.currentTarget.style.opacity = '1'}
                onMouseLeave={e => e.currentTarget.style.opacity = '0.6'}
              >← Back</button>
            )}
            {active < steps.length - 1 ? (
              <button onClick={() => goTo(active + 1)} style={{
                background: '#F5F1E8',
                border: 'none',
                color: '#0A0A0A',
                fontFamily: '"IBM Plex Mono", monospace',
                fontSize: '11px',
                letterSpacing: '0.1em',
                textTransform: 'uppercase',
                padding: '10px 24px',
                cursor: 'pointer',
                transition: 'background 0.2s',
              }}
                onMouseEnter={e => e.currentTarget.style.background = '#FFFFFF'}
                onMouseLeave={e => e.currentTarget.style.background = '#F5F1E8'}
              >Next →</button>
            ) : (
              <a href="https://calendly.com/edupgradellc/30min" target="_blank" rel="noopener noreferrer"
                style={{
                  background: '#F5F1E8',
                  color: '#0A0A0A',
                  fontFamily: '"IBM Plex Mono", monospace',
                  fontSize: '11px',
                  letterSpacing: '0.1em',
                  textTransform: 'uppercase',
                  padding: '10px 24px',
                  textDecoration: 'none',
                  transition: 'background 0.2s',
                }}
                onMouseEnter={e => e.currentTarget.style.background = '#FFFFFF'}
                onMouseLeave={e => e.currentTarget.style.background = '#F5F1E8'}
              >Book a Call →</a>
            )}
          </div>
        </div>
        <div style={{ display: 'flex', flexDirection: 'column' }}>
          {step.details.map((d, i) => (
            <div key={i} style={{ borderTop: '1px solid rgba(245,241,232,0.1)', padding: '20px 0' }}>
              <p style={{
                fontFamily: '"IBM Plex Mono", monospace',
                fontSize: '10px',
                letterSpacing: '0.15em',
                textTransform: 'uppercase',
                color: '#F5F1E8',
                opacity: 0.35,
                marginBottom: '8px',
              }}>{d.label}</p>
              <p style={{
                fontFamily: '"IBM Plex Mono", monospace',
                fontSize: '14px',
                lineHeight: 1.7,
                color: '#F5F1E8',
                opacity: 0.8,
              }}>{d.value}</p>
            </div>
          ))}
          <div style={{ borderTop: '1px solid rgba(245,241,232,0.1)' }} />
        </div>
      </div>
    </section>
  )
}

/* ── Who This Is For ─────────────────────────────────────────── */

function WhoSection() {
  const [selected, setSelected] = useState<number | null>(null)

  return (
    <section style={{
      padding: '80px clamp(24px, 6vw, 120px)',
      maxWidth: '1200px',
      margin: '0 auto',
      borderBottom: '1px solid rgba(245,241,232,0.15)',
    }}>
      <div style={sectionHeaderStyle}>
        <span style={labelStyle}>Who This Is For</span>
        <div style={ruleStyle} />
      </div>

      <p style={{
        fontFamily: '"DM Serif Display", Georgia, serif',
        fontStyle: 'italic',
        fontSize: 'clamp(26px, 4vw, 48px)',
        lineHeight: 1.2,
        color: '#F5F1E8',
        maxWidth: '800px',
        marginBottom: '16px',
        letterSpacing: '-0.01em',
      }}>
        &ldquo;Most technology trainers know the tool.<br />
        I know why people don&apos;t use it.&rdquo;
      </p>
      <p style={{
        fontFamily: '"IBM Plex Mono", monospace',
        fontSize: '15px',
        lineHeight: 1.85,
        opacity: 0.5,
        maxWidth: '560px',
        marginBottom: '64px',
      }}>
        If your organization has rolled out new technology and adoption is
        stalling — or you&apos;re about to and want to get it right the first
        time — this is where I can help.
      </p>

      <div style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
        gap: '2px',
        background: 'rgba(245,241,232,0.06)',
        marginBottom: '56px',
      }}>
        {audiences.map((item, i) => (
          <button key={i} onClick={() => setSelected(selected === i ? null : i)} style={{
            background: selected === i ? 'rgba(245,241,232,0.08)' : 'var(--color-ink)',
            border: 'none',
            padding: '36px 32px',
            textAlign: 'left',
            cursor: 'pointer',
            display: 'flex',
            flexDirection: 'column',
            gap: '12px',
            transition: 'background 0.2s',
          }}
            onMouseEnter={e => { if (selected !== i) e.currentTarget.style.background = 'rgba(245,241,232,0.04)' }}
            onMouseLeave={e => { if (selected !== i) e.currentTarget.style.background = 'var(--color-ink)' }}
          >
            <span style={{
              fontFamily: '"IBM Plex Mono", monospace',
              fontSize: '10px',
              letterSpacing: '0.15em',
              textTransform: 'uppercase',
              color: '#F5F1E8',
              opacity: 0.35,
            }}>0{i + 1}</span>
            <span style={{
              fontFamily: '"DM Serif Display", Georgia, serif',
              fontStyle: 'italic',
              fontSize: 'clamp(18px, 2vw, 22px)',
              lineHeight: 1.3,
              color: '#F5F1E8',
              opacity: selected === i ? 1 : 0.75,
              transition: 'opacity 0.2s',
            }}>{item.headline}</span>
            <span style={{
              fontFamily: '"IBM Plex Mono", monospace',
              fontSize: '13px',
              lineHeight: 1.75,
              color: '#F5F1E8',
              opacity: selected === i ? 0.65 : 0,
              maxHeight: selected === i ? '100px' : '0',
              overflow: 'hidden',
              transition: 'opacity 0.3s ease, max-height 0.3s ease',
            }}>{item.detail}</span>
            <span style={{
              fontFamily: '"IBM Plex Mono", monospace',
              fontSize: '10px',
              letterSpacing: '0.1em',
              color: '#F5F1E8',
              opacity: 0.25,
              marginTop: '4px',
            }}>{selected === i ? '↑ close' : '↓ read more'}</span>
          </button>
        ))}
      </div>
    </section>
  )
}

/* ── SAMR Section ────────────────────────────────────────────── */

function SAMRSection() {
  const [active, setActive] = useState<number | null>(null)

  return (
    <section style={{
      padding: '80px clamp(24px, 6vw, 120px)',
      maxWidth: '1200px',
      margin: '0 auto',
      borderBottom: '1px solid rgba(245,241,232,0.15)',
    }}>
      <div style={sectionHeaderStyle}>
        <span style={labelStyle}>The SAMR Framework</span>
        <div style={ruleStyle} />
      </div>

      <div style={{
        display: 'grid',
        gridTemplateColumns: '1fr 1fr',
        gap: '80px',
        alignItems: 'start',
        marginBottom: '48px',
      }}>
        {/* Left */}
        <div>
          <h2 style={{
            fontFamily: '"DM Serif Display", Georgia, serif',
            fontStyle: 'italic',
            fontSize: 'clamp(24px, 3.5vw, 42px)',
            lineHeight: 1.15,
            fontWeight: 400,
            color: '#F5F1E8',
            marginBottom: '24px',
          }}>
            Before you adopt AI,<br />you need to know<br />where you actually are.
          </h2>
          <p style={{
            fontFamily: '"IBM Plex Mono", monospace',
            fontSize: '14px',
            lineHeight: 1.85,
            opacity: 0.55,
            marginBottom: '16px',
          }}>
            Most businesses react to AI — they buy a tool, hand it to their team,
            and wonder why nothing changes. SAMR gives you a map.
          </p>
          <p style={{
            fontFamily: '"IBM Plex Mono", monospace',
            fontSize: '14px',
            lineHeight: 1.85,
            opacity: 0.55,
            marginBottom: '32px',
          }}>
            It shows where your team is today — and what it actually takes
            to move from just using AI to being transformed by it.
            Tap each level to see what it looks like for a real small business.
          </p>
          <a href="/methodology" style={{
            fontFamily: '"IBM Plex Mono", monospace',
            fontSize: '12px',
            letterSpacing: '0.12em',
            textTransform: 'uppercase',
            color: '#F5F1E8',
            textDecoration: 'none',
            border: '1px solid rgba(245,241,232,0.25)',
            padding: '14px 28px',
            display: 'inline-block',
            transition: 'all 0.2s',
          }}
            onMouseEnter={e => {
              e.currentTarget.style.background = '#F5F1E8'
              e.currentTarget.style.color = '#0A0A0A'
            }}
            onMouseLeave={e => {
              e.currentTarget.style.background = 'transparent'
              e.currentTarget.style.color = '#F5F1E8'
            }}
          >
            Explore the Full Methodology →
          </a>
        </div>

        {/* Right — accordion */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '2px' }}>
          {samrLevels.map((level, i) => (
            <button key={i} onClick={() => setActive(active === i ? null : i)} style={{
              background: active === i ? 'rgba(245,241,232,0.1)' : level.color,
              border: active === i
                ? '1px solid rgba(245,241,232,0.35)'
                : '1px solid rgba(245,241,232,0.08)',
              padding: '0',
              cursor: 'pointer',
              textAlign: 'left',
              transition: 'all 0.25s cubic-bezier(0.16,1,0.3,1)',
            }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '20px', padding: '20px 24px' }}>
                <span style={{
                  fontFamily: '"DM Serif Display", Georgia, serif',
                  fontSize: '36px',
                  fontWeight: 400,
                  color: '#F5F1E8',
                  opacity: level.opacity,
                  minWidth: '28px',
                  lineHeight: 1,
                }}>{level.letter}</span>
                <div style={{ flex: 1 }}>
                  <p style={{
                    fontFamily: '"IBM Plex Mono", monospace',
                    fontSize: '12px',
                    fontWeight: 500,
                    color: '#F5F1E8',
                    opacity: level.opacity,
                    letterSpacing: '0.06em',
                    textTransform: 'uppercase',
                    marginBottom: '4px',
                  }}>{level.word}</p>
                  <p style={{
                    fontFamily: '"IBM Plex Mono", monospace',
                    fontSize: '12px',
                    color: '#F5F1E8',
                    opacity: active === i ? 0.6 : 0.35,
                    lineHeight: 1.5,
                    transition: 'opacity 0.2s',
                  }}>{level.tagline}</p>
                </div>
                <span style={{
                  fontFamily: '"IBM Plex Mono", monospace',
                  fontSize: '18px',
                  color: '#F5F1E8',
                  opacity: 0.3,
                  transition: 'transform 0.25s',
                  transform: active === i ? 'rotate(45deg)' : 'rotate(0deg)',
                  display: 'inline-block',
                }}>+</span>
              </div>

              {/* Expanded */}
              <div style={{
                maxHeight: active === i ? '320px' : '0',
                overflow: 'hidden',
                transition: 'max-height 0.4s cubic-bezier(0.16,1,0.3,1)',
              }}>
                <div style={{
                  borderTop: '1px solid rgba(245,241,232,0.1)',
                  padding: '24px 24px 28px',
                  display: 'flex',
                  flexDirection: 'column',
                  gap: '16px',
                }}>
                  <div>
                    <p style={{
                      fontFamily: '"IBM Plex Mono", monospace',
                      fontSize: '10px',
                      letterSpacing: '0.15em',
                      textTransform: 'uppercase',
                      color: '#F5F1E8',
                      opacity: 0.35,
                      marginBottom: '8px',
                    }}>Real example</p>
                    <p style={{
                      fontFamily: '"DM Serif Display", Georgia, serif',
                      fontStyle: 'italic',
                      fontSize: '15px',
                      lineHeight: 1.65,
                      color: '#F5F1E8',
                      opacity: 0.85,
                    }}>{level.example}</p>
                  </div>
                  <div style={{ borderTop: '1px solid rgba(245,241,232,0.08)', paddingTop: '16px' }}>
                    <p style={{
                      fontFamily: '"IBM Plex Mono", monospace',
                      fontSize: '10px',
                      letterSpacing: '0.15em',
                      textTransform: 'uppercase',
                      color: '#F5F1E8',
                      opacity: 0.35,
                      marginBottom: '8px',
                    }}>What this means</p>
                    <p style={{
                      fontFamily: '"IBM Plex Mono", monospace',
                      fontSize: '13px',
                      lineHeight: 1.75,
                      color: '#F5F1E8',
                      opacity: 0.6,
                    }}>{level.reality}</p>
                  </div>
                </div>
              </div>
            </button>
          ))}
        </div>
      </div>

      {/* Bottom CTA */}
      <div style={{
        border: '1px solid rgba(245,241,232,0.12)',
        padding: '40px 48px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        gap: '40px',
        flexWrap: 'wrap',
        background: 'rgba(245,241,232,0.02)',
      }}>
        <div>
          <p style={{
            fontFamily: '"IBM Plex Mono", monospace',
            fontSize: '11px',
            letterSpacing: '0.15em',
            textTransform: 'uppercase',
            color: '#F5F1E8',
            opacity: 0.4,
            marginBottom: '12px',
          }}>The first question to ask</p>
          <p style={{
            fontFamily: '"DM Serif Display", Georgia, serif',
            fontStyle: 'italic',
            fontSize: 'clamp(20px, 2.5vw, 30px)',
            lineHeight: 1.3,
            color: '#F5F1E8',
            marginBottom: '12px',
          }}>Where are you with your AI adoption?</p>
          <p style={{
            fontFamily: '"IBM Plex Mono", monospace',
            fontSize: '13px',
            lineHeight: 1.75,
            opacity: 0.5,
            maxWidth: '480px',
          }}>
            Most organizations don&apos;t know — and that&apos;s exactly where we start.
            Knowing your SAMR level is the difference between reacting to AI
            and building something intentional with it.
          </p>
        </div>
        <a href="https://calendly.com/edupgradellc/30min" target="_blank" rel="noopener noreferrer"
          style={{
            fontFamily: '"IBM Plex Mono", monospace',
            fontSize: '12px',
            letterSpacing: '0.12em',
            textTransform: 'uppercase',
            color: '#0A0A0A',
            background: '#F5F1E8',
            textDecoration: 'none',
            padding: '16px 32px',
            whiteSpace: 'nowrap',
            flexShrink: 0,
            transition: 'all 0.2s',
          }}
          onMouseEnter={e => { e.currentTarget.style.background = '#FFFFFF' }}
          onMouseLeave={e => { e.currentTarget.style.background = '#F5F1E8' }}
        >
          Find Out Where You Are →
        </a>
      </div>
    </section>
  )
}

/* ── Discovery Call Section ────────────────────────────────────── */

function DiscoverySection() {
  const [activeIndex, setActiveIndex] = useState(0)
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const timer = setInterval(() => {
      setActiveIndex(prev => (prev + 1) % discoveryPoints.length)
    }, 5000)
    return () => clearInterval(timer)
  }, [])

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setVisible(true) },
      { threshold: 0.2 }
    )
    const el = document.getElementById('discovery-section')
    if (el) observer.observe(el)
    return () => observer.disconnect()
  }, [])

  return (
    <section id="discovery-section" style={{
      padding: '0 clamp(24px, 6vw, 120px)',
      maxWidth: '1200px',
      margin: '0 auto',
      borderBottom: '1px solid rgba(245,241,232,0.15)',
      overflow: 'hidden',
    }}>
      <div style={{ ...sectionHeaderStyle, paddingTop: '80px' }}>
        <span style={labelStyle}>Book a Discovery Call</span>
        <div style={ruleStyle} />
      </div>

      <div style={{ borderBottom: '1px solid rgba(245,241,232,0.1)', paddingBottom: '64px' }}>
        <h2 style={{
          fontFamily: '"DM Serif Display", Georgia, serif',
          fontStyle: 'italic',
          fontSize: 'clamp(48px, 9vw, 112px)',
          lineHeight: 0.95,
          fontWeight: 400,
          color: '#F5F1E8',
          letterSpacing: '-0.02em',
          opacity: visible ? 1 : 0,
          transform: visible ? 'translateY(0)' : 'translateY(32px)',
          transition: 'opacity 0.7s cubic-bezier(0.16,1,0.3,1), transform 0.7s cubic-bezier(0.16,1,0.3,1)',
        }}>
          30 minutes.<br />No pitch.<br />
          <span style={{ opacity: 0.3 }}>Just clarity.</span>
        </h2>
      </div>

      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '0', minHeight: '440px' }}>
        {/* Left */}
        <div style={{
          borderRight: '1px solid rgba(245,241,232,0.1)',
          padding: '56px 64px 56px 0',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'space-between',
        }}>
          <div>
            <div style={{ minHeight: '160px', position: 'relative', marginBottom: '40px' }}>
              {discoveryPoints.map((point, i) => (
                <div key={i} style={{
                  position: 'absolute', top: 0, left: 0,
                  opacity: activeIndex === i ? 1 : 0,
                  transform: activeIndex === i ? 'translateY(0)' : 'translateY(12px)',
                  transition: 'opacity 0.6s ease, transform 0.6s cubic-bezier(0.16,1,0.3,1)',
                  pointerEvents: activeIndex === i ? 'auto' : 'none',
                }}>
                  <p style={{
                    fontFamily: '"IBM Plex Mono", monospace',
                    fontSize: '11px',
                    letterSpacing: '0.18em',
                    textTransform: 'uppercase',
                    color: '#F5F1E8',
                    opacity: 0.35,
                    marginBottom: '20px',
                  }}>{String(i + 1).padStart(2, '0')} / {String(discoveryPoints.length).padStart(2, '0')}</p>
                  <p style={{
                    fontFamily: '"DM Serif Display", Georgia, serif',
                    fontStyle: 'italic',
                    fontSize: 'clamp(20px, 2.5vw, 30px)',
                    lineHeight: 1.4,
                    color: '#F5F1E8',
                    opacity: 0.9,
                  }}>{point.statement}</p>
                </div>
              ))}
            </div>
            <div style={{ display: 'flex', gap: '8px', marginBottom: '48px' }}>
              {discoveryPoints.map((_, i) => (
                <button key={i} onClick={() => setActiveIndex(i)} style={{
                  width: activeIndex === i ? '28px' : '6px',
                  height: '6px',
                  borderRadius: '3px',
                  background: activeIndex === i ? '#F5F1E8' : 'rgba(245,241,232,0.2)',
                  border: 'none',
                  cursor: 'pointer',
                  padding: 0,
                  transition: 'all 0.35s cubic-bezier(0.16,1,0.3,1)',
                }} />
              ))}
            </div>
          </div>
          <div>
            <p style={{
              fontFamily: '"IBM Plex Mono", monospace',
              fontSize: '11px',
              letterSpacing: '0.15em',
              textTransform: 'uppercase',
              color: '#F5F1E8',
              opacity: 0.35,
              marginBottom: '20px',
            }}>What we cover</p>
            {callTopics.map((topic, i) => (
              <div key={i} style={{
                borderTop: '1px solid rgba(245,241,232,0.08)',
                padding: '12px 0',
                display: 'flex',
                alignItems: 'center',
                gap: '12px',
              }}>
                <span style={{ width: '4px', height: '4px', borderRadius: '50%', background: 'rgba(245,241,232,0.25)', flexShrink: 0 }} />
                <p style={{ fontFamily: '"IBM Plex Mono", monospace', fontSize: '13px', lineHeight: 1.6, color: '#F5F1E8', opacity: 0.55, margin: 0 }}>{topic}</p>
              </div>
            ))}
            <div style={{ borderTop: '1px solid rgba(245,241,232,0.08)' }} />
          </div>
        </div>

        {/* Right */}
        <div style={{ padding: '56px 0 56px 64px', display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
          <div style={{ display: 'flex', flexDirection: 'column', marginBottom: '40px' }}>
            {callDetails.map((item, i) => (
              <div key={i} style={{
                display: 'flex', gap: '24px', alignItems: 'flex-start',
                borderTop: '1px solid rgba(245,241,232,0.08)', padding: '16px 0',
              }}>
                <span style={{
                  fontFamily: '"IBM Plex Mono", monospace', fontSize: '10px',
                  letterSpacing: '0.12em', textTransform: 'uppercase',
                  color: '#F5F1E8', opacity: 0.3, whiteSpace: 'nowrap',
                  paddingTop: '3px', minWidth: '80px',
                }}>{item.label}</span>
                <span style={{ fontFamily: '"IBM Plex Mono", monospace', fontSize: '15px', lineHeight: 1.65, color: '#F5F1E8', opacity: 0.8 }}>{item.value}</span>
              </div>
            ))}
            <div style={{ borderTop: '1px solid rgba(245,241,232,0.08)' }} />
          </div>

          <div style={{
            border: '1px solid rgba(245,241,232,0.2)', padding: '40px 36px',
            display: 'flex', flexDirection: 'column', gap: '24px',
            position: 'relative', overflow: 'hidden',
          }}>
            <span style={{
              position: 'absolute', bottom: '-20px', right: '-10px',
              fontFamily: '"DM Serif Display", Georgia, serif',
              fontSize: '120px', color: '#F5F1E8', opacity: 0.03,
              lineHeight: 1, userSelect: 'none', pointerEvents: 'none',
              letterSpacing: '-0.04em',
            }}>30</span>
            <p style={{ fontFamily: '"IBM Plex Mono", monospace', fontSize: '11px', letterSpacing: '0.18em', textTransform: 'uppercase', color: '#F5F1E8', opacity: 0.45 }}>No commitment required</p>
            <p style={{ fontFamily: '"DM Serif Display", Georgia, serif', fontStyle: 'italic', fontSize: 'clamp(18px, 2vw, 24px)', lineHeight: 1.4, color: '#F5F1E8', opacity: 0.9 }}>
              Let&apos;s find out what your team actually needs — before we talk about what I offer.
            </p>
            <a href="https://calendly.com/edupgradellc/30min" target="_blank" rel="noopener noreferrer"
              style={{
                display: 'inline-flex', alignItems: 'center', justifyContent: 'center',
                fontFamily: '"IBM Plex Mono", monospace', fontSize: '13px',
                letterSpacing: '0.1em', textTransform: 'uppercase',
                color: '#0A0A0A', background: '#F5F1E8', textDecoration: 'none',
                padding: '18px 28px', transition: 'all 0.2s',
              }}
              onMouseEnter={e => { e.currentTarget.style.background = '#FFFFFF' }}
              onMouseLeave={e => { e.currentTarget.style.background = '#F5F1E8' }}
            >Book a Discovery Call →</a>
            <p style={{ fontFamily: '"IBM Plex Mono", monospace', fontSize: '11px', color: '#F5F1E8', opacity: 0.3, lineHeight: 1.7 }}>
              30 min · Teams or Zoom · Follow-up within 48 hrs
            </p>
          </div>
        </div>
      </div>
      <div style={{ paddingBottom: '80px' }} />
    </section>
  )
}

/* ── Data ──────────────────────────────────────────────────────── */

const services = [
  { title: 'AI Adoption & Workflow Consulting', description: 'I assess how your team currently works and identify where AI can be integrated into real workflows — not bolted on top of them. From Microsoft Copilot to automation tools, we build systems that actually get used.' },
  { title: 'Technology Training Programs', description: 'Custom training built for your actual staff and your actual tools. Grounded in Adult Learning Theory and designed to move people from resistant to confident — not just in a single session, but long-term.' },
  { title: 'Microsoft 365 & Copilot Enablement', description: 'Deep-dive training on Word, Outlook, Teams, SharePoint, and Copilot for Microsoft 365 — focused on the workflows that matter most to your organization. Role-specific. Immediately applicable.' },
  { title: 'SOP Design & Documentation', description: 'Intentional standard operating procedures built around how your team actually works — not copy-paste templates. Clear, usable, and designed to scale as your organization grows.' },
  { title: 'Workflow Audit & Training Roadmap', description: 'A structured assessment of your current technology usage, adoption gaps, and training needs — delivered as a clear roadmap with prioritized recommendations you can act on immediately.' },
  { title: 'Workshop Facilitation', description: 'Hands-on, in-person or virtual workshops for teams on AI tools, Microsoft 365, and workflow transformation. Designed to move people from skeptical to capable — fast.' },
]

const steps = [
  { title: 'Discovery Call', description: 'We start with a 30-minute conversation about how your team works, what tools you have, and where the friction is. No assumptions. Just listening.', details: [{ label: 'Format', value: '30-min video call — Teams or Zoom' }, { label: 'What to bring', value: 'Your current pain points. Nothing formal required.' }, { label: 'Outcome', value: 'A clear picture of where AI and training can help most.' }] },
  { title: 'Workflow Assessment', description: 'I map your current workflows, identify adoption gaps, and assess where AI and technology training will have the highest impact for your specific team roles.', details: [{ label: 'Timeline', value: '1–2 weeks' }, { label: 'Deliverable', value: 'Workflow audit document and priority matrix' }, { label: 'Outcome', value: 'A ranked list of highest-ROI training opportunities' }] },
  { title: 'Custom Training Design', description: 'I build a training program designed around your actual tools, workflows, and staff — not a generic curriculum repurposed from somewhere else.', details: [{ label: 'Format', value: 'Live workshops, on-demand materials, or hybrid' }, { label: 'Deliverable', value: 'Training plan, custom materials, session guides' }, { label: 'Outcome', value: 'Staff ready to use tools from day one — and beyond' }] },
  { title: 'Delivery & Support', description: 'Training delivered live — in-person or virtual — with follow-up resources, documentation, and ongoing support to make adoption stick beyond the session.', details: [{ label: 'Format', value: 'In-person or virtual delivery' }, { label: 'Follow-up', value: 'Resources, recordings, and a 30-day check-in' }, { label: 'Outcome', value: 'Sustained adoption — not just a one-day training event' }] },
]

const audiences = [
  { headline: 'Business owners who want their teams working smarter — not just harder', detail: 'You\'re paying for tools your team barely uses. Let\'s fix the adoption, not the tool.' },
  { headline: 'Operations leaders rolling out new software and tired of low adoption', detail: 'The rollout happened. The behavior didn\'t change. That\'s a training and workflow problem, not a technology problem.' },
  { headline: 'Organizations ready to rebuild their workflows with AI embedded — not bolted on', detail: 'You don\'t want to automate chaos. You want intentional systems that scale.' },
  { headline: 'Teams paying for AI tools that nobody is actually using', detail: 'Copilot, ChatGPT, or any AI tool is only as good as the workflow it lives inside.' },
  { headline: 'Leaders who want staff confident with technology — not afraid of it', detail: 'Fear of AI is a training problem. Confident adoption is the goal.' },
  { headline: 'Companies building SOPs that need to scale as they grow', detail: 'Intentional documentation and process design is the foundation everything else runs on.' },
]

const samrLevels = [
  { letter: 'S', word: 'Substitution', tagline: 'You replaced the tool. Nothing else changed.', example: 'Instead of Googling "how to write a follow-up email," you ask ChatGPT. Same task. Same time. Just a different search box.', reality: 'This is where most small businesses start — and where many stay. It feels like AI adoption, but the workflow hasn\'t changed at all.', color: 'rgba(245,241,232,0.03)', opacity: 0.5 },
  { letter: 'A', word: 'Augmentation', tagline: 'The tool does the same job — but noticeably better.', example: 'You ask ChatGPT to write that follow-up email, give it context about the client, and it comes back ready to send. You saved 20 minutes.', reality: 'This is where time savings start showing up. The task is the same — but AI is doing the heavy lifting, not just answering a question.', color: 'rgba(245,241,232,0.05)', opacity: 0.65 },
  { letter: 'M', word: 'Modification', tagline: 'The task looks different because AI is involved.', example: 'Instead of writing one follow-up email, you build a 5-step sequence tailored to three different client types — something you never had time to do before.', reality: 'This is where workflows start to transform. You\'re not just faster — you\'re doing things differently. SOPs get rebuilt here.', color: 'rgba(245,241,232,0.07)', opacity: 0.82 },
  { letter: 'R', word: 'Redefinition', tagline: 'You\'re doing things that weren\'t possible before.', example: 'Your AI system analyzes every client interaction, flags at-risk relationships, drafts personalized outreach, and updates your CRM — while you focus on the work only you can do.', reality: 'This is the goal. Not replacing humans — redefining what humans spend their time on. This level requires intentional workflow design to reach.', color: 'rgba(245,241,232,0.09)', opacity: 1 },
]

const discoveryPoints = [
  { statement: 'You tell me how your team works. I listen without assumptions.' },
  { statement: 'No sales pitch. No upsell. Just an honest look at where the friction is.' },
  { statement: 'I\'ll tell you exactly where AI and training can move the needle — and where it can\'t.' },
  { statement: 'You leave with clarity. Whether we work together or not.' },
]

const callTopics = [
  'Current workflows and where they break down',
  'Technology tools your team is — and isn\'t — using',
  'AI adoption readiness across your organization',
  'Staff training gaps and onboarding friction',
  'SOP gaps and documentation needs',
  'Where efficiency gains are most achievable',
]

const callDetails = [
  { label: 'Duration', value: '30 minutes' },
  { label: 'Format', value: 'Virtual — Microsoft Teams or Zoom' },
  { label: 'Cost', value: 'No charge. No obligation.' },
  { label: 'Next steps', value: 'Honest recommendations within 48 hours' },
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
}

const sectionHeaderStyle: React.CSSProperties = {
  display: 'flex',
  alignItems: 'center',
  gap: '20px',
  marginBottom: '56px',
}

const ruleStyle: React.CSSProperties = {
  flex: 1,
  height: '1px',
  background: 'rgba(245,241,232,0.2)',
}
