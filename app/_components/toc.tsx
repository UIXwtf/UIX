import type { Heading } from 'nextra'
import type { FC } from 'react'
 
export const TOC: FC<{ toc: Heading[] }> = ({ toc }) => {
  return (
    <aside className={'bl'}>
      <div className={'menu'}>
      <h3>Содержание</h3>
      <ul className={'listItem'}>
        {toc.map(heading => (
          <li className={'flex f-14 menuItem'} key={heading.id}>{heading.value}</li>
        ))}
      </ul>
      </div>
    </aside>
  )
}