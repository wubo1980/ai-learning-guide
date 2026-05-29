import { SiteShell } from "@/components/layout/SiteShell";
import { PageHero } from "@/components/shared/PageHero";
import { SectionCard } from "@/components/shared/SectionCard";
import { Tag } from "@/components/shared/Tag";
import { getEverydayAiCategories } from "@/data/site-content";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Everyday AI Tools — Practical AI for Non-Technical People",
  description:
    "AI isn't just for programmers. Discover practical tools for writing, design, data analysis, and workflow automation.",
  alternates: {
    canonical: "/everyday-ai",
  },
};

/**
 * Everyday AI 页面展示非技术用户的工具分类与场景。
 */
export default function EverydayAiPage() {
  const categories = getEverydayAiCategories();

  return (
    <SiteShell>
      <PageHero
        asideBody="The fastest way to feel AI progress is to connect one tool to one recurring task you already do every week."
        asideTitle="Practical lens"
        description="AI isn't just for programmers. Here's how to use AI tools to write better, design faster, analyze data, and automate your workflow — no coding required."
        eyebrow="Everyday AI Tools"
        title="Everyday AI Tools — Practical AI for Non-Technical People"
      />
      <section aria-label="Everyday AI categories" className="category-grid">
        {categories.map((category) => (
          <SectionCard key={category.title}>
            <div className="section-card__header">
              <p className="card-kicker">{category.title}</p>
              <h2 className="card-title">{category.description}</h2>
            </div>
            <div className="section-card__body">
              {category.tools.map((tool) => (
                <div className="list-stack" key={tool.name}>
                  <div className="tag-row">
                    <Tag tone="accent">{tool.name}</Tag>
                  </div>
                  <p className="list-copy">{tool.useCase}</p>
                </div>
              ))}
            </div>
          </SectionCard>
        ))}
      </section>
    </SiteShell>
  );
}
