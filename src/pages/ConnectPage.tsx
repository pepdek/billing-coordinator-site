import { useEffect } from 'react'
import Logo from '../components/Logo'

const STRIPE_PAYMENT_LINK = 'https://buy.stripe.com/28E00j4xzeAIbysg489Zm0h'

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
