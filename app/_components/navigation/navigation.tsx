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
    <div className={`flex ${styles.navLinks}`}>
      <div className={'w-100 pt-24 pr-64'}>
        {prevPage && (
          <Anchor className={`flex jc-space-between ${styles.link}`} href={prevPage.route}>
            <svg width="64" height="72" viewBox="0 0 80 80" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
              <g opacity="1">
                <path fillRule="evenodd" clipRule="evenodd" d="M12.01 39.9995L69.999 39.9995L69.999 38.9995L12.0088 38.9995L23.0778 28.7312L22.3977 27.998L10.3952 39.1324L10 39.4989L10.3952 39.8655L22.3977 50.9998L23.0778 50.2667L12.01 39.9995Z"></path>
              </g>
            </svg>
            <div className={'flex flex-d-col ai-end'}>
              <span className={`f-10 ${styles.footnote}`}>Предыдущая</span>
              <div className={`flex ${styles.name}`}>{prevPage.title}</div>
            </div>
          </Anchor>
        )}
      </div>
      <div className={'w-100 pt-24 pl-64 bl'}>
        {nextPage && (
          <Anchor className={`flex jc-space-between ai-start ${styles.link}`} href={nextPage.route}>
            <div className={'flex flex-d-col'}>
              <span className={`f-10 ${styles.footnote}`}>Следующая</span>
              <div className={`flex ${styles.name}`}>{nextPage.title}</div>
            </div>
            <svg width="64" height="72" viewBox="0 0 80 80" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                <g opacity="1">
                  <path fillRule="evenodd" clipRule="evenodd" d="M67.9891 38.9986L10 38.9986V39.9986L67.9902 39.9986L56.9213 50.2669L57.6014 51L69.6039 39.8657L69.999 39.4991L69.6039 39.1325L57.6014 27.9982L56.9213 28.7313L67.9891 38.9986Z"></path>
                </g>
              </svg>
          </Anchor>
        )}
      </div>
    </div>
  )
}