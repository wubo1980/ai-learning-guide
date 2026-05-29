"use client";

import { getNavigationItems } from "@/data/site-content";
import { BrainCircuit } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";

/**
 * 判断导航链接是否为当前页面。
 */
function isActivePath(href: string, pathname: string) {
  if (href === "/") {
    return pathname === "/";
  }

  return pathname.startsWith(href);
}

/**
 * 站点头部组件负责渲染导航与当前路径高亮。
 */
export function SiteHeader() {
  const pathname = usePathname();
  const navigationItems = getNavigationItems();

  return (
    <header className="site-header">
      <div className="container site-header__inner">
        <Link className="brand" href="/">
          <span className="brand__mark">
            <BrainCircuit size={22} />
          </span>
          <span className="brand__text">
            <span className="brand__title">AI Learning Guide</span>
            <span className="brand__subtitle">Roadmaps, tools, and practical direction</span>
          </span>
        </Link>
        <nav aria-label="Primary navigation" className="site-nav">
          {navigationItems.map((item) => (
            <Link
              className={`site-nav__link${isActivePath(item.href, pathname) ? " is-active" : ""}`}
              href={item.href}
              key={item.href}
            >
              {item.label}
            </Link>
          ))}
        </nav>
      </div>
    </header>
  );
}
