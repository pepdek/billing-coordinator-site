import { useEffect } from 'react'
import Logo from '../components/Logo'

// ponytail: firm_id comes from Stripe success redirect query param
const ONBOARD_URL = 'https://kaitfbrbvsmggfxgeiub.supabase.co/functions/v1/bc-onboard'

export default function OAuthPage() {
  useEffect(() => {
    const params = new URLSearchParams(window.location.search)
    const firmId = params.get('firm_id') ?? ''
    // bc-onboard reads firm_id param and returns the Clio OAuth redirect
    window.location.href = `${ONBOARD_URL}?firm_id=${encodeURIComponent(firmId)}`
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
        Connecting to Clio…
      </p>
    </div>
  )
}
