import Link from 'next/link'

/**
 * Button - Reusable button with variants
 * @param {'primary'|'secondary'|'whatsapp'|'orange'} variant
 * @param {'sm'|'md'|'lg'} size
 * @param {string} href - If provided, renders as Link
 * @param {boolean} external - If true + href, renders as <a target="_blank">
 * @param {React.ReactNode} icon - Icon element to show before text
 * @param {boolean} arrow - Show → after text
 */
export default function Button({
  children,
  variant = 'primary',
  size = 'md',
  href,
  external = false,
  icon,
  arrow = false,
  className = '',
  ...props
}) {
  const variantClass = {
    primary: 'btn-primary',
    secondary: 'btn-secondary',
    whatsapp: 'btn-whatsapp',
    orange: 'btn-orange',
  }[variant]

  const sizeClass = {
    sm: 'btn-sm',
    md: '',
    lg: 'btn-lg',
  }[size]

  const classes = `btn ${variantClass} ${sizeClass} ${className}`.trim()

  const content = (
    <>
      {icon && <span className="shrink-0">{icon}</span>}
      {children}
      {arrow && <span className="text-[16px] ml-0.5">→</span>}
    </>
  )

  if (href && external) {
    return (
      <a href={href} target="_blank" rel="noopener noreferrer" className={classes} {...props}>
        {content}
      </a>
    )
  }

  if (href) {
    return (
      <Link href={href} className={classes} {...props}>
        {content}
      </Link>
    )
  }

  return (
    <button className={classes} {...props}>
      {content}
    </button>
  )
}
