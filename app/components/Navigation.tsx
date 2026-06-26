'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'

export default function Navigation() {
  const [scrolled, setScrolled] = useState(false)
  const [hoveredLink, setHoveredLink] = useState<string | null>(null)
  const [hoveredCta, setHoveredCta] = useState(false)

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 60)
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const navLinkStyle = (name: string) => ({
    fontFamily: '"IBM Plex Mono", "Courier New", monospace',
    fontSize: '11px',
    letterSpacing: '0.08em',
    textTransform: 'uppercase' as const,
    color: hoveredLink === name ? '#E8E4DC' : '#FAFAFA',
    textDecoration: 'none',
    opacity: hoveredLink === name ? 1 : 0.8,
    transition: 'all 0.2s',
    textShadow: hoveredLink === name
      ? '0 0 20px rgba(232,228,220,0.6), 0 0 40px rgba(232,228,220,0.3)'
      : 'none',
  })

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
      padding: '20px 48px',
      background: scrolled ? 'rgba(10,10,10,0.95)' : 'transparent',
      borderBottom: scrolled ? '1px solid #2A2A2A' : '1px solid transparent',
      backdropFilter: scrolled ? 'blur(12px)' : 'none',
      transition: 'all 0.4s ease',
    }}>

      {/* Wordmark */}
      <Link href="/" style={{
        fontFamily: '"IBM Plex Mono", "Courier New", monospace',
        fontSize: '13px',
        fontWeight: 500,
        letterSpacing: '0.06em',
        textTransform: 'uppercase',
        color: '#FAFAFA',
        textDecoration: 'none',
        opacity: 0.9,
      }}>
        Monique Hawkins
      </Link>

      {/* Nav Links */}
      <ul style={{
        display: 'flex',
        gap: '32px',
        listStyle: 'none',
      }}>
    {['About', 'Methodology', 'Work', 'Insights', 'Consulting'].map((item) => (
          <li key={item}>
            <Link
              href={`/${item.toLowerCase()}`}
              style={navLinkStyle(item)}
              onMouseEnter={() => setHoveredLink(item)}
              onMouseLeave={() => setHoveredLink(null)}
            >
              {item}
            </Link>
          </li>
        ))}
      </ul>

      {/* CTA Button */}
      <Link
        href="/contact"
        style={{
          fontFamily: '"IBM Plex Mono", "Courier New", monospace',
          fontSize: '11px',
          letterSpacing: '0.08em',
          textTransform: 'uppercase',
          color: hoveredCta ? '#E8E4DC' : '#FAFAFA',
          textDecoration: 'none',
          padding: '9px 18px',
          border: hoveredCta
            ? '1px solid #E8E4DC'
            : '1px solid rgba(255,255,255,0.4)',
          transition: 'all 0.2s',
          textShadow: hoveredCta
            ? '0 0 20px rgba(232,228,220,0.6)'
            : 'none',
        }}
        onMouseEnter={() => setHoveredCta(true)}
        onMouseLeave={() => setHoveredCta(false)}
      >
        Contact →
      </Link>

    </nav>
  )
}