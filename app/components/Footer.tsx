import Link from 'next/link'

export default function Footer() {
  return (
    <footer style={{
      padding: '64px 48px 40px',
      background: 'var(--color-ink)',
    }}>
      <div style={{ maxWidth: '1100px', margin: '0 auto' }}>

        <div style={{
          display: 'grid',
          gridTemplateColumns: '1.5fr 1fr 1fr',
          gap: '48px',
          marginBottom: '64px',
        }}>

          {/* Brand */}
          <div>
            <p style={{
              fontFamily: 'Arial Black, sans-serif',
              fontSize: '16px',
              textTransform: 'uppercase',
              letterSpacing: '-0.01em',
              marginBottom: '12px',
            }}>
              Monique Hawkins
            </p>
            <p style={{
              fontFamily: '"IBM Plex Mono", monospace',
              fontSize: '12px',
              lineHeight: 1.8,
              opacity: 0.4,
              maxWidth: '220px',
            }}>
              Technology Instructor. Microsoft 365 & Copilot. Legal Technology.
            </p>
          </div>

          {/* Navigate */}
          <div>
            <p style={{
              fontFamily: '"IBM Plex Mono", monospace',
              fontSize: '10px',
              letterSpacing: '0.1em',
              textTransform: 'uppercase',
              opacity: 0.3,
              marginBottom: '16px',
            }}>
              Navigate
            </p>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
              {['About', 'Work', 'Insights', 'Consulting'].map((item) => (
                <Link
                  key={item}
                  href={`/${item.toLowerCase()}`}
                  style={{
                    fontFamily: '"IBM Plex Mono", monospace',
                    fontSize: '12px',
                    color: '#FAFAFA',
                    textDecoration: 'none',
                    opacity: 0.45,
                  }}
                >
                  {item}
                </Link>
              ))}
            </div>
          </div>

          {/* Connect */}
          <div>
            <p style={{
              fontFamily: '"IBM Plex Mono", monospace',
              fontSize: '10px',
              letterSpacing: '0.1em',
              textTransform: 'uppercase',
              opacity: 0.3,
              marginBottom: '16px',
            }}>
              Connect
            </p>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
              <Link href="/contact" style={{
                fontFamily: '"IBM Plex Mono", monospace',
                fontSize: '12px',
                color: '#FAFAFA',
                textDecoration: 'none',
                opacity: 0.45,
              }}>
                Contact
              </Link>
            </div>
          </div>

        </div>

        <div style={{
          borderTop: '1px solid #2A2A2A',
          paddingTop: '20px',
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
        }}>
          <span style={{
            fontFamily: '"IBM Plex Mono", monospace',
            fontSize: '10px',
            opacity: 0.25,
          }}>
            © 2026 Monique Hawkins. All rights reserved.
          </span>
        </div>

      </div>
    </footer>
  )
}