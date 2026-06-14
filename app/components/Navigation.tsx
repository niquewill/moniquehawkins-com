'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'

export default function Navigation() {
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 60)
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

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
        fontFamily: 'var(--font-body), monospace',
        fontSize: '13px',
        fontWeight: 500,
        letterSpacing: '0.06em',
        textTransform: 'uppercase',
        color: '#FAFAFA',
        textDecoration: 'none',
      }}>
        Monique Hawkins
      </Link>

      {/* Nav Links */}
      <ul style={{
        display: 'flex',
        gap: '32px',
        listStyle: 'none',
      }}>
        {['About', 'Work', 'Insights', 'Consulting'].map((item) => (
          <li key={item}>
            <Link href={`/${item.toLowerCase()}`} style={{
              fontFamily: 'var(--font-body), monospace',
              fontSize: '11px',
              letterSpacing: '0.08em',
              textTransform: 'uppercase',
              color: '#FAFAFA',
              textDecoration: 'none',
              opacity: 0.6,
              transition: 'opacity 0.2s',
            }}
            onMouseEnter={e => (e.currentTarget.style.opacity = '1')}
            onMouseLeave={e => (e.currentTarget.style.opacity = '0.6')}
            >
              {item}
            </Link>
          </li>
        ))}
      </ul>

      {/* CTA Button */}
      <Link href="/contact" style={{
        fontFamily: 'var(--font-body), monospace',
        fontSize: '11px',
        letterSpacing: '0.08em',
        textTransform: 'uppercase',
        color: '#FAFAFA',
        textDecoration: 'none',
        padding: '9px 18px',
        border: '1px solid rgba(255,255,255,0.3)',
        transition: 'border-color 0.2s',
      }}
      onMouseEnter={e => (e.currentTarget.style.borderColor = '#FAFAFA')}
      onMouseLeave={e => (e.currentTarget.style.borderColor = 'rgba(255,255,255,0.3)')}
      >
        Contact →
      </Link>

    </nav>
  )
}