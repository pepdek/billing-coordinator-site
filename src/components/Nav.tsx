import Logo from './Logo'

export default function Nav() {
  return (
    <nav style={{
      position: 'sticky',
      top: 0,
      zIndex: 100,
      background: 'var(--color-surface)',
      borderBottom: '1px solid var(--color-border)',
      backdropFilter: 'blur(8px)',
      height: '56px',
    }}>
      <div className="site-container flex items-center justify-between h-full">
        <Logo variant="light" />
        <div style={{ display: 'flex', alignItems: 'center', gap: 'var(--space-4)' }}>
          <a
            href="https://app.clio.com"
            target="_blank"
            rel="noopener noreferrer"
            style={{
              color: 'var(--color-muted)',
              fontSize: 'var(--text-sm)',
              textDecoration: 'none',
              transition: 'color 150ms ease',
            }}
            onMouseEnter={e => (e.currentTarget.style.color = 'var(--color-body)')}
            onMouseLeave={e => (e.currentTarget.style.color = 'var(--color-muted)')}
          >
            Sign in to Clio
          </a>
          <a
            href="/connect"
            style={{
              background: 'var(--color-cta)',
              color: 'var(--color-cta-text)',
              fontWeight: 600,
              fontSize: 'var(--text-sm)',
              padding: '8px 18px',
              borderRadius: 'var(--radius-pill)',
              textDecoration: 'none',
              transition: 'background 150ms ease',
              display: 'inline-block',
              lineHeight: 1.3,
            }}
            onMouseEnter={e => (e.currentTarget.style.background = '#B5F04A')}
            onMouseLeave={e => (e.currentTarget.style.background = 'var(--color-cta)')}
          >
            Connect Clio
          </a>
        </div>
      </div>
    </nav>
  )
}
