import { getNavigationItems } from "@/data/site-content";
import Link from "next/link";

/**
 * 站点页脚组件负责渲染辅助导航与版权信息。
 */
export function SiteFooter() {
  const navigationItems = getNavigationItems();

  return (
    <footer className="footer">
      <div className="container site-footer__inner">
        <div className="list-stack">
          <strong>AI Learning Guide</strong>
          <p className="footer-note">
            A static guide for learning AI with practical roadmaps, modern tools, and action-first advice.
          </p>
        </div>
        <div className="list-stack">
          <div aria-label="Footer navigation" className="footer-links">
            {navigationItems.map((item) => (
              <Link className="footer-link" href={item.href} key={item.href}>
                {item.label}
              </Link>
            ))}
          </div>
          <p className="footer-note">© 2026 AI Learning Guide. Built for the AI era.</p>
        </div>
      </div>
    </footer>
  );
}
