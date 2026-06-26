export default function MethodologyPage() {
  const andragogy = [
    { num: '01.', title: 'PRIOR EXPERIENCE', desc: 'They already draft motions' },
    { num: '02.', title: 'IMMEDIATE PROBLEM', desc: 'This motion is due Friday' },
    { num: '03.', title: 'SELF-DIRECTION', desc: 'They choose how to use it' },
  ]

const bloomLevels = [
    { num: '6', title: 'CREATE', desc: 'Builds their own workflow', stat: '450+ hrs/yr saved \u2022 $53K value per lawyer', source: 'Thomson Reuters 2026 Future of Professionals Report', opacity: 1 },
    { num: '5', title: 'EVALUATE', desc: 'Judges if it\u2019s client-ready', stat: '6\u201320% revenue gain in ~50% of firms', source: 'Wolters Kluwer 2026 Future Ready Lawyer Survey', opacity: 0.85 },
    { num: '4', title: 'ANALYZE', desc: 'Spots where it got it wrong', stat: 'Fewer write-downs, less rework & risk', source: 'LPM Mag, 2026 legal AI ROI trends', opacity: 0.7 },
    { num: '3', title: 'APPLY', desc: 'Drafts using a prompt', stat: '6\u201320% weekly time savings on routine tasks', source: 'Wolters Kluwer 2026', opacity: 0.55 },
    { num: '2', title: 'UNDERSTAND', desc: 'Grasps what a prompt does', stat: 'Builds the foundation \u2014 no measurable ROI yet', source: null, opacity: 0.4 },
    { num: '1', title: 'REMEMBER', desc: 'Knows where it lives', stat: null, source: null, opacity: 0.3 },
  ]

  return (
    <main style={{ background: 'var(--color-ink)', paddingTop: '120px' }}>

      {/* Hero */}
      <section style={{ padding: '40px 48px 80px', maxWidth: '800px', margin: '0 auto', textAlign: 'center' }}>
        <p style={{
          fontFamily: '"IBM Plex Mono", monospace',
          fontSize: '11px',
          letterSpacing: '0.15em',
          textTransform: 'uppercase',
          opacity: 0.4,
          marginBottom: '24px',
        }}>
          Methodology
        </p>
        <h1 style={{
          fontFamily: 'Arial Black, sans-serif',
          fontSize: 'clamp(34px, 6vw, 64px)',
          fontWeight: 900,
          textTransform: 'uppercase',
          letterSpacing: '-0.03em',
          lineHeight: 1.0,
          marginBottom: '24px',
        }}>
          Two Questions,<br />
          <span className="use-word">One Training Moment</span>
        </h1>
        <p style={{
          fontFamily: '"IBM Plex Mono", monospace',
          fontSize: '15px',
          lineHeight: 1.8,
          opacity: 0.65,
          maxWidth: '560px',
          margin: '0 auto',
        }}>
          Why an attorney engages, and how deep their skill goes, happen together.
          This is the framework behind every training session I design.
        </p>
      </section>

      {/* Andragogy section */}
      <section style={{ padding: '0 48px 60px', maxWidth: '950px', margin: '0 auto' }}>
        <div style={{
          border: '1px solid rgba(232,228,220,0.3)',
          padding: '28px',
          textAlign: 'center',
          marginBottom: '32px',
          background: '#141414',
        }}>
          <p style={{
            fontFamily: '"IBM Plex Mono", monospace',
            fontSize: '11px',
            letterSpacing: '0.2em',
            opacity: 0.5,
            marginBottom: '12px',
          }}>
            ANDRAGOGY ASKS
          </p>
          <p style={{
            fontFamily: 'Arial Black, sans-serif',
            fontSize: 'clamp(18px, 2.5vw, 26px)',
            fontWeight: 900,
          }}>
            <span className="use-word">WHY WILL THEY ENGAGE RIGHT NOW?</span>
          </p>
        </div>

        <div style={{
          display: 'grid',
          gridTemplateColumns: '1fr 1fr 1fr',
          gap: '3px',
          marginBottom: '32px',
        }}>
          {andragogy.map((item) => (
            <div key={item.num} style={{
              background: '#141414',
              border: '1px solid #2A2A2A',
              padding: '32px 24px',
            }}>
              <p style={{
                fontFamily: 'Arial Black, sans-serif',
                fontSize: '28px',
                fontWeight: 900,
                color: '#E8E4DC',
                textShadow: '0 0 20px rgba(232,228,220,0.4)',
                marginBottom: '16px',
              }}>
                {item.num}
              </p>
              <p style={{
                fontFamily: 'Arial Black, sans-serif',
                fontSize: '15px',
                fontWeight: 900,
                marginBottom: '12px',
                letterSpacing: '-0.01em',
              }}>
                {item.title}
              </p>
              <p style={{
                fontFamily: '"IBM Plex Mono", monospace',
                fontSize: '13px',
                opacity: 0.55,
                lineHeight: 1.7,
              }}>
                {item.desc}
              </p>
            </div>
          ))}
        </div>

        <div style={{ textAlign: 'center', marginBottom: '32px' }}>
          <p style={{
            fontFamily: '"IBM Plex Mono", monospace',
            fontSize: '11px',
            letterSpacing: '0.15em',
            opacity: 0.4,
            marginBottom: '8px',
          }}>
            LEADS TO ENGAGEMENT, THEN
          </p>
          <div style={{ fontSize: '24px', opacity: 0.3 }}>&darr;</div>
        </div>

        <div style={{
          background: '#1a1a1a',
          border: '2px solid #E8E4DC',
          padding: '36px',
          textAlign: 'center',
        }}>
          <p style={{
            fontFamily: 'Arial Black, sans-serif',
            fontSize: 'clamp(18px, 2.5vw, 24px)',
            fontWeight: 900,
            marginBottom: '12px',
          }}>
            <span className="use-word">MOST VENDOR-LED TRAINING STOPS AT STEP 3.</span>
          </p>
          <p style={{
            fontFamily: '"IBM Plex Mono", monospace',
            fontSize: '14px',
            opacity: 0.6,
          }}>
            We go deeper.
          </p>
        </div>
      </section>

      {/* Bloom's staircase */}
      <section style={{ padding: '60px 48px 100px', maxWidth: '950px', margin: '0 auto' }}>
        <p style={{
          fontFamily: '"IBM Plex Mono", monospace',
          fontSize: '11px',
          letterSpacing: '0.15em',
          opacity: 0.5,
          marginBottom: '40px',
          textAlign: 'center',
        }}>
          BLOOM&apos;S TAXONOMY &mdash; DEPTH OF MASTERY
        </p>

 <div style={{ display: 'flex', flexDirection: 'column', gap: '6px' }}>
          {bloomLevels.map((level, i) => (
 <div
              key={level.num}
              style={{
                background: i === 0 ? '#1f1f1f' : '#141414',
                border: i === 0 ? '1px solid rgba(232,228,220,0.4)' : '1px solid #2A2A2A',
                padding: '20px 28px',
                marginLeft: `${(5 - i) * 36}px`,
                marginRight: '0px',
                width: `calc(100% - ${(5 - i) * 36}px)`,
              }}
            >
              <div style={{ display: 'flex', alignItems: 'center', gap: '24px' }}>
                <span style={{
                  fontFamily: 'Arial Black, sans-serif',
                  fontSize: '32px',
                  fontWeight: 900,
                  color: '#E8E4DC',
                  opacity: level.opacity,
                  minWidth: '40px',
                }}>
                  {level.num}
                </span>
                <span style={{
                  fontFamily: 'Arial Black, sans-serif',
                  fontSize: '15px',
                  fontWeight: 900,
                  opacity: level.opacity,
                  minWidth: '160px',
                  letterSpacing: '-0.01em',
                }}>
                  {level.title}
                </span>
                <span style={{
                  fontFamily: '"DM Serif Display", Georgia, serif',
                  fontStyle: 'italic',
                  fontSize: '16px',
                  fontWeight: 400,
                  color: '#E8E4DC',
                  opacity: level.opacity,
                  marginLeft: 'auto',
                  textAlign: 'right',
                }}>
                  {level.desc}
                </span>
              </div>

              {level.stat && (
                <>
                  <div style={{
                    borderTop: '1px solid #2A2A2A',
                    marginTop: '14px',
                    paddingTop: '14px',
                  }}>
                      <p style={{
                        fontFamily: 'Arial Black, sans-serif',
                        fontSize: '16px',
                        fontWeight: 900,
                        color: '#FFFFFF',
                        marginBottom: '6px',
                      }}>
                        {level.stat}
                      </p>                  {level.source && (
                      <p style={{
                        fontFamily: '"IBM Plex Mono", monospace',
                        fontSize: '9px',
                        color: '#4A4A4A',
                        marginTop: '6px',
                      }}>
                        {level.source}
                      </p>
                    )}
                  </div>
                </>
              )}
            </div>
          ))}
        </div>
      </section>

      {/* Closing line */}
      <section style={{ padding: '0 48px 100px', textAlign: 'center' }}>
        <p style={{
          fontFamily: '"DM Serif Display", Georgia, serif',
          fontStyle: 'italic',
          fontSize: 'clamp(20px, 2.5vw, 28px)',
          opacity: 0.85,
        }}>
          A combination of Knowles&apos; adult learning theory and Bloom&apos;s Taxonomy.
        </p>
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