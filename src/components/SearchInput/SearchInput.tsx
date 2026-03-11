import styles from './SearchInput.module.scss'

type SearchInputProps = {
   value: string
   onChange: (e: React.ChangeEvent<HTMLInputElement>) => void
   placeholder?: string
}

export default function SearchInput({ value, onChange, placeholder = "Search..." }: SearchInputProps) {
  return (
    <input
      type="text"
      value={value}
      onChange={onChange}
      placeholder={placeholder}
      className={styles.input}
    />
  )
}