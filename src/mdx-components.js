import { useMDXComponents as getNextraComponents } from 'nextra/mdx-components'
import { TOC } from '../app/_components/toc'
 
const defaultComponents = getNextraComponents({
  wrapper({ children, navigation, toc }) {
    return (
      <>
          <div className={'test'}>
            <div className={'test2'}>{children}</div>
            <TOC toc={toc} />
          </div>
      </>
    )
  }
})
 
export const useMDXComponents = components => ({
  ...defaultComponents,
  ...components
})