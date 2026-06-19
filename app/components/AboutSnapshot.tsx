export default function AboutSnapshot() {
  return (
    <section style={{
      padding: '120px 48px',
      background: 'var(--color-ink)',
    }}>
      <div style={{
        maxWidth: '1100px',
        margin: '0 auto',
        display: 'grid',
        gridTemplateColumns: '0.8fr 1fr',
        gap: '64px',
        alignItems: 'center',
      }}>

        {/* Image placeholder */}
        <div style={{
          aspectRatio: '4 / 5',
          background: '#141414',
          border: '1px solid #2A2A2A',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
        }}>
          <p style={{
            fontFamily: '"IBM Plex Mono", monospace',
            fontSize: '10px',
            letterSpacing: '0.08em',
            textTransform: 'uppercase',
            opacity: 0.2,
          }}>
            Photo Coming Soon
          </p>
        </div>

        {/* Content */}
        <div>
          <p style={{
            fontFamily: '"IBM Plex Mono", monospace',
            fontSize: '11px',
            letterSpacing: '0.12em',
            textTransform: 'uppercase',
            opacity: 0.4,
            marginBottom: '24px',
          }}>
            About
          </p>

          <h2 style={{
            fontFamily: '"DM Serif Display", Georgia, serif',
            fontStyle: 'italic',
            fontSize: 'clamp(26px, 3vw, 38px)',
            lineHeight: 1.3,
            fontWeight: 400,
            marginBottom: '28px',
          }}>
            &ldquo;It&apos;s not about if. It&apos;s about when.&rdquo;
          </h2>

          <p style={{
            fontFamily: '"IBM Plex Mono", monospace',
            fontSize: '14px',
            lineHeight: 1.85,
            opacity: 0.6,
            marginBottom: '32px',
          }}>
            I&apos;m not a technologist who learned to teach. I&apos;m an educator
            who learned that technology is the medium. Twenty years in classrooms,
            training rooms, and now law firms — always asking the same question:
            how do I help this person feel capable instead of left behind?
          </p>

          <a href="/about" className="btn-text">
            Read My Full Story →
          </a>
        </div>

      </div>
    </section>
  )
}