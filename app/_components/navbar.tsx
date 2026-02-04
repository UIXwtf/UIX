'use client'
 
import { usePathname } from 'next/navigation'
import type { PageMapItem } from 'nextra'
import { Banner } from 'nextra/components'
import { Anchor } from 'nextra/components'
import { normalizePages } from 'nextra/normalize-pages'
import type { FC } from 'react'


export const Navbar: FC<{ pageMap: PageMapItem[] }> = ({ pageMap }) => {
  const pathname = usePathname()
  const { topLevelNavbarItems } = normalizePages({
    list: pageMap,
    route: pathname
  })
 
  return (
    
    <ul style={{display: 'flex', listStyleType: 'none', gap: 20, margin: 0}}>
        <Banner storageKey="some-key">Nextra 4.0 is released 🎉</Banner>
        {topLevelNavbarItems.map(item => {
            const route = item.route || ('href' in item ? item.href! : '')
            return (
                <li key={route}>
                    <Anchor href={route} style={{ textDecoration: 'none' }}>
                        {item.title}
                    </Anchor>
                </li>
            )
        })}
    </ul>
  )
}