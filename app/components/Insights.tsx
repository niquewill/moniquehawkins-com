export default function Insights() {
  const articles = [
    {
      category: 'Legal AI',
      date: 'Coming Soon',
      title: 'Why Most Law Firms Will Get Copilot Wrong — And How to Not Be One of Them',
      excerpt: 'The technology is ready. The workflows aren\'t. Here\'s what I\'ve seen and what actually needs to change.',
      readTime: '8 min read',
      featured: true,
    },
    {
      category: 'Workflow',
      date: 'Coming Soon',
      title: 'The 5 Copilot Prompts Every Attorney Needs',
      readTime: '5 min read',
    },
    {
      category: 'AI Training',
      date: 'Coming Soon',
      title: 'How to Run an AI Training That People Actually Use',
      readTime: '6 min read',
    },
  ]

  return (
    <section style={{
      padding: '120px 48px',
      background: 'var(--color-ink)',
      borderTop: '1px solid #2A2A2A',
    }}>
      <div style={{ maxWidth: '1100px', margin: '0 auto' }}>

        {/* Header */}
        <div style={{
          display: 'flex',
          alignItems: 'baseline',
          justifyContent: 'space-between',
          marginBottom: '48px',
          paddingBottom: '24px',
          borderBottom: '1px solid #2A2A2A',
        }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '20px' }}>
            <span style={{
              fontFamily: '"IBM Plex Mono", monospace',
              fontSize: '11px',
              opacity: 0.3,
            }}>
              04.
            </span>
            <h2 style={{
              fontFamily: 'Arial Black, sans-serif',
              fontSize: '20px',
              textTransform: 'uppercase',
              letterSpacing: '-0.01em',
            }}>
              Workflow Intelligence
            </h2>
          </div>
          <span style={{
            fontFamily: '"IBM Plex Mono", monospace',
            fontSize: '11px',
            letterSpacing: '0.08em',
            textTransform: 'uppercase',
            opacity: 0.4,
          }}>
            All Insights →
          </span>
        </div>

        {/* Featured article */}
        <div style={{
          background: '#141414',
          padding: '40px',
          marginBottom: '2px',
        }}>
          <div style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            marginBottom: '20px',
          }}>
            <span style={{
              fontFamily: '"IBM Plex Mono", monospace',
              fontSize: '10px',
              letterSpacing: '0.1em',
              textTransform: 'uppercase',
              padding: '4px 10px',
              border: '1px solid #2A2A2A',
              opacity: 0.5,
            }}>
              {articles[0].category}
            </span>
            <span style={{
              fontFamily: '"IBM Plex Mono", monospace',
              fontSize: '10px',
              opacity: 0.3,
            }}>
              {articles[0].date}
            </span>
          </div>

          <h3 style={{
            fontFamily: 'Arial Black, sans-serif',
            fontSize: 'clamp(20px, 2.5vw, 28px)',
            textTransform: 'uppercase',
            letterSpacing: '-0.01em',
            lineHeight: 1.15,
            marginBottom: '16px',
            maxWidth: '600px',
          }}>
            {articles[0].title}
          </h3>

          <p style={{
            fontFamily: '"IBM Plex Mono", monospace',
            fontSize: '13px',
            lineHeight: 1.8,
            opacity: 0.5,
            maxWidth: '480px',
            marginBottom: '20px',
          }}>
            {articles[0].excerpt}
          </p>

          <span style={{
            fontFamily: '"IBM Plex Mono", monospace',
            fontSize: '10px',
            opacity: 0.3,
          }}>
            {articles[0].readTime}
          </span>
        </div>

        {/* Two-column grid */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: '1fr 1fr',
          gap: '2px',
        }}>
          {articles.slice(1).map((article) => (
            <div
              key={article.title}
              style={{
                background: '#141414',
                padding: '32px',
              }}
            >
              <div style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
                marginBottom: '16px',
              }}>
                <span style={{
                  fontFamily: '"IBM Plex Mono", monospace',
                  fontSize: '10px',
                  letterSpacing: '0.1em',
                  textTransform: 'uppercase',
                  padding: '4px 10px',
                  border: '1px solid #2A2A2A',
                  opacity: 0.5,
                }}>
                  {article.category}
                </span>
                <span style={{
                  fontFamily: '"IBM Plex Mono", monospace',
                  fontSize: '10px',
                  opacity: 0.3,
                }}>
                  {article.date}
                </span>
              </div>

              <h3 style={{
                fontFamily: 'Arial Black, sans-serif',
                fontSize: '15px',
                textTransform: 'uppercase',
                letterSpacing: '-0.01em',
                lineHeight: 1.2,
                marginBottom: '16px',
              }}>
                {article.title}
              </h3>

              <span style={{
                fontFamily: '"IBM Plex Mono", monospace',
                fontSize: '10px',
                opacity: 0.3,
              }}>
                {article.readTime}
              </span>
            </div>
          ))}
        </div>

      </div>
    </section>
  )
}