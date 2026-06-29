import Logo from './Logo'
import Button from './Button'

export default function Nav() {
  return (
    <nav style={{
      position: 'sticky',
      top: 0,
      zIndex: 50,
      background: 'var(--ls-canvas)',
      borderBottom: '1px solid var(--ls-border)',
      height: '64px',
    }}>
      <div className="site-container flex items-center justify-between h-full">
        <Logo variant="light" />
        <Button variant="secondary" href="https://app.clio.com">
          Sign in to Clio
        </Button>
      </div>
    </nav>
  )
}
