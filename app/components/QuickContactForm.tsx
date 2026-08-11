'use client'

import { useState } from 'react'

type Status = 'idle' | 'sending' | 'sent' | 'error'

export default function QuickContactForm() {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [message, setMessage] = useState('')
  const [status, setStatus] = useState<Status>('idle')
  const [errorMsg, setErrorMsg] = useState('')

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    setStatus('sending')
    setErrorMsg('')
    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ name, email, message }),
      })
      if (!res.ok) {
        const data = await res.json().catch(() => ({}))
        throw new Error(data.error || 'Something went wrong. Please try again.')
      }
      setStatus('sent')
      setName('')
      setEmail('')
      setMessage('')
    } catch (err) {
      setStatus('error')
      setErrorMsg(err instanceof Error ? err.message : 'Something went wrong.')
    }
  }

  const labelStyle: React.CSSProperties = {
    fontFamily: '"IBM Plex Mono", monospace',
    fontSize: '11px',
    letterSpacing: '0.12em',
    textTransform: 'uppercase',
    color: '#F5F1E8',
    opacity: 0.6,
    marginBottom: '10px',
    display: 'block',
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
    <section
      id="consulting-contact"
      style={{
        padding: '100px clamp(24px, 6vw, 120px)',
        maxWidth: '760px',
        margin: '0 auto',
        borderTop: '1px solid rgba(245,241,232,0.15)',
      }}
    >
      <span style={{ ...labelStyle, opacity: 0.5 }}>Send a Question</span>
      <h2
        style={{
          fontFamily: '"DM Serif Display", Georgia, serif',
          fontStyle: 'italic',
          fontSize: 'clamp(32px, 5vw, 56px)',
          lineHeight: 1.0,
          fontWeight: 400,
          color: '#F5F1E8',
          margin: '12px 0 40px',
          letterSpacing: '-0.02em',
        }}
      >
        No commitment.<br />Just a straight answer.
      </h2>

      {status === 'sent' ? (
        <p
          style={{
            fontFamily: '"IBM Plex Mono", monospace',
            fontSize: '15px',
            lineHeight: 1.8,
            color: '#F5F1E8',
          }}
        >
          Thanks — your message is on its way. Monique will get back to you soon.
        </p>
      ) : (
        <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '32px' }}>
          <div>
            <label htmlFor="qc-name" style={labelStyle}>Your name</label>
            <input
              id="qc-name"
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
              style={inputStyle}
            />
          </div>
          <div>
            <label htmlFor="qc-email" style={labelStyle}>Email</label>
            <input
              id="qc-email"
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              style={inputStyle}
            />
          </div>
          <div>
            <label htmlFor="qc-message" style={labelStyle}>Your question</label>
            <textarea
              id="qc-message"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              required
              rows={4}
              style={{ ...inputStyle, resize: 'vertical' }}
            />
          </div>

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
              letterSpacing: '0.12em',
              textTransform: 'uppercase',
              color: 'var(--color-ink)',
              background: '#F5F1E8',
              border: 'none',
              padding: '16px 32px',
              cursor: status === 'sending' ? 'default' : 'pointer',
              alignSelf: 'flex-start',
              opacity: status === 'sending' ? 0.6 : 1,
              transition: 'all 0.2s',
            }}
          >
            {status === 'sending' ? 'Sending…' : 'Send question →'}
          </button>
        </form>
      )}
    </section>
  )
}
