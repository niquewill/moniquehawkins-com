// app/web-design/page.tsx
// MoHawk Designs sales page — ported from index.html
// Images go in: public/web-design/nmb-desktop.jpg  &  public/web-design/nmb-phone.jpg

import type { Metadata } from 'next'
import Image from 'next/image'

export const metadata: Metadata = {
  title: 'MoHawk Designs | Church Website Design in New Orleans & Louisiana',
  description:
    'MoHawk Designs builds modern, mobile-friendly websites for churches and small businesses in New Orleans, Kenner, Metairie and across Louisiana, then teaches your team to update the site yourselves. Start with a free consultation.',
  keywords:
    'church website design, church web designer New Orleans, church website Louisiana, affordable church website, website for small church, small business website New Orleans, Kenner web design, Metairie web design, AI website design',
  alternates: {
    canonical: 'https://moniquehawkins.com/web-design',
  },
  openGraph: {
    type: 'website',
    siteName: 'MoHawk Designs',
    title: 'MoHawk Designs | Websites for churches and small businesses',
    description:
      'Modern church and small business websites, built fast with AI and handed over with training so your team can keep them current.',
    url: 'https://moniquehawkins.com/web-design',
    images: [
      {
        url: 'https://moniquehawkins.com/web-design/nmb-desktop.jpg',
        width: 1440,
        height: 900,
        alt: 'New Mount Bethel Baptist Church website',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
  },
}

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'ProfessionalService',
  name: 'MoHawk Designs',
  url: 'https://moniquehawkins.com/web-design',
  image: 'https://moniquehawkins.com/web-design/nmb-desktop.jpg',
  description:
    'Website design for churches and small businesses in the New Orleans area, built with AI and handed over with hands-on training.',
  areaServed: ['New Orleans', 'Kenner', 'Metairie', 'Jefferson Parish', 'Louisiana'],
  address: {
    '@type': 'PostalAddress',
    addressLocality: 'New Orleans',
    addressRegion: 'LA',
    addressCountry: 'US',
  },
  serviceType: ['Church website design', 'Small business website design', 'Website training'],
  makesOffer: {
    '@type': 'Offer',
    name: 'Free website consultation',
    price: '0',
    priceCurrency: 'USD',
  },
}

// ─── SVG icons ────────────────────────────────────────────────────────────────

const IconClock = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" style={{ width: 34, height: 34, color: '#16504F' }}>
    <circle cx="12" cy="12" r="9" /><path d="M12 7v5l3 3" />
  </svg>
)
const IconEdit = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" style={{ width: 34, height: 34, color: '#16504F' }}>
    <path d="M4 20h4L19 9l-4-4L4 16z" /><path d="M13.5 6.5l4 4" />
  </svg>
)
const IconLock = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" style={{ width: 34, height: 34, color: '#16504F' }}>
    <rect x="3" y="11" width="18" height="10" rx="2" /><path d="M7 11V7a5 5 0 0 1 10 0v4" />
  </svg>
)
const IconGlobe = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" style={{ width: 34, height: 34, color: '#16504F' }}>
    <path d="M3 12h18M12 3a14 14 0 0 1 0 18M12 3a14 14 0 0 0 0 18" /><circle cx="12" cy="12" r="9" />
  </svg>
)
const IconPhone = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" style={{ width: 34, height: 34, color: '#16504F' }}>
    <rect x="7" y="2" width="10" height="20" rx="2" /><path d="M11 18h2" />
  </svg>
)
const IconSearch = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" style={{ width: 34, height: 34, color: '#16504F' }}>
    <circle cx="11" cy="11" r="7" /><path d="M21 21l-5-5" />
  </svg>
)
const IconCheck = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" style={{ width: 24, height: 24, marginTop: 4, color: '#16504F' }}>
    <path d="M5 12l5 5L20 7" />
  </svg>
)
const LogoMark = () => (
  <svg width="40" height="40" viewBox="0 0 64 64" aria-hidden="true">
    <rect width="64" height="64" rx="14" fill="#0F3A3D" />
    <path d="M10 40 L32 18 L54 40 L45 40 L32 27 L19 40Z" fill="#F2B33D" />
    <path d="M22 46 L32 36 L42 46Z" fill="#EEF3F2" />
  </svg>
)

// ─── Page component ───────────────────────────────────────────────────────────

