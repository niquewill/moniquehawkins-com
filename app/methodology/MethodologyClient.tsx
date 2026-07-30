'use client'

import { useState } from 'react'

export default function MethodologyPage() {
  return (
    <main style={{ background: 'var(--color-ink)', paddingTop: '120px' }}>

      {/* ── Hero ─────────────────────────────────────────────────── */}
      <section style={{
        padding: '60px clamp(24px, 6vw, 120px) 80px',
        maxWidth: '1200px',
        margin: '0 auto',
        borderBottom: '1px solid rgba(245,241,232,0.15)',
      }}>
        <p style={labelStyle}>Methodology</p>
        <h1 style={{
          fontFamily: '"DM Serif Display", Georgia, serif',
          fontStyle: 'italic',
          fontSize: 'clamp(36px, 6vw, 80px)',
          lineHeight: 1.0,
          fontWeight: 400,
          maxWidth: '900px',
          marginBottom: '32px',
          letterSpacing: '-0.02em',
        }}>
          Your team went through the training.<br />
          So why isn&apos;t anything different?
        </h1>
        <p style={{
          fontFamily: '"IBM Plex Mono", monospace',
          fontSize: '15px',
          lineHeight: 1.85,
          opacity: 0.55,
          maxWidth: '580px',
        }}>
          Most technology training fails for the same two reasons: it doesn&apos;t
          meet people where they are, and it stops before real skill is built.
          Every engagement I design is built around fixing both of those things.
        </p>
      </section>

      {/* ── SAMR ─────────────────────────────────────────────────── */}
      <SAMRSection />

      {/* ── Andragogy ────────────────────────────────────────────── */}
      <AndragogySection />

      {/* ── Bloom's ──────────────────────────────────────────────── */}
      <BloomsSection />

      {/* ── How it comes together ────────────────────────────────── */}
      <section style={{
        padding: '80px clamp(24px, 6vw, 120px)',
        maxWidth: '1200px',
        margin: '0 auto',
        borderBottom: '1px solid rgba(245,241,232,0.15)',
      }}>
        <div style={sectionHeaderStyle}>
          <span style={labelStyle}>How It All Connects</span>
          <div style={ruleStyle} />
        </div>
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(3, 1fr)',
          gap: '2px',
          background: 'rgba(245,241,232,0.06)',
        }}>
          {connections.map((c, i) => (
            <div key={i} style={{
              background: 'var(--color-ink)',
              padding: '40px 32px',
              display: 'flex',
              flexDirection: 'column',
              gap: '16px',
            }}>
              <span style={{
                fontFamily: '"IBM Plex Mono", monospace',
                fontSize: '10px',
                letterSpacing: '0.15em',
                textTransform: 'uppercase',
                color: '#F5F1E8',
                opacity: 0.35,
              }}>Step 0{i + 1}</span>
              <p style={{
                fontFamily: '"DM Serif Display", Georgia, serif',
                fontStyle: 'italic',
                fontSize: 'clamp(18px, 2vw, 24px)',
                lineHeight: 1.3,
                color: '#F5F1E8',
              }}>{c.title}</p>
              <p style={{
                fontFamily: '"IBM Plex Mono", monospace',
                fontSize: '13px',
                lineHeight: 1.8,
                opacity: 0.55,
              }}>{c.desc}</p>
              <p style={{
                fontFamily: '"IBM Plex Mono", monospace',
                fontSize: '11px',
                letterSpacing: '0.08em',
                textTransform: 'uppercase',
                color: '#F5F1E8',
                opacity: 0.3,
                marginTop: '8px',
              }}>{c.framework}</p>
            </div>
          ))}
        </div>
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
          fontSize: 'clamp(24px, 4vw, 48px)',
          lineHeight: 1.15,
          fontWeight: 400,
          maxWidth: '700px',
        }}>
          This is the framework behind every engagement.
          Not a template — a diagnosis.
        </p>
        <p style={{
          fontFamily: '"IBM Plex Mono", monospace',
          fontSize: '14px',
          lineHeight: 1.8,
          opacity: 0.5,
          maxWidth: '440px',
        }}>
          Every organization starts somewhere different.
          The work begins by figuring out exactly where that is.
        </p>
        <a
          href="https://calendly.com/edupgradellc/30min"
          target="_blank"
          rel="noopener noreferrer"
          style={{
            fontFamily: '"IBM Plex Mono", monospace',
            fontSize: '12px',
            letterSpacing: '0.12em',
            textTransform: 'uppercase',
            color: '#0A0A0A',
            background: '#F5F1E8',
            textDecoration: 'none',
            padding: '16px 36px',
            transition: 'all 0.2s',
          }}
          onMouseEnter={e => { e.currentTarget.style.background = '#FFFFFF' }}
          onMouseLeave={e => { e.currentTarget.style.background = '#F5F1E8' }}
        >
          Start with a Discovery Call →
        </a>
        <a href="/consulting" style={{
          fontFamily: '"IBM Plex Mono", monospace',
          fontSize: '12px',
          letterSpacing: '0.1em',
          textTransform: 'uppercase',
          color: '#F5F1E8',
          textDecoration: 'none',
          opacity: 0.4,
          transition: 'opacity 0.2s',
        }}
          onMouseEnter={e => { e.currentTarget.style.opacity = '1' }}
          onMouseLeave={e => { e.currentTarget.style.opacity = '0.4' }}
        >
          See Consulting Services →
        </a>
      </section>

    </main>
  )
}

