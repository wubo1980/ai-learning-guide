import type { Metadata } from "next";
import Link from "next/link";
import { SiteShell } from "@/components/layout/SiteShell";
import { PageHero } from "@/components/shared/PageHero";
import { SectionCard } from "@/components/shared/SectionCard";
import { Tag } from "@/components/shared/Tag";

export const metadata: Metadata = {
  title: "The Complete AI Learning Roadmap for Beginners in 2026 (6-Month Plan)",
  description:
    "A structured 6-month AI learning roadmap for beginners in 2026. From Python fundamentals to building and deploying agentic workflows. Free resources included.",
  other: {
    "datePublished": "2026-06-28",
    "slug": "articles/ai-learning-roadmap-2026"
  },
  alternates: {
    canonical: "/articles/ai-learning-roadmap-2026",
  }
};

const months = [
  {
    month: "Month 1",
    title: "Python Fundamentals & Data Basics",
    duration: "4 weeks",
    goals: [
      "Install Python, write and run your first scripts, and understand core data types and control flow.",
      "Work with lists, dictionaries, and functions confidently.",
      "Use basic libraries: pandas for data manipulation, matplotlib for simple visualizations.",
      "Complete at least 10 small coding exercises to build muscle memory.",
    ],
    resources: [
      "FreeCodeCamp Python for Everybody (YouTube, 14 hours)",
      "Google Colab (free, browser-based Python environment)",
      "Python.org official tutorial (first 10 sections)",
    ],
    skillLevel: "Beginner",
    linkText: "",
    linkHref: "",
  },
  {
    month: "Month 2",
    title: "Machine Learning Foundations",
    duration: "4 weeks",
    goals: [
      "Understand supervised vs unsupervised learning and the core ML workflow (train, validate, test).",
      "Build your first models with scikit-learn: linear regression, decision trees, and k-nearest neighbors.",
      "Learn evaluation metrics: accuracy, precision, recall, F1 score, and confusion matrices.",
      "Train a simple image classifier using a neural network in PyTorch or TensorFlow.",
    ],
    resources: [
      "Google ML Crash Course (free, 15 hours, https://developers.google.com/machine-learning/crash-course/)",
      "Fast.ai Practical Deep Learning for Coders (free, https://www.fast.ai/)",
    ],
    skillLevel: "Beginner\u2013Intermediate",
    linkText: "See our guide on choosing your learning path",
    linkHref: "/articles/no-code-vs-code-first",
  },
  {
    month: "Month 3",
    title: "LLMs, Prompt Engineering & RAG",
    duration: "4 weeks",
    goals: [
      "Understand how large language models are trained: tokenization, attention, transformer architecture.",
      "Master prompt engineering techniques: chain-of-thought, iterative refinement, structured output.",
      "Build a retrieval-augmented generation (RAG) pipeline: chunk documents, generate embeddings, store in vector DB.",
      "Learn to evaluate LLM outputs for accuracy, relevance, and safety.",
    ],
    resources: [
      "DeepLearning.AI Generative AI with LLMs (free, https://www.deeplearning.ai/courses/generative-ai-with-llms/)",
      "Hugging Face NLP Course (free, https://huggingface.co/learn/nlp-course)",
      "Anthropic Prompt Engineering Guide (docs.anthropic.com)",
    ],
    skillLevel: "Intermediate",
    linkText: "Deep dive into prompt engineering techniques",
    linkHref: "/articles/prompt-engineering-guide",
  },
  {
    month: "Month 4",
    title: "Agent Fundamentals & Tool-Use Patterns",
    duration: "4 weeks",
    goals: [
      "Understand what makes an AI agent different from a chatbot: tool calling, multi-step reasoning, state management.",
      "Build a simple agent that can answer questions using a search tool and a calculator.",
      "Learn agent orchestration patterns: sequential, parallel, and conditional workflows.",
      "Implement error handling, retries, and logging for agent pipelines.",
    ],
    resources: [
      "Anthropic Agent Cookbook (docs.anthropic.com/en/docs/agents-and-tools)",
      "LangChain Quickstart Guide (python.langchain.com)",
      "Vercel AI SDK Documentation (sdk.vercel.ai)",
    ],
    skillLevel: "Intermediate",
    linkText: "Build your first AI agent step by step",
    linkHref: "/articles/build-first-agent",
  },
  {
    month: "Month 5",
    title: "MLOps, Evaluation & Production Patterns",
    duration: "4 weeks",
    goals: [
      "Understand the MLOps lifecycle: data versioning, experiment tracking, model registry, deployment.",
      "Set up a CI/CD pipeline for ML models using GitHub Actions.",
      "Build an evaluation suite: automated tests for output quality, latency, and safety guardrails.",
      "Deploy a model or agent as an API endpoint and monitor its performance.",
    ],
    resources: [
      "Made With ML MLOps Course (free, madewithml.com)",
      "Hugging Face Spaces for deployment (huggingface.co/spaces)",
      "Weights & Biases free tier (wandb.ai) for experiment tracking",
    ],
    skillLevel: "Advanced Beginner",
    linkText: "See portfolio project ideas for each skill tier",
    linkHref: "/articles/portfolio-projects",
  },
  {
    month: "Month 6",
    title: "Capstone: Build & Deploy an Agentic Workflow",
    duration: "4 weeks",
    goals: [
      "Design and scope a real-world problem that benefits from agentic orchestration.",
      "Build a multi-step agent: receives input, calls multiple tools, synthesizes results, and outputs a structured response.",
      "Add evaluation and guardrails: test for failure modes, implement human-in-the-loop review for critical decisions.",
      "Deploy the system, document the architecture, and package it as a portfolio project.",
    ],
    resources: [
      "All resources from months 1\u20135 as reference material.",
      "GitHub for version control and project documentation.",
      "Vercel or Hugging Face Spaces for free hosting.",
    ],
    skillLevel: "Intermediate",
    linkText: "",
    linkHref: "",
  },
];

