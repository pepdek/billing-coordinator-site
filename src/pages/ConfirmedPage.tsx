import Logo from '../components/Logo'
import Button from '../components/Button'

function nextMonday(): string {
  const d = new Date()
  const day = d.getDay() // 0=Sun, 1=Mon...
  const daysUntil = day === 0 ? 1 : 8 - day
  d.setDate(d.getDate() + daysUntil)
  return d.toLocaleDateString('en-US', { weekday: 'long', month: 'long', day: 'numeric' })
}

export default function ConfirmedPage() {
  const monday = nextMonday()

  return (
    <div style={{
      minHeight: '100vh',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      padding: '48px 24px',
      textAlign: 'center',
    }}>
      <div className="animate-enter">
        <Logo variant="light" />
      </div>

      <div className="animate-enter-d1" style={{
        width: '48px',
        height: '48px',
        borderRadius: '50%',
        background: 'var(--ls-accent-subtle)',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        margin: '32px auto 0',
        fontSize: '22px',
      }}>
        ✓
      </div>

      <h1 className="animate-enter-d1" style={{
        fontSize: '32px',
        fontWeight: 800,
        marginTop: '24px',
        letterSpacing: '-0.02em',
      }}>
        Your billing coordinator is on the job.
      </h1>

      <p className="animate-enter-d2" style={{
        fontSize: '17px',
        color: 'var(--ls-text-secondary)',
        marginTop: '16px',
        maxWidth: '480px',
        lineHeight: 1.6,
      }}>
        Clio is connected. Your first Monday brief arrives on{' '}
        <strong style={{ color: 'var(--ls-text-primary)' }}>{monday}</strong>.
        Watch your inbox.
      </p>

      <div className="animate-enter-d3" style={{ marginTop: '40px', display: 'flex', flexDirection: 'column', gap: '12px', alignItems: 'center' }}>
        <p style={{ fontSize: '14px', color: 'var(--ls-text-tertiary)' }}>
          Questions? Reply to any brief or email{' '}
          <a href="mailto:support@lawstack.co" style={{ color: 'var(--ls-accent)', textDecoration: 'none' }}>
            support@lawstack.co
          </a>
        </p>
        <Button variant="secondary" href="https://lawstack.co">
          Back to LawStack
        </Button>
      </div>
    </div>
  )
}
