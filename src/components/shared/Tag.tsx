import type { ReactNode } from "react";

export type TagProps = {
  children: ReactNode;
  tone?: "accent" | "cyan" | "muted";
};

/**
 * 通用标签组件用于展示时长、主题和工具等短信息。
 */
export function Tag({ children, tone = "muted" }: TagProps) {
  return <span className={`tag tag--${tone}`}>{children}</span>;
}