export default function AILearningRoadmapPage() {
  return (
    <SiteShell>
      <PageHero
        asideBody="This roadmap sequences seven free courses and dozens of hands-on exercises into a realistic 6-month plan. Follow it, and you will go from writing your first Python script to deploying an agentic workflow."
        asideTitle="From zero to deployed in 6 months"
        description="A structured, month-by-month AI learning roadmap for absolute beginners in 2026. Each month covers specific skills, recommended resources, and measurable goals. All resources are free. No prior ML experience required."
        eyebrow="Article"
        title="Complete AI Learning Roadmap for Beginners (2026)"
      />

      <section aria-label="Article content" className="page-stack">
        <SectionCard>
          <div className="section-card__header">
            <p className="card-kicker">Why a roadmap matters</p>
            <h2 className="card-title">The problem with learning AI in 2026 is not access. It is direction.</h2>
          </div>
          <div className="prose">
            <p>
              There has never been more free, high-quality AI education available. Coursera, Google, DeepLearning.AI, Fast.ai, Hugging Face, and Stanford all publish world-class materials at zero cost. <a href="https://machinelearningmastery.com/7-machine-learning-trends-to-watch-in-2026/" target="_blank" rel="noopener noreferrer">Machine learning trends in 2026 show a clear shift</a>: the industry needs people who can build reliable systems around models, not just people who understand model internals.
            </p>
            <p>
              Yet the most common complaint from learners remains the same: too many options, no clear order, and no way to know if you are learning the right thing. A recent Reddit thread in r/learnmachinelearning with 78 comments discussed how to become an AI engineer in 2026. The consensus: the role has shifted from model training to context management, evaluation frameworks, and failure-mode detection.
            </p>
            <p>
              This roadmap addresses that shift directly. It is designed for someone starting from zero who wants to reach a working level in six months. Each month builds on the previous one. By the end, you will have deployed an agentic workflow system that demonstrates all five skill tiers: Python, ML fundamentals, LLM and RAG, agent patterns, and MLOps.
            </p>
            <p>
              If you are unsure whether to start with no-code or code-first approaches, read our <Link href="/articles/no-code-vs-code-first">AI learning path comparison</Link> first. For a curated list of the best free courses referenced in this roadmap, see our <Link href="/articles/best-free-ai-courses-2026">free AI courses guide</Link>.
            </p>
          </div>
        </SectionCard>

        <div className="section-header">
          <div className="list-stack">
            <p className="eyebrow">6-month plan</p>
            <h2 className="section-title">Month-by-month breakdown</h2>
          </div>
        </div>

        {months.map((m) => (
          <SectionCard key={m.month}>
            <div className="section-card__header">
              <div className="tag-row">
                <Tag tone="accent">{m.month}</Tag>
                <Tag tone="muted">{m.duration}</Tag>
                <Tag tone="muted">{m.skillLevel}</Tag>
              </div>
              <h2 className="card-title">{m.title}</h2>
            </div>
            <div className="section-card__body">
              <p className="card-kicker">Goals</p>
              <ul className="stage-list">
                {m.goals.map((g) => (
                  <li className="stage-item" key={g}>{g}</li>
                ))}
              </ul>
              <div className="subtle-divider"></div>
              <p className="card-kicker">Resources</p>
              <ul className="stage-list">
                {m.resources.map((r) => (
                  <li className="stage-item" key={r}>{r}</li>
                ))}
              </ul>
              {m.linkText && m.linkHref && (
                <>
                  <div className="subtle-divider"></div>
                  <p>
                    <Link href={m.linkHref} className="card-kicker">
                      {m.linkText} →
                    </Link>
                  </p>
                </>
              )}
            </div>
          </SectionCard>
        ))}

        <SectionCard>
          <div className="section-card__header">
            <p className="card-kicker">Staying on track</p>
            <h2 className="card-title">Common pitfalls and how to avoid them</h2>
          </div>
          <div className="prose">
            <p>
              <strong>Tutorial paralysis.</strong> The biggest risk is watching tutorials without building. After each month, you should have run code, not just read about it. If you finished a section without typing anything, redo it with a notebook open.
            </p>
            <p>
              <strong>Shiny object syndrome.</strong> A new model or framework appears every week. Your job for six months is to ignore most of them. Stick to the roadmap. Depth beats breadth for the first six months. <a href="https://www.ibm.com/think/news/ai-tech-trends-predictions-2026" target="_blank" rel="noopener noreferrer">As IBM notes in its 2026 AI trends report</a>, the companies that succeed with AI are those that focus on integration and reliability, not chasing every new capability.
            </p>
            <p>
              <strong>Skipping fundamentals.</strong> Jumping directly to building agents without understanding basic ML evaluation is like building a house on sand. Months 1 and 2 are not optional. The agent patterns in Month 4 depend on the understanding you build in Months 2 and 3.
            </p>
            <p>
              <strong>No portfolio.</strong> The most common hiring feedback in 2026 is that candidates can talk about AI but cannot show working systems. Month 6 is designed to produce a deployable project. Complete it. Document it. Put it on GitHub. That project will matter more than any certificate.
            </p>
            <p>
              For more project ideas that demonstrate each skill tier, see our <Link href="/articles/portfolio-projects">portfolio projects guide</Link>.
            </p>
          </div>
        </SectionCard>
      </section>
    </SiteShell>
  );
}
