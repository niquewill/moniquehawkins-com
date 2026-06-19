export default function Positioning() {
  const roles = [
    {
      num: '01.',
      title: 'TECHNOLOGY\nINSTRUCTOR',
      desc: 'Designing and delivering training that actually sticks — built on real adult learning theory, not just product walkthroughs.',
    },
    {
      num: '02.',
      title: 'MICROSOFT 365\n& COPILOT',
      desc: 'Teaching legal professionals to actually use the tools already sitting on their desktop — Word, Outlook, Teams, and Copilot.',
    },
    {
      num: '03.',
      title: 'LEGAL\nTECHNOLOGY',
      desc: 'Supporting the platforms that run a law firm — iManage, Draftable, Kofax Power PDF, Intellek, Scribe, Litera, BigHand, and Intapp Time.',
    },
  ]

  return (
    <section style={{
      padding: '80px 48px',
      background: '#111111',
      borderTop: '1px solid #2A2A2A',
      borderBottom: '1px solid #2A2A2A',
    }}>
      <div style={{
        maxWidth: '1100px',
        margin: '0 auto',
        display: 'grid',
        gridTemplateColumns: '1fr 1fr 1fr',
        gap: '0',
      }}>
        {roles.map((role, i) => (
          <div
            key={role.num}
            style={{
              padding: '0 40px',
              borderRight: i < 2 ? '1px solid #2A2A2A' : 'none',
            }}
          >
            <p style={{
              fontFamily: '"IBM Plex Mono", monospace',
              fontSize: '11px',
              opacity: 0.3,
              marginBottom: '16px',
            }}>
              {role.num}
            </p>
            <h3 style={{
              fontFamily: 'Arial Black, sans-serif',
              fontSize: '17px',
              textTransform: 'uppercase',
              letterSpacing: '-0.01em',
              lineHeight: 1.15,
              marginBottom: '20px',
              whiteSpace: 'pre-line',
            }}>
              {role.title}
            </h3>
            <p style={{
              fontFamily: '"IBM Plex Mono", monospace',
              fontSize: '12.5px',
              lineHeight: 1.8,
              opacity: 0.5,
            }}>
              {role.desc}
            </p>
          </div>
        ))}
      </div>
    </section>
  )
}