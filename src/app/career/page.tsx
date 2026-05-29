import { SiteShell } from "@/components/layout/SiteShell";
import { PageHero } from "@/components/shared/PageHero";
import { SectionCard } from "@/components/shared/SectionCard";
import { Tag } from "@/components/shared/Tag";
import { getCareerSections } from "@/data/site-content";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "AI Career Guide — Navigate the New Job Market",
  description:
    "Practical advice for navigating the AI job market, building relevant skills, and turning learning into employable proof of work.",
  alternates: {
    canonical: "/career",
  },
};

/**
 * Career 页面展示 AI 时代的职业判断、技能与行动建议。
 */
export default function CareerPage() {
  const sections = getCareerSections();

  return (
    <SiteShell>
      <PageHero
        asideBody="This page is designed to replace vague fear with practical decision-making. Read one section, take one action, and build from there."
        asideTitle="Career lens"
        description="Practical direction for developers, career switchers, and non-technical professionals navigating the AI era."
        eyebrow="Career & Skills"
        title="AI Career Guide — Navigate the New Job Market"
      />
      <section aria-label="Career sections" className="page-stack">
        {sections.map((section) => (
          <SectionCard key={section.title}>
            <div className="section-card__header">
              <p className="card-kicker">Career chapter</p>
              <h2 className="card-title">{section.title}</h2>
            </div>
            <div className="prose">
              {section.paragraphs.map((paragraph) => (
                <p key={paragraph}>{paragraph}</p>
              ))}
            </div>
            <div className="section-card__body">
              <div className="tag-row">
                <Tag tone="accent">Action steps</Tag>
              </div>
              <ul className="stage-list">
                {section.actionSteps.map((step) => (
                  <li className="stage-item" key={step}>
                    {step}
                  </li>
                ))}
              </ul>
            </div>
          </SectionCard>
        ))}
      </section>
    </SiteShell>
  );
}
