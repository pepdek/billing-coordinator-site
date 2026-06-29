export default function EmailMockup() {
  return (
    <div style={{
      background: 'var(--ls-dark)',
      borderRadius: '12px',
      padding: '28px',
      fontFamily: 'var(--ls-font-mono)',
      width: '100%',
    }}>
      {/* Window chrome */}
      <div style={{ display: 'flex', alignItems: 'center', gap: '6px', marginBottom: '16px' }}>
        {['#333', '#333', '#333'].map((bg, i) => (
          <div key={i} style={{ width: '8px', height: '8px', borderRadius: '50%', background: bg }} />
        ))}
        <span style={{ marginLeft: '8px', fontSize: '13px', color: '#6B6B69' }}>Inbox — Gmail</span>
      </div>

      <div style={{ borderTop: '1px solid #1F1F1F', margin: '0 0 16px' }} />

      {/* Email header */}
      <div style={{ marginBottom: '4px', fontSize: '12px', color: '#6B6B69' }}>
        Your Billing Coordinator &lt;reminders@lawstack.co&gt;
      </div>
      <div style={{ fontSize: '13px', color: '#FFFFFF', fontWeight: 500, lineHeight: 1.4 }}>
        Your billing coordinator — 3 items need your approval · Week of Jun 30
      </div>

      <div style={{ borderTop: '1px solid #1F1F1F', margin: '16px 0' }} />

      {/* Body */}
      <div style={{ fontSize: '12px', lineHeight: 1.8 }}>
        <div style={{ color: '#6B6B69' }}>FROM THE DESK OF YOUR BILLING COORDINATOR</div>
        <div style={{ color: '#6B6B69', marginBottom: '12px' }}>Week of June 30, 2026 · Agency: Supervised</div>

        <div style={{ color: 'var(--ls-accent)', fontWeight: 600, marginBottom: '12px' }}>
          NEEDS YOUR APPROVAL
        </div>

        <div style={{ color: '#FFFFFF' }}>Invoice reminder ready to send</div>
        <div style={{ color: '#FFFFFF' }}>Client: Robert Johnson</div>
        <div style={{ color: '#FFFFFF', marginBottom: '4px' }}>Matter: Johnson v. Henderson</div>
        <div style={{ color: 'var(--ls-accent)' }}>Amount: $3,200</div>
        <div style={{ color: 'var(--ls-accent)', marginBottom: '12px' }}>Overdue: 45 days</div>

        {/* Approve / Skip buttons */}
        <div style={{ display: 'flex', gap: '8px', marginBottom: '16px' }}>
          <span style={{
            background: 'var(--ls-accent)',
            color: 'var(--ls-dark)',
            padding: '8px 16px',
            borderRadius: '4px',
            fontSize: '11px',
            fontWeight: 600,
            cursor: 'default',
          }}>APPROVE</span>
          <span style={{
            background: 'transparent',
            color: '#6B6B69',
            padding: '8px 16px',
            borderRadius: '4px',
            border: '1px solid #333',
            fontSize: '11px',
            cursor: 'default',
          }}>SKIP</span>
        </div>

        <div style={{ color: '#6B6B69', marginBottom: '4px' }}>─────────────────────────</div>
        <div style={{ color: '#6B6B69', marginBottom: '8px' }}>THIS WEEK — NO ACTION NEEDED</div>
        <div style={{ color: '#6B6B69' }}>✓ Morrison — 4.5hrs unbilled — est. $1,462</div>
        <div style={{ color: '#6B6B69' }}>✓ Garcia — 2.0hrs unbilled — est. $650</div>
        <div style={{ color: '#6B6B69' }}>⚠ Trust alert — Williams — balance $180</div>
      </div>
    </div>
  )
}
