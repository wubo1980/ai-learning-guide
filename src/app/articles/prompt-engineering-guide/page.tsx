import type { Metadata } from "next";
import Image from "next/image";
import { SiteShell } from "@/components/layout/SiteShell";
import { PageHero } from "@/components/shared/PageHero";
import { SectionCard } from "@/components/shared/SectionCard";
import { Tag } from "@/components/shared/Tag";

export const metadata: Metadata = {
  title: "Prompt Engineering Guide — From Beginner to Advanced in 2026",
  description:
    "Master prompt engineering in 2026 with our complete guide. Learn foundational techniques, advanced strategies, and production patterns for GPT-5, Claude 4, Gemini 2.5, and DeepSeek V4.",
  other: {
    "datePublished": "2026-06-26",
    "slug": "articles/prompt-engineering-guide"
  },
  alternates: {
    canonical: "/articles/prompt-engineering-guide",
  }
};

const techniques = [
  {
    level: "Beginner",
    description:
      "Start with prompts that produce consistently reliable outputs by following basic structural principles.",
    skills: [
      "Be specific about format: If you need a table, a JSON object, or a three-paragraph summary, say so explicitly. The model will match the shape you describe almost every time, but it needs the instruction before it sees the content.",
      "Use delimiter separation: Wrap instructions in triple backticks or angle brackets when they appear alongside the data the model should process. This prevents instruction bleed where the model confuses your command with the content it is working on.",
      "Provide one-shot or few-shot examples: A single well-chosen example of the desired output format eliminates more ambiguity than a paragraph of explanation. For complex formats, three examples cover most edge cases.",
      "Set the role and tone upfront: A single sentence like 'You are a senior technical writer who explains complex concepts simply' frames the entire conversation. Add tone guidance ('Use plain language. Avoid jargon.') to tighten the output.",
    ],
    example: "You are a friendly tutor explaining AI to beginners. Explain what a large language model is in three sentences. Use an analogy from cooking.",
  },
  {
    level: "Intermediate",
    description:
      "Move beyond single prompts into structured, multi-turn workflows where you control the reasoning path.",
    skills: [
      "Chain-of-thought prompting: Ask the model to reason step by step before answering. This is the single most reliable technique for improving accuracy on logic, math, and planning tasks. Add 'Think through this step by step' or 'Explain your reasoning before giving the final answer.'",
      "Iterative refinement: Do not expect perfection on the first generation. Use the model's own output as the starting point for improvements. 'Rewrite the second paragraph to be more concise. Keep the technical details but cut the word count by half.'",
      "Constraint listing: Explicitly state what the model should NOT do alongside what it should. 'Write a product description. Do not use superlatives. Do not make unsupported claims. Limit to 100 words.' Constraints are often more effective than positive instructions for avoiding common failure modes.",
      "System prompt layering: When using tools with system prompt support (Claude, GPT), split your instructions into identity, rules, output format, and guardrails. The model processes layered instructions better than a single block of mixed guidance.",
    ],
    example: "Analyze this customer feedback email. Step 1: Identify the primary complaint. Step 2: Rate the urgency (1-5). Step 3: Suggest a response. Step 4: Check if your response addresses the complaint. Explain your reasoning at each step.",
  },
  {
    level: "Advanced",
    description:
      "Production-grade prompting that handles edge cases, maintains consistency across many calls, and evaluates output quality systematically.",
    skills: [
      "Meta-prompting: Write a prompt that generates better prompts. Create a template that evaluates task type, desired output format, known failure modes, and example quality before generating the final prompt. Meta-prompts are the standard approach for teams managing hundreds of prompt templates.",
      "Prompt chaining: Break complex tasks into a sequence of focused prompts where each prompt receives the output of the previous step. This is more reliable than trying to handle everything in one massive prompt because each step has a narrow responsibility and failure is easier to isolate.",
      "Evaluation-driven iteration: Define success criteria for your output before you start writing prompts. Use quantitative metrics (factual accuracy, format compliance, length) and qualitative checks (tone, clarity, completeness). Run 10-20 test cases after every prompt change to catch regressions.",
      "Multi-model routing: Different models excel at different tasks. Route creative writing to Claude, structured data extraction to GPT, and cost-sensitive classification to DeepSeek. A routing layer that selects the model per micro-task outperforms any single model on complex workflows.",
    ],
    example: "Meta-prompt: 'I need to generate product descriptions for 50 items. Each description must be 80-120 words, SEO-optimized, compliant with FTC guidelines, and match the brand voice (professional yet warm). Generate a master prompt that I can reuse for all 50 items. Include a quality checklist the prompt should enforce.'",
  },
];

const platformTips = [
  {
    platform: "Claude 4",
    tips: [
      "Claude responds well to detailed system prompts up to 8,000 characters. Use the full capacity for identity, rules, and context.",
      "XML tags in prompts improve output structure. Wrap examples in <example></example> tags and instructions in <instructions></instructions>.",
      "Claude's long context window (200K tokens) makes it ideal for document analysis, codebase review, and research synthesis.",
      "Use the thinking prompt mode for complex reasoning: add 'Before answering, think through this carefully step by step.'",
    ],
  },
  {
    platform: "GPT-5",
    tips: [
      "GPT-5 handles structured output formats (JSON, XML) natively. Specify the schema in the system prompt.",
      "Temperature below 0.3 is best for factual tasks. Above 0.7 is better for creative writing and brainstorming.",
      "GPT-5 has strong instruction-following for multi-step workflows. Use numbered lists in prompts for sequential tasks.",
      "The model benefits from output priming: start the assistant response with the first word or phrase and let it complete.",
    ],
  },
  {
    platform: "Gemini 2.5 Pro",
    tips: [
      "Gemini has a 1M token context window, the largest available. Use it for projects requiring full-document context.",
      "Gemini excels at multimodal prompts (text + image + audio). For analysis tasks, include relevant media alongside text instructions.",
      "Shorter, direct prompts often work better than elaborate system prompts. Start with the core instruction and add context only when needed.",
    ],
  },
  {
    platform: "DeepSeek V4",
    tips: [
      "DeepSeek is highly cost-effective. Use it for high-volume classification, data extraction, and summarization tasks.",
      "Prompt format is similar to GPT. The model responds well to clear, structured instructions with explicit output format.",
      "DeepSeek's strength is reasoning tasks at lower cost. Use it alongside more expensive models via routing for cost optimization.",
    ],
  },
];

export default function PromptEngineeringGuidePage() {
  return (
    <SiteShell>
      <PageHero
        asideBody="A well-engineered prompt can double output quality with zero infrastructure changes. This is the highest-ROI skill you can learn in 2026."
        asideTitle="Why prompt engineering matters"
        description="From basic clarity principles to multi-model production systems, this guide covers the prompt engineering techniques that actually work across GPT-5, Claude 4, Gemini 2.5 Pro, and DeepSeek V4."
        eyebrow="Article"
        title="Prompt Engineering Guide \u2014 From Beginner to Advanced in 2026"
      />

      <section aria-label="Article content" className="page-stack">
        <SectionCard>
          <div className="section-card__header">
            <p className="card-kicker">Why this matters now</p>
            <h2 className="card-title">Prompt engineering is the most practical AI skill you can learn</h2>
          </div>
          <div className="prose">
            <p>
              In 2026, every major AI model has reached impressive baseline capabilities. The difference between mediocre output and exceptional results rarely comes from choosing the right model. It comes from how you communicate with it. Prompt engineering is not about tricking the model. It is about giving it the right structure, context, and constraints to perform at its best.
            </p>
            <p>
              This guide covers three skill tiers: beginner fundamentals that eliminate the most common failure modes, intermediate strategies that unlock reliable multi-step workflows, and advanced techniques used by teams running AI in production. Each section includes cross-model examples that work with the four leading platforms: <a href="https://docs.anthropic.com/en/docs/build-with-claude/prompt-engineering/overview" target="_blank" rel="noopener noreferrer">Anthropic Claude 4</a>, <a href="https://platform.openai.com/docs/guides/prompt-engineering" target="_blank" rel="noopener noreferrer">OpenAI GPT-5</a>, Gemini 2.5 Pro, and DeepSeek V4.
            </p>
            <p>
              The techniques here are not theoretical. They are the patterns used by AI teams shipping production systems in 2026. Whether you are a beginner writing your first prompt or a developer building an agent pipeline, the principles remain the same: clarity, structure, iteration, and evaluation.
            </p>
          </div>
        </SectionCard>

        <div className="section-header">
          <div className="list-stack">
            <p className="eyebrow">Skill tiers</p>
            <h2 className="section-title">Three levels of prompt engineering mastery</h2>
          </div>
        </div>

        {techniques.map((level) => (
          <SectionCard key={level.level}>
            <div className="section-card__header">
              <div className="tag-row">
                <Tag tone="accent">{level.level}</Tag>
              </div>
              <h2 className="card-title">{level.level} Techniques</h2>
              <p className="section-copy">{level.description}</p>
            </div>
            <div className="section-card__body">
              <ul className="stage-list">
                {level.skills.map((skill) => (
                  <li className="stage-item" key={skill}>{skill}</li>
                ))}
              </ul>
              {level.example ? (
                <>
                  <div className="subtle-divider"></div>
                  <p className="card-kicker">Example prompt</p>
                  <div className="code-block">
                    <pre>{level.example}</pre>
                  </div>
                </>
              ) : null}
            </div>
          </SectionCard>
        ))}

        <div className="section-header">
          <div className="list-stack">
            <p className="eyebrow">Platform-specific</p>
            <h2 className="section-title">Tips for each major platform</h2>
          </div>
        </div>

        {platformTips.map((platform) => (
          <SectionCard key={platform.platform}>
            <div className="section-card__header">
              <Tag tone="default">{platform.platform}</Tag>
              <h2 className="card-title">{platform.platform} Prompting Tips</h2>
            </div>
            <div className="section-card__body">
              <ul className="stage-list">
                {platform.tips.map((tip) => (
                  <li className="stage-item" key={tip}>{tip}</li>
                ))}
              </ul>
            </div>
          </SectionCard>
        ))}

        <SectionCard>
          <div className="section-card__header">
            <p className="card-kicker">References</p>
            <h2 className="card-title">Sources and further reading</h2>
          </div>
          <ul className="stage-list">
            <li className="stage-item"><a href="https://docs.anthropic.com/en/docs/build-with-claude/prompt-engineering/overview" target="_blank" rel="noopener noreferrer" data-slug="anthropic-prompt">Anthropic: Prompt Engineering Guide (Official)</a></li>
            <li className="stage-item"><a href="https://platform.openai.com/docs/guides/prompt-engineering" target="_blank" rel="noopener noreferrer" data-slug="openai-prompt">OpenAI: Prompt Engineering Guide (Official)</a></li>
            <li className="stage-item"><a href="https://cloud.google.com/vertex-ai/generative-ai/docs/learn/prompt-engineering" target="_blank" rel="noopener noreferrer" data-slug="google-prompt">Google Cloud: Prompt Engineering for Gemini</a></li>
          </ul>
        </SectionCard>
      </section>
    </SiteShell>
  );
}