export default function WebDesignPage() {
  return (
    <>
      {/* JSON-LD */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <div style={{ background: '#EEF3F2', color: '#1D2B2C', fontFamily: "'Source Serif 4', Georgia, serif", fontSize: 19, lineHeight: 1.65, WebkitFontSmoothing: 'antialiased' }}>
        {/* ── Google Fonts ── */}
        <style>{`
          @import url('https://fonts.googleapis.com/css2?family=Bricolage+Grotesque:opsz,wght@12..96,500;12..96,700;12..96,800&family=Source+Serif+4:ital,opsz,wght@0,8..60,400;0,8..60,600;1,8..60,400&display=swap');

          /* Hide the global MoniqueHawkins.com nav on this page */
          body > nav, #__next > nav, nav[style*="position: fixed"] { display: none !important; }

          .mhd-body * { box-sizing: border-box; margin: 0; }
          .mhd-body html { scroll-behavior: smooth; }
          .mhd-body a { color: inherit; }
          .mhd-body img { max-width: 100%; height: auto; display: block; }
          .mhd-body p { max-width: 62ch; }

          .mhd-btn {
            display: inline-flex; align-items: center; gap: 10px;
            font: 700 17px/1 'Bricolage Grotesque', system-ui, sans-serif;
            text-decoration: none; padding: 17px 26px; border-radius: 999px;
            transition: background .2s, color .2s; cursor: pointer;
          }
          .mhd-btn-primary { background: #F2B33D; color: #0F3A3D; }
          .mhd-btn-primary:hover { background: #FFC75C; }
          .mhd-btn-ghost { color: #0F3A3D; border: 2px solid #0F3A3D; background: transparent; }
          .mhd-btn-ghost:hover { background: #0F3A3D; color: #EEF3F2; }

          .mhd-wrap { width: min(1160px, 100% - 40px); margin-inline: auto; }

          .mhd-h1 { font-family: 'Bricolage Grotesque', system-ui, sans-serif; color: #0F3A3D; letter-spacing: -0.02em; line-height: 1.05; font-size: clamp(44px, 6.2vw, 80px); font-weight: 800; max-width: 12ch; }
          .mhd-h2 { font-family: 'Bricolage Grotesque', system-ui, sans-serif; color: #0F3A3D; letter-spacing: -0.02em; line-height: 1.05; font-size: clamp(34px, 4.6vw, 54px); font-weight: 800; max-width: 18ch; }
          .mhd-h3 { font-family: 'Bricolage Grotesque', system-ui, sans-serif; color: #0F3A3D; font-size: 23px; font-weight: 700; letter-spacing: -0.01em; line-height: 1.2; }
          .mhd-lede { font-size: 21px; color: #536866; }

          /* Header */
          .mhd-header { padding: 22px 0; }
          .mhd-header-inner { display: flex; align-items: center; justify-content: space-between; gap: 16px; }
          .mhd-brand { display: flex; align-items: center; gap: 12px; text-decoration: none; font: 800 24px/1 'Bricolage Grotesque', system-ui, sans-serif; color: #0F3A3D; letter-spacing: -0.02em; }
          .mhd-brand small { display: block; font: 500 14px/1.2 'Bricolage Grotesque', system-ui, sans-serif; color: #536866; letter-spacing: 0; margin-top: 3px; }
          .mhd-nav { display: flex; gap: 26px; align-items: center; }
          .mhd-nav a { font: 600 16px/1 'Bricolage Grotesque', system-ui, sans-serif; text-decoration: none; color: #0F3A3D; }
          .mhd-nav a:not(.mhd-btn):hover { text-decoration: underline; text-underline-offset: 4px; }
          .mhd-nav .mhd-btn { padding: 12px 20px; font-size: 15px; }

          /* Hero */
          .mhd-hero { padding: 40px 0 0; overflow: hidden; }
          .mhd-hero-grid { display: grid; grid-template-columns: 1fr 1.15fr; gap: 48px; align-items: center; }
          .mhd-hero-ctas { display: flex; flex-wrap: wrap; gap: 14px; }
          .mhd-devices { position: relative; padding: 20px 0 70px; }
          .mhd-browser { background: #fff; border-radius: 14px; box-shadow: 0 30px 60px -20px rgba(15,58,61,0.45); overflow: hidden; transform: rotate(-1.5deg); border: 1px solid #CFDCDA; }
          .mhd-browser-bar { display: flex; align-items: center; gap: 7px; padding: 11px 14px; background: #E3EBEA; }
          .mhd-browser-dot { width: 11px; height: 11px; border-radius: 50%; background: #B9C9C7; display: inline-block; }
          .mhd-browser-url { margin-left: 10px; flex: 1; background: #fff; border-radius: 6px; font: 500 13px/1 'Bricolage Grotesque', system-ui, sans-serif; color: #536866; padding: 7px 12px; }
          .mhd-phone { position: absolute; right: -8px; bottom: 10px; width: 30%; border: 7px solid #10292A; border-radius: 30px; overflow: hidden; box-shadow: 0 24px 50px -12px rgba(15,58,61,0.55); transform: rotate(3deg); background: #10292A; }
          .mhd-figcap { position: absolute; left: 0; bottom: 18px; font-size: 15px; font-style: italic; color: #536866; }
          .mhd-figcap a { font-style: normal; font-weight: 600; color: #0F3A3D; }

          /* Section layout */
          .mhd-section { padding: 110px 0; }
          .mhd-section-head { display: grid; grid-template-columns: 1fr 1fr; gap: 40px; align-items: end; margin-bottom: 56px; }
          .mhd-section-head p { color: #536866; }

          /* Benefits */
          .mhd-benefits { background: #fff; }
          .mhd-benefit-list { display: grid; grid-template-columns: 1fr 1fr; column-gap: 64px; }
          .mhd-benefit { padding: 28px 0; border-top: 2px solid #0F3A3D; display: grid; grid-template-columns: 44px 1fr; gap: 16px; }
          .mhd-benefit p { margin-top: 8px; color: #536866; font-size: 18px; }

          /* Compare table */
          .mhd-compare-wrap { overflow-x: auto; margin-top: 64px; }
          .mhd-table { width: 100%; border-collapse: collapse; min-width: 560px; font-size: 18px; }
          .mhd-table caption { text-align: left; font: 700 23px/1.2 'Bricolage Grotesque', system-ui, sans-serif; color: #0F3A3D; margin-bottom: 18px; }
          .mhd-table th, .mhd-table td { text-align: left; padding: 16px 18px; border-bottom: 1px solid #CFDCDA; vertical-align: top; }
          .mhd-table thead th { font: 700 16px/1.2 'Bricolage Grotesque', system-ui, sans-serif; color: #536866; }
          .mhd-table thead th:last-child { color: #0F3A3D; background: #FFF4DB; border-radius: 10px 10px 0 0; }
          .mhd-table tbody th { font: 600 17px/1.35 'Bricolage Grotesque', system-ui, sans-serif; color: #0F3A3D; width: 26%; }
          .mhd-table tbody td:last-child { background: #FFF9EA; color: #1D2B2C; }

          /* Process */
          .mhd-process { background: #0F3A3D; color: #DCE7E5; }
          .mhd-process .mhd-h2, .mhd-process .mhd-h3 { color: #fff; }
          .mhd-process .mhd-section-head p { color: #A9C1BE; }
          .mhd-steps { list-style: none; padding: 0; display: grid; grid-template-columns: repeat(3, 1fr); gap: 0; counter-reset: step; }
          .mhd-step { counter-increment: step; padding: 34px 30px 34px 0; border-top: 1px solid rgba(220,231,229,0.25); }
          .mhd-step::before { content: counter(step); display: block; font: 800 64px/1 'Bricolage Grotesque', system-ui, sans-serif; color: #F2B33D; margin-bottom: 14px; }
          .mhd-step p { margin-top: 10px; font-size: 18px; color: #C2D4D1; }

          /* Work */
          .mhd-work-grid { display: grid; grid-template-columns: 1.3fr 1fr; gap: 56px; align-items: center; }
          .mhd-work-grid img { border-radius: 12px; border: 1px solid #CFDCDA; box-shadow: 0 24px 50px -24px rgba(15,58,61,0.5); }
          .mhd-work-list { margin: 22px 0 30px; padding-left: 22px; }
          .mhd-work-list li { margin-bottom: 8px; }
          .mhd-work-list li::marker { color: #16504F; }

          /* Training */
          .mhd-training { background: #fff; }
          .mhd-training-grid { display: grid; grid-template-columns: 1fr 1fr; gap: 64px; align-items: start; }
          .mhd-checklist { list-style: none; padding: 0; }
          .mhd-checklist li { display: grid; grid-template-columns: 30px 1fr; gap: 12px; padding: 14px 0; border-bottom: 1px solid #CFDCDA; }

          /* FAQ */
          .mhd-faq-list { max-width: 820px; }
          .mhd-faq-list details { border-top: 2px solid #0F3A3D; padding: 22px 0; }
          .mhd-faq-list details:last-child { border-bottom: 2px solid #0F3A3D; }
          .mhd-faq-list summary { cursor: pointer; list-style: none; display: flex; justify-content: space-between; gap: 20px; font: 700 21px/1.3 'Bricolage Grotesque', system-ui, sans-serif; color: #0F3A3D; }
          .mhd-faq-list summary::-webkit-details-marker { display: none; }
          .mhd-faq-list summary::after { content: '+'; font-size: 28px; line-height: 1; transition: transform .2s; }
          .mhd-faq-list details[open] summary::after { transform: rotate(45deg); }
          .mhd-faq-list details p { margin-top: 12px; color: #536866; font-size: 18px; }

          /* CTA */
          .mhd-cta { background: #F2B33D; padding: 100px 0; }
          .mhd-cta-grid { display: grid; grid-template-columns: 1.2fr 1fr; gap: 56px; align-items: center; }
          .mhd-cta p { margin-top: 18px; color: #3E3420; font-size: 20px; }
          .mhd-cta .mhd-btn-primary { background: #0F3A3D; color: #fff; }
          .mhd-cta .mhd-btn-primary:hover { background: #16504F; }
          .mhd-cta-box { background: #fff; border-radius: 18px; padding: 34px; }
          .mhd-cta-box h3 { margin-bottom: 14px; }
          .mhd-cta-ol { padding-left: 22px; margin-bottom: 26px; }
          .mhd-cta-ol li { margin-bottom: 8px; }
          .mhd-cta-small { display: block; margin-top: 14px; font-size: 15px; color: #536866; }

          /* Footer */
          .mhd-footer { background: #0B2A2C; color: #A9C1BE; padding: 44px 0; font-size: 16px; }
          .mhd-footer-inner { display: flex; flex-wrap: wrap; justify-content: space-between; gap: 16px; align-items: center; }
          .mhd-footer .mhd-brand { color: #fff; font-size: 20px; }
          .mhd-footer a { color: #DCE7E5; }

          /* Responsive */
          @media (max-width: 900px) {
            .mhd-hero-grid { grid-template-columns: 1fr; }
            .mhd-devices { padding-bottom: 80px; }
            .mhd-section { padding: 80px 0; }
            .mhd-section-head { grid-template-columns: 1fr; gap: 18px; }
            .mhd-work-grid { grid-template-columns: 1fr; }
            .mhd-training-grid { grid-template-columns: 1fr; gap: 36px; }
            .mhd-cta-grid { grid-template-columns: 1fr; }
            .mhd-steps { grid-template-columns: 1fr 1fr; }
          }
          @media (max-width: 760px) {
            .mhd-nav a:not(.mhd-btn) { display: none; }
            .mhd-benefit-list { grid-template-columns: 1fr; }
          }
          @media (max-width: 560px) {
            .mhd-steps { grid-template-columns: 1fr; }
          }
        `}</style>

        {/* ── MoHawk page wrapper: scoped so it doesn't leak into the rest of the site ── */}
        <div className="mhd-body">

          {/* ── Header ── */}
          <header className="mhd-header">
            <div className="mhd-wrap mhd-header-inner">
              <a className="mhd-brand" href="#top" aria-label="MoHawk Designs home">
                <LogoMark />
                <span>
                  MoHawk Designs
                  <small>Websites for churches &amp; small businesses</small>
                </span>
              </a>
              <nav className="mhd-nav" aria-label="MoHawk page navigation">
                <a href="#why">Why AI</a>
                <a href="#process">How it works</a>
                <a href="#work">Our work</a>
                <a href="#faq">Questions</a>
                <a className="mhd-btn mhd-btn-primary" href="#consult">Free consultation</a>
              </nav>
            </div>
          </header>

          <main id="top">
            {/* ── Hero ── */}
            <section className="mhd-hero mhd-section" aria-labelledby="hero-title" style={{ paddingTop: 40, paddingBottom: 0 }}>
              <div className="mhd-wrap mhd-hero-grid">
                <div>
                  <h1 id="hero-title" className="mhd-h1">A website your church can actually keep up&nbsp;to&nbsp;date.</h1>
                  <p className="mhd-lede" style={{ margin: '24px 0 34px' }}>
                    MoHawk Designs builds modern, mobile-friendly websites for churches and small businesses around New Orleans, then teaches your team how to update them. No waiting on a developer to change a service time.
                  </p>
                  <div className="mhd-hero-ctas">
                    <a className="mhd-btn mhd-btn-primary" href="#consult">Book a free consultation</a>
                    <a className="mhd-btn mhd-btn-ghost" href="#work">See a finished site</a>
                  </div>
                  <p style={{ marginTop: 22, fontSize: 16, color: '#536866' }}>
                    Serving Kenner, Metairie, New Orleans and churches anywhere in Louisiana.
                  </p>
                </div>

                <figure className="mhd-devices">
                  <div className="mhd-browser">
                    <div className="mhd-browser-bar">
                      <span className="mhd-browser-dot" />
                      <span className="mhd-browser-dot" />
                      <span className="mhd-browser-dot" />
                      <span className="mhd-browser-url">newmountbethel.org</span>
                    </div>
                    <Image
                      src="/web-design/nmb-desktop.jpg"
                      width={1440}
                      height={900}
                      alt="Home page of the New Mount Bethel Baptist Church website on a laptop"
                      priority
                    />
                  </div>
                  <div className="mhd-phone">
                    <Image
                      src="/web-design/nmb-phone.jpg"
                      width={600}
                      height={1298}
                      alt="The same church website on a phone"
                    />
                  </div>
                  <figcaption className="mhd-figcap">
                    Built by MoHawk Designs:{' '}
                    <a href="https://newmountbethel.org" target="_blank" rel="noopener noreferrer">
                      New Mount Bethel Baptist Church
                    </a>
                  </figcaption>
                </figure>
              </div>
            </section>

            {/* ── Benefits ── */}
            <section className="mhd-section mhd-benefits" id="why" aria-labelledby="why-title">
              <div className="mhd-wrap">
                <div className="mhd-section-head">
                  <h2 id="why-title" className="mhd-h2">Why build your site with AI?</h2>
                  <p>
                    AI lets one experienced builder do the work of a whole agency, so you get a custom site in weeks instead of months, at a price a small congregation can manage. You still get a real person guiding every decision.
                  </p>
                </div>

                <div className="mhd-benefit-list">
                  <div className="mhd-benefit">
                    <IconClock />
                    <div>
                      <h3 className="mhd-h3">Built in weeks, not months</h3>
                      <p>Pages, photos and scripture come together quickly, and you review a live preview link as it grows.</p>
                    </div>
                  </div>
                  <div className="mhd-benefit">
                    <IconEdit />
                    <div>
                      <h3 className="mhd-h3">Updates are quick and cheap</h3>
                      <p>New sermon series, a new ministry leader, a flyer for Sunday: changes take minutes, not a work order.</p>
                    </div>
                  </div>
                  <div className="mhd-benefit">
                    <IconLock />
                    <div>
                      <h3 className="mhd-h3">You own everything</h3>
                      <p>Your site's files live in a GitHub account in your church's name. No lock-in, no hostage situations if a volunteer moves on.</p>
                    </div>
                  </div>
                  <div className="mhd-benefit">
                    <IconGlobe />
                    <div>
                      <h3 className="mhd-h3">Low running costs</h3>
                      <p>Hosting for a site like a church's is often free or low-cost. Your main expense is your domain name, usually about $10 to $25 a year.</p>
                    </div>
                  </div>
                  <div className="mhd-benefit">
                    <IconPhone />
                    <div>
                      <h3 className="mhd-h3">Easy to read on every device</h3>
                      <p>Large, clear text and buttons that work for your youngest members and your mothers of the church alike, on phones, tablets and computers.</p>
                    </div>
                  </div>
                  <div className="mhd-benefit">
                    <IconSearch />
                    <div>
                      <h3 className="mhd-h3">Found on Google</h3>
                      <p>Every site is set up so people searching "churches near me" can find your service times, address and directions.</p>
                    </div>
                  </div>
                </div>

                <div className="mhd-compare-wrap">
                  <table className="mhd-table">
                    <caption>How it compares</caption>
                    <thead>
                      <tr>
                        <td></td>
                        <th scope="col">Typical web agency</th>
                        <th scope="col">Do-it-yourself builders</th>
                        <th scope="col">MoHawk Designs</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr><th scope="row">Time to launch</th><td>Often several months</td><td>Depends on your volunteers</td><td>Usually a few weeks</td></tr>
                      <tr><th scope="row">Design</th><td>Custom</td><td>Template</td><td>Custom, built around your church</td></tr>
                      <tr><th scope="row">Making changes</th><td>Billed per request</td><td>You do it all</td><td>You're trained, with help when you need it</td></tr>
                      <tr><th scope="row">Monthly cost</th><td>Hosting and maintenance fees</td><td>Subscription plan</td><td>Often free or low-cost hosting</td></tr>
                      <tr><th scope="row">Who owns it</th><td>Varies by contract</td><td>The platform</td><td>You do</td></tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </section>

            {/* ── Process ── */}
            <section className="mhd-section mhd-process" id="process" aria-labelledby="process-title">
              <div className="mhd-wrap">
                <div className="mhd-section-head">
                  <h2 id="process-title" className="mhd-h2">How it works</h2>
                  <p>Six steps from first conversation to a site your team runs with confidence.</p>
                </div>
                <ol className="mhd-steps">
                  <li className="mhd-step">
                    <h3 className="mhd-h3">Free consultation</h3>
                    <p>We talk about your church or business, who you want to reach, and what your current site is missing.</p>
                  </li>
                  <li className="mhd-step">
                    <h3 className="mhd-h3">Gather your story</h3>
                    <p>Bulletins, photos, ministry details, scripture and leadership bios. Send what you have; we organize it.</p>
                  </li>
                  <li className="mhd-step">
                    <h3 className="mhd-h3">Design and build</h3>
                    <p>Your site is built with AI and shaped by hand, with a private preview link you can share with your committee.</p>
                  </li>
                  <li className="mhd-step">
                    <h3 className="mhd-h3">Review together</h3>
                    <p>Leadership gives feedback, and we refine names, photos and wording until everyone is comfortable.</p>
                  </li>
                  <li className="mhd-step">
                    <h3 className="mhd-h3">Launch on your domain</h3>
                    <p>We connect your web address, keeping your old site up until leadership gives the go-ahead.</p>
                  </li>
                  <li className="mhd-step">
                    <h3 className="mhd-h3">Training and support</h3>
                    <p>Your team learns to update service times, events and photos, with support when you need a hand.</p>
                  </li>
                </ol>
              </div>
            </section>

            {/* ── Featured Work ── */}
            <section className="mhd-section" id="work" aria-labelledby="work-title">
              <div className="mhd-wrap mhd-work-grid">
                <Image
                  src="/web-design/nmb-desktop.jpg"
                  width={1440}
                  height={900}
                  alt="New Mount Bethel Baptist Church website home page"
                  loading="lazy"
                  style={{ borderRadius: 12, border: '1px solid #CFDCDA', boxShadow: '0 24px 50px -24px rgba(15,58,61,0.5)' }}
                />
                <div>
                  <h2 id="work-title" className="mhd-h2">New Mount Bethel Baptist Church</h2>
                  <p className="mhd-lede" style={{ marginTop: 16 }}>
                    Kenner, Louisiana. A congregation serving the Lincoln Manor community since 1957, moving from an outdated site to one that reflects who they are.
                  </p>
                  <ul className="mhd-work-list">
                    <li>Service times, directions and online giving front and center</li>
                    <li>Pages for every ministry, the pastor and associate ministers</li>
                    <li>Scripture throughout, in King James or easy-reading versions</li>
                    <li>Sunday worship streamed and archived on YouTube</li>
                    <li>Built to read clearly on phones, tablets and computers</li>
                  </ul>
                  <a className="mhd-btn mhd-btn-ghost" href="https://newmountbethel.org" target="_blank" rel="noopener noreferrer">
                    Visit the live site
                  </a>
                </div>
              </div>
            </section>

            {/* ── Training ── */}
            <section className="mhd-section mhd-training" aria-labelledby="training-title">
              <div className="mhd-wrap mhd-training-grid">
                <div>
                  <h2 id="training-title" className="mhd-h2">You won't be left with a site nobody knows how to change.</h2>
                  <p className="mhd-lede" style={{ marginTop: 20 }}>
                    Training is part of every project. MoHawk Designs comes from years of teaching adults to use technology, so lessons are patient, plain-spoken and at your team's pace.
                  </p>
                </div>
                <ul className="mhd-checklist">
                  {[
                    'Update service times, events and announcements',
                    'Swap in new photos and flyers',
                    'Add a new ministry leader or contact',
                    'Use AI tools safely to draft and make changes',
                    'Publish changes and check them on your phone',
                    'A simple written guide your team keeps',
                  ].map((item) => (
                    <li key={item}>
                      <IconCheck />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </section>

            {/* ── FAQ ── */}
            <section className="mhd-section" id="faq" aria-labelledby="faq-title">
              <div className="mhd-wrap">
                <h2 id="faq-title" className="mhd-h2" style={{ marginBottom: 40 }}>Common questions</h2>
                <div className="mhd-faq-list">
                  {[
                    {
                      q: 'How much does a website cost?',
                      a: "Every church and business is different, so pricing is set after a free consultation, once we know which pages and features you need. You'll get a clear quote before any work starts.",
                    },
                    {
                      q: 'Do we need our own domain name?',
                      a: "Yes. Your domain is your web address, like yourchurch.org. If you already have one, we connect your new site to it. If you don't, we'll help you register one in your church's name, usually for about $10 to $25 a year.",
                    },
                    {
                      q: 'What does "built with AI" mean? Is it a template?',
                      a: "No. AI speeds up the writing of the site's code, and a person designs and checks every page. Your site is custom to your church, using your own photos, history and words.",
                    },
                    {
                      q: 'Will we own the website?',
                      a: "Yes. The site's files are kept in a GitHub account owned by your church or business. If you ever want someone else to work on it, everything is yours to hand over.",
                    },
                    {
                      q: 'Can our current site stay up while the new one is built?',
                      a: 'Yes. You review the new site on a private preview link. Your current site stays live until your leadership approves the switch.',
                    },
                    {
                      q: "Our members aren't very technical. Will they be able to use it?",
                      a: 'That is who these sites are designed for: large text, clear buttons, and service times and directions easy to find on any phone.',
                    },
                  ].map(({ q, a }) => (
                    <details key={q}>
                      <summary>{q}</summary>
                      <p>{a}</p>
                    </details>
                  ))}
                </div>
              </div>
            </section>

            {/* ── CTA ── */}
            <section className="mhd-cta" id="consult" aria-labelledby="consult-title">
              <div className="mhd-wrap mhd-cta-grid">
                <div>
                  <h2 id="consult-title" className="mhd-h2">Start with a free consultation.</h2>
                  <p>Tell us about your church or business and what you'd like your website to do. There's no cost and no obligation.</p>
                </div>
                <div className="mhd-cta-box">
                  <h3 className="mhd-h3">What happens next</h3>
                  <ol className="mhd-cta-ol">
                    <li>Send a short email with your name, church or business, and the best time to talk.</li>
                    <li>We'll set up a 30-minute conversation by phone or video.</li>
                    <li>You get a plan and a clear quote.</li>
                  </ol>
                  <a
                    className="mhd-btn mhd-btn-primary"
                    href="mailto:MH@moniquehawkins.com?subject=Free%20website%20consultation"
                  >
                    Email to book a consultation
                  </a>
                  <small className="mhd-cta-small">
                    Or write to{' '}
                    <a href="mailto:MH@moniquehawkins.com">MH@moniquehawkins.com</a>
                  </small>
                </div>
              </div>
            </section>
          </main>

          {/* ── Footer ── */}
          <footer className="mhd-footer">
            <div className="mhd-wrap mhd-footer-inner">
              <span className="mhd-brand">MoHawk Designs</span>
              <span>Church and small business websites in New Orleans, Louisiana</span>
              <span>© {new Date().getFullYear()} MoHawk Designs</span>
            </div>
          </footer>

        </div>{/* end .mhd-body */}
      </div>
    </>
  )
}
