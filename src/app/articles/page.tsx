import type { Metadata } from "next";
import Link from "next/link";
import { SiteShell } from "@/components/layout/SiteShell";
import { PageHero } from "@/components/shared/PageHero";
import { SectionCard } from "@/components/shared/SectionCard";
import { Tag } from "@/components/shared/Tag";
import { getArticleMetaList } from "@/data/site-content";

export const metadata: Metadata = {
  title: "Articles — In-Depth Guides & Tutorials",
  description:
    "Practical AI tutorials, step-by-step guides, and career advice for developers and non-technical learners.",
  alternates: {
    canonical: "/articles",
  },
  other: {
    "datePublished": "2026-06-22",
    "slug": "articles",
  },
};

export default function ArticlesPage() {
  const articles = getArticleMetaList();

  return (
    <SiteShell>
      <PageHero
        description="In-depth guides that go beyond overviews. Each article covers a focused topic with actionable steps and real examples."
        eyebrow="Articles"
        title="In-Depth Guides & Tutorials"
      />
      <section aria-label="Article list" className="page-stack">
        {articles.map((article) => (
          <Link href={`/articles/${article.slug}`} key={article.slug}>
            <SectionCard>
              <div className="section-card__header">
                <p className="card-kicker">{article.category}</p>
                <h2 className="card-title">{article.title}</h2>
              </div>
              <p className="section-copy">{article.description}</p>
              <div className="section-card__body">
                <div className="tag-row">
                  <Tag>{article.readTime}</Tag>
                  <Tag tone="accent">{article.difficulty}</Tag>
                  <Tag tone="cyan">{article.date}</Tag>
                </div>
              </div>
            </SectionCard>
          </Link>
        ))}
      </section>
    </SiteShell>
  );
}
