import type { Metadata } from "next";
import { SiteShell } from "@/components/layout/SiteShell";
import { PageHero } from "@/components/shared/PageHero";
import { SectionCard } from "@/components/shared/SectionCard";
import { Tag } from "@/components/shared/Tag";

export const metadata: Metadata = {
  title: "5 AI Projects to Build for Your 2026 Portfolio (With Real Outcome Goals)",
  description:
    "Ship AI projects that get you noticed. Five project ideas with tech stacks, difficulty levels, and the hiring signal each one sends.",
  other: {
    "datePublished": "2026-06-22",
    "slug": "articles/portfolio-projects"
  },
  alternates: {
    canonical: "/articles/portfolio-projects",
  }
};

const projects = [
  {
    title: "Customer Support Triage Agent",
    difficulty: "Beginner",
    techStack: "No-code platform (Coze, Dify, or Zapier AI)",
    timeToBuild: "1\u20132 days",
    description:
      "Build an agent that reads incoming support messages, classifies them (bug / billing / feature request), and drafts a response. Connect it to a shared inbox or ticket system.",
    portfolioSignal:
      "Demonstrates that you understand the core agent pattern: instructions, tools, and evaluation. Hiring managers see a candidate who can identify a real business problem and automate it.",
    keyTakeaway: "Focus on the edge cases your agent handles poorly. Every good agent portfolio project has a section titled 'Where it failed and what I learned.'",
  },
  {
    title: "Personal Research Assistant",
    difficulty: "Beginner\u2013Intermediate",
    techStack: "Python + OpenAI/Claude API + basic web scraping",
    timeToBuild: "3\u20135 days",
    description:
      "An agent that takes a topic, searches multiple sources, summarizes findings, and produces a structured research brief. It uses tool calling to decide when to search and when to summarize.",
    portfolioSignal:
      "Shows you can build the agent loop from scratch. The multi-tool orchestration (search + summarize + format) is the exact pattern used in production research agents.",
    keyTakeaway: "Publish the code on GitHub with a README that explains the architecture. Include sample outputs so anyone can see what the agent produces without running it.",
  },
  {
    title: "Document Workflow Automation",
    difficulty: "Intermediate",
    techStack: "Python + FastAPI + any LLM API + file storage (S3/local)",
    timeToBuild: "1 week",
    description:
      "An agent that watches a folder or email inbox for incoming documents, classifies them, extracts key data, and routes them to the right destination. This is the most common real-world agent use case.",
    portfolioSignal:
      "This is the exact agent pattern that property management, logistics, and healthcare companies pay for. A working document routing agent proves you understand production constraints like error handling and human-in-the-loop approval.",
    keyTakeaway: "Add a web dashboard that shows the agent's decision log. Transparency in agent reasoning is a hiring differentiator in 2026.",
  },
  {
    title: "Multi-Agent Content System",
    difficulty: "Intermediate\u2013Advanced",
    techStack: "Vercel AI SDK or LangChain + Next.js + vector store (optional)",
    timeToBuild: "1\u20132 weeks",
    description:
      "Build two agents that collaborate: a research agent that gathers information and a writer agent that turns it into formatted content. A supervisor agent decides which agent to call based on the task.",
    portfolioSignal:
      "Multi-agent orchestration is the #1 skill gap in 2026 agent engineering. A working two-agent collaboration with state management and handoff is a strong portfolio piece.",
    keyTakeaway: "Keep the handoff simple. Do not add a vector database or complex memory until you have the basic two-agent loop working. Complexity is not sophistication.",
  },
  {
    title: "Personal AI Learning Companion",
    difficulty: "Beginner",
    techStack: "Any path (no-code, low-code, or code-first)",
    timeToBuild: "2\u20134 days",
    description:
      "An agent that helps you learn a topic. It quizzes you, tracks what you got wrong, focuses review on weak areas, and schedules spaced repetition. Build it for yourself first, then generalize.",
    portfolioSignal:
      "Shows product thinking, not just engineering. The ability to build something YOU actually need and use daily is a better signal than a complex system for an imaginary user.",
    keyTakeaway: "Use it yourself for a week before showing it to anyone. The bugs you fix during personal use are the ones that make the project portfolio-ready.",
  },
];

