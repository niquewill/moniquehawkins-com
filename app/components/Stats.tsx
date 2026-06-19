'use client'

import { useEffect, useRef, useState } from 'react'

function useCountUp(target: number, shouldStart: boolean) {
  const [count, setCount] = useState(0)

  useEffect(() => {
    if (!shouldStart) return
    let start = 0
    const duration = 1400
    const stepTime = 16
    const increment = target / (duration / stepTime)

    const timer = setInterval(() => {
      start += increment
      if (start >= target) {
        start = target
        clearInterval(timer)
      }
      setCount(Math.round(start))
    }, stepTime)

    return () => clearInterval(timer)
  }, [shouldStart, target])

  return count
}

function StatItem({ value, suffix, label, borderRight }: {
  value: number
  suffix: string
  label: string
  borderRight: boolean
}) {
  const ref = useRef<HTMLDivElement>(null)
  const [inView, setInView] = useState(false)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setInView(true)
      },
      { threshold: 0.5 }
    )
    if (ref.current) observer.observe(ref.current)
    return () => observer.disconnect()
  }, [])

  const count = useCountUp(value, inView)

  return (
    <div
      ref={ref}
      style={{
        padding: '32px',
        textAlign: 'center',
        borderRight: borderRight ? '1px solid #2A2A2A' : 'none',
      }}
    >
      <div style={{
        fontFamily: 'Arial Black, sans-serif',
        fontSize: 'clamp(36px, 5vw, 56px)',
        lineHeight: 1,
        letterSpacing: '-0.03em',
        marginBottom: '8px',
      }}>
        {count}{suffix}
      </div>
      <div style={{
        fontFamily: '"IBM Plex Mono", monospace',
        fontSize: '11px',
        opacity: 0.35,
        letterSpacing: '0.06em',
        textTransform: 'uppercase',
        lineHeight: 1.5,
      }}>
        {label}
      </div>
    </div>
  )
}

export default function Stats() {
  const stats = [
    { value: 20, suffix: '+', label: 'Years in\nTraining' },
    { value: 100, suffix: '+', label: 'Staff Trained\nAnnually' },
    { value: 5, suffix: '', label: 'States\nTrained Across' },
    { value: 8, suffix: '+', label: 'Legal Tech\nPlatforms' },
  ]

  return (
    <section style={{
      background: 'var(--color-ink)',
      borderTop: '1px solid #2A2A2A',
      borderBottom: '1px solid #2A2A2A',
      padding: '0 48px',
    }}>
      <div style={{
        maxWidth: '1100px',
        margin: '0 auto',
        display: 'grid',
        gridTemplateColumns: 'repeat(4, 1fr)',
      }}>
        {stats.map((stat, i) => (
          <StatItem
            key={stat.label}
            value={stat.value}
            suffix={stat.suffix}
            label={stat.label}
            borderRight={i < stats.length - 1}
          />
        ))}
      </div>
    </section>
  )
}