import { CategoryIcon } from "@/components/icons/CategoryIcons";
import { Tag } from "@/components/shared/Tag";
import type { CategoryCardItem } from "@/data/site-content";
import { ArrowRight } from "lucide-react";
import Link from "next/link";

export type CategoryCardsProps = {
  categories: CategoryCardItem[];
};

/**
 * 首页分类卡片组件负责渲染四个主入口。
 */
export function CategoryCards({ categories }: CategoryCardsProps) {
  return (
    <section aria-labelledby="home-categories-title" className="page-stack">
      <div className="section-header">
        <div className="list-stack">
          <p className="eyebrow">Choose your starting lane</p>
          <h2 className="section-title" id="home-categories-title">
            Four practical ways into the AI era
          </h2>
          <p className="section-subtitle">
            Start with the skill stack you need right now, not with a mountain of theory.
            Every section is designed to help you move from confusion to a concrete next step.
          </p>
        </div>
      </div>
      <div className="card-grid">
        {categories.map((category) => (
          <Link className="category-card" href={category.href} key={category.href}>
            <div className="category-card__icon">
              <CategoryIcon iconKey={category.icon} size={24} />
            </div>
            <div className="list-stack">
              <p className="card-kicker">{category.href}</p>
              <h3 className="card-title">{category.title}</h3>
              <p className="card-copy">{category.description}</p>
            </div>
            <div className="tag-row">
              {category.highlight.map((highlight) => (
                <Tag key={highlight} tone="cyan">
                  {highlight}
                </Tag>
              ))}
            </div>
            <span className="card-arrow">
              Explore this guide
              <ArrowRight size={18} />
            </span>
          </Link>
        ))}
      </div>
    </section>
  );
}
