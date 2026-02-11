'use client'
 
import { usePathname } from "next/navigation"
import type { PageMapItem } from 'nextra'
import { Anchor } from 'nextra/components'
import { normalizePages } from 'nextra/normalize-pages'
import type { FC } from 'react'
import styles from './styles.module.css';
 
const getIsActive = (item, pathname) => {
  if (!item.frontMatter) {
    return false;
  }

  const href = "/" + item.frontMatter.filePath
    .split("/")
    .slice(1)
    .join("/")
    .replace(/\.\w+$/, "");

  if (pathname === '/') {
    return href === '/index';
  }
  return pathname === href;
};

const arrow = (
  <svg viewBox="0 0 16 16" height="12" width="12">
    <path
      fill="currentColor"
      fillRule="evenodd"
      d="m14.06 5.5-.53.53-4.82 4.82a1 1 0 0 1-1.42 0L2.47 6.03l-.53-.53L3 4.44l.53.53L8 9.44l4.47-4.47.53-.53z"
      clipRule="evenodd"
    ></path>
  </svg>
);

export const Sidebar: FC<{ pageMap: PageMapItem[] }> = ({ pageMap }) => {
  const pathname = usePathname();
  const { docsDirectories } = normalizePages({
    list: pageMap,
    route: pathname
  });

  const renderItem = (item) => {
    const route = item.route || ("href" in item ? (item.href as string) : "");
    const { title } = item;
    return (
      <li
        key={route}
        className={`f-14  ${styles.li} ${getIsActive(item, pathname) ? styles.active : ""}`}
      >
        {"children" in item ? (
          <details>
            <summary className={"flex f-12 menuItem testFont jc-space-between"}>
              {title}
              {arrow}
            </summary>
            <div className={'subMenu'}>
              {item.children.map((child) => renderItem(child))}
            </div>
          </details>
        ) : (
          <Anchor href={route} className={"flex menuItem"}>
            {title}
          </Anchor>
        )}
      </li>
    );
  };
 
  return (
    <aside className={'br'}>
      <div className={'menu'}>
        <ul className={'flex flex-d-col listItem'}>
          {docsDirectories.map((i) => renderItem(i))}
        </ul>
      </div>
    </aside>
  )
}