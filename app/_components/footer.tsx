import type { FC, ComponentProps } from 'react'
import styles from './footer.module.css'
 
export const Footer: FC<ComponentProps<'footer'>> = () => {
  return (
    <footer style={{
        background: 'lightgreen',
        padding: 20
      }}>
      Создано Nextra {new Date().getFullYear()}
    </footer>
  )
}