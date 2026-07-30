'use client'

import { useState } from 'react'

const labelStyle: React.CSSProperties = {
  fontFamily: '"IBM Plex Mono", monospace',
  fontSize: '13px',
  letterSpacing: '0.2em',
  textTransform: 'uppercase',
  color: '#F5F1E8',
  opacity: 0.75,
  whiteSpace: 'nowrap',
  textShadow: '0 0 20px rgba(245,241,232,0.4)',
}

const fieldLabelStyle: React.CSSProperties = {
  fontFamily: '"IBM Plex Mono", monospace',
  fontSize: '11px',
  letterSpacing: '0.1em',
  textTransform: 'uppercase',
  color: '#F5F1E8',
  opacity: 0.5,
  marginBottom: '10px',
  display: 'block',
}

const inputBaseStyle: React.CSSProperties = {
  width: '100%',
  background: '#141414',
  border: '1px solid rgba(245,241,232,0.15)',
  color: '#F5F1E8',
  fontFamily: '"IBM Plex Mono", monospace',
  fontSize: '14px',
  padding: '14px 16px',
  outline: 'none',
  transition: 'all 0.25s',
}

type Status = 'idle' | 'loading' | 'success' | 'error'

export default function ContactPage() {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [message, setMessage] = useState('')
  const [status, setStatus] = useState<Status>('idle')
  const [errorMsg, setErrorMsg] = useState('')
  const [focusedField, setFocusedField] = useState<string | null>(null)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setStatus('loading')
    setErrorMsg('')

    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ name, email, message }),
      })

      const data = await res.json()

      if (!res.ok) {
        throw new Error(data.error || 'Something went wrong.')
      }

      setStatus('success')
      setName('')
      setEmail('')
      setMessage('')
    } catch (err) {
      setStatus('error')
      setErrorMsg(err instanceof Error ? err.message : 'Something went wrong. Please try again.')
    }
  }

  const fieldStyle = (field: string): React.CSSProperties => ({
    ...inputBaseStyle,
    borderColor: focusedField === field ? 'rgba(245,241,232,0.5)' : 'rgba(245,241,232,0.15)',
    boxShadow: focusedField === field ? '0 0 20px rgba(245,241,232,0.08)' : 'none',
  })

  return (
    <main style={{ background: 'var(--color-ink)', paddingTop: '120px' }}>

      {/* ── Hero ─────────────────────────────────────────────────── */}
      <section style={{
        padding: '60px clamp(24px, 6vw, 120px) 80px',
        maxWidth: '1200px',
        margin: '0 auto',
        borderBottom: '1px solid rgba(245,241,232,0.15)',
      }}>
        <p style={labelStyle}>Contact</p>
        <h1 style={{
          fontFamily: '"DM Serif Display", Georgia, serif',
          fontStyle: 'italic',
          fontSize: 'clamp(32px, 5vw, 64px)',
          lineHeight: 1.1,
          fontWeight: 400,
          color: '#F5F1E8',
          maxWidth: '700px',
          marginTop: '24px',
        }}>
          Let&rsquo;s talk about your team.
        </h1>
        <p style={{
          fontFamily: '"IBM Plex Mono", monospace',
          fontSize: '14px',
          lineHeight: 1.85,
          opacity: 0.55,
          maxWidth: '520px',
          marginTop: '24px',
        }}>
          Tell me a little about what you&rsquo;re working with and what&rsquo;s not working yet.
          I read every message myself and respond within 1–2 business days.
        </p>
      </section>

      {/* ── Form + Alternatives ──────────────────────────────────── */}
      <section style={{
        padding: '80px clamp(24px, 6vw, 120px)',
        maxWidth: '1200px',
        margin: '0 auto',
        display: 'grid',
        gridTemplateColumns: '1.3fr 1fr',
        gap: '80px',
      }}>

        {/* Form */}
        <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '28px' }}>

          <div>
            <label htmlFor="name" style={fieldLabelStyle}>Name</label>
            <input
              id="name"
              type="text"
              required
              value={name}
              onChange={(e) => setName(e.target.value)}
              onFocus={() => setFocusedField('name')}
              onBlur={() => setFocusedField(null)}
              style={fieldStyle('name')}
              placeholder="Your name"
            />
          </div>

          <div>
            <label htmlFor="email" style={fieldLabelStyle}>Email</label>
            <input
              id="email"
              type="email"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              onFocus={() => setFocusedField('email')}
              onBlur={() => setFocusedField(null)}
              style={fieldStyle('email')}
              placeholder="you@company.com"
            />
          </div>

          <div>
            <label htmlFor="message" style={fieldLabelStyle}>Message</label>
            <textarea
              id="message"
              required
              rows={6}
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              onFocus={() => setFocusedField('message')}
              onBlur={() => setFocusedField(null)}
              style={{ ...fieldStyle('message'), resize: 'vertical', minHeight: '140px' }}
              placeholder="What are you working on? What's the team dealing with right now?"
            />
          </div>

          <button
            type="submit"
            disabled={status === 'loading'}
            className="btn-glow"
            style={{
              border: 'none',
              background: 'transparent',
              cursor: status === 'loading' ? 'default' : 'pointer',
              opacity: status === 'loading' ? 0.5 : 1,
              width: 'fit-content',
            }}
          >
            {status === 'loading' ? 'Sending…' : 'Send Message'}
          </button>

          {status === 'success' && (
            <p style={{
              fontFamily: '"IBM Plex Mono", monospace',
              fontSize: '13px',
              color: '#F5F1E8',
              opacity: 0.8,
              textShadow: '0 0 15px rgba(245,241,232,0.4)',
            }}>
              ✓ Message sent. I&rsquo;ll get back to you within 1–2 business days.
            </p>
          )}

          {status === 'error' && (
            <p style={{
              fontFamily: '"IBM Plex Mono", monospace',
              fontSize: '13px',
              color: '#E8A0A0',
            }}>
              {errorMsg}
            </p>
          )}
        </form>

        {/* Alternatives */}
        <div style={{
          borderLeft: '1px solid rgba(245,241,232,0.15)',
          paddingLeft: '48px',
          display: 'flex',
          flexDirection: 'column',
          gap: '40px',
        }}>
          <div>
            <p style={fieldLabelStyle}>Prefer to just book time?</p>
            <a
              href="https://calendly.com/edupgradellc/30min"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-text"
            >
              Book a Discovery Call →
            </a>
          </div>

          <div>
            <p style={fieldLabelStyle}>Or email directly</p>
            <a
              href="mailto:MH@moniquehawkins.com"
              className="btn-text"
            >
              MH@moniquehawkins.com
            </a>
          </div>

          <div>
            <p style={fieldLabelStyle}>Response time</p>
            <p style={{
              fontFamily: '"IBM Plex Mono", monospace',
              fontSize: '13px',
              lineHeight: 1.8,
              opacity: 0.5,
              maxWidth: '280px',
            }}>
              1–2 business days. For urgent requests, booking a call directly is fastest.
            </p>
          </div>
        </div>

      </section>

    </main>
  )
}
