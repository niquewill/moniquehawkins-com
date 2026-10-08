'use client'

import { useEffect, useRef } from 'react'

const SPINE_LEFT = 'clamp(30px, 6vw, 64px)'

/* ── Chapter icons (thin line, soft glow — styled via .about-icon CSS) ── */

function TexasIcon() {
  return (
    <svg className="about-icon" viewBox="-30 -26 60 52" style={iconStyle}>
      <path pathLength={1} d="M -6 -22 L 3 -22 L 3 -12 L 15 -12 L 17 -6 L 23 -2 L 16 2 L 13 11 L 4 17 L 0 21 L -5 14 L -11 10 L -16 2 L -19 -4 L -14 -8 L -6 -8 Z" />
    </svg>
  )
}
function AgesIcon() {
  return (
    <svg className="about-icon" viewBox="-30 -24 60 50" style={iconStyle}>
      <circle pathLength={1} cx="-18" cy="-6" r="3" />
      <path pathLength={1} d="M -18 -3 L -18 6 M -18 0 L -21 -2 M -18 0 L -15 -2 M -18 6 L -20 12 M -18 6 L -16 12" />
      <circle pathLength={1} cx="-2" cy="-9" r="4.5" />
      <path pathLength={1} d="M -2 -4.5 L -2 8 M -2 -1 L -6 -3 M -2 -1 L 2 -3 M -2 8 L -5 16 M -2 8 L 1 16" />
      <circle pathLength={1} cx="17" cy="-12" r="6" />
      <path pathLength={1} d="M 17 -6 L 17 10 M 17 -2 L 11 -4 M 17 -2 L 23 -4 M 17 10 L 13 20 M 17 10 L 21 20" />
    </svg>
  )
}
function TechIcon() {
  return (
    <svg className="about-icon" viewBox="-30 -20 60 44" style={iconStyle}>
      <path pathLength={1} d="M -24 -4 L -8 -4 L -8 8 L -24 8 Z" />
      <circle pathLength={1} cx="-8" cy="2" r="3" />
      <path pathLength={1} d="M -4 -1 L 5 -6 M -4 5 L 5 10" />
      <path pathLength={1} d="M 8 -10 L 24 -10 L 24 4 L 8 4 Z" />
      <path pathLength={1} d="M 16 4 L 16 9 M 11 9 L 21 9" />
      <circle pathLength={1} cx="16" cy="-5" r="2" />
      <path pathLength={1} d="M 12 -0.5 Q 16 -3 20 -0.5" />
    </svg>
  )
}
function LegalIcon() {
  return (
    <svg className="about-icon" viewBox="-28 -26 56 52" style={iconStyle}>
      <path pathLength={1} d="M 0 -22 C 0.8 -18 2 -16.8 6 -16 C 2 -15.2 0.8 -14 0 -10 C -0.8 -14 -2 -15.2 -6 -16 C -2 -16.8 -0.8 -18 0 -22 Z" />
      <path pathLength={1} d="M 0 -9 L 0 13" />
      <circle pathLength={1} cx="0" cy="-9" r="1.6" />
      <circle pathLength={1} cx="0" cy="2" r="1.6" />
      <path pathLength={1} d="M -16 -6 L 16 -6" />
      <circle pathLength={1} cx="-8" cy="-6" r="1.4" />
      <circle pathLength={1} cx="8" cy="-6" r="1.4" />
      <path pathLength={1} d="M -9 13 L 9 13" />
      <path pathLength={1} d="M -16 -6 L -20 3 M -16 -6 L -12 3 M -22 3 Q -16 9 -10 3" />
      <path pathLength={1} d="M 16 -6 L 12 3 M 16 -6 L 20 3 M 10 3 Q 16 9 22 3" />
    </svg>
  )
}
function MindIcon() {
  return (
    <svg className="about-icon" viewBox="-26 -28 52 56" style={iconStyle}>
      <path pathLength={1} d="M -11 -2 A 11 12 0 1 0 11 -2" />
      <circle pathLength={1} cx="-4" cy="3" r="1.1" />
      <circle pathLength={1} cx="4" cy="3" r="1.1" />
      <path pathLength={1} d="M -8 -6 L -12 -15 M -4 -6 L -6 -17 M 0 -6 L 0 -19 M 4 -6 L 6 -17 M 8 -6 L 12 -15" />
      <path pathLength={1} d="M 0 -20 C 0.8 -24 2 -25 3 -25 C 2 -25 0.8 -24 0 -20 C -0.8 -24 -2 -25 -3 -25 C -2 -25 -0.8 -24 0 -20 Z" />
    </svg>
  )
}

