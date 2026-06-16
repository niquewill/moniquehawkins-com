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

      <style>{`
        @keyframes glow {
          0%, 100% {
            color: #E8E4DC;
            text-shadow: 0 0 20px rgba(232,228,220,0.3);
          }
          50% {
            color: #ffffff;
            text-shadow: 0 0 40px rgba(232,228,220,0.8), 0 0 80px rgba(232,228,220,0.3);
          }
        }
        .use-word {
          animation: glow 3s ease-in-out infinite;
          display: inline-block;
        }
        .btn-glow {
          font-family: 'IBM Plex Mono', 'Courier New', monospace;
          font-size: 11px;
          letter-spacing: 0.1em;
          text-transform: uppercase;
          color: #FAFAFA;
          text-decoration: none;
          padding: 14px 28px;
          border: 1px solid rgba(255,255,255,0.4);
          transition: all 0.3s;
          display: inline-block;
        }
        .btn-glow:hover {
          border-color: #E8E4DC;
          color: #E8E4DC;
          text-shadow: 0 0 20px rgba(232,228,220,0.6), 0 0 40px rgba(232,228,220,0.3);
        }
        .btn-text {
          font-family: 'IBM Plex Mono', 'Courier New', monospace;
          font-size: 11px;
          letter-spacing: 0.1em;
          text-transform: uppercase;
          color: #FAFAFA;
          text-decoration: none;
          opacity: 0.45;
          transition: all 0.3s;
        }
        .btn-text:hover {
          opacity: 1;
          color: #E8E4DC;
          text-shadow: 0 0 20px rgba(232,228,220,0.6);
        }
      `}</style>

      {/* Top label */}
      <p style={{
        position: 'absolute',
        top: '100px',
        left: '48px',
        fontFamily: '"IBM Plex Mono", "Courier New", monospace',
        fontSize: '11px',
        letterSpacing: '0.15em',
        textTransform: 'uppercase',
        opacity: 0.35,
      }}>
        Monique Hawkins
      </p>

      {/* Role label */}
      <p style={{
        fontFamily: '"IBM Plex Mono", "Courier New", monospace',
        fontSize: '11px',
        letterSpacing: '0.15em',
        textTransform: 'uppercase',
        opacity: 0.7,
        marginBottom: '24px',
      }}>
        Technology Instructor · Microsoft 365 &amp; Copilot · Legal Technology
      </p>

      {/* Main headline */}
      <h1 style={{
        fontFamily: 'Arial Black, sans-serif',
        fontStyle: 'normal',
        fontSize: 'clamp(40px, 8vw, 100px)',
        lineHeight: 0.92,
        fontWeight: 900,
        letterSpacing: '-0.03em',
        textTransform: 'uppercase',
        maxWidth: '900px',
        marginBottom: '40px',
      }}>
        I TEACH<br />
        HUMANS TO <span className="use-word">USE</span><br />
        TECHNOLOGY.
      </h1>

      {/* Subtext */}
      <p style={{
        fontFamily: '"IBM Plex Mono", "Courier New", monospace',
        fontSize: '16px',
        lineHeight: 1.8,
        opacity: 0.75,
        maxWidth: '480px',
        marginBottom: '40px',
      }}>
        20+ years helping people adopt new tools. Now bringing that into
        legal teams navigating Microsoft 365 and Copilot.
      </p>

      {/* Buttons */}
      <div style={{ display: 'flex', gap: '16px', alignItems: 'center' }}>
        <a href="/consulting" className="btn-glow">
          Start a Conversation
        </a>
        <a href="/about" className="btn-text">
          Read My Story
        </a>
      </div>

    </main>
  )
}