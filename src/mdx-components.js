import { useMDXComponents as getNextraComponents } from 'nextra/mdx-components'
import { useMDXComponents as getThemeComponents } from 'nextra-theme-docs' // nextra-theme-blog or your custom theme
import { TOC } from '../app/_components/toc'
import { Breadcrumbs } from '../app/_components/breadcrumbs/breadcrumbs'
import { Navigation } from '../app/_components/navigation/navigation'
import { getPageMap } from 'nextra/page-map';
 
const themeComponents = getThemeComponents();

const defaultComponents = getNextraComponents({
  wrapper: async ({ children, toc }) => {
    const pageMap = await getPageMap()
    return (
      <>
        <main className={'content'}>
          <Breadcrumbs pageMap={pageMap} />
          <div className={'description'}>{children}</div>
          <Navigation pageMap={pageMap} />
        </main>
        <TOC toc={toc} />
      </>
    )
  }
})

export function useMDXComponents(components) {
  return {
    ...themeComponents,
    ...defaultComponents,
    ...components
  }
}