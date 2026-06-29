import { useEffect } from 'react'
import Logo from '../components/Logo'

const CHECKOUT_FN = 'https://kaitfbrbvsmggfxgeiub.supabase.co/functions/v1/bc-stripe-create-checkout'

export default function ConnectPage() {
  useEffect(() => {
    fetch(CHECKOUT_FN, { method: 'POST', headers: { 'Content-Type': 'application/json' }, body: '{}' })
      .then(r => r.json())
      .then(d => { if (d.url) window.location.href = d.url })
      .catch(() => { window.location.href = 'https://billingcoordinator.lawstack.co' })
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
      <p style={{ fontSize: 'var(--text-sm)', color: 'var(--color-muted)' }}>
        Redirecting to checkout…
      </p>
    </div>
  )
}