export default function AboutPage() {
  const threadRef = useRef<HTMLDivElement>(null)
  const spineRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const thread = threadRef.current
    const spine = spineRef.current
    if (!thread || !spine) return

    const onScroll = () => {
      const vh = window.innerHeight
      const rect = thread.getBoundingClientRect()
      const start = vh * 0.55
      const total = rect.height - vh * 0.25
      const scrolled = start - rect.top
      const p = Math.min(1, Math.max(0, total > 0 ? scrolled / total : 0))
      spine.style.transform = `translateX(-50%) scaleY(${p})`
    }
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    window.addEventListener('resize', onScroll)

    const io = new IntersectionObserver(
      (entries) => entries.forEach((e) => { if (e.isIntersecting) e.target.classList.add('in') }),
      { threshold: 0.25 }
    )
    thread.querySelectorAll('.about-chapter').forEach((c) => io.observe(c))

    return () => {
      window.removeEventListener('scroll', onScroll)
      window.removeEventListener('resize', onScroll)
      io.disconnect()
    }
  }, [])

  return (
    <main style={{ background: 'var(--color-ink)', paddingTop: '120px' }}>

      <style>{`
        .about-icon path, .about-icon circle {
          fill: none; stroke: rgba(255,255,255,0.9); stroke-width: 1.5;
          stroke-linecap: round; stroke-linejoin: round;
          filter: drop-shadow(0 0 6px rgba(255,255,255,0.22));
          stroke-dasharray: 1; stroke-dashoffset: 1;
        }
        .about-chapter.in .about-icon path, .about-chapter.in .about-icon circle {
          stroke-dashoffset: 0; transition: stroke-dashoffset 1.1s ease 0.1s;
        }
        @media (max-width: 640px) {
          .about-icon { width: 44px !important; height: 44px !important; }
        }
      `}</style>

      {/* ── Threaded region: hero + 5 chapters, stitched by the spine ── */}
      <div ref={threadRef} style={{ position: 'relative', maxWidth: '1200px', margin: '0 auto' }}>

        {/* the glowing spine line (grows as you scroll) */}
        <div
          ref={spineRef}
          style={{
            position: 'absolute', left: SPINE_LEFT, top: 0, width: '1.5px', height: '100%',
            background: 'rgba(255,255,255,0.9)', boxShadow: '0 0 8px rgba(255,255,255,0.35)',
            transform: 'translateX(-50%) scaleY(0)', transformOrigin: 'top', pointerEvents: 'none', zIndex: 1,
          }}
        />

        {/* ── Hero ─────────────────────────────────────────────────── */}
        <section style={{
          position: 'relative',
          padding: '60px clamp(24px, 6vw, 120px) 80px clamp(84px, 11vw, 150px)',
          borderBottom: '1px solid var(--color-border)',
        }}>
          <p style={labelStyle}>About</p>
          <h1 style={{
            fontFamily: '"DM Serif Display", Georgia, serif',
            fontStyle: 'italic',
            fontSize: 'clamp(36px, 6vw, 72px)',
            lineHeight: 1.05,
            fontWeight: 400,
            maxWidth: '900px',
          }}>
            &ldquo;I&apos;ve spent my career making sure people don&apos;t get left behind by technology.&rdquo;
          </h1>
        </section>

        {/* ── Chapter 1: The Classroom ─────────────────────────────── */}
        <section className="about-chapter" style={chapterStyle}>
          <TexasIcon />
          <div style={chapterHeaderStyle}>
            <span style={chapterNumberStyle}>01</span>
            <span style={chapterTitleStyle}>The Classroom</span>
            <div style={chapterRuleStyle} />
          </div>

          <div style={{ position: 'relative' }}>
            <div style={floatQuoteRight}>
              <p style={floatQuoteText}>
                &ldquo;If I could reach students there, I could reach anyone, anywhere.&rdquo;
              </p>
            </div>

            <p style={pStyle}>
              <strong style={boldStyle}>My classroom was never quiet.</strong>{' '}
              Things on every wall. Students moving. Controlled chaos I was proud of. I started
              teaching in Galveston, Texas — at a school where four homeless shelters fed into the
              same building. The hardest possible place to begin. I called it my New York. If I
              could reach students there, I could reach anyone, anywhere.
            </p>

            <p style={pStyle}>
              What that room taught me has followed me into every job since: people will engage with
              almost anything if you meet them where they are. My job was never really about the
              subject on the board. It was about showing someone they were more capable than they
              believed.
            </p>

            <p style={pStyle}>
              <strong style={boldStyle}>Technology was the tool that proved it.</strong>{' '}
              Even in that first classroom, I was integrating technology before it was expected —
              not because I was a &ldquo;tech person,&rdquo; but because I watched what happened
              when a student who felt invisible suddenly had a way in. A structured way to access
              information. A reason to participate. Technology leveled something in that room. I
              never forgot it.
            </p>
          </div>
        </section>

        {/* ── Chapter 2: Building Systems ──────────────────────────── */}
        <section className="about-chapter" style={chapterStyle}>
          <AgesIcon />
          <div style={chapterHeaderStyle}>
            <span style={chapterNumberStyle}>02</span>
            <span style={chapterTitleStyle}>Building Systems</span>
            <div style={chapterRuleStyle} />
          </div>

          <div style={{ position: 'relative' }}>
            <div style={floatQuoteLeft}>
              <p style={floatQuoteText}>
                &ldquo;Technology gave my students access. Access gave them a voice.&rdquo;
              </p>
            </div>

            <p style={pStyle}>
              After two years in Galveston, I moved to Alief ISD in Texas — a larger district, 5th
              and 6th graders, nearly 1,300 students and 100 staff. I stepped into a Technology
              Specialist role, and I already had opinions about how it should be done.
            </p>

            <p style={pStyle}>
              I built a Technology Professional Development Training Program that served over 100
              staff members annually for five years. I managed hardware and software procurement,
              ran our help desk, implemented a ticketing system, and trained teachers to integrate
              technology across every subject area — applying Adult Learning Theory not just as a
              concept, but as the actual design of every session.
            </p>

            <p style={pStyle}>
              And I started a student group I called <strong style={boldStyle}>GEEKs</strong>{' '}
              — Grit-minded, Educated, Enthusiastic, Knowledgeable Students. More than 50 students,
              before-school sessions, our own morning television show broadcast to the campus.
              Students who came in thinking technology was just video games, and left understanding
              it could be a career. Those kids showed up every single morning and reminded me why
              the work mattered.
            </p>
          </div>
        </section>

        {/* ── Chapter 3: Going National ────────────────────────────── */}
        <section className="about-chapter" style={chapterStyle}>
          <TechIcon />
          <div style={chapterHeaderStyle}>
            <span style={chapterNumberStyle}>03</span>
            <span style={chapterTitleStyle}>Going National</span>
            <div style={chapterRuleStyle} />
          </div>

          <div style={{ position: 'relative' }}>
            <div style={floatQuoteRight}>
              <p style={floatQuoteText}>
                &ldquo;None of it was required. All of it was curiosity.&rdquo;
              </p>
            </div>

            <p style={pStyle}>
              <strong style={boldStyle}>I never stopped learning — or teaching.</strong>{' '}
              After Alief ISD, I spent nearly a decade with Jason Learning as a Curriculum
              Professional Development Trainer — traveling to school districts across Illinois,
              New York, Virginia, Louisiana, and Texas, delivering live and virtual training to
              teachers, executives, and administrators on a real-world science curriculum spanning
              earth, physical, and life science.
            </p>

            <p style={pStyle}>
              Then came Imagine Learning, where I designed learning cycles for Grades 5–12 and
              supported educators through curriculum coaching and platform adoption.
            </p>

            <p style={pStyle}>
              Along the way I kept building on my own. A Full Stack Web Development certificate
              from UT Austin&apos;s Houston coding bootcamp. IBM&apos;s AI Fundamentals and
              Cybersecurity Fundamentals. Project Management. Digital Marketing. None of it was
              required. All of it was curiosity.
            </p>
          </div>
        </section>

        {/* ── Chapter 4: Legal Technology ──────────────────────────── */}
        <section className="about-chapter" style={chapterStyle}>
          <LegalIcon />
          <div style={chapterHeaderStyle}>
            <span style={chapterNumberStyle}>04</span>
            <span style={chapterTitleStyle}>Legal Technology</span>
            <div style={chapterRuleStyle} />
          </div>

          <div style={{ position: 'relative' }}>
            <div style={floatQuoteLeft}>
              <p style={floatQuoteText}>
                &ldquo;It&apos;s not about if. It&apos;s about when.&rdquo;
              </p>
            </div>

            <p style={pStyle}>
              <strong style={boldStyle}>Then I found legal technology — and it felt like coming home.</strong>{' '}
              I&apos;m now a Technology Instructor at a law firm in Louisiana. I teach attorneys,
              paralegals, legal administrative assistants, and support staff how to use the tools
              they depend on every day — and how to use them well.
            </p>

            <p style={pStyle}>
              That means Microsoft 365: Word&apos;s advanced features, styles, document automation,
              track changes, and the features that save legal professionals hours every week. It
              means Copilot for Microsoft 365 and the workflows it enables across the legal
              environment. And it means the technology woven into every part of a legal
              workflow: document management, document comparison, PDF editing, dictation, time
              entry, and the learning platforms that help people keep up.
            </p>

            <p style={pStyle}>
              The legal environment is demanding. Time is short. Skepticism is high. Attorneys did
              not go to law school to become technology users — and they will tell you that directly.
            </p>

            <p style={pStyle}>
              That is exactly the room I have been training for my entire career.
            </p>

            <p style={pStyle}>
              <strong style={boldStyle}>I am early in legal technology. I say that without apology.</strong>{' '}
              What I bring isn&apos;t ten years of legal tech experience. What I bring is a trained,
              practiced understanding of how adults learn — specifically the adult who is convinced
              they are &ldquo;not a tech person.&rdquo; That person is in every law firm. I know how
              to find them. I know what they need to hear first. I know how to build the kind of
              trust that makes someone willing to try something new.
            </p>

            <p style={pStyle}>
              Most technology trainers know the tool. I know the human first. In a time-pressured
              legal environment, that difference matters more than people expect.
            </p>
          </div>
        </section>

        {/* ── Chapter 5: Building in Public ────────────────────────── */}
        <section className="about-chapter" style={{ ...chapterStyle, borderBottom: 'none' }}>
          <MindIcon />
          <div style={chapterHeaderStyle}>
            <span style={chapterNumberStyle}>05</span>
            <span style={chapterTitleStyle}>Building in Public</span>
            <div style={chapterRuleStyle} />
          </div>

          <div style={{ position: 'relative' }}>
            <div style={floatQuoteRight}>
              <p style={floatQuoteText}>
                &ldquo;The best way to teach technology is to keep using it yourself.&rdquo;
              </p>
            </div>

            <p style={pStyle}>
              <strong style={boldStyle}>Outside of work, I build things.</strong>{' '}
              The best way to teach technology is to keep using it yourself — not just the tools
              you are paid to teach, but whatever is interesting right now. Lately that means
              building full websites with Claude AI, generating graphics with Midjourney and
              DALL-E, connecting APIs, automating workflows, and figuring out how the pieces fit
              together in practice.
            </p>

            <p style={pStyle}>
              My current project is PickleballFloridaUSA.com — a resource site for Florida
              pickleball players, built with Google Maps API, RSS feed integration, Cloudflare,
              AI-generated visuals, and automated social scheduling through Meta Suite. A real
              site, live on the internet, built by me. More are in progress.
            </p>

            <p style={pStyle}>
              It is not a question of <em style={{ fontStyle: 'italic' }}>if</em> technology will
              change your work. It is a question of whether you will be ready when it does — and
              whether the people around you will be too.
            </p>

            <p style={{ ...pStyle, marginBottom: 0 }}>
              That has been my work for over 20 years. It still is.
            </p>
          </div>
        </section>

      </div>{/* end threaded region */}

      {/* ── Publications ─────────────────────────────────────────────── */}
      <section style={{
        padding: '80px clamp(24px, 6vw, 120px)',
        borderTop: '1px solid var(--color-border)',
        maxWidth: '1200px',
        margin: '0 auto',
      }}>
        <div style={{
          display: 'flex',
          alignItems: 'center',
          gap: '20px',
          marginBottom: '56px',
        }}>
          <p style={labelStyle}>Publications</p>
          <div style={{ flex: 1, height: '1px', background: 'var(--color-border)' }} />
        </div>

        <div style={{
          display: 'grid',
          gridTemplateColumns: '200px 1fr',
          border: '1px solid var(--color-border)',
          background: 'var(--color-surface)',
          maxWidth: '800px',
        }}>
          <div style={{
            borderRight: '1px solid var(--color-border)',
            background: 'var(--color-ink)',
          }}>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="/images/publications/Thrive_10_Ways_to_Help_Your_Child_Grow_and_Flourish.jpg"
              alt="Thrive: 10 Ways to Help Your Child Grow and Flourish by Monique Hawkins"
              style={{ width: '100%', height: 'auto', display: 'block' }}
            />
          </div>

          <div style={{ padding: '32px 28px', display: 'flex', flexDirection: 'column', gap: '20px' }}>
            <span style={{
              display: 'inline-block',
              fontFamily: '"IBM Plex Mono", monospace',
              fontSize: '10px',
              letterSpacing: '0.12em',
              textTransform: 'uppercase',
              color: 'var(--color-muted)',
              border: '1px solid var(--color-border)',
              padding: '3px 10px',
              width: 'fit-content',
            }}>
              Published Author
            </span>

            <h2 style={{
              fontFamily: '"IBM Plex Mono", monospace',
              fontSize: 'clamp(15px, 2vw, 19px)',
              fontWeight: 500,
              lineHeight: 1.3,
              color: 'var(--color-paper)',
            }}>
              Thrive: 10 Ways to Help Your Child Grow and Flourish
            </h2>

            <p style={{
              fontFamily: '"DM Serif Display", Georgia, serif',
              fontStyle: 'italic',
              fontSize: '15px',
              lineHeight: 1.6,
              color: 'rgba(250,250,250,0.55)',
              borderLeft: '2px solid var(--color-border)',
              paddingLeft: '16px',
            }}>
              The practical, honest guide a trusted teacher friend might hand you over coffee.
            </p>

            <p style={{
              fontFamily: '"IBM Plex Mono", monospace',
              fontSize: '12px',
              lineHeight: 1.85,
              color: 'var(--color-muted)',
            }}>
              10 actionable strategies for helping your child grow and flourish —
              grounded in real-world experience as an educator, designed for
              parents who want substance, not platitudes.
            </p>

            <div style={{ borderTop: '1px solid var(--color-border)', paddingTop: '20px', marginTop: 'auto' }}>
              <a
                href="https://www.amazon.com/dp/B0H6J2263Y"
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '8px',
                  fontFamily: '"IBM Plex Mono", monospace',
                  fontSize: '11px',
                  letterSpacing: '0.1em',
                  textTransform: 'uppercase',
                  color: 'var(--color-paper)',
                  textDecoration: 'none',
                  border: '1px solid rgba(255,255,255,0.25)',
                  padding: '11px 22px',
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
                View on Amazon →
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* ── CTA ──────────────────────────────────────────────────────── */}
      <section style={{
        padding: '80px clamp(24px, 6vw, 120px)',
        borderTop: '1px solid var(--color-border)',
        textAlign: 'center',
      }}>
        <a href="/consulting" className="btn-glow">
          Start a Conversation
        </a>
      </section>

    </main>
  )
}