/* ── SAMR Section ────────────────────────────────────────────── */

function SAMRSection() {
  const [active, setActive] = useState<number | null>(0)
  const [hoveredRow, setHoveredRow] = useState<number | null>(null)

  return (
    <section style={{
      padding: '80px clamp(24px, 6vw, 120px)',
      maxWidth: '1200px',
      margin: '0 auto',
      borderBottom: '1px solid rgba(245,241,232,0.15)',
    }}>
      <div style={sectionHeaderStyle}>
        <span style={labelStyle}>Step 01 — Assess</span>
        <div style={ruleStyle} />
      </div>

      {/* Intro */}
      <div style={{
        display: 'grid',
        gridTemplateColumns: '1fr 1fr',
        gap: '80px',
        marginBottom: '64px',
        alignItems: 'end',
      }}>
        <div>
          <h2 style={{
            fontFamily: '"DM Serif Display", Georgia, serif',
            fontStyle: 'italic',
            fontSize: 'clamp(28px, 4vw, 52px)',
            lineHeight: 1.1,
            fontWeight: 400,
            color: '#F5F1E8',
            marginBottom: '24px',
          }}>
            Where is your team<br />with AI — right now?
          </h2>
          <p style={{
            fontFamily: '"IBM Plex Mono", monospace',
            fontSize: '14px',
            lineHeight: 1.85,
            opacity: 0.55,
          }}>
            Before any training happens, we need an honest answer to this question.
            The SAMR framework — originally developed for technology integration
            in education — maps four distinct levels of adoption. Most businesses
            are stuck at level one or two without knowing it.
          </p>
        </div>
        <div>
          <p style={{
            fontFamily: '"DM Serif Display", Georgia, serif',
            fontStyle: 'italic',
            fontSize: 'clamp(18px, 2vw, 24px)',
            lineHeight: 1.5,
            color: '#F5F1E8',
            opacity: 0.75,
            borderLeft: '1px solid rgba(245,241,232,0.2)',
            paddingLeft: '32px',
          }}>
            &ldquo;Buying the tool is not the same as adopting it.
            Adopting it is not the same as being transformed by it.
            SAMR shows you the difference.&rdquo;
          </p>
        </div>
      </div>

      {/* SAMR Accordion */}
      <div style={{ display: 'flex', flexDirection: 'column', gap: '2px', marginBottom: '48px' }}>
        {samrLevels.map((level, i) => (
          <button
            key={i}
            onClick={() => setActive(active === i ? null : i)}
            onMouseEnter={() => setHoveredRow(i)}
            onMouseLeave={() => setHoveredRow(null)}
            style={{
              background: active === i ? 'rgba(245,241,232,0.08)' : `rgba(245,241,232,${0.02 + i * 0.015})`,
              border: active === i
                ? '1px solid rgba(245,241,232,0.3)'
                : hoveredRow === i
                ? '1px solid rgba(245,241,232,0.2)'
                : '1px solid rgba(245,241,232,0.08)',
              padding: '0',
              cursor: 'pointer',
              textAlign: 'left',
              transition: 'all 0.25s cubic-bezier(0.16,1,0.3,1)',
            }}
          >
            {/* Header row */}
            <div style={{ display: 'flex', alignItems: 'center', gap: '24px', padding: '24px 32px' }}>
              <span style={{
                fontFamily: '"DM Serif Display", Georgia, serif',
                fontSize: '48px',
                fontWeight: 400,
                color: '#F5F1E8',
                opacity: 0.3 + i * 0.18,
                minWidth: '36px',
                lineHeight: 1,
              }}>{level.letter}</span>
              <div style={{ flex: 1 }}>
                <p style={{
                  fontFamily: '"IBM Plex Mono", monospace',
                  fontSize: '13px',
                  fontWeight: 500,
                  color: '#F5F1E8',
                  opacity: 0.4 + i * 0.18,
                  letterSpacing: '0.08em',
                  textTransform: 'uppercase',
                  marginBottom: '4px',
                }}>{level.word}</p>
                <p style={{
                  fontFamily: '"IBM Plex Mono", monospace',
                  fontSize: '13px',
                  color: '#F5F1E8',
                  opacity: 0.4,
                  lineHeight: 1.5,
                }}>{level.tagline}</p>
              </div>
              {/* Where are you indicator */}
              {level.common && (
                <span style={{
                  fontFamily: '"IBM Plex Mono", monospace',
                  fontSize: '10px',
                  letterSpacing: '0.1em',
                  textTransform: 'uppercase',
                  color: '#F5F1E8',
                  opacity: hoveredRow === i ? 0.7 : 0.35,
                  border: '1px solid rgba(245,241,232,0.15)',
                  padding: '4px 10px',
                  whiteSpace: 'nowrap',
                  textShadow: hoveredRow === i ? '0 0 15px rgba(245,241,232,0.4)' : 'none',
                  transition: 'all 0.25s',
                }}>{level.common}</span>
              )}
              <span style={{
                fontFamily: '"IBM Plex Mono", monospace',
                fontSize: '18px',
                color: '#F5F1E8',
                opacity: 0.25,
                transition: 'transform 0.25s',
                transform: active === i ? 'rotate(45deg)' : 'rotate(0deg)',
                display: 'inline-block',
                marginLeft: '8px',
              }}>+</span>
            </div>

            {/* Expanded */}
            <div style={{
              maxHeight: active === i ? '400px' : '0',
              overflow: 'hidden',
              transition: 'max-height 0.45s cubic-bezier(0.16,1,0.3,1)',
            }}>
              <div style={{
                borderTop: '1px solid rgba(245,241,232,0.08)',
                padding: '32px 32px 36px',
                display: 'grid',
                gridTemplateColumns: '1fr 1fr',
                gap: '48px',
              }}>
                <div>
                  <p style={{
                    fontFamily: '"IBM Plex Mono", monospace',
                    fontSize: '10px',
                    letterSpacing: '0.15em',
                    textTransform: 'uppercase',
                    color: '#F5F1E8',
                    opacity: 0.35,
                    marginBottom: '12px',
                  }}>Real example</p>
                  <p style={{
                    fontFamily: '"DM Serif Display", Georgia, serif',
                    fontStyle: 'italic',
                    fontSize: '17px',
                    lineHeight: 1.65,
                    color: '#F5F1E8',
                    opacity: 0.85,
                  }}>{level.example}</p>
                </div>
                <div>
                  <p style={{
                    fontFamily: '"IBM Plex Mono", monospace',
                    fontSize: '10px',
                    letterSpacing: '0.15em',
                    textTransform: 'uppercase',
                    color: '#F5F1E8',
                    opacity: 0.35,
                    marginBottom: '12px',
                  }}>What this means for your business</p>
                  <p style={{
                    fontFamily: '"IBM Plex Mono", monospace',
                    fontSize: '13px',
                    lineHeight: 1.8,
                    color: '#F5F1E8',
                    opacity: 0.6,
                    marginBottom: '16px',
                  }}>{level.reality}</p>
                  {level.next && (
                    <p style={{
                      fontFamily: '"IBM Plex Mono", monospace',
                      fontSize: '12px',
                      lineHeight: 1.7,
                      color: '#F5F1E8',
                      opacity: 0.4,
                      borderTop: '1px solid rgba(245,241,232,0.08)',
                      paddingTop: '16px',
                    }}>
                      <span style={{ opacity: 0.5 }}>To move up: </span>{level.next}
                    </p>
                  )}
                </div>
              </div>
            </div>
          </button>
        ))}
      </div>

      <div style={{
        border: '1px solid rgba(245,241,232,0.1)',
        padding: '28px 32px',
        background: 'rgba(245,241,232,0.02)',
      }}>
        <p style={{
          fontFamily: '"IBM Plex Mono", monospace',
          fontSize: '13px',
          lineHeight: 1.8,
          color: '#F5F1E8',
          opacity: 0.55,
        }}>
          <span style={{ opacity: 0.9, fontWeight: 500 }}>The honest truth:</span>{' '}
          Most vendor-led AI training assumes everyone starts at level three.
          They don&apos;t. Starting in the wrong place is why adoption stalls.
          The first thing we do together is figure out where you actually are.
        </p>
      </div>
    </section>
  )
}

