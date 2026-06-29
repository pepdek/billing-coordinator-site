import { useState, useEffect } from 'react'
import Nav from '../components/Nav'
import Button from '../components/Button'
import EmailMockup from '../components/EmailMockup'

const HERO_TEXTURE = `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%2314B8A6' fill-opacity='0.04'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`

const TRUST_ITEMS = [
  'Read-only Clio access',
  'No client data stored',
  'Cancel anytime',
  'WSBA RPC 1.6 compliant',
]

const MATH_ITEMS = [
  {
    n: '01',
    title: 'Do it yourself.',
    desc: '$325/hour of your time chasing $1,200 invoices.',
  },
  {
    n: '02',
    title: 'Hire someone.',
    desc: '$65,000/year minimum. Plus benefits. Plus the risk they leave.',
  },
  {
    n: '03',
    title: 'Connect Billing Coordinator.',
    desc: '$149/month. First Monday brief arrives within 60 minutes. Runs 24/7. Stops when they pay.',
  },
]

const HOW_ITEMS = [
  {
    n: '01',
    title: 'Connect Clio in 90 seconds.',
    desc: 'Read-only access to your invoices, time entries, matters, and trust accounts. We never write to Clio. We never store client confidential data.',
  },
  {
    n: '02',
    title: 'Approve your templates once.',
    desc: 'Client-facing emails are queued for your review first. You tap Approve. We send. You never touch it again.',
  },
  {
    n: '03',
    title: 'Read one Monday brief.',
    desc: 'Every Monday at 7am, one email. What was done. What needs your attention. 90 seconds to read.',
  },
]

function TrustRow({ center }: { center?: boolean }) {
  return (
    <div style={{
      display: 'flex',
      flexWrap: 'wrap' as const,
      gap: '4px 0',
      justifyContent: center ? 'center' : 'flex-start',
      fontSize: 'var(--text-xs)',
      color: 'var(--color-muted)',
      marginTop: 'var(--space-4)',
    }}>
      {TRUST_ITEMS.map((item, i) => (
        <span key={item}>
          {i > 0 && <span style={{ margin: '0 8px' }}>·</span>}
          {item}
        </span>
      ))}
    </div>
  )
}

function SectionEyebrow({ children }: { children: string }) {
  return (
    <div style={{
      fontSize: 'var(--text-xs)',
      fontWeight: 500,
      letterSpacing: '0.08em',
      textTransform: 'uppercase' as const,
      color: 'var(--color-accent)',
      marginBottom: 'var(--space-4)',
      fontFamily: 'var(--font-body)',
    }}>{children}</div>
  )
}