/* ── Shared styles ─────────────────────────────────────────────── */

const iconStyle: React.CSSProperties = {
  position: 'absolute',
  left: SPINE_LEFT,
  top: '58px',
  transform: 'translateX(-50%)',
  width: '56px',
  height: '56px',
  overflow: 'visible',
  zIndex: 2,
}

const pStyle: React.CSSProperties = {
  fontFamily: '"IBM Plex Mono", monospace',
  fontSize: '15px',
  lineHeight: 1.9,
  opacity: 0.65,
  marginBottom: '28px',
  maxWidth: '680px',
}

const boldStyle: React.CSSProperties = {
  color: '#F5F1E8',
  opacity: 1,
  fontWeight: 700,
  textShadow: '0 0 25px rgba(245,241,232,0.7), 0 0 50px rgba(232,228,220,0.3)',
}

const labelStyle: React.CSSProperties = {
  fontFamily: '"IBM Plex Mono", monospace',
  fontSize: '13px',
  letterSpacing: '0.2em',
  textTransform: 'uppercase',
  color: '#F5F1E8',
  opacity: 0.75,
  marginBottom: '0',
  whiteSpace: 'nowrap',
  textShadow: '0 0 20px rgba(245,241,232,0.4)',
}

const chapterStyle: React.CSSProperties = {
  position: 'relative',
  padding: '72px clamp(24px, 6vw, 120px) 72px clamp(84px, 11vw, 150px)',
  borderBottom: '1px solid rgba(245,241,232,0.15)',
}

