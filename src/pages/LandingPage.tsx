import Nav from '../components/Nav'
import Button from '../components/Button'
import EmailMockup from '../components/EmailMockup'

const HERO_TEXTURE = `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23369EA1' fill-opacity='0.04'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`

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
      fontSize: '13px',
      color: 'var(--ls-text-tertiary)',
      marginTop: '16px',
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
      fontSize: '13px',
      fontWeight: 500,
      letterSpacing: '0.08em',
      textTransform: 'uppercase' as const,
      color: 'var(--ls-text-secondary)',
      marginBottom: '16px',
    }}>{children}</div>
  )
}

export default function LandingPage() {
  return (
    <div>
      <Nav />

      {/* ── Hero ── */}
      <section style={{
        minHeight: 'calc(100vh - 64px)',
        backgroundImage: HERO_TEXTURE,
        display: 'flex',
        alignItems: 'center',
      }}>
        <div className="site-container" style={{ width: '100%', paddingTop: '80px', paddingBottom: '80px' }}>
          <div className="flex flex-col md:flex-row gap-[80px] items-center w-full">

            {/* Left column */}
            <div style={{ flex: '0 0 55%' }}>
              <div className="animate-enter" style={{
                fontSize: '13px',
                fontWeight: 500,
                letterSpacing: '0.08em',
                textTransform: 'uppercase' as const,
                color: 'var(--ls-text-secondary)',
              }}>
                BILLING COORDINATOR BY LAWSTACK
              </div>

              <h1 className="animate-enter-d1" style={{
                fontSize: 'clamp(40px, 4vw, 56px)',
                fontWeight: 800,
                letterSpacing: '-0.03em',
                lineHeight: 0.95,
                marginTop: '16px',
              }}>
                Your invoices are sitting there.
                <br />They won't collect themselves.
              </h1>

              <p className="animate-enter-d2" style={{
                fontSize: '18px',
                lineHeight: 1.6,
                color: 'var(--ls-text-secondary)',
                maxWidth: '520px',
                marginTop: '24px',
              }}>
                Billing Coordinator connects to Clio, watches every unbilled time entry, overdue invoice, and trust account balance — then sends you one Monday morning brief. High-agency from day one. You approve client-facing sends. Everything else runs automatically.
              </p>

              <div className="animate-enter-d3" style={{ marginTop: '40px' }}>
                <Button variant="primary" href="/connect">
                  Meet your billing coordinator — $149/month
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
          <h2 style={{ fontSize: '40px', fontWeight: 800, marginBottom: '48px' }}>
            You have three options.
          </h2>

          <div style={{ display: 'flex', flexDirection: 'column' as const, gap: '32px' }}>
            {MATH_ITEMS.map(({ n, title, desc }) => (
              <div key={n} style={{ display: 'flex', gap: '24px', alignItems: 'flex-start' }}>
                <span style={{
                  fontFamily: 'var(--ls-font-mono)',
                  fontSize: '32px',
                  fontWeight: 500,
                  color: 'var(--ls-accent)',
                  lineHeight: 1,
                  minWidth: '56px',
                }}>{n}</span>
                <div>
                  <div style={{ fontSize: '20px', fontWeight: 700, marginBottom: '4px' }}>{title}</div>
                  <div style={{ fontSize: '16px', color: 'var(--ls-text-secondary)' }}>{desc}</div>
                </div>
              </div>
            ))}
          </div>

          <div style={{
            fontFamily: 'var(--ls-font-mono)',
            fontSize: '20px',
            color: 'var(--ls-accent)',
            marginTop: '32px',
          }}>
            The math is not close.
          </div>
        </div>
      </section>

      {/* ── Section 2: How It Works ── */}
      <section style={{ padding: '120px 0 0' }}>
        <div className="site-container">
          <SectionEyebrow>HOW IT WORKS</SectionEyebrow>
          <h2 style={{ fontSize: '40px', fontWeight: 800, marginBottom: '48px' }}>
            Connect once. It runs. You read one email.
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-[48px]">
            {HOW_ITEMS.map(({ n, title, desc }) => (
              <div key={n}>
                <div style={{
                  fontFamily: 'var(--ls-font-mono)',
                  fontSize: '14px',
                  fontWeight: 500,
                  color: 'var(--ls-accent)',
                }}>
                  {n}
                </div>
                <div style={{ fontSize: '18px', fontWeight: 600, marginTop: '12px' }}>{title}</div>
                <div style={{
                  fontSize: '16px',
                  color: 'var(--ls-text-secondary)',
                  marginTop: '8px',
                  lineHeight: 1.6,
                }}>{desc}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Section 3: Dark Pitch Block ── */}
      <section style={{
        background: 'var(--ls-dark)',
        padding: '80px 48px',
        marginTop: '120px',
      }}>
        <div className="site-container" style={{ padding: 0 }}>
          <h2 style={{ fontSize: '32px', fontWeight: 700, color: '#FFFFFF' }}>
            What we read. What we never touch.
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-[80px]" style={{ marginTop: '48px' }}>
            {/* We Read */}
            <div>
              <div style={{
                fontSize: '13px',
                letterSpacing: '0.08em',
                textTransform: 'uppercase' as const,
                color: 'var(--ls-accent)',
                marginBottom: '20px',
              }}>WE READ</div>
              {[
                'Invoice amounts and due dates',
                'Unbilled time entries and rates',
                'Matter names and status',
                'Client names and email addresses',
                'Trust account balances',
              ].map((item) => (
                <div key={item} style={{ fontSize: '16px', color: '#FFFFFF', lineHeight: 2 }}>· {item}</div>
              ))}
            </div>

            {/* We Never Touch */}
            <div>
              <div style={{
                fontSize: '13px',
                letterSpacing: '0.08em',
                textTransform: 'uppercase' as const,
                color: '#6B6B69',
                marginBottom: '20px',
              }}>WE NEVER TOUCH</div>
              {[
                'Case facts or strategy',
                'Client communications',
                'Confidential documents',
                'Trust transaction records',
                'Anything outside the billing layer',
              ].map((item) => (
                <div key={item} style={{ fontSize: '16px', color: '#6B6B69', lineHeight: 2 }}>· {item}</div>
              ))}
            </div>
          </div>

          <div style={{
            textAlign: 'center' as const,
            marginTop: '48px',
            fontSize: '14px',
            fontStyle: 'italic',
            color: '#6B6B69',
          }}>
            WSBA RPC 1.6 compliant. Read-only Clio access. No AI training on your data.
          </div>
        </div>
      </section>

      {/* ── Section 4: Final CTA ── */}
      <section style={{ padding: '80px 48px', textAlign: 'center' as const }}>
        <h2 style={{ fontSize: '40px', fontWeight: 800 }}>
          You need a billing coordinator.
        </h2>
        <p style={{ fontSize: '18px', color: 'var(--ls-text-secondary)', marginTop: '16px' }}>
          You just can't hire one for $149/month. Until now.
        </p>
        <div style={{ marginTop: '40px' }}>
          <Button variant="primary" href="/connect">
            Connect Clio — $149/month
          </Button>
          <TrustRow center />
        </div>
      </section>

      {/* ── Footer ── */}
      <footer style={{
        borderTop: '1px solid var(--ls-border)',
        padding: '48px',
      }}>
        <div className="site-container">
          <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
            <div>
              {/* ponytail: Logo import would be circular if Nav also imports it — just inline wordmark here */}
              <span style={{
                fontSize: '13px',
                fontWeight: 700,
                letterSpacing: '0.09em',
                textTransform: 'uppercase' as const,
              }}>LAWSTACK</span>
            </div>
            <div style={{ display: 'flex', gap: '24px', fontSize: '14px', color: 'var(--ls-text-secondary)' }}>
              <a href="https://lawstack.co/legal/terms" style={{ color: 'inherit', textDecoration: 'none' }}>Terms</a>
              <a href="https://lawstack.co/legal/privacy" style={{ color: 'inherit', textDecoration: 'none' }}>Privacy</a>
              <a href="https://lawstack.co/legal/support" style={{ color: 'inherit', textDecoration: 'none' }}>Support</a>
            </div>
          </div>
          <div style={{ fontSize: '13px', color: 'var(--ls-text-tertiary)', marginTop: '16px' }}>
            © 2026 LawStack Inc. · Tacoma, WA · Washington state corporation
          </div>
        </div>
      </footer>
    </div>
  )
}
