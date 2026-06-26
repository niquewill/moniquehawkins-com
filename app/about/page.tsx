'use client'
export default function AboutPage() {
  return (
    <main style={{ background: 'var(--color-ink)', paddingTop: '120px' }}>

      {/* Hero */}
      <section style={{ padding: '60px 48px 100px', maxWidth: '800px', margin: '0 auto' }}>
        <p style={{
          fontFamily: '"IBM Plex Mono", monospace',
          fontSize: '11px',
          letterSpacing: '0.15em',
          textTransform: 'uppercase',
          opacity: 0.4,
          marginBottom: '24px',
        }}>
          About
        </p>
        <h1 style={{
          fontFamily: '"DM Serif Display", Georgia, serif',
          fontStyle: 'italic',
          fontSize: 'clamp(32px, 5vw, 56px)',
          lineHeight: 1.2,
          fontWeight: 400,
        }}>
          &ldquo;I&apos;ve spent my career making sure people don&apos;t get left behind by technology.&rdquo;
        </h1>
      </section>

      {/* Story sections */}
      <section style={{ padding: '0 48px 120px', maxWidth: '720px', margin: '0 auto' }}>

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

        <div style={{
          borderLeft: '3px solid rgba(232,228,220,0.3)',
          paddingLeft: '28px',
          margin: '56px 0',
        }}>
          <p style={{
            fontFamily: '"DM Serif Display", Georgia, serif',
            fontStyle: 'italic',
            fontSize: 'clamp(20px, 2.5vw, 26px)',
            lineHeight: 1.4,
            opacity: 0.9,
          }}>
            &ldquo;Technology gave my students access. Access gave them a voice.&rdquo;
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
          environment. It means platforms like Intellek, iManage, Draftable, Kofax Power PDF,
          Scribe, Litera, BigHand, and Intapp Time. I build curriculum, onboard new legal
          professionals, troubleshoot document creation tools, and support the day-to-day
          technology needs of a busy firm.
        </p>

        <p style={pStyle}>
          The legal environment is demanding. Time is short. Skepticism is high. Attorneys did
          not go to law school to become technology users — and they will tell you that
          directly.
        </p>

        <p style={pStyle}>
          That is exactly the room I have been training for my entire career.
        </p>

        <div style={{
          borderLeft: '3px solid rgba(232,228,220,0.3)',
          paddingLeft: '28px',
          margin: '56px 0',
        }}>
          <p style={{
            fontFamily: '"DM Serif Display", Georgia, serif',
            fontStyle: 'italic',
            fontSize: 'clamp(20px, 2.5vw, 26px)',
            lineHeight: 1.4,
            opacity: 0.9,
          }}>
            &ldquo;It&apos;s not about if. It&apos;s about when.&rdquo;
          </p>
        </div>

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

      </section>

      {/* ── Publications ──────────────────────────────────────────────── */}
      <section style={{
        padding: '80px 48px',
        borderTop: '1px solid var(--color-border)',
        maxWidth: '720px',
        margin: '0 auto',
      }}>

        {/* Section label */}
        <div style={{
          display: 'flex',
          alignItems: 'center',
          gap: '20px',
          marginBottom: '56px',
        }}>
          <p style={{
            fontFamily: '"IBM Plex Mono", monospace',
            fontSize: '11px',
            letterSpacing: '0.15em',
            textTransform: 'uppercase',
            opacity: 0.4,
            whiteSpace: 'nowrap',
          }}>
            Publications
          </p>
          <div style={{ flex: 1, height: '1px', background: 'var(--color-border)' }} />
        </div>

        {/* Card */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: '180px 1fr',
          border: '1px solid var(--color-border)',
          background: 'var(--color-surface)',
        }}>

          {/* Cover */}
          <div style={{
            borderRight: '1px solid var(--color-border)',
            background: 'var(--color-ink)',
            display: 'flex',
            alignItems: 'stretch',
          }}>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="/images/publications/Thrive_10_Ways_to_Help_Your_Child_Grow_and_Flourish.jpg"
              alt="Thrive: 10 Ways to Help Your Child Grow and Flourish by Monique Hawkins"
              style={{
                width: '100%',
                height: 'auto',
                objectFit: 'contain',
                display: 'block',
              }}
            />
          </div>

          {/* Content */}
          <div style={{
            padding: '32px 28px',
            display: 'flex',
            flexDirection: 'column',
            gap: '20px',
          }}>

            {/* Tag */}
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

            {/* Title */}
            <h2 style={{
              fontFamily: '"IBM Plex Mono", monospace',
              fontSize: 'clamp(15px, 2vw, 19px)',
              fontWeight: 500,
              lineHeight: 1.3,
              color: 'var(--color-paper)',
            }}>
              Thrive: 10 Ways to Help Your Child Grow and Flourish
            </h2>

            {/* Pull */}
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

            {/* Description */}
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

            {/* Button */}
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

      {/* CTA */}
      <section style={{
        padding: '80px 48px',
        borderTop: '1px solid #2A2A2A',
        textAlign: 'center',
      }}>
        <a href="/consulting" className="btn-glow">
          Start a Conversation
        </a>
      </section>

    </main>
  )
}

const pStyle = {
  fontFamily: '"IBM Plex Mono", monospace',
  fontSize: '15px',
  lineHeight: 1.9,
  opacity: 0.65,
  marginBottom: '28px',
}

const boldStyle = {
  color: '#F5F1E8',
  opacity: 1,
  fontWeight: 700,
  textShadow: '0 0 25px rgba(245,241,232,0.7), 0 0 50px rgba(232,228,220,0.3)',
}