export default function LandingPage() {
  const [showBar, setShowBar] = useState(false)

  useEffect(() => {
    const handleScroll = () => setShowBar(window.scrollY > 600)
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <div>
      <Nav />

      {/* ── Hero ── */}
      <section style={{
        minHeight: 'calc(100vh - 56px)',
        backgroundImage: HERO_TEXTURE,
        display: 'flex',
        alignItems: 'center',
      }}>
        <div className="site-container" style={{ width: '100%', paddingTop: '80px', paddingBottom: '80px' }}>
          <div className="flex flex-col md:flex-row gap-[80px] items-center w-full">

            {/* Left column */}
            <div style={{ flex: '0 0 55%' }}>
              <div className="animate-enter" style={{
                fontSize: 'var(--text-xs)',
                fontWeight: 500,
                letterSpacing: '0.08em',
                textTransform: 'uppercase' as const,
                color: 'var(--color-accent)',
                fontFamily: 'var(--font-body)',
              }}>
                BILLING COORDINATOR BY LAWSTACK
              </div>

              <h1 className="animate-enter-d1" style={{
                fontSize: 'clamp(40px, 4vw, 56px)',
                fontWeight: 700,
                letterSpacing: '-0.02em',
                lineHeight: 1.1,
                marginTop: 'var(--space-4)',
              }}>
                Your invoices are sitting there.
                <br />They won't collect themselves.
              </h1>

              <p className="animate-enter-d2" style={{
                fontSize: 'var(--text-lg)',
                lineHeight: 1.65,
                color: 'var(--color-body)',
                maxWidth: '520px',
                marginTop: 'var(--space-5)',
              }}>
                Billing Coordinator connects to Clio, watches every unbilled time entry, overdue invoice, and trust account balance — then sends you one Monday morning brief. High-agency from day one. You approve client-facing sends. Everything else runs automatically.
              </p>

              <div className="animate-enter-d3" style={{ marginTop: 'var(--space-7)' }}>
                <Button variant="primary" href="/connect">
                  Meet Your Coordinator — $149/month
                </Button>
                <TrustRow />
              </div>
            </div>

            {/* Right column */}
            <div style={{ flex: '0 0 45%' }} className="animate-enter-d2">
              <EmailMockup />
            </div>
          </div>
        </div>
      </section>

      {/* ── Section 1: The Math ── */}
      <section style={{ padding: '120px 0 0' }}>
        <div className="site-container">
          <SectionEyebrow>THE MATH</SectionEyebrow>
          <h2 style={{ marginBottom: 'var(--space-7)' }}>
            You have three options.
          </h2>

          <div style={{ display: 'flex', flexDirection: 'column' as const, gap: 'var(--space-6)' }}>
            {MATH_ITEMS.map(({ n, title, desc }) => (
              <div key={n} style={{ display: 'flex', gap: 'var(--space-5)', alignItems: 'flex-start' }}>
                <span style={{
                  fontFamily: 'var(--font-mono)',
                  fontSize: 'var(--text-3xl)',
                  fontWeight: 500,
                  color: 'var(--color-accent)',
                  lineHeight: 1,
                  minWidth: '56px',
                }}>{n}</span>
                <div>
                  <div style={{ fontSize: 'var(--text-xl)', fontWeight: 700, marginBottom: '4px', color: 'var(--color-headline)' }}>{title}</div>
                  <div style={{ fontSize: 'var(--text-base)', color: 'var(--color-body)' }}>{desc}</div>
                </div>
              </div>
            ))}
          </div>

          <p style={{
            fontFamily: 'var(--font-mono)',
            color: 'var(--color-accent)',
            fontSize: 'var(--text-xl)',
            marginTop: 'var(--space-6)',
            letterSpacing: '0.01em',
          }}>
            The math is not close.
          </p>
        </div>
      </section>

      {/* ── Section 2: How It Works ── */}
      <section style={{ padding: '120px 0 0' }}>
        <div className="site-container">
          <SectionEyebrow>HOW IT WORKS</SectionEyebrow>
          <h2 style={{ marginBottom: 'var(--space-7)' }}>
            Connect once. It runs. You read one email.
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-[48px]">
            {HOW_ITEMS.map(({ n, title, desc }) => (
              <div key={n}>
                <div style={{
                  fontFamily: 'var(--font-mono)',
                  fontSize: 'var(--text-sm)',
                  fontWeight: 500,
                  color: 'var(--color-accent)',
                }}>
                  {n}
                </div>
                <div style={{ fontSize: 'var(--text-lg)', fontWeight: 600, marginTop: 'var(--space-3)', color: 'var(--color-headline)' }}>{title}</div>
                <div style={{
                  fontSize: 'var(--text-base)',
                  color: 'var(--color-body)',
                  marginTop: 'var(--space-2)',
                  lineHeight: 1.65,
                }}>{desc}</div>
              </div>
            ))}
          </div>

          <p style={{
            textAlign: 'center',
            color: 'var(--color-muted)',
            fontStyle: 'italic',
            fontSize: 'var(--text-sm)',
            marginTop: 'var(--space-7)',
          }}>
            Connect once. Everything else is handled.
          </p>
        </div>
      </section>

      {/* ── Section 3: Dark Pitch Block ── */}
      <section style={{
        background: 'var(--ls-dark)',
        padding: 'var(--space-8) var(--space-7)',
        marginTop: '120px',
      }}>
        <div className="site-container" style={{ padding: 0 }}>
          <h2>
            What we read. What we never touch.
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-[80px]" style={{ marginTop: 'var(--space-7)' }}>
            {/* We Read */}
            <div>
              <div style={{
                fontSize: 'var(--text-xs)',
                letterSpacing: '0.08em',
                textTransform: 'uppercase' as const,
                color: 'var(--color-accent)',
                marginBottom: 'var(--space-5)',
                fontWeight: 500,
              }}>WE READ</div>
              {[
                'Invoice amounts and due dates',
                'Unbilled time entries and rates',
                'Matter names and status',
                'Client names and email addresses',
                'Trust account balances',
              ].map((item) => (
                <div key={item} style={{ fontSize: 'var(--text-base)', color: 'var(--color-body)', lineHeight: 2 }}>· {item}</div>
              ))}
            </div>

            {/* We Never Touch */}
            <div>
              <div style={{
                fontSize: 'var(--text-xs)',
                letterSpacing: '0.08em',
                textTransform: 'uppercase' as const,
                color: 'var(--color-muted)',
                marginBottom: 'var(--space-5)',
                fontWeight: 500,
              }}>WE NEVER TOUCH</div>
              {[
                'Case facts or strategy',
                'Client communications',
                'Confidential documents',
                'Trust transaction records',
                'Anything outside the billing layer',
              ].map((item) => (
                <div key={item} style={{ fontSize: 'var(--text-base)', color: 'var(--color-muted)', lineHeight: 2 }}>· {item}</div>
              ))}
            </div>
          </div>

          <div style={{
            textAlign: 'center' as const,
            marginTop: 'var(--space-7)',
            fontSize: 'var(--text-sm)',
            fontStyle: 'italic',
            color: 'var(--color-muted)',
          }}>
            WSBA RPC 1.6 compliant. Read-only Clio access. No model training on your data.
          </div>
        </div>
      </section>

      {/* ── Section 4: Final CTA ── */}
      <section style={{ padding: 'var(--space-8) var(--space-7)', textAlign: 'center' as const }}>
        <h2>
          You need a billing coordinator.
        </h2>
        <p style={{ fontSize: 'var(--text-lg)', color: 'var(--color-body)', marginTop: 'var(--space-4)' }}>
          You just can't hire one for $149/month. Until now.
        </p>
        <div style={{ marginTop: 'var(--space-7)' }}>
          <Button variant="primary" href="/connect">
            Connect Clio — $149/month
          </Button>
          <TrustRow center />
        </div>
      </section>

      {/* ── Footer ── */}
      <footer style={{
        borderTop: '1px solid var(--color-border)',
        padding: 'var(--space-7)',
      }}>
        <div className="site-container">
          <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
            <div>
              <span style={{
                fontSize: 'var(--text-xs)',
                fontWeight: 700,
                letterSpacing: '0.09em',
                textTransform: 'uppercase' as const,
                color: 'var(--color-headline)',
              }}>LAWSTACK</span>
            </div>
            <div style={{ display: 'flex', gap: 'var(--space-5)', fontSize: 'var(--text-sm)', color: 'var(--color-muted)' }}>
              <a href="https://lawstack.co/legal/terms" style={{ color: 'inherit', textDecoration: 'none' }}>Terms</a>
              <a href="https://lawstack.co/legal/privacy" style={{ color: 'inherit', textDecoration: 'none' }}>Privacy</a>
              <a href="https://lawstack.co/legal/support" style={{ color: 'inherit', textDecoration: 'none' }}>Support</a>
            </div>
          </div>
          <div style={{ fontSize: 'var(--text-xs)', color: 'var(--color-muted)', marginTop: 'var(--space-4)' }}>
            © 2026 LawStack Inc. · Tacoma, WA · Washington state corporation
          </div>
        </div>
      </footer>

      {/* ── Mobile floating CTA bar ── */}
      {showBar && (
        <div
          className="md:hidden"
          style={{
            position: 'fixed',
            bottom: 0,
            left: 0,
            right: 0,
            height: '56px',
            background: 'var(--color-cta)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            zIndex: 200,
          }}
        >
          <a href="/connect" style={{
            color: 'var(--color-cta-text)',
            fontWeight: 600,
            fontSize: 'var(--text-sm)',
            textDecoration: 'none',
          }}>
            Connect Clio — $149/month
          </a>
        </div>
      )}
    </div>
  )
}
