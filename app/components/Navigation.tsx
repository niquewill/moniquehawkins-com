'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'

const LINKS = [
  { label: 'About',       href: '/about'       },
  { label: 'Methodology', href: '/methodology' },
  { label: 'Work',        href: '/work'        },
  { label: 'Insights',    href: '/insights'    },
  { label: 'Consulting',  href: '/consulting'  },
  { label: 'Web Design',  href: '/web-design'  },
]

const MONO = '"IBM Plex Mono", "Courier New", monospace'

export default function Navigation() {
  const [scrolled, setScrolled] = useState(false)
  const [hoveredLink, setHoveredLink] = useState<string | null>(null)
  const [hoveredCta, setHoveredCta] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)
  const pathname = usePathname()

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 60)
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  // Close the phone menu whenever the page changes
  useEffect(() => { setMenuOpen(false) }, [pathname])

  // While the phone menu is open: stop the page behind it from scrolling, and let Escape close it
  useEffect(() => {
    if (!menuOpen) return
    const prev = document.body.style.overflow
    document.body.style.overflow = 'hidden'
    const onKey = (e: KeyboardEvent) => { if (e.key === 'Escape') setMenuOpen(false) }
    window.addEventListener('keydown', onKey)
    return () => {
      document.body.style.overflow = prev
      window.removeEventListener('keydown', onKey)
    }
  }, [menuOpen])

  const navLinkStyle = (name: string) => ({
    fontFamily: MONO,
    fontSize: '13px',
    fontWeight: 500,
    letterSpacing: '0.06em',
    textTransform: 'uppercase' as const,
    color: '#F5F1E8',
    textDecoration: 'none',
    opacity: 1,
    transition: 'all 0.2s',
    textShadow: hoveredLink === name
      ? '0 0 20px rgba(232,228,220,0.6), 0 0 40px rgba(232,228,220,0.3)'
      : '0 0 15px rgba(245,241,232,0.3)',
  })

  const solid = scrolled || menuOpen

  return (
    <nav style={{
      position: 'fixed',
      top: 0,
      left: 0,
      right: 0,
      zIndex: 100,
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      background: solid ? 'rgba(10,10,10,0.95)' : 'transparent',
      borderBottom: solid ? '1px solid #2A2A2A' : '1px solid transparent',
      // blur is switched off while the phone menu is open; otherwise it would trap the full-screen menu inside the bar
      backdropFilter: scrolled && !menuOpen ? 'blur(12px)' : 'none',
      transition: 'all 0.4s ease',
    }} className="mh-nav">

      {/* Desktop and phone layout rules */}
      <style>{`
        .mh-nav { padding: 20px 48px; }
        .mh-nav-toggle, .mh-nav-overlay { display: none; }
        @media (max-width: 960px) {
          .mh-nav { padding: 16px 20px; }
          .mh-nav-links, .mh-nav-cta { display: none !important; }
          .mh-nav-toggle { display: inline-flex; }
          .mh-nav-overlay.is-open { display: flex; }
        }
      `}</style>

      {/* Wordmark */}
      <Link href="/" style={{
        fontFamily: MONO,
        fontSize: '13px',
        fontWeight: 500,
        letterSpacing: '0.06em',
        textTransform: 'uppercase',
        color: '#FAFAFA',
        textDecoration: 'none',
        opacity: 0.9,
        position: 'relative',
        zIndex: 2,
      }}>
        Monique Hawkins
      </Link>

      {/* Desktop links */}
      <ul className="mh-nav-links" style={{
        display: 'flex',
        gap: '32px',
        listStyle: 'none',
        margin: 0,
        padding: 0,
      }}>
        {LINKS.map(({ label, href }) => (
          <li key={label}>
            <Link
              href={href}
              style={navLinkStyle(label)}
              onMouseEnter={() => setHoveredLink(label)}
              onMouseLeave={() => setHoveredLink(null)}
            >
              {label}
            </Link>
          </li>
        ))}
      </ul>

      {/* Desktop contact button */}
      <Link
        href="/contact"
        className="mh-nav-cta"
        style={{
          fontFamily: MONO,
          fontSize: '12px',
          fontWeight: 500,
          letterSpacing: '0.06em',
          textTransform: 'uppercase',
          color: '#F5F1E8',
          textDecoration: 'none',
          padding: '9px 18px',
          border: hoveredCta
            ? '1px solid #F5F1E8'
            : '1px solid rgba(245,241,232,0.4)',
          transition: 'all 0.2s',
          textShadow: hoveredCta
            ? '0 0 20px rgba(232,228,220,0.6)'
            : '0 0 15px rgba(245,241,232,0.3)',
        }}
        onMouseEnter={() => setHoveredCta(true)}
        onMouseLeave={() => setHoveredCta(false)}
      >
        Contact →
      </Link>

      {/* Phone menu button */}
      <button
        type="button"
        className="mh-nav-toggle"
        aria-expanded={menuOpen}
        aria-controls="mh-mobile-menu"
        aria-label={menuOpen ? 'Close menu' : 'Open menu'}
        onClick={() => setMenuOpen((o) => !o)}
        style={{
          position: 'relative',
          zIndex: 2,
          alignItems: 'center',
          gap: '10px',
          background: 'transparent',
          border: '1px solid rgba(245,241,232,0.4)',
          color: '#F5F1E8',
          padding: '9px 14px',
          minHeight: '44px',
          fontFamily: MONO,
          fontSize: '12px',
          fontWeight: 500,
          letterSpacing: '0.06em',
          textTransform: 'uppercase',
          cursor: 'pointer',
        }}
      >
        {menuOpen ? 'Close' : 'Menu'}
        <span aria-hidden="true" style={{ position: 'relative', width: 18, height: 12, display: 'inline-block' }}>
          <span style={{
            position: 'absolute', left: 0, right: 0, height: 1, background: '#F5F1E8',
            top: menuOpen ? 6 : 1, transform: menuOpen ? 'rotate(45deg)' : 'none', transition: 'all 0.25s',
          }} />
          <span style={{
            position: 'absolute', left: 0, right: 0, height: 1, background: '#F5F1E8',
            top: menuOpen ? 6 : 10, transform: menuOpen ? 'rotate(-45deg)' : 'none', transition: 'all 0.25s',
          }} />
        </span>
      </button>

      {/* Phone full-screen menu */}
      <div
        id="mh-mobile-menu"
        className={`mh-nav-overlay${menuOpen ? ' is-open' : ''}`}
        style={{
          position: 'fixed',
          inset: 0,
          zIndex: 1,
          background: '#0A0A0A',
          flexDirection: 'column',
          justifyContent: 'center',
          padding: '96px 28px 40px',
          overflowY: 'auto',
        }}
      >
        <ul style={{ listStyle: 'none', margin: 0, padding: 0 }}>
          {LINKS.map(({ label, href }, i) => (
            <li key={label} style={{ borderTop: '1px solid #2A2A2A' }}>
              <Link
                href={href}
                onClick={() => setMenuOpen(false)}
                style={{
                  display: 'flex',
                  alignItems: 'baseline',
                  gap: '16px',
                  padding: '16px 0',
                  color: '#F5F1E8',
                  textDecoration: 'none',
                  fontFamily: '"DM Serif Display", Georgia, serif',
                  fontSize: 'clamp(28px, 8vw, 40px)',
                  lineHeight: 1.1,
                }}
              >
                <span style={{ fontFamily: MONO, fontSize: '11px', color: '#6B6B6B', letterSpacing: '0.08em' }}>
                  {String(i + 1).padStart(2, '0')}.
                </span>
                {label}
              </Link>
            </li>
          ))}
        </ul>
        <Link
          href="/contact"
          onClick={() => setMenuOpen(false)}
          style={{
            marginTop: '32px',
            alignSelf: 'flex-start',
            fontFamily: MONO,
            fontSize: '13px',
            fontWeight: 500,
            letterSpacing: '0.06em',
            textTransform: 'uppercase',
            color: '#0A0A0A',
            background: '#F5F1E8',
            textDecoration: 'none',
            padding: '14px 22px',
          }}
        >
          Contact →
        </Link>
      </div>

    </nav>
  )
}
