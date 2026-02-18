"use client";

import { usePathname } from "next/navigation";
import type { PageMapItem } from "nextra";
import { Anchor } from "nextra/components";
import { normalizePages } from "nextra/normalize-pages";
import type { FC } from "react";
import styles from "./styles.module.css";

// FIXME get dropdown component
// import { Navbar } from "nextra-theme-docs";

export const Navbar: FC<{ pageMap: PageMapItem[] }> = ({ pageMap }) => {
  const pathname = usePathname();
  const { topLevelNavbarItems } = normalizePages({
    list: pageMap,
    route: pathname,
  });

  return (
    <ul className={`f-14 flex ${styles.navBar}`}>
      {topLevelNavbarItems.map((item) => {
        const route = item.route || ("href" in item ? item.href! : "");
        return (
          <li key={route}>
            <Anchor href={route}>{item.title}</Anchor>
          </li>
        );
      })}
    </ul>
  );
};
