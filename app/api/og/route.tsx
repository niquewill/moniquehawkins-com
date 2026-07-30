import { ImageResponse } from 'next/og'

export const runtime = 'edge'

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url)
  const title = (searchParams.get('title') ?? 'Monique Hawkins').slice(0, 100)
  const eyebrow = (searchParams.get('eyebrow') ?? 'AI WORKFLOW CONSULTANT').slice(0, 40)

  return new ImageResponse(
    (
      <div
        style={{
          height: '100%',
          width: '100%',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'space-between',
          background: '#0A0A0A',
          padding: '80px',
          fontFamily: 'monospace',
        }}
      >
        <div style={{ color: '#6B6B6B', fontSize: 26, letterSpacing: 6, textTransform: 'uppercase' }}>
          {eyebrow}
        </div>
        <div
          style={{
            color: '#E8E4DC',
            fontSize: 78,
            fontWeight: 700,
            lineHeight: 1.05,
            maxWidth: 960,
            letterSpacing: '-0.02em',
          }}
        >
          {title}
        </div>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <div style={{ color: '#FAFAFA', fontSize: 28, letterSpacing: 3, textTransform: 'uppercase' }}>
            Monique Hawkins
          </div>
          <div style={{ width: 220, height: 2, background: '#E8E4DC', opacity: 0.5 }} />
        </div>
      </div>
    ),
    { width: 1200, height: 630 }
  )
}