const chapterHeaderStyle: React.CSSProperties = {
  display: 'flex',
  alignItems: 'center',
  gap: '16px',
  marginBottom: '48px',
}

const chapterNumberStyle: React.CSSProperties = {
  fontFamily: '"IBM Plex Mono", monospace',
  fontSize: '13px',
  letterSpacing: '0.12em',
  color: '#FAFAFA',
  opacity: 0.55,
}

const chapterTitleStyle: React.CSSProperties = {
  fontFamily: '"IBM Plex Mono", monospace',
  fontSize: '13px',
  letterSpacing: '0.2em',
  textTransform: 'uppercase',
  color: '#F5F1E8',
  whiteSpace: 'nowrap',
  textShadow: '0 0 20px rgba(245,241,232,0.5)',
}

const chapterRuleStyle: React.CSSProperties = {
  flex: 1,
  height: '1px',
  background: 'rgba(245,241,232,0.2)',
  boxShadow: '0 0 6px rgba(245,241,232,0.08)',
}

/* Float quotes — newspaper style */
const floatQuoteRight: React.CSSProperties = {
  float: 'right',
  width: 'clamp(240px, 30%, 340px)',
  marginLeft: '48px',
  marginBottom: '28px',
  borderTop: '2px solid rgba(245,241,232,0.5)',
  borderBottom: '2px solid rgba(245,241,232,0.5)',
  padding: '32px 0',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  minHeight: '140px',
}

const floatQuoteLeft: React.CSSProperties = {
  float: 'left',
  width: 'clamp(240px, 30%, 340px)',
  marginRight: '48px',
  marginBottom: '28px',
  borderTop: '2px solid rgba(245,241,232,0.5)',
  borderBottom: '2px solid rgba(245,241,232,0.5)',
  padding: '32px 0',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  minHeight: '140px',
}

const floatQuoteText: React.CSSProperties = {
  fontFamily: '"DM Serif Display", Georgia, serif',
  fontStyle: 'italic',
  fontSize: 'clamp(22px, 2.8vw, 32px)',
  lineHeight: 1.3,
  color: '#F5F1E8',
  textAlign: 'center',
  textShadow: '0 0 30px rgba(245,241,232,0.6), 0 0 60px rgba(232,228,220,0.25)',
}
