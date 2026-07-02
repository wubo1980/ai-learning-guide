import type { Metadata } from "next";
import Link from "next/link";
import { SiteShell } from "@/components/layout/SiteShell";
import { PageHero } from "@/components/shared/PageHero";
import { SectionCard } from "@/components/shared/SectionCard";
import { Tag } from "@/components/shared/Tag";

export const metadata: Metadata = {
  title: "AI Jobs in 2026 — Complete Career Roadmap for Technical and Non-Technical Professionals",
  description:
    "AI careers in 2026 go beyond engineers. Explore the Builder vs Bridger roadmap — with real salaries, in-demand roles, and a 6-month action plan for technical and non-technical professionals.",
  other: {
    "datePublished": "2026-07-02",
    "slug": "articles/ai-jobs-2026-career-roadmap"
  },
  alternates: {
    canonical: "/articles/ai-jobs-2026-career-roadmap",
  }
};

const builderRoles = [
  { role: "Machine Learning Engineer", salary: "$140K-$220K", demand: "Very High", path: "CS/ML degree + 2+ years" },
  { role: "AI Software Engineer", salary: "$130K-$200K", demand: "Very High", path: "Strong coding + AI SDK fluency" },
  { role: "LLM Engineer / Prompt Engineer", salary: "$120K-$190K", demand: "High", path: "Python + LLM APIs + RAG" },
  { role: "Data Scientist (AI)", salary: "$120K-$180K", demand: "High", path: "Stats + ML + Python/R" },
  { role: "MLOps / LLMOps Engineer", salary: "$135K-$210K", demand: "Very High", path: "DevOps + ML pipelines + monitoring" },
  { role: "AI Research Scientist", salary: "$160K-$280K", demand: "Medium", path: "PhD + publications preferred" },
  { role: "AI Safety / Red-Teaming Engineer", salary: "$130K-$200K", demand: "Growing fast", path: "Security mindset + ML knowledge" },
];

const bridgerRoles = [
  { role: "AI Product Manager", salary: "$130K-$200K", demand: "High", path: "PM experience + AI literacy" },
  { role: "AI Operations Specialist", salary: "$90K-$140K", demand: "High", path: "Ops background + AI workflow design" },
  { role: "AI Technical Writer", salary: "$85K-$130K", demand: "Medium", path: "Technical writing + API documentation" },
  { role: "AI Ethics / Governance Lead", salary: "$110K-$170K", demand: "Growing", path: "Policy + ethics + technical literacy" },
  { role: "AI Solutions Consultant", salary: "$100K-$160K", demand: "High", path: "Domain expertise + AI tooling" },
  { role: "Customer Education / Training", salary: "$80K-$120K", demand: "Medium", path: "Teaching + AI platform knowledge" },
  { role: "AI Implementation Manager", salary: "$110K-$170K", demand: "High", path: "Project management + vendor evaluation" },
];

const sixMonthPlan = [
  {
    month: "Month 1",
    builder: "Strengthen Python fundamentals and learn basic ML concepts. Start a GitHub portfolio.",
    bridger: "Build AI literacy. Take Andrew Ng 'AI For Everyone'. Map your domain skills to AI use cases.",
  },
  {
    month: "Month 2",
    builder: "Learn prompt engineering and LLM APIs. Build your first simple AI feature or wrapper app.",
    bridger: "Learn prompt engineering basics. Start using AI tools daily for your existing work. Document results.",
  },
  {
    month: "Month 3",
    builder: "Dive into RAG: chunking strategies, embedding models, vector databases. Build a RAG demo project.",
    bridger: "Identify one workflow in your domain that AI can improve. Design and pitch the solution internally.",
  },
  {
    month: "Month 4",
    builder: "Learn agent frameworks: Vercel AI SDK, LangChain basics. Build a multi-step agent workflow.",
    bridger: "Shadow a technical team or take an AI implementation course. Learn enough to translate between domains.",
  },
  {
    month: "Month 5",
    builder: "Production skills: MLOps, monitoring, evaluation, safety guardrails. Deploy something real.",
    bridger: "Build a portfolio of AI-enhanced projects in your domain. Write case studies showing outcomes.",
  },
  {
    month: "Month 6",
    builder: "Capstone: End-to-end agentic application with monitoring, safety eval, and documentation.",
    bridger: "Prepare for interviews. Tailor resume to highlight AI-adjacent value. Network in AI communities.",
  },
];

