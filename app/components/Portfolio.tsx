export default function Portfolio() {
  return (
    <section style={{
      padding: '120px 48px',
      background: 'var(--color-ink)',
      borderTop: '1px solid #2A2A2A',
    }}>

      <div style={{
        display: 'flex',
        alignItems: 'baseline',
        justifyContent: 'space-between',
        marginBottom: '64px',
        paddingBottom: '24px',
        borderBottom: '1px solid #2A2A2A',
        maxWidth: '1100px',
        margin: '0 auto 64px',
      }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '20px' }}>
          <span style={{
            fontFamily: '"IBM Plex Mono", monospace',
            fontSize: '11px',
            opacity: 0.3,
            letterSpacing: '0.06em',
          }}>
            03.
          </span>
          <h2 style={{
            fontFamily: 'Arial Black, sans-serif',
            fontSize: '20px',
            textTransform: 'uppercase',
            letterSpacing: '-0.01em',
          }}>
            Things I&apos;ve Built
          </h2>
        </div>
      </div>

      <div style={{
        maxWidth: '1100px',
        margin: '0 auto',
        display: 'grid',
        gridTemplateColumns: '1fr 1fr',
        gap: '48px',
        alignItems: 'center',
        background: '#141414',
        padding: '48px',
      }}>

        <div style={{
          width: '100%',
          aspectRatio: '16 / 10',
          overflow: 'hidden',
          border: '1px solid #2A2A2A',
        }}>
          <img
            src="/images/pickleball-florida.png"
            alt="PickleballFloridaUSA.com homepage screenshot"
            style={{
              width: '100%',
              height: '100%',
              objectFit: 'cover',
            }}
          />
        </div>

        <div>
          <p style={{
            fontFamily: '"IBM Plex Mono", monospace',
            fontSize: '10px',
            letterSpacing: '0.1em',
            textTransform: 'uppercase',
            opacity: 0.5,
            marginBottom: '20px',
            padding: '4px 10px',
            border: '1px solid #2A2A2A',
            display: 'inline-block',
          }}>
            Personal Project
          </p>

          <h3 style={{
            fontFamily: 'Arial Black, sans-serif',
            fontSize: 'clamp(22px, 3vw, 32px)',
            textTransform: 'uppercase',
            letterSpacing: '-0.01em',
            lineHeight: 1.1,
            marginBottom: '20px',
          }}>
            PickleballFloridaUSA.com
          </h3>

          <p style={{
            fontFamily: '"IBM Plex Mono", monospace',
            fontSize: '14px',
            lineHeight: 1.8,
            opacity: 0.6,
            marginBottom: '24px',
          }}>
            A full-featured resource site for Florida pickleball players —
            built with Claude AI, Google Maps API, RSS feed integration,
            Cloudflare, and AI-generated graphics. My first personal web
            project since stepping away from a coding bootcamp years ago.
            Proof that AI changes what&apos;s possible for a non-developer.
          </p>

          <p style={{
            fontFamily: '"IBM Plex Mono", monospace',
            fontSize: '11px',
            opacity: 0.4,
            letterSpacing: '0.04em',
            marginBottom: '28px',
          }}>
            Claude AI · Cloudflare · Google Maps API · Midjourney · DALL-E · Meta Suite
          </p>

          
            <a href="https://pickleballfloridausa.com"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-glow"
          >
            Visit the Site
          </a>
        </div>

      </div>

    </section>
  )
}