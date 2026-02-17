'use client'

import { usePathname } from 'next/navigation'
import type { PageMapItem } from 'nextra'
import { Anchor } from 'nextra/components'
import { normalizePages } from 'nextra/normalize-pages'
import type { FC } from 'react'
import styles from './styles.module.css'

export const Breadcrumbs: FC<{ pageMap: PageMapItem[] }> = ({ pageMap }) => {
  const pathname = usePathname()
  const { activePath } = normalizePages({
    list: pageMap,
    route: pathname
  })

  return (
    <div className={`f-12 title ${styles.breadcrumbs}`}>
      {activePath.map((item, index) => (
        <span key={item.route}>
          {index > 0 && <svg viewBox="0 0 16 16" height="12" width="12"><path fill="currentColor" fillRule="evenodd" d="m5.5 1.94.53.53 4.82 4.82a1 1 0 0 1 0 1.42l-4.82 4.82-.53.53L4.44 13l.53-.53L9.44 8 4.97 3.53 4.44 3z" clipRule="evenodd"></path></svg>}
          <Anchor href={item.route}>
            {item.title}
          </Anchor>
        </span>
      ))}
    </div>
  )
}