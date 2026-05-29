import type { Metadata } from "next";
import { CategoryCards } from "@/components/home/CategoryCards";
import { HeroSection } from "@/components/home/HeroSection";
import { SiteShell } from "@/components/layout/SiteShell";
import { SectionCard } from "@/components/shared/SectionCard";
import { Tag } from "@/components/shared/Tag";
import { getHomeCategories, getSearchItems } from "@/data/site-content";

export const metadata: Metadata = {
  title: "AI Learning Guide — Roadmaps, Tools & Tutorials for the AI Era",
  description:
    "Learn AI from zero. Free roadmaps, hands-on tutorials, and practical tools for developers and non-technical learners navigating the AI era.",
  alternates: {
    canonical: "/",
  },
};

/**
 * 首页负责呈现站点定位、搜索入口与四大内容板块。
 */
export default function HomePage() {
  const categories = getHomeCategories();
  const searchItems = getSearchItems();

  return (
    <SiteShell>
      <HeroSection
        description="AI can feel overwhelming when every tutorial assumes you already know where to begin. This guide helps you choose a path, use AI tools intelligently, and turn curiosity into real momentum."
        searchItems={searchItems}
        title="Clear roadmaps, practical tools, and real first steps for learning AI."
      />
      <CategoryCards categories={categories} />
      <section aria-label="Home highlights" className="section-grid">
        <SectionCard>
          <div className="section-card__header">
            <p className="card-kicker">What makes this different</p>
            <h2 className="card-title">Not theory-first. Action-first.</h2>
          </div>
          <div className="section-card__body">
            <p className="section-copy">
              Most AI content explains concepts before giving you a way to use them. This
              site does the opposite: start with a job to do, a tool to learn, or a
              project to build.
            </p>
            <div className="tag-row">
              <Tag tone="accent">Roadmaps</Tag>
              <Tag tone="cyan">Tools</Tag>
              <Tag tone="muted">Projects</Tag>
            </div>
          </div>
        </SectionCard>
        <SectionCard>
          <div className="section-card__header">
            <p className="card-kicker">Who it serves</p>
            <h2 className="card-title">Beginners, career switchers, and working professionals</h2>
          </div>
          <p className="section-copy">
            Whether you want to code with AI, automate your workflow, build agents, or stay
            employable in a changing market, the content is organized around outcomes instead
            of hype.
          </p>
        </SectionCard>
        <SectionCard>
          <div className="section-card__header">
            <p className="card-kicker">How to use it</p>
            <h2 className="card-title">Pick one lane and spend two focused weeks there</h2>
          </div>
          <ul className="stage-list">
            <li className="stage-item">Choose one section that matches your current goal.</li>
            <li className="stage-item">Follow one roadmap or tool stack instead of ten tabs.</li>
            <li className="stage-item">Ship one visible output before expanding your scope.</li>
          </ul>
        </SectionCard>
      </section>
    </SiteShell>
  );
}
