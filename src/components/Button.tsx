import React from 'react'

interface ButtonProps {
  variant?: 'primary' | 'secondary'
  children: React.ReactNode
  href?: string
  onClick?: () => void
  target?: string
}

export default function Button({ variant = 'primary', children, href, onClick, target }: ButtonProps) {
  const cls = variant === 'primary' ? 'btn-primary' : 'btn-secondary'

  if (href) {
    return (
      <a href={href} className={cls} target={target}>
        {children}
      </a>
    )
  }
  return (
    <button className={cls} onClick={onClick}>
      {children}
    </button>
  )
}
