import type { ReactNode } from "react";
import { SiteFooter } from "@/components/layout/SiteFooter";
import { SiteHeader } from "@/components/layout/SiteHeader";

/**
 * 站点外壳组件为所有页面提供统一导航、容器与页脚。
 */
export function SiteShell({ children }: { children: ReactNode }) {
  return (
    <div className="site-shell">
      <SiteHeader />
      <main className="site-main">
        <div className="container page-stack">{children}</div>
      </main>
      <SiteFooter />
    </div>
  );
}
