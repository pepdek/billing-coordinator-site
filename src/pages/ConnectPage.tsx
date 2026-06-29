import { useEffect } from 'react'
import Logo from '../components/Logo'

// ponytail: placeholder until Stripe product is created
const STRIPE_PAYMENT_LINK = 'https://buy.stripe.com/PLACEHOLDER'

export default function ConnectPage() {
  useEffect(() => {
    window.location.href = STRIPE_PAYMENT_LINK
  }, [])

  return (
    <div style={{
      minHeight: '100vh',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      gap: '32px',
    }}>
      <Logo variant="light" />
      <p style={{ fontSize: '16px', color: 'var(--ls-text-secondary)' }}>
        Redirecting to checkout…
      </p>
    </div>
  )
}
