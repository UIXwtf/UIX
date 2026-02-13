import styles from './styles.module.css'

export function AddIcon({ children, ...props }) {
  return <span className={`${styles.icon}`} {...props}>{children}</span>
}