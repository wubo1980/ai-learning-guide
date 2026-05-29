import { SiteShell } from "@/components/layout/SiteShell";
import { PageHero } from "@/components/shared/PageHero";
import { SectionCard } from "@/components/shared/SectionCard";
import { Tag } from "@/components/shared/Tag";
import { getCodingRoadmaps } from "@/data/site-content";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Learn to Code with AI — Roadmaps, Tutorials & Resources",
  description:
    "You don't need a CS degree. Here are practical roadmaps and resources to move from beginner to building real applications.",
  alternates: {
    canonical: "/coding",
  },
};

/**
 * Coding 页面展示三条学习编程的实践路线。
 */
export default function CodingPage() {
  const roadmaps = getCodingRoadmaps();

  return (
    <SiteShell>
      <PageHero
        asideBody="Use AI as a tutor, pair programmer, debugger, and feedback engine. The goal is not to outsource thinking. The goal is to learn faster while still understanding what you build."
        asideTitle="Roadmap strategy"
        description="You don't need a CS degree. Here are the fastest paths to go from absolute beginner to building real applications."
        eyebrow="Coding & Programming"
        title="Learn to Code with AI — Roadmaps, Tutorials & Resources"
      />
      <section aria-label="Coding roadmaps" className="section-grid">
        {roadmaps.map((roadmap) => (
          <SectionCard key={roadmap.title}>
            <div className="section-card__header">
              <p className="timeline">{roadmap.duration}</p>
              <h2 className="card-title">{roadmap.title}</h2>
              <p className="section-copy">{roadmap.summary}</p>
            </div>
            <div className="section-card__body">
              <div className="list-stack">
                <p className="card-kicker">Stages</p>
                <ul className="stage-list">
                  {roadmap.stages.map((stage) => (
                    <li className="stage-item" key={stage}>
                      {stage}
                    </li>
                  ))}
                </ul>
              </div>
              <div className="subtle-divider" />
              <div className="list-stack">
                <p className="card-kicker">Recommended tools</p>
                <div className="tag-row">
                  {roadmap.tools.map((tool) => (
                    <Tag key={tool} tone="accent">
                      {tool}
                    </Tag>
                  ))}
                </div>
              </div>
            </div>
          </SectionCard>
        ))}
      </section>
    </SiteShell>
  );
}