/* ── Andragogy Section ───────────────────────────────────────── */

function AndragogySection() {
  return (
    <section style={{
      padding: '80px clamp(24px, 6vw, 120px)',
      maxWidth: '1200px',
      margin: '0 auto',
      borderBottom: '1px solid rgba(245,241,232,0.15)',
    }}>
      <div style={sectionHeaderStyle}>
        <span style={labelStyle}>Step 02 — Design</span>
        <div style={ruleStyle} />
      </div>

      <div style={{
        display: 'grid',
        gridTemplateColumns: '1fr 1fr',
        gap: '80px',
        alignItems: 'start',
        marginBottom: '56px',
      }}>
        <div>
          <h2 style={{
            fontFamily: '"DM Serif Display", Georgia, serif',
            fontStyle: 'italic',
            fontSize: 'clamp(28px, 4vw, 48px)',
            lineHeight: 1.1,
            fontWeight: 400,
            color: '#F5F1E8',
            marginBottom: '24px',
          }}>
            Adults don&apos;t learn<br />the way kids do.
          </h2>
          <p style={{
            fontFamily: '"IBM Plex Mono", monospace',
            fontSize: '14px',
            lineHeight: 1.85,
            opacity: 0.55,
            marginBottom: '20px',
          }}>
            This is the part most technology training ignores completely.
            Adults come to training with experience, opinions, and a very
            specific question on their mind: <em style={{ fontStyle: 'italic', opacity: 0.8 }}>why does this matter to me right now?</em>
          </p>
          <p style={{
            fontFamily: '"IBM Plex Mono", monospace',
            fontSize: '14px',
            lineHeight: 1.85,
            opacity: 0.55,
          }}>
            Andragogy — Malcolm Knowles&apos; theory of adult learning — says that
            adults engage when training connects to a real problem they&apos;re
            already trying to solve. Not a hypothetical. Not a demo. Their actual work.
            That principle shapes every session I design.
          </p>
        </div>

        <div style={{ display: 'flex', flexDirection: 'column', gap: '0' }}>
          {andragogyPrinciples.map((item, i) => (
            <div key={i} style={{
              borderTop: '1px solid rgba(245,241,232,0.1)',
              padding: '28px 0',
              display: 'grid',
              gridTemplateColumns: '28px 1fr',
              gap: '24px',
              alignItems: 'start',
            }}>
              <span style={{
                fontFamily: '"IBM Plex Mono", monospace',
                fontSize: '11px',
                letterSpacing: '0.1em',
                color: '#F5F1E8',
                opacity: 0.3,
                paddingTop: '3px',
              }}>0{i + 1}</span>
              <div>
                <p style={{
                  fontFamily: '"IBM Plex Mono", monospace',
                  fontSize: '12px',
                  fontWeight: 500,
                  letterSpacing: '0.08em',
                  textTransform: 'uppercase',
                  color: '#F5F1E8',
                  opacity: 0.7,
                  marginBottom: '8px',
                }}>{item.principle}</p>
                <p style={{
                  fontFamily: '"DM Serif Display", Georgia, serif',
                  fontStyle: 'italic',
                  fontSize: '16px',
                  lineHeight: 1.6,
                  color: '#F5F1E8',
                  opacity: 0.6,
                  marginBottom: '8px',
                }}>{item.plain}</p>
                <p style={{
                  fontFamily: '"IBM Plex Mono", monospace',
                  fontSize: '12px',
                  lineHeight: 1.7,
                  color: '#F5F1E8',
                  opacity: 0.4,
                }}>{item.example}</p>
              </div>
            </div>
          ))}
          <div style={{ borderTop: '1px solid rgba(245,241,232,0.1)' }} />
        </div>
      </div>

      <div style={{
        border: '1px solid rgba(245,241,232,0.1)',
        padding: '28px 32px',
        background: 'rgba(245,241,232,0.02)',
      }}>
        <p style={{
          fontFamily: '"IBM Plex Mono", monospace',
          fontSize: '13px',
          lineHeight: 1.8,
          color: '#F5F1E8',
          opacity: 0.55,
        }}>
          <span style={{ opacity: 0.9, fontWeight: 500 }}>What this means in practice:</span>{' '}
          Before I build any training, I map your team&apos;s actual workflows.
          Every example, every exercise, every prompt we practice is built from
          your real work — not generic demos that nobody can connect to their job.
        </p>
      </div>
    </section>
  )
}

