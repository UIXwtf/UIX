import type { Heading } from 'nextra'
import { Anchor } from 'nextra/components'
import type { FC } from 'react'
 
export const TOC: FC<{ toc: Heading[] }> = ({ toc }) => {
  return (
    <aside className={'bl'}>
      <div className={'menu'}>
        <div className={'f-12 f-semibold title'}>Содержание</div>
        <ul className={'listItem overflowY bb'} style={{marginTop: 8}}>
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