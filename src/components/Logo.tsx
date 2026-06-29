interface LogoProps {
  variant?: 'light' | 'dark'
}

export default function Logo({ variant = 'light' }: LogoProps) {
  const color = variant === 'light' ? 'var(--ls-text-primary)' : '#FFFFFF'

  return (
    <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
      {/* Mark: L + teal rule underneath */}
      <div style={{ display: 'inline-block' }}>
        <span style={{
          fontFamily: 'var(--ls-font-display)',
          fontWeight: 800,
          fontSize: '24px',
          color,
          lineHeight: 1,
          display: 'block',
        }}>L</span>
        {/* Rule: L width + 2px via calc — shrink-wrap parent = L width */}
        <div style={{
          height: '2.5px',
          background: 'var(--ls-accent)',
          width: 'calc(100% + 2px)',
          marginLeft: '-1px',
          marginTop: '3px',
        }} />
      </div>
      {/* Wordmark */}
      <span style={{
        fontFamily: 'var(--ls-font-display)',
        fontWeight: 700,
        fontSize: '13px',
        letterSpacing: '0.09em',
        color,
        textTransform: 'uppercase' as const,
      }}>LAWSTACK</span>
    </div>
  )
}
