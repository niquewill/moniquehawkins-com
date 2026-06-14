'use client'

export default function Home() {
  return (
    <main style={{
      minHeight: '100vh',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'flex-start',
      justifyContent: 'flex-end',
      padding: '64px 48px',
      background: 'var(--color-ink)',
      position: 'relative',
    }}>

      {/* Top label */}
      <p style={{
        position: 'absolute',
        top: '100px',
        left: '48px',
        fontFamily: 'var(--font-body), monospace',
        fontSize: '11px',
        letterSpacing: '0.15em',
        textTransform: 'uppercase',
        opacity: 0.35,
      }}>
        Monique Hawkins
      </p>

      {/* Role label */}
      <p style={{
        fontFamily: 'var(--font-body), monospace',
        fontSize: '11px',
        letterSpacing: '0.15em',
        textTransform: 'uppercase',
        opacity: 0.4,
        marginBottom: '24px',
      }}>
        Technology Instructor · Microsoft 365 & Copilot · Legal Technology
      </p>

      {/* Main headline */}
      <h1 style={{
        fontFamily: 'var(--font-editorial), Georgia, serif',
        fontStyle: 'italic',
        fontSize: 'clamp(40px, 8vw, 100px)',
        lineHeight: 0.95,
        fontWeight: 400,
        maxWidth: '800px',
        marginBottom: '40px',
      }}>
        Teaching humans to use technology — one law firm at a time.
      </h1>

      {/* Subtext */}
      <p style={{
        fontFamily: 'var(--font-body), monospace',
        fontSize: '14px',
        lineHeight: 1.8,
        opacity: 0.5,
        maxWidth: '480px',
        marginBottom: '40px',
      }}>
        20+ years helping people adopt new tools. Now bringing that into
        legal teams navigating Microsoft 365 and Copilot.
      </p>

      {/* Buttons */}
      <div style={{ display: 'flex', gap: '16px', alignItems: 'center' }}>
        <a href="/consulting" style={{
          fontFamily: 'var(--font-body), monospace',
          fontSize: '11px',
          letterSpacing: '0.1em',
          textTransform: 'uppercase',
          color: '#FAFAFA',
          textDecoration: 'none',
          padding: '14px 28px',
          border: '1px solid rgba(255,255,255,0.35)',
          transition: 'all 0.2s',
        }}
        onMouseEnter={e => (e.currentTarget.style.background = 'rgba(255,255,255,0.08)')}
        onMouseLeave={e => (e.currentTarget.style.background = 'transparent')}
        >
          Start a Conversation →
        </a>

        <a href="/about" style={{
          fontFamily: 'var(--font-body), monospace',
          fontSize: '11px',
          letterSpacing: '0.1em',
          textTransform: 'uppercase',
          color: '#FAFAFA',
          textDecoration: 'none',
          opacity: 0.45,
          transition: 'opacity 0.2s',
        }}
        onMouseEnter={e => (e.currentTarget.style.opacity = '1')}
        onMouseLeave={e => (e.currentTarget.style.opacity = '0.45')}
        >
          Read My Story ↓
        </a>
      </div>

    </main>
  )
}