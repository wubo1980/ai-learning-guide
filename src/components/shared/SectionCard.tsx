import type { ReactNode } from "react";

export type SectionCardProps = {
  children: ReactNode;
  className?: string;
};

/**
 * 通用卡片容器统一页面区块样式。
 */
export function SectionCard({ children, className }: SectionCardProps) {
  return <article className={`section-card${className ? ` ${className}` : ""}`}>{children}</article>;
}