export default function PortfolioProjectsPage() {
  return (
    <SiteShell>
      <PageHero
        asideBody='The strongest portfolio projects read like a case study: "Here is the problem, here is the architecture, here is what I learned when it broke."'
        asideTitle="Portfolio philosophy"
        description="Hiring managers care about one or two well-executed projects more than ten shallow demos. These five projects are designed to build real skills and real portfolio material."
        eyebrow="Article"
        title="5 AI Projects to Build for Your 2026 Portfolio \u2014 With Real Outcome Goals"
      />

      <section aria-label="Article content" className="page-stack">
        <SectionCard>
          <div className="section-card__header">
            <p className="card-kicker">Why this matters</p>
            <h2 className="card-title">Portfolio projects are your new resume</h2>
          </div>
          <div className="prose">
            <p>
              In 2026, employers interviewing for AI-adjacent roles care less about your degree and more about what you have shipped. The AI job market has shifted from credentials to proof of work. A well-documented project that solves a real problem signals more than a list of completed courses.
            </p>
            <p>
              Our <a href="/career" style={{color: "var(--cyan)", textDecoration: "underline"}}>Career & Skills</a> section already covers the portfolio philosophy in depth: choose projects that reflect the role you want, write case studies, and optimize for clarity over complexity. These five project ideas put that philosophy into practice.
            </p>
          </div>
        </SectionCard>

        {projects.map((project, i) => (
          <SectionCard key={project.title}>
            <div className="section-card__header">
              <div className="tag-row">
                <Tag tone="accent">Project {i + 1}</Tag>
                <Tag>{project.difficulty}</Tag>
                <Tag tone="cyan">~{project.timeToBuild}</Tag>
              </div>
              <h2 className="card-title">{project.title}</h2>
            </div>
            <div className="section-card__body">
              <p className="card-kicker">Tech stack</p>
              <p className="section-copy">{project.techStack}</p>
              <div className="subtle-divider"></div>
              <p className="card-kicker">What to build</p>
              <p className="section-copy">{project.description}</p>
              <div className="subtle-divider"></div>
              <p className="card-kicker">Hiring signal</p>
              <p className="section-copy">{project.portfolioSignal}</p>
              <div className="subtle-divider"></div>
              <p className="card-kicker">Key takeaway</p>
              <p className="section-copy">{project.keyTakeaway}</p>
            </div>
          </SectionCard>
        ))}

        <SectionCard>
          <div className="section-card__header">
            <p className="card-kicker">External references</p>
            <h2 className="card-title">Sources and further reading</h2>
          </div>
          <ul className="stage-list">
            <li className="stage-item"><a href="https://www.datacamp.com/blog/ai-roadmap" target="_blank" rel="noopener noreferrer" data-slug="datacamp-roadmap">DataCamp: AI Learning Roadmap 2026</a></li>
            <li className="stage-item"><a href="https://medium.com/@dparente/10-mistakes-when-learning-ai-that-are-quietly-wrecking-your-progress-c288a8be2c31" target="_blank" rel="noopener noreferrer" data-slug="medium-mistakes">Medium: 10 Mistakes When Learning AI</a></li>
          </ul>
        </SectionCard>
        
        <SectionCard>
          <div className="section-card__header">
            <p className="card-kicker">Final advice</p>
            <h2 className="card-title">Pick one, ship it, then reflect</h2>
          </div>
          <ul className="stage-list">
            <li className="stage-item">Build ONE project from start to finish instead of starting all five.</li>
            <li className="stage-item">Document your architecture decisions and what broke along the way.</li>
            <li className="stage-item">Publish the code, a README case study, and ideally a live demo.</li>
            <li className="stage-item">Share it with the community on dev.to or Reddit for feedback.</li>
            <li className="stage-item">Use the feedback to improve, then move to project 2. Rinse, repeat.</li>
          </ul>
        </SectionCard>
      </section>
    </SiteShell>
  );
}
