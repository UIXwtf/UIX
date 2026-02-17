import type { Heading } from 'nextra'
import { Anchor } from 'nextra/components'
import type { FC } from 'react'
import styles from './styles.module.css'
 
export const TOC: FC<{ toc: Heading[] }> = ({ toc }) => {
  return (
    <aside>
      <div className={`${styles.tocMenu}`}>
        <div className={'f-12 title'}>Содержание</div>
        <ul className={`${styles.overflowY}`}>
          {toc.map(heading => (
            <li key={heading.id}>
              <Anchor href={`#${heading.id}`} className={`flex f-14 ${styles.tocItem}`}>{heading.value}</Anchor>
            </li>
          ))}
        </ul>
      </div>
    </aside>
  )
}