export default function AIJobs2026Page() {
  return (
    <SiteShell>
      <PageHero
        asideBody="AI is creating a 'two-track' labour market — professionalised roles for experts and 'bridger' roles for domain professionals who can apply AI. Both pay well."
        asideTitle="PwC 2026 Global AI Jobs Barometer"
        description="AI careers in 2026 are not just for engineers. The market has split into two distinct paths: Builders who create the technology, and Bridgers who apply it. Based on the PwC 2026 Global AI Jobs Barometer, we map both paths with salaries, in-demand roles, and a concrete 6-month action plan."
        eyebrow="Article"
        title="AI Jobs in 2026"
      />

      <section aria-label="Article content" className="page-stack">
        <SectionCard>
          <div className="section-card__header">
            <p className="card-kicker">The big picture</p>
            <h2 className="card-title">The two-track AI job market</h2>
          </div>
          <div className="prose">
            <p>
              According to the <a href="https://www.prnewswire.com/news-releases/ai-reshapes-global-labour-market-into-two-distinct-paths-rewarding-human-skills-pwc-2026-global-ai-jobs-barometer-302798989.html" target="_blank" rel="noopener noreferrer">PwC 2026 Global AI Jobs Barometer</a>, the AI job market has split into two distinct tracks. The first track is "professionalised" roles — engineers, scientists, and technical specialists where AI acts as a force multiplier for deep expertise. The second track is what analysts call "Bridger" roles — professionals who combine domain knowledge with AI fluency to translate between technical capability and business value.
            </p>
            <p>
              This dual-track structure is good news for almost everyone. You do not need a PhD in machine learning to participate in the AI economy. What you need is clarity about which track fits your background, and a plan to build the relevant skills.
            </p>
            <p>
              <a href="https://www.genai.jobs/en/blog/ai-adjacent-talent-boom-bridgers-winning-2026-job-market" target="_blank" rel="noopener noreferrer">GenAI Jobs reports</a> that while AI engineer hiring has plateaued, demand for AI-adjacent roles grew 184% year-over-year. Companies realized that building AI is not enough — they also need people who can implement, manage, train, and communicate about AI systems.
            </p>
          </div>
        </SectionCard>

        <div className="section-header">
          <div className="list-stack">
            <p className="eyebrow">Track 1: Builders</p>
            <h2 className="section-title">Technical roles that build AI systems</h2>
          </div>
        </div>

        <SectionCard>
          <p className="section-copy mb-6">
            Builder roles require coding skills, but the bar has shifted. In 2026, companies care more about your ability to deliver working systems than your degree pedigree. The hottest skills are agentic workflow orchestration, MLOps, RAG, and AI safety.
          </p>
          <div className="overflow-x-auto">
            <table className="w-full text-sm border-collapse">
              <thead>
                <tr className="border-b border-border">
                  <th className="text-left py-3 px-4 font-medium">Role</th>
                  <th className="text-left py-3 px-4 font-medium">Salary Range</th>
                  <th className="text-left py-3 px-4 font-medium">Demand</th>
                  <th className="text-left py-3 px-4 font-medium">Typical Path</th>
                </tr>
              </thead>
              <tbody>
                {builderRoles.map((role) => (
                  <tr key={role.role} className="border-b border-border">
                    <td className="py-3 px-4 font-medium">{role.role}</td>
                    <td className="py-3 px-4">{role.salary}</td>
                    <td className="py-3 px-4">
                      <Tag tone={role.demand === "Very High" ? "accent" : role.demand === "High" ? "accent" : "muted"}>
                        {role.demand}
                      </Tag>
                    </td>
                    <td className="py-3 px-4">{role.path}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </SectionCard>

        <div className="section-header">
          <div className="list-stack">
            <p className="eyebrow">Track 2: Bridgers</p>
            <h2 className="section-title">AI-adjacent roles for non-engineers</h2>
          </div>
        </div>

        <SectionCard>
          <p className="section-copy mb-6">
            Bridger roles are the fastest growing segment of the AI job market. These positions reward domain expertise, communication skills, and practical AI literacy — not the ability to train a model from scratch.
          </p>
          <div className="overflow-x-auto">
            <table className="w-full text-sm border-collapse">
              <thead>
                <tr className="border-b border-border">
                  <th className="text-left py-3 px-4 font-medium">Role</th>
                  <th className="text-left py-3 px-4 font-medium">Salary Range</th>
                  <th className="text-left py-3 px-4 font-medium">Demand</th>
                  <th className="text-left py-3 px-4 font-medium">Typical Path</th>
                </tr>
              </thead>
              <tbody>
                {bridgerRoles.map((role) => (
                  <tr key={role.role} className="border-b border-border">
                    <td className="py-3 px-4 font-medium">{role.role}</td>
                    <td className="py-3 px-4">{role.salary}</td>
                    <td className="py-3 px-4">
                      <Tag tone={role.demand === "High" ? "accent" : "muted"}>
                        {role.demand}
                      </Tag>
                    </td>
                    <td className="py-3 px-4">{role.path}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="text-sm text-muted-foreground mt-4">
            Salary data compiled from PwC 2026 Global AI Jobs Barometer, Jobply.ai, and Open Data Science reports.
          </p>
        </SectionCard>

        <div className="section-header">
          <div className="list-stack">
            <p className="eyebrow">Your plan</p>
            <h2 className="section-title">6-month action plan for each track</h2>
          </div>
        </div>

        {sixMonthPlan.map((step) => (
          <SectionCard key={step.month}>
            <div className="section-card__header">
              <h2 className="card-title">{step.month}</h2>
            </div>
            <div className="section-card__body grid gap-4 md:grid-cols-2">
              <div>
                <p className="card-kicker mb-1">Builder Track</p>
                <p className="section-copy">{step.builder}</p>
              </div>
              <div>
                <p className="card-kicker mb-1">Bridger Track</p>
                <p className="section-copy">{step.bridger}</p>
              </div>
            </div>
          </SectionCard>
        ))}

        <SectionCard>
          <div className="section-card__header">
            <p className="card-kicker">Next steps</p>
            <h2 className="card-title">Where to go from here</h2>
          </div>
          <div className="prose">
            <p>
              The most important decision you can make in 2026 is <strong>which track to pursue</strong>. If you enjoy building, debugging, and engineering — the Builder track offers higher ceiling and more technical depth. If you excel at communication, strategy, and domain expertise — the Bridger track is growing faster and has lower technical barriers to entry.
            </p>
            <p>
              Either way, you need a learning plan. Our <Link href="/articles/ai-learning-roadmap-2026">Complete AI Learning Roadmap for Beginners</Link> provides a structured 6-month plan that works for both tracks. The first two months (Python fundamentals and AI literacy) are the same regardless of your path.
            </p>
            <p>
              For Builder track specifically, start with our <Link href="/coding">Coding & Programming page</Link> and choose the "Zero to Developer" or "AI Career Pivot" roadmap based on your current level.
            </p>
            <p>
              For Bridger track, explore the <Link href="/everyday-ai">Everyday AI Tools page</Link> and learn how to apply AI in your current role before making a formal pivot. Practical experience with AI workflows is the strongest credential you can build.
            </p>
          </div>
        </SectionCard>
      </section>
    </SiteShell>
  );
}