/* ── Bloom's Section ─────────────────────────────────────────── */

function BloomsSection() {
  return (
    <section style={{
      padding: '80px clamp(24px, 6vw, 120px)',
      maxWidth: '1200px',
      margin: '0 auto',
      borderBottom: '1px solid rgba(245,241,232,0.15)',
    }}>
      <div style={sectionHeaderStyle}>
        <span style={labelStyle}>Step 03 — Measure Depth</span>
        <div style={ruleStyle} />
      </div>

      <div style={{
        display: 'grid',
        gridTemplateColumns: '1fr 1fr',
        gap: '80px',
        alignItems: 'start',
        marginBottom: '56px',
      }}>
        <div>
          <h2 style={{
            fontFamily: '"DM Serif Display", Georgia, serif',
            fontStyle: 'italic',
            fontSize: 'clamp(28px, 4vw, 48px)',
            lineHeight: 1.1,
            fontWeight: 400,
            color: '#F5F1E8',
            marginBottom: '24px',
          }}>
            Knowing a tool exists<br />is not the same as<br />being able to use it.
          </h2>
          <p style={{
            fontFamily: '"IBM Plex Mono", monospace',
            fontSize: '14px',
            lineHeight: 1.85,
            opacity: 0.55,
            marginBottom: '20px',
          }}>
            Most technology training gets people to level two or three —
            they know the tool exists and can follow a demo. Then it stops.
            Real productivity doesn&apos;t start until level three or four.
            Real transformation happens at five and six.
          </p>
          <p style={{
            fontFamily: '"IBM Plex Mono", monospace',
            fontSize: '14px',
            lineHeight: 1.85,
            opacity: 0.55,
          }}>
            Bloom&apos;s Taxonomy gives us a map for measuring how deep skill
            actually goes — and designing training that builds toward the levels
            where real business value shows up.
          </p>
        </div>

        {/* Bloom's staircase */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '3px' }}>
          {bloomLevels.map((level, i) => (
            <div key={i} style={{
              background: i === 0 ? 'rgba(245,241,232,0.08)' : 'rgba(245,241,232,0.02)',
              border: i === 0
                ? '1px solid rgba(245,241,232,0.3)'
                : '1px solid rgba(245,241,232,0.07)',
              padding: '18px 24px',
              marginLeft: `${(5 - i) * 24}px`,
            }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '20px' }}>
                <span style={{
                  fontFamily: '"DM Serif Display", Georgia, serif',
                  fontSize: '28px',
                  fontWeight: 400,
                  color: '#F5F1E8',
                  opacity: level.opacity,
                  minWidth: '32px',
                  lineHeight: 1,
                }}>{level.num}</span>
                <div style={{ flex: 1 }}>
                  <p style={{
                    fontFamily: '"IBM Plex Mono", monospace',
                    fontSize: '12px',
                    fontWeight: 500,
                    letterSpacing: '0.08em',
                    textTransform: 'uppercase',
                    color: '#F5F1E8',
                    opacity: level.opacity,
                    marginBottom: '2px',
                  }}>{level.title}</p>
                  <p style={{
                    fontFamily: '"IBM Plex Mono", monospace',
                    fontSize: '12px',
                    color: '#F5F1E8',
                    opacity: level.opacity * 0.7,
                  }}>{level.plain}</p>
                </div>
                {level.value && (
                  <span style={{
                    fontFamily: '"IBM Plex Mono", monospace',
                    fontSize: '11px',
                    color: '#F5F1E8',
                    opacity: 0.4,
                    textAlign: 'right',
                    maxWidth: '120px',
                    lineHeight: 1.4,
                  }}>{level.value}</span>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>

      <div style={{
        border: '1px solid rgba(245,241,232,0.1)',
        padding: '28px 32px',
        background: 'rgba(245,241,232,0.02)',
      }}>
        <p style={{
          fontFamily: '"IBM Plex Mono", monospace',
          fontSize: '13px',
          lineHeight: 1.8,
          color: '#F5F1E8',
          opacity: 0.55,
        }}>
          <span style={{ opacity: 0.9, fontWeight: 500 }}>The gap most training creates:</span>{' '}
          Your team attends a session, follows along, and leaves knowing the tool exists.
          That&apos;s level one and two. The real question is whether they can use it
          independently, judge its output, and build their own workflows around it.
          That&apos;s what we design toward.
        </p>
      </div>
    </section>
  )
}

/* ── Data ──────────────────────────────────────────────────────── */

const samrLevels = [
  {
    letter: 'S',
    word: 'Substitution',
    tagline: 'You replaced the tool. Nothing else changed.',
    common: 'Most common starting point',
    example: 'Instead of Googling "how to write a follow-up email," you ask ChatGPT. Same task. Same time. Just a different search box.',
    reality: 'This is where most small businesses start — and where many stay. It feels like AI adoption. The workflow hasn\'t changed at all.',
    next: 'Start using AI with specific context about your actual clients, tasks, and goals — not generic questions.',
  },
  {
    letter: 'A',
    word: 'Augmentation',
    tagline: 'Same job — but noticeably better and faster.',
    common: 'Where time savings begin',
    example: 'You ask ChatGPT to write that follow-up email, give it context about the client and the conversation, and it comes back ready to send. You saved 20 minutes.',
    reality: 'Time savings start showing up here. The task is the same — but AI is doing the heavy lifting, not just answering a question.',
    next: 'Build prompt templates for your most common tasks so every team member gets consistent, high-quality output.',
  },
  {
    letter: 'M',
    word: 'Modification',
    tagline: 'The task itself looks different because AI is involved.',
    common: 'Where SOPs get rebuilt',
    example: 'Instead of writing one follow-up email, you build a 5-step email sequence tailored to three different client types — something you never had time to create before.',
    reality: 'Workflows start to transform here. You\'re not just faster — you\'re doing things differently. This is where intentional SOP design matters most.',
    next: 'Map your current workflows and identify which tasks can be redesigned — not just sped up — with AI embedded in the process.',
  },
  {
    letter: 'R',
    word: 'Redefinition',
    tagline: 'You\'re doing things that simply weren\'t possible before.',
    common: 'The goal',
    example: 'Your system analyzes every client interaction, flags at-risk relationships, drafts personalized outreach, and updates your CRM — while you focus on work only you can do.',
    reality: 'This is not about replacing humans. It\'s about redefining what humans spend their time on. Getting here requires intentional workflow design — it doesn\'t happen by accident.',
    next: null,
  },
]

const andragogyPrinciples = [
  {
    principle: 'Prior Experience',
    plain: 'Adults already know things. Build on what they know.',
    example: 'We start with your team\'s existing workflows — not a blank slate tutorial.',
  },
  {
    principle: 'Immediate Relevance',
    plain: 'Adults need a reason to engage — right now, not someday.',
    example: 'Every exercise uses real tasks from their actual job, not hypothetical scenarios.',
  },
  {
    principle: 'Problem-Centered',
    plain: 'Adults learn best when solving a real problem, not absorbing information.',
    example: 'Training is built around solving specific friction points your team already experiences.',
  },
  {
    principle: 'Self-Direction',
    plain: 'Adults want to choose how they apply what they learn.',
    example: 'Sessions teach principles and frameworks — not rigid step-by-step scripts.',
  },
]

const bloomLevels = [
  { num: '6', title: 'Create', plain: 'Builds their own workflow from scratch', value: 'Where real ROI lives', opacity: 1 },
  { num: '5', title: 'Evaluate', plain: 'Judges quality and knows when to push back', value: 'Consistent output', opacity: 0.85 },
  { num: '4', title: 'Analyze', plain: 'Spots errors and understands why', value: 'Less rework', opacity: 0.7 },
  { num: '3', title: 'Apply', plain: 'Uses the tool independently on real tasks', value: 'Time savings begin', opacity: 0.55 },
  { num: '2', title: 'Understand', plain: 'Grasps what the tool does and why', value: null, opacity: 0.4 },
  { num: '1', title: 'Remember', plain: 'Knows the tool exists', value: null, opacity: 0.28 },
]

const connections = [
  {
    title: 'Where are you now?',
    desc: 'SAMR tells us your team\'s current adoption level — honestly. This determines where training needs to start, not where you wish it could start.',
    framework: 'SAMR Framework',
  },
  {
    title: 'Why will your team engage?',
    desc: 'Andragogy shapes how training is designed — built around real problems, real workflows, and real tasks your team already cares about solving.',
    framework: 'Andragogy — Knowles',
  },
  {
    title: 'How deep does the skill go?',
    desc: 'Bloom\'s Taxonomy measures whether training produced awareness or real capability. We design toward application, analysis, and creation — not just recall.',
    framework: "Bloom's Taxonomy",
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
