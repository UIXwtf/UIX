'use client'

import { usePathname } from 'next/navigation'
import type { PageMapItem } from 'nextra'
import { Anchor } from 'nextra/components'
import { normalizePages } from 'nextra/normalize-pages'
import type { FC } from 'react'

export const Breadcrumbs: FC<{ pageMap: PageMapItem[] }> = ({ pageMap }) => {
  const pathname = usePathname()
  const { activePath } = normalizePages({
    list: pageMap,
    route: pathname
  })

  return (
    <div className={'breadcrumbs'}>
      {activePath.map((item, index) => (
        <span key={item.route}>
          {index > 0 && <span> / </span>}
          <Anchor href={item.route}>
            {item.title}
          </Anchor>
        </span>
      ))}
    </div>
  )
}