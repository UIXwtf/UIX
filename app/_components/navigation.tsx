'use client'

import { usePathname } from 'next/navigation'
import type { PageMapItem } from 'nextra'
import { Anchor } from 'nextra/components'
import { normalizePages } from 'nextra/normalize-pages'
import type { FC } from 'react'

export const Navigation: FC<{ pageMap: PageMapItem[] }> = ({ pageMap }) => {
  const pathname = usePathname()
  const { flatDocsDirectories, activeIndex } = normalizePages({
    list: pageMap,
    route: pathname
  })

  const prevPage = activeIndex > 0 ? flatDocsDirectories[activeIndex - 1] : null
  const nextPage = activeIndex < flatDocsDirectories.length - 1 ? flatDocsDirectories[activeIndex + 1] : null

  return (
    <div style={{ display: 'flex', justifyContent: 'space-between', padding: 20 }}>
      {prevPage && (
        <Anchor href={prevPage.route}>
          ← {prevPage.title}
        </Anchor>
      )}
      {nextPage && (
        <Anchor href={nextPage.route}>
          {nextPage.title} →
        </Anchor>
      )}
    </div>
  )
}