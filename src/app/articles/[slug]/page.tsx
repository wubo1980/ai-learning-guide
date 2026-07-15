import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { SiteShell } from "@/components/layout/SiteShell";
import { PageHero } from "@/components/shared/PageHero";
import { SectionCard } from "@/components/shared/SectionCard";
import { Link } from "@/components/shared/Link";
import { Tag } from "@/components/shared/Tag";
import { articlesData } from "@/data/article-content";

type Props = { params: Promise<{ slug: string }> };

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const article = articlesData[slug];
  if (!article) return {};
  return {
    title: article.title,
    description: article.description,
    alternates: { canonical: `/articles/${slug}` },
  };
}

export default async function ArticlePage({ params }: Props) {
  const { slug } = await params;
  const article = articlesData[slug];
  if (!article) notFound();

  return (
    <SiteShell>
      <PageHero asideBody={article.description} />
      <section aria-label="Article content" className="page-stack">
        <SectionCard>
          <div className="section-card__header">
            <p className="text-sm font-semibold uppercase tracking-[0.28em] text-stone-500">{article.date}</p>
            <h1 className="section-title">{article.title}</h1>
          </div>
          <div className="prose max-w-none">
            {article.sections.map((sec, i) => (
              <div key={i}>
                <h2>{sec.heading}</h2>
                {sec.content.map((para, j) => (
                  <p key={j}>{para}</p>
                ))}
              </div>
            ))}
          </div>
        </SectionCard>
      </section>
    </SiteShell>
  );
}
