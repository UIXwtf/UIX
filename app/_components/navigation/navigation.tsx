'use client'

import { usePathname } from 'next/navigation'
import type { PageMapItem } from 'nextra'
import { Anchor } from 'nextra/components'
import { normalizePages } from 'nextra/normalize-pages'
import type { FC } from 'react'
import styles from './styles.module.css'

export const Navigation: FC<{ pageMap: PageMapItem[] }> = ({ pageMap }) => {
  const pathname = usePathname()
  const { flatDocsDirectories, activeIndex } = normalizePages({
    list: pageMap,
    route: pathname
  })

  const prevPage = activeIndex > 0 ? flatDocsDirectories[activeIndex - 1] : null
  const nextPage = activeIndex < flatDocsDirectories.length - 1 ? flatDocsDirectories[activeIndex + 1] : null

  return (
    <div className={`flex jc-space-between ${styles.navLinks}`}>
      {prevPage && (
        <Anchor className={'flex flex-d-col ai-end'} href={prevPage.route}>
          <span className={`f-10 ${styles.footnote}`}>Предыдущая</span>
          <div className={`flex f-14 ${styles.navLink}`}>
            <svg aria-hidden="true" display="block" width="12" height="14" viewBox="0 0 12 16" fill="none">
              <path fill="currentColor" d="m4.773 8 3.363 3.364a.9.9 0 1 1-1.272 1.272l-4-4a.9.9 0 0 1 0-1.272l4-4a.9.9 0 1 1 1.272 1.272z"></path>
            </svg>
            {prevPage.title}
            </div>
        </Anchor>
      )}
      {nextPage && (
        <Anchor className={'flex flex-d-col ai-start ml-auto'} href={nextPage.route}>
          <span className={`f-10 ${styles.footnote}`}>Следующая</span>
          <div className={`flex f-14 ${styles.navLink}`}>
            {nextPage.title}
            <svg aria-hidden="true" display="block" width="12" height="14" viewBox="0 0 12 16" fill="none">
              <path fill="currentColor" fillRule="evenodd" d="M4.22 3.47a.75.75 0 0 1 1.06 0l4 4a.75.75 0 0 1 0 1.06l-4 4a.75.75 0 0 1-1.06-1.06L7.69 8 4.22 4.53a.75.75 0 0 1 0-1.06" clipRule="evenodd"></path>
            </svg>
          </div>
        </Anchor>
      )}
    </div>
  )
}