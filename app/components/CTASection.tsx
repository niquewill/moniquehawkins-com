export default function CTASection() {
  return (
    <section style={{
      padding: '120px 48px',
      background: '#111111',
      borderTop: '1px solid #2A2A2A',
      borderBottom: '1px solid #2A2A2A',
      textAlign: 'center',
    }}>
      <div style={{ maxWidth: '700px', margin: '0 auto' }}>

        <p style={{
          fontFamily: '"IBM Plex Mono", monospace',
          fontSize: '11px',
          letterSpacing: '0.12em',
          textTransform: 'uppercase',
          opacity: 0.35,
          marginBottom: '32px',
        }}>
          05. Work Together
        </p>

        <h2 style={{
          fontFamily: '"DM Serif Display", Georgia, serif',
          fontStyle: 'italic',
          fontSize: 'clamp(28px, 4vw, 48px)',
          lineHeight: 1.25,
          fontWeight: 400,
          marginBottom: '48px',
        }}>
          Your team deserves to work with technology — not around it.
        </h2>

        <a href="/consulting"
          className="btn-glow"
          style={{ marginBottom: '40px', display: 'inline-block' }}
        >
          Start a Conversation
        </a>

        <p style={{
          fontFamily: '"IBM Plex Mono", monospace',
          fontSize: '11px',
          letterSpacing: '0.08em',
          textTransform: 'uppercase',
          opacity: 0.3,
          marginTop: '40px',
        }}>
          Training · Onboarding · Workflow Support · Microsoft 365 & Copilot
        </p>

      </div>
    </section>
  )
}