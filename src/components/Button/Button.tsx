import styles from './Button.module.scss'

type ButtonProps = {
   children: React.ReactNode
   onClick?: () => void
   disabled?: boolean
}

export default function Button({ children, onClick, disabled }: ButtonProps) {
  return (
    <button onClick={onClick} disabled={disabled} className={styles.button}>
      {children}
    </button>
  )
}