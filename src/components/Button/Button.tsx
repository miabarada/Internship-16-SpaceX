import styles from './Button.module.scss'

type ButtonProps = {
   children: React.ReactNode
   onClick?: () => void
   disabled?: boolean
   href?: string
   target?: string
   rel?: string
}

export default function Button({ children, onClick, disabled, href, target, rel }: ButtonProps) {
   if (href) {
    return (
      <a href={href} target={target} rel={rel} className={styles.button}>
        {children}
      </a>
    )
  }

   return (
     <button onClick={onClick} disabled={disabled} className={styles.button}>
         {children}
     </button>
  )
}