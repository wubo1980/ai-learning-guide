import { SearchInput } from "@/components/shared/SearchInput";
import { Tag } from "@/components/shared/Tag";
import type { SearchItem } from "@/data/site-content";

export type HeroSectionProps = {
  title: string;
  description: string;
  searchItems: SearchItem[];
};

/**
 * 首页 Hero 组件负责渲染站点定位、价值表达与搜索交互。
 */
export function HeroSection({ title, description, searchItems }: HeroSectionProps) {
  return (
    <section className="hero">
      <div className="hero__grid">
        <div className="hero__copy">
          <p className="eyebrow">Learn AI by using AI</p>
          <h1 className="hero__title">{title}</h1>
          <p className="hero__description">{description}</p>
          <div className="tag-row">
            <Tag tone="accent">Hands-on roadmaps</Tag>
            <Tag tone="cyan">Tool-first learning</Tag>
            <Tag tone="muted">Built for beginners</Tag>
          </div>
          <SearchInput
            items={searchItems}
            placeholder="Search roadmaps, tutorials, or practical guides"
          />
        </div>
        <aside className="hero__panel">
          <div className="metric-card">
            <p className="metric">01 / Start with direction</p>
            <strong>Pick the path that matches your background and urgency.</strong>
          </div>
          <div className="metric-card">
            <p className="metric">02 / Learn with tools</p>
            <strong>Use AI assistants to shorten the feedback loop from day one.</strong>
          </div>
          <div className="metric-card">
            <p className="metric">03 / Build signal</p>
            <strong>Turn tutorials into projects, workflows, and portfolio evidence.</strong>
          </div>
        </aside>
      </div>
    </section>
  );
}
