import { SiteShell } from "@/components/layout/SiteShell";
import { PageHero } from "@/components/shared/PageHero";
import { SectionCard } from "@/components/shared/SectionCard";
import { Tag } from "@/components/shared/Tag";
import { getAgentContent } from "@/data/site-content";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Build AI Agents — A Practical Guide for the AI Era",
  description:
    "Learn what AI agents are, compare common frameworks, and choose a path from no-code to full-code implementation.",
  alternates: {
    canonical: "/agents",
  },
};

/**
 * Agents 页面展示概念说明、入门路径、框架对比与学习资源。
 */
export default function AgentsPage() {
  const content = getAgentContent();

  return (
    <SiteShell>
      <PageHero
        asideBody="A useful agent combines clear goals, good prompts, reliable tools, state, and evaluation loops. The value is in orchestration, not just model access."
        asideTitle="Production mindset"
        description="From tool calls to multi-step agent graphs. Learn how to build AI agents that actually work in production."
        eyebrow="Building AI Agents"
        title="Build AI Agents — A Practical Guide for the AI Era"
      />
      <section aria-label="Agent foundations" className="category-grid">
        <SectionCard>
          <div className="section-card__header">
            <p className="card-kicker">What is an AI agent?</p>
            <h2 className="card-title">A system that can plan, call tools, and continue toward a goal.</h2>
          </div>
          <div className="prose">
            {content.intro.map((paragraph) => (
              <p key={paragraph}>{paragraph}</p>
            ))}
          </div>
        </SectionCard>
        <SectionCard>
          <div className="section-card__header">
            <p className="card-kicker">How to begin</p>
            <h2 className="card-title">Choose the smallest level of complexity that still teaches the core pattern.</h2>
          </div>
          <div className="section-card__body">
            {content.paths.map((path) => (
              <div className="list-stack" key={path.level}>
                <div className="tag-row">
                  <Tag tone="accent">{path.level}</Tag>
                </div>
                <p className="list-copy">{path.description}</p>
                <ul className="stage-list">
                  {path.outcomes.map((outcome) => (
                    <li className="stage-item" key={outcome}>
                      {outcome}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </SectionCard>
      </section>
      <section aria-label="Framework comparison" className="framework-grid">
        {content.frameworks.map((framework) => (
          <SectionCard key={framework.name}>
            <div className="section-card__header">
              <p className="card-kicker">Framework comparison</p>
              <h2 className="card-title">{framework.name}</h2>
              <p className="section-copy">Best for: {framework.bestFor}</p>
            </div>
            <ul className="stage-list">
              {framework.strengths.map((strength) => (
                <li className="stage-item" key={strength}>
                  {strength}
                </li>
              ))}
            </ul>
          </SectionCard>
        ))}
      </section>
      <section aria-labelledby="agent-resources-title" className="page-stack">
        <div className="section-header">
          <div className="list-stack">
            <p className="eyebrow">Recommended resources</p>
            <h2 className="section-title" id="agent-resources-title">
              Learn the patterns, then build something small and real
            </h2>
          </div>
        </div>
        <SectionCard>
          <ul className="stage-list">
            {content.resources.map((resource) => (
              <li className="stage-item" key={resource.title}>
                <strong>{resource.title}</strong> — {resource.type}. {resource.note}
              </li>
            ))}
          </ul>
        </SectionCard>
      </section>
    </SiteShell>
  );
}
