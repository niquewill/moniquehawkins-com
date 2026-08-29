'use client'

import { useState } from 'react'

type Status = 'idle' | 'sending' | 'sent' | 'error'

export default function NewsletterForm() {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [business, setBusiness] = useState('')
  const [status, setStatus] = useState<Status>('idle')
  const [errorMsg, setErrorMsg] = useState('')

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    setStatus('sending')
    setErrorMsg('')
    try {
      const res = await fetch('/api/subscribe', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ name, email, business }),
      })
      if (!res.ok) {
        const data = await res.json().catch(() => ({}))
        throw new Error(data.error || 'Something went wrong. Please try again.')
      }
      setStatus('sent')
      setName('')
      setEmail('')
      setBusiness('')
    } catch (err) {
      setStatus('error')
      setErrorMsg(err instanceof Error ? err.message : 'Something went wrong.')
    }
  }

  const inputStyle: React.CSSProperties = {
    fontFamily: '"IBM Plex Mono", monospace',
    fontSize: '14px',
    width: '100%',
    background: 'transparent',
    border: 'none',
    borderBottom: '1px solid rgba(245,241,232,0.2)',
    color: '#F5F1E8',
    padding: '12px 0',
    outline: 'none',
  }

  return (
    <div
      style={{
        border: '1px solid rgba(245,241,232,0.2)',
        padding: '40px',
        display: 'flex',
        flexDirection: 'column',
        gap: '20px',
      }}
    >
      <p
        style={{
          fontFamily: '"IBM Plex Mono", monospace',
          fontSize: '12px',
          letterSpacing: '0.15em',
          textTransform: 'uppercase',
          color: '#F5F1E8',
          opacity: 0.6,
        }}
      >
        Subscribe to The Workflow
      </p>

      {status === 'sent' ? (
        <p
          style={{
            fontFamily: '"IBM Plex Mono", monospace',
            fontSize: '14px',
            lineHeight: 1.8,
            color: '#F5F1E8',
          }}
        >
          You&apos;re in — welcome to The Workflow. Look out for the next issue in
          your inbox.
        </p>
      ) : (
        <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
          <input
            type="text"
            placeholder="Your name"
            aria-label="Your name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
            style={inputStyle}
          />
          <input
            type="email"
            placeholder="Email address"
            aria-label="Email address"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            style={inputStyle}
          />
          <input
            type="text"
            placeholder="Business or role"
            aria-label="Business or role"
            value={business}
            onChange={(e) => setBusiness(e.target.value)}
            style={inputStyle}
          />

          {status === 'error' && (
            <p
              style={{
                fontFamily: '"IBM Plex Mono", monospace',
                fontSize: '12px',
                color: '#E8A0A0',
              }}
            >
              {errorMsg}
            </p>
          )}

          <button
            type="submit"
            disabled={status === 'sending'}
            style={{
              fontFamily: '"IBM Plex Mono", monospace',
              fontSize: '12px',
              letterSpacing: '0.1em',
              textTransform: 'uppercase',
              color: 'var(--color-ink)',
              background: '#F5F1E8',
              border: 'none',
              padding: '16px 28px',
              cursor: status === 'sending' ? 'default' : 'pointer',
              opacity: status === 'sending' ? 0.6 : 1,
              transition: 'all 0.2s',
            }}
          >
            {status === 'sending' ? 'Subscribing…' : 'Subscribe to The Workflow →'}
          </button>

          <p
            style={{
              fontFamily: '"IBM Plex Mono", monospace',
              fontSize: '11px',
              opacity: 0.3,
              textAlign: 'center',
            }}
          >
            No spam. Unsubscribe anytime.
          </p>
        </form>
      )}
    </div>
  )
}
