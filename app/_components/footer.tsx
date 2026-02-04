import type { FC } from 'react'
 
export const Footer: FC = () => {
  return (
    <footer className={'container bt'}>
      Powered by Nextra {new Date().getFullYear()}
    </footer>
  )
}