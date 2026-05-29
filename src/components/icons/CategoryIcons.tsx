import type { CategoryIconKey } from "@/data/site-content";
import type { LucideProps } from "lucide-react";
import {
  Bot,
  BriefcaseBusiness,
  Code2,
  Sparkles,
} from "lucide-react";

const iconMap = {
  agents: Bot,
  career: BriefcaseBusiness,
  coding: Code2,
  everydayAi: Sparkles,
} satisfies Record<CategoryIconKey, React.ComponentType<LucideProps>>;

/**
 * 分类图标组件根据内容键值输出统一风格图标。
 */
export function CategoryIcon({
  iconKey,
  ...props
}: { iconKey: CategoryIconKey } & LucideProps) {
  const Icon = iconMap[iconKey];
  return <Icon aria-hidden="true" {...props} />;
}
