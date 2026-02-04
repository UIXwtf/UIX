import type { Metadata } from 'next'
import { Head } from 'nextra/components'
import { getPageMap } from 'nextra/page-map'
import type { FC, ReactNode } from 'react'
import { NextraTheme } from './_components/nextra-theme'
import 'nextra-theme-docs/style.css'
import './_components/uix-docs-theme/global.css'
import { Layout } from 'nextra-theme-docs'
 
export const metadata: Metadata = {
  title: {
    absolute: '',
    template: '%s - Nextra'
  }
}
const RootLayout: FC<{ children: ReactNode }> = async ({ children }) => {
  const pageMap = await getPageMap()
  return (
    <html lang="en" dir="ltr">
      <Head faviconGlyph="✦" />
      <body>
        <NextraTheme pageMap={pageMap}>{children}</NextraTheme>
      </body>
    </html>
  )
}
 
export default RootLayout