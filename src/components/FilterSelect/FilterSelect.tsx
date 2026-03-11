import styles from "./FilterSelect.module.scss"

type FilterSelectProps = {
  value: string
  onChange: (e: React.ChangeEvent<HTMLSelectElement>) => void
  options: { label: string; value: string }[]
}

export default function FilterSelect({ value, onChange, options }: FilterSelectProps) {
  return (
    <select value={value} onChange={onChange} className={styles.select}>
      {options.map(opt => (
        <option key={opt.value} value={opt.value}>
          {opt.label}
        </option>
      ))}
    </select>
  )
}