import type { Metadata } from "next";
import Link from "next/link";
import { SiteShell } from "@/components/layout/SiteShell";
import { PageHero } from "@/components/shared/PageHero";
import { SectionCard } from "@/components/shared/SectionCard";
import { Tag } from "@/components/shared/Tag";

export const metadata: Metadata = {
  title: "RAG vs Fine-Tuning in 2026 — When to Use Each and How to Get Started",
  description:
    "RAG and fine-tuning serve different purposes. Learn the practical differences, when to use each, and a clear decision framework for beginners in 2026.",
  other: {
    datePublished: "2026-07-04",
    slug: "articles/rag-vs-fine-tuning-2026",
  },
  alternates: {
    canonical: "/articles/rag-vs-fine-tuning-2026",
  },
};

const quickDecision = [
  {
    scenario: "You need a Q&A system over your company documents",
    recommendation: "RAG",
    reason: "Retrieve relevant chunks from your document store and let the LLM answer. No training needed, updates are as simple as adding new documents.",
  },
  {
    scenario: "You want the model to speak in a specific tone or format consistently",
    recommendation: "Fine-tuning",
    reason: "Fine-tuning bakes the desired style into the model weights. Useful for brand voice, structured outputs, or domain-specific jargon that prompting alone cannot reliably enforce.",
  },
  {
    scenario: "You have a knowledge base that changes weekly",
    recommendation: "RAG",
    reason: "RAG indexes the latest data at query time. Fine-tuning would need frequent retraining to stay current.",
  },
  {
    scenario: "You need the model to follow a complex multi-step reasoning process",
    recommendation: "Try RAG first, consider fine-tuning later",
    reason: "Start with RAG + a detailed system prompt. If the model still struggles, fine-tuning a smaller model on curated reasoning traces can help.",
  },
  {
    scenario: "You are early in your AI learning journey (0-3 months)",
    recommendation: "RAG",
    reason: "RAG teaches you embeddings, vector databases, retrieval, and prompt construction — all foundational skills. Fine-tuning can wait until you hit a real limitation.",
  },
  {
    scenario: "You are running on a tight compute budget",
    recommendation: "RAG",
    reason: "RAG requires no GPU training. Fine-tuning even with QLoRA needs at least 24GB VRAM for reasonable results.",
  },
];

const comparisonRows = [
  { dimension: "What it does", rag: "Retrieves relevant data from an external store and injects it into the prompt context", finetune: "Adjusts the model weights on a curated dataset to change behavior at the parameter level" },
  { dimension: "Training required", rag: "None (zero training cost)", finetune: "Yes — requires GPU hours and a curated dataset" },
  { dimension: "Data freshness", rag: "Real-time — add documents to the vector DB and they are instantly queryable", finetune: "Stale until you retrain — the knowledge is baked into the weights" },
  { dimension: "Hardware cost", rag: "Minimal — standard CPU/GPU for inference, vector DB on commodity hardware", finetune: "Significant — QLoRA needs ~24GB VRAM; full fine-tuning needs 80GB+ VRAM per 70B model" },
  { dimension: "Output control", rag: "Via prompt engineering and reranking (softer, less reliable)", finetune: "Stronger — the model internalizes the desired behavior" },
  { dimension: "Beginner-friendly", rag: "✅ Yes — many tutorials, free tiers, fast iteration", finetune: "⚠️ Moderate — steeper learning curve, bigger investment" },
  { dimension: "Maintenance", rag: "Low — update the vector store, no model retraining", finetune: "High — dataset curation and retraining cycles" },
  { dimension: "Best for", rag: "Knowledge retrieval, document Q&A, chatbots over evolving databases", finetune: "Style transfer, domain-specific output format, performance ceiling breaking" },
];

const workflowSteps = [
  {
    title: "Step 1: Understand the problem",
    body: "Is the core challenge about accessing information (knowledge gap), or about generating information in a specific way (style/format gap)? If knowledge → RAG. If style → fine-tuning may help.",
  },
  {
    title: "Step 2: Build a RAG baseline first — always",
    body: "Even if you suspect fine-tuning is needed, build a RAG pipeline first. Tools like LlamaIndex can get you a working prototype in under an hour. This gives you a measurable baseline. You will often find that RAG + careful prompting is good enough.",
  },
  {
    title: "Step 3: Measure the gap",
    body: "Run your hardest test cases through the RAG baseline. Log failures. Classify them: retrieval misses? reasoning failures? formatting issues? If the failures are primarily retrieval problems, improve chunking, embedding, and reranking first.",
  },
  {
    title: "Step 4: Decide if fine-tuning is worth it",
    body: "Fine-tuning becomes worth it when: (a) prompting + RAG hits a ceiling after systematic tuning, (b) you have 500+ high-quality examples, (c) output consistency is critical, and (d) the use case is stable enough that retraining every 1-3 months is acceptable.",
  },
  {
    title: "Step 5: Start small with QLoRA",
    body: "When you do fine-tune, start with QLoRA. Unsloth makes it practical on consumer GPUs (24GB VRAM for 70B models). Fine-tune a small set of adapter weights first, measure the improvement against the RAG baseline, and only scale up if you see clear gains.",
  },
];

const toolRecommendations = [
  {
    category: "RAG frameworks",
    tools: [
      { name: "LlamaIndex", url: "https://docs.llamaindex.ai/en/stable/", note: "The most beginner-friendly RAG framework. Strong documentation and example projects." },
      { name: "LangChain", url: "https://python.langchain.com/docs/", note: "Broader ecosystem, steeper learning curve, but more flexible for complex pipelines." },
      { name: "Chroma", url: "https://www.trychroma.com/", note: "Lightweight vector DB. Excellent for learning without infrastructure overhead." },
    ],
    note: "Start with LlamaIndex. It has the gentlest on-ramp for beginners.",
  },
  {
    category: "Fine-tuning tools",
    tools: [
      { name: "Unsloth", url: "https://github.com/unslothai/unsloth", note: "Best QLoRA implementation. Reduces VRAM usage by ~50% compared to vanilla PEFT." },
      { name: "Axolotl", url: "https://github.com/OpenAccess-AI-Collective/axolotl/", note: "More configurable. Suitable when you outgrow Unsloth's simplicity." },
      { name: "Hugging Face PEFT", url: "https://huggingface.co/docs/peft", note: "The standard library. Use it to understand the underlying mechanisms." },
    ],
    note: "Start with Unsloth for your first fine-tuning. Its QLoRA implementation runs on 24GB VRAM and produces usable results with as few as 100 examples.",
  },
];

export default function RagVsFineTuningPage() {
  return (
    <SiteShell>
      <PageHero
        asideBody="RAG and fine-tuning are not competing approaches. They solve different problems, and learning when to use which is one of the most practical skills you can develop as an AI learner in 2026."
        asideTitle="Two tools, one question"
        description="RAG and fine-tuning are often presented as alternatives, but they solve fundamentally different problems. This guide breaks down the practical differences, gives you a clear decision framework, and maps the learning path — whether you are building a document Q&A system or teaching a model to generate in a specific style."
        eyebrow="Article"
        title="RAG vs Fine-Tuning in 2026"
      />

      <section aria-label="Article content" className="page-stack">
        <SectionCard>
          <div className="section-card__header">
            <p className="card-kicker">The single most common beginner question in 2026</p>
            <h2 className="card-title">Should I RAG or should I fine-tune?</h2>
          </div>
          <div className="prose">
            <p>
              If you have spent any time on Reddit's r/LLMDev or r/RAG in 2026, you have seen this question. A beginner builds their first chatbot, hits a wall where the model does not know their specific data, and asks: "Should I fine-tune a model, or build RAG?"
            </p>
            <p>
              The honest answer is almost always the same: <strong>RAG first, fine-tuning later if at all</strong>. This is not a matter of preference. RAG solves the most common real-world problem (accessing specific knowledge at query time) with zero training cost. Fine-tuning solves a different problem (changing how the model generates), and it comes with significant complexity and compute requirements.
            </p>
            <p>
              Think of it this way: RAG is like giving a smart assistant access to a library. Fine-tuning is like rewriting the assistant's brain to be better at certain kinds of conversations. They can work together, but they are not interchangeable.
            </p>
            <p>
              Before diving deeper, make sure you have covered the fundamentals. Our <Link href="/articles/ai-learning-roadmap-2026">6-month AI Learning Roadmap</Link> places RAG in Month 3 for good reason — it builds on prompt engineering and model familiarity.
            </p>
          </div>
        </SectionCard>

        <div className="section-header">
          <div className="list-stack">
            <p className="eyebrow">Quick decision guide</p>
            <h2 className="section-title">Six common scenarios, one answer each</h2>
          </div>
        </div>

        {quickDecision.map((decision) => (
          <SectionCard key={decision.scenario}>
            <div className="section-card__header">
              <div className="tag-row">
                <Tag tone={decision.recommendation === "RAG" ? "accent" : decision.recommendation === "Fine-tuning" ? "accent" : "muted"}>
                  {decision.recommendation}
                </Tag>
              </div>
              <h2 className="card-title">{decision.scenario}</h2>
            </div>
            <div className="section-card__body">
              <p className="section-copy">{decision.reason}</p>
            </div>
          </SectionCard>
        ))}

        <div className="section-header">
          <div className="list-stack">
            <p className="eyebrow">Head-to-head comparison</p>
            <h2 className="section-title">RAG vs Fine-Tuning by dimension</h2>
          </div>
        </div>

        <SectionCard>
          <div className="overflow-x-auto">
            <table className="w-full text-sm border-collapse">
              <thead>
                <tr className="border-b border-border">
                  <th className="text-left py-3 px-4 font-medium">Dimension</th>
                  <th className="text-left py-3 px-4 font-medium">RAG</th>
                  <th className="text-left py-3 px-4 font-medium">Fine-Tuning</th>
                </tr>
              </thead>
              <tbody>
                {comparisonRows.map((row) => (
                  <tr key={row.dimension} className="border-b border-border">
                    <td className="py-3 px-4 font-medium">{row.dimension}</td>
                    <td className="py-3 px-4">{row.rag}</td>
                    <td className="py-3 px-4">{row.finetune}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </SectionCard>

        <SectionCard>
          <div className="section-card__header">
            <p className="card-kicker">The practical workflow</p>
            <h2 className="card-title">A 5-step decision workflow</h2>
          </div>
          <div className="prose">
            {workflowSteps.map((step) => (
              <div key={step.title} className="mb-6">
                <h3 className="text-lg font-semibold mb-2">{step.title}</h3>
                <p>{step.body}</p>
              </div>
            ))}
          </div>
        </SectionCard>

        <SectionCard>
          <div className="section-card__header">
            <p className="card-kicker">Real example</p>
            <h2 className="card-title">Case study: Customer support chatbot</h2>
          </div>
          <div className="prose">
            <p>
              A common project cited on Reddit's r/LLMDev: a developer building a customer support bot for their SaaS product. They asked: "Should I fine-tune GPT-4o on my support tickets?"
            </p>
            <p>
              The community consensus — and the right answer — was to start with RAG. Index all product documentation, API references, and common issue resolutions into a vector database. Use a system prompt that instructs the model to retrieve relevant docs before answering. The result: accurate answers backed by real documentation, with zero training cost and instant updates when new features ship.
            </p>
            <p>
              Fine-tuning would have been the wrong call here. The support content changes every week with new features and bug fixes. A fine-tuned model would need retraining every time. RAG adapts automatically.
            </p>
            <p>
              For a deeper look at how to evaluate AI tool choices, see our <Link href="/articles/ai-model-comparison-2026">model comparison guide</Link>, which covers how different models handle RAG contexts.
            </p>
          </div>
        </SectionCard>

        <div className="section-header">
          <div className="list-stack">
            <p className="eyebrow">Tools and resources</p>
            <h2 className="section-title">What to use in 2026</h2>
          </div>
        </div>

        {toolRecommendations.map((cat) => (
          <SectionCard key={cat.category}>
            <div className="section-card__header">
              <p className="card-kicker">{cat.category}</p>
              <h2 className="card-title">Recommended 2026 tools</h2>
            </div>
            <div className="section-card__body">
              <div className="prose">
                {cat.tools.map((tool) => (
                  <div key={tool.name} className="mb-4">
                    <h3 className="text-base font-semibold">
                      <a href={tool.url} target="_blank" rel="noopener noreferrer">{tool.name}</a>
                    </h3>
                    <p className="text-sm text-muted">{tool.note}</p>
                  </div>
                ))}
                <p className="mt-4 text-sm italic">{cat.note}</p>
              </div>
            </div>
          </SectionCard>
        ))}

        <SectionCard>
          <div className="section-card__header">
            <p className="card-kicker">The bottom line</p>
            <h2 className="card-title">Learn RAG first. Add fine-tuning if you outgrow it.</h2>
          </div>
          <div className="prose">
            <p>
              The fastest path to becoming productive with AI in 2026 is clear: <strong>master RAG as your default toolkit</strong>. It gives you knowledge-grounded outputs with zero training overhead. LlamaIndex and Chroma get you a working prototype in under an hour.
            </p>
            <p>
              Keep fine-tuning in your back pocket. When you hit a ceiling — the model cannot internalize your domain logic, output formatting is unreliable, or you need latency improvements from a smaller model — that is when QLoRA and Unsloth make fine-tuning practical.
            </p>
            <p>
              And if you are early in your learning path, do not overthink this decision. Build your first RAG application this week. It will teach you embeddings, vector search, retrieval strategies, and prompt construction — all skills that transfer directly to more advanced work. Our <Link href="/articles/portfolio-projects">portfolio projects guide</Link> includes a RAG-based project idea to get you started.
            </p>
          </div>
        </SectionCard>
      </section>
    </SiteShell>
  );
}
