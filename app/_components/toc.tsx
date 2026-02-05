import type { Heading } from 'nextra'
import { Anchor } from 'nextra/components'
import type { FC } from 'react'
 
export const TOC: FC<{ toc: Heading[] }> = ({ toc }) => {
  return (
    <aside className={'bl'}>
      <div className={'menu'}>
        <h3 className={'f-14 f-semibold'} style={{color: '#000000'}}>Содержание</h3>
        <ul className={'listItem'} style={{marginTop: 8}}>
          {toc.map(heading => (
            <li className={'flex f-14 tocItem'} key={heading.id}>
              <Anchor href={`#${heading.id}`}>{heading.value}</Anchor>
            </li>
          ))}
        </ul>
      </div>
    </aside>
  )
}