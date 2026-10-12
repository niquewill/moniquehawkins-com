// app/insights/ArticleShell.tsx
// Shared layout for every Insights article: header, readable body, sources, and back link.

import Link from 'next/link'
import type { ReactNode } from 'react'
import type { Article } from './articles'

const MONO = '"IBM Plex Mono", "Courier New", monospace'
const SERIF = '"DM Serif Display", Georgia, serif'

type Source = { fact: string; label: string; href: string }

export default function ArticleShell({
  article,
  sources,
  sourcesNote,
  children,
}: {
  article: Article
  sources?: Source[]
  sourcesNote?: string
  children: ReactNode
}) {
  return (
    <main style={{ background: 'var(--color-ink)', paddingTop: '112px' }}>
      <style>{`
        .mh-art { max-width: 900px; margin: 0 auto; padding: 32px clamp(20px, 5vw, 48px) 96px; }
        .mh-art-body { max-width: 680px; margin: 0 auto; }
        .mh-art-back { font-family: ${MONO}; font-size: 12px; letter-spacing: 0.08em; text-transform: uppercase; color: #F5F1E8; opacity: 0.6; text-decoration: none; }
        .mh-art-back:hover { opacity: 1; }
        .mh-art-meta { display: flex; flex-wrap: wrap; gap: 10px 16px; align-items: center; margin: 40px 0 20px; font-family: ${MONO}; font-size: 11px; letter-spacing: 0.1em; text-transform: uppercase; color: #F5F1E8; }
        .mh-art-tag { border: 1px solid rgba(245,241,232,0.25); padding: 4px 10px; opacity: 0.8; }
        .mh-art-dim { opacity: 0.55; }
        .mh-art-title { font-family: ${SERIF}; font-style: italic; font-weight: 400; font-size: clamp(36px, 6vw, 64px); line-height: 1.05; color: #F5F1E8; margin: 0 0 20px; }
        .mh-art-dek { font-family: ${MONO}; font-size: 14px; line-height: 1.8; color: #F5F1E8; opacity: 0.65; max-width: 620px; margin: 0 0 12px; }
        .mh-art-byline { font-family: ${MONO}; font-size: 12px; letter-spacing: 0.06em; text-transform: uppercase; color: #F5F1E8; opacity: 0.55; margin: 0 0 36px; }
        .mh-art-figure { margin: 0 0 48px; }
        .mh-art-figure img { width: 100%; height: auto; display: block; border: 1px solid rgba(245,241,232,0.12); }
        .mh-art-p { font-family: Georgia, "Times New Roman", serif; font-size: 19px; line-height: 1.75; color: #E8E4DC; margin: 0 0 22px; }
        .mh-art-p a, .mh-art-li a { color: #F5F1E8; text-decoration: underline; text-underline-offset: 3px; text-decoration-color: rgba(245,241,232,0.45); }
        .mh-art-p strong, .mh-art-li strong { color: #FFFFFF; }
        .mh-art-h2 { font-family: ${SERIF}; font-style: italic; font-weight: 400; font-size: clamp(26px, 4vw, 36px); line-height: 1.15; color: #F5F1E8; margin: 56px 0 20px; padding-top: 28px; border-top: 1px solid rgba(245,241,232,0.15); }
        .mh-art-list { margin: 0 0 26px; padding-left: 24px; }
        .mh-art-li { font-family: Georgia, "Times New Roman", serif; font-size: 19px; line-height: 1.7; color: #E8E4DC; margin: 0 0 12px; padding-left: 4px; }
        .mh-art-cite { font-family: ${MONO}; font-size: 12px; white-space: nowrap; }
        .mh-art-cite a { color: #F5F1E8; opacity: 0.6; text-decoration: none; border-bottom: 1px solid rgba(245,241,232,0.3); }
        .mh-art-cite a:hover { opacity: 1; }
        .mh-art-pull { font-family: ${SERIF}; font-style: italic; font-size: clamp(24px, 3.6vw, 32px); line-height: 1.3; color: #F5F1E8; margin: 36px 0; padding-left: 24px; border-left: 2px solid #F5F1E8; }
        .mh-art-cta { margin: 56px 0 32px; padding: 32px clamp(20px, 4vw, 40px) 12px; border: 1px solid rgba(245,241,232,0.25); background: #121212; }
        .mh-art-cta-label { font-family: ${MONO}; font-size: 12px; letter-spacing: 0.2em; text-transform: uppercase; color: #F5F1E8; opacity: 0.75; margin: 0 0 18px; }
        .mh-art-cta-links { display: flex; flex-wrap: wrap; gap: 12px; margin: 4px 0 26px; }
        .mh-art-btn { font-family: ${MONO}; font-size: 12px; letter-spacing: 0.08em; text-transform: uppercase; color: #F5F1E8; text-decoration: none; padding: 12px 20px; border: 1px solid rgba(245,241,232,0.5); }
        .mh-art-btn:hover { border-color: #F5F1E8; }
        .mh-art-btn-solid { background: #F5F1E8; color: #0A0A0A; border-color: #F5F1E8; }
        .mh-art-btn-solid:hover { background: #FFFFFF; }
        .mh-art-bio { font-family: ${MONO}; font-size: 13px; line-height: 1.8; color: #F5F1E8; opacity: 0.7; font-style: italic; margin: 0 0 48px; }
        .mh-art-bio a { color: #F5F1E8; }
        .mh-art-sources { border-top: 1px solid rgba(245,241,232,0.15); padding-top: 28px; }
        .mh-art-sources h2 { font-family: ${MONO}; font-size: 12px; letter-spacing: 0.2em; text-transform: uppercase; color: #F5F1E8; opacity: 0.75; margin: 0 0 8px; font-weight: 500; }
        .mh-art-sources-note { font-family: ${MONO}; font-size: 12px; color: #F5F1E8; opacity: 0.5; margin: 0 0 18px; }
        .mh-art-sources ol { margin: 0; padding-left: 22px; }
        .mh-art-sources li { font-family: ${MONO}; font-size: 12px; line-height: 1.7; color: #F5F1E8; opacity: 0.7; margin: 0 0 12px; }
        .mh-art-sources a { color: #F5F1E8; }
        .mh-art-foot { margin-top: 56px; }
        @media (max-width: 640px) {
          .mh-art-p, .mh-art-li { font-size: 18px; }
          .mh-art-cite { white-space: normal; }
        }
      `}</style>

      <article className="mh-art">
        <div className="mh-art-body">
          <Link href="/insights" className="mh-art-back">← All Insights</Link>
          <div className="mh-art-meta">
            <span className="mh-art-tag">{article.category}</span>
            <span className="mh-art-dim">{article.date}</span>
            <span className="mh-art-dim">{article.readTime}</span>
          </div>
          <h1 className="mh-art-title">{article.title}</h1>
          <p className="mh-art-dek">{article.excerpt}</p>
          <p className="mh-art-byline">By Monique Hawkins</p>
        </div>

        <div className="mh-art-body">
          {children}

          {sources && sources.length > 0 && (
            <section className="mh-art-sources" aria-labelledby="sources-title">
              <h2 id="sources-title">Sources</h2>
              {sourcesNote && <p className="mh-art-sources-note">{sourcesNote}</p>}
              <ol>
                {sources.map((s) => (
                  <li key={s.href}>
                    {s.fact}.{' '}
                    <a href={s.href} target="_blank" rel="noopener noreferrer">{s.label}</a>
                  </li>
                ))}
              </ol>
            </section>
          )}

          <div className="mh-art-foot">
            <Link href="/insights" className="mh-art-back">← Back to all Insights</Link>
          </div>
        </div>
      </article>
    </main>
  )
}

/* ── Building blocks used inside article pages ─────────────────── */

export const H2 = ({ children }: { children: ReactNode }) => <h2 className="mh-art-h2">{children}</h2>

export const P = ({ children }: { children: ReactNode }) => <p className="mh-art-p">{children}</p>

export const Pull = ({ children }: { children: ReactNode }) => <p className="mh-art-pull">{children}</p>

export const UL = ({ items }: { items: ReactNode[] }) => (
  <ul className="mh-art-list">
    {items.map((it, i) => <li key={i} className="mh-art-li">{it}</li>)}
  </ul>
)

export const OL = ({ items }: { items: ReactNode[] }) => (
  <ol className="mh-art-list">
    {items.map((it, i) => <li key={i} className="mh-art-li">{it}</li>)}
  </ol>
)

// A short source link shown in parentheses after a statistic
export const Cite = ({ href, children }: { href: string; children: ReactNode }) => (
  <span className="mh-art-cite">
    (<a href={href} target="_blank" rel="noopener noreferrer">{children}</a>)
  </span>
)
