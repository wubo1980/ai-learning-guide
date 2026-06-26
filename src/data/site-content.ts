export type NavigationItem = {
  label: string;
  href: string;
};

export type CategoryIconKey = "coding" | "everydayAi" | "agents" | "career";

export type CategoryCardItem = {
  title: string;
  href: string;
  description: string;
  icon: CategoryIconKey;
  highlight: string[];
};

export type SearchItem = {
  label: string;
  href: string;
  keywords: string[];
  category: string;
};

export type CodingRoadmap = {
  title: string;
  duration: string;
  summary: string;
  stages: string[];
  tools: string[];
};

export type EverydayAiTool = {
  name: string;
  useCase: string;
};

export type EverydayAiCategory = {
  title: string;
  description: string;
  tools: EverydayAiTool[];
};

export type AgentPath = {
  level: string;
  description: string;
  outcomes: string[];
};

export type FrameworkComparison = {
  name: string;
  bestFor: string;
  strengths: string[];
};

export type AgentResource = {
  title: string;
  type: string;
  note: string;
};

export type AgentContent = {
  intro: string[];
  paths: AgentPath[];
  frameworks: FrameworkComparison[];
  resources: AgentResource[];
};

export type CareerSection = {
  title: string;
  paragraphs: string[];
  actionSteps: string[];
};

export type ArticleMeta = {
  slug: string;
  title: string;
  description: string;
  category: string;
  date: string;
  readTime: string;
  difficulty: string;
};

const articleMetaList: ArticleMeta[] = [
  {
    slug: "no-code-vs-code-first",
    title: "No-Code vs Code-First \u2014 Choosing Your AI Learning Path in 2026",
    description: "Compare no-code AI tools, low-code frameworks, and code-first development. Find the path that fits your background, goals, and timeline.",
    category: "Career & Learning",
    date: "2026-06-22",
    readTime: "12 min",
    difficulty: "Beginner",
  },
  {
    slug: "build-first-agent",
    title: "Build Your First AI Agent in 2026 \u2014 A Step-by-Step Beginner\u2019s Guide",
    description: "Build your first AI agent from scratch. This guide covers no-code platforms, low-code frameworks, and a simple Python agent \u2014 choose your level.",
    category: "Agents",
    date: "2026-06-22",
    readTime: "15 min",
    difficulty: "Beginner\u2013Intermediate",
  },
  {
    slug: "portfolio-projects",
    title: "5 AI Projects to Build for Your 2026 Portfolio (With Real Outcome Goals)",
    description: "Ship AI projects that get you noticed. Five project ideas with tech stacks, difficulty levels, and the hiring signal each one sends.",
    category: "Career & Learning",
    date: "2026-06-22",
    readTime: "10 min",
    difficulty: "Beginner",
  },

  {
    slug: "prompt-engineering-guide",
    title: "Prompt Engineering Guide — From Beginner to Advanced in 2026",
    description: "Master prompt engineering with techniques for GPT-5, Claude 4, Gemini 2.5, and DeepSeek V4. From basic clarity principles to production-grade meta-prompting.",
    category: "Career & Learning",
    date: "2026-06-26",
    readTime: "18 min",
    difficulty: "Beginner–Advanced",
  },
  {
    slug: "ai-model-comparison-2026",
    title: "Best AI Model for Every Task in 2026 — GPT-5, Claude 4, Gemini 2.5, DeepSeek",
    description: "Compare GPT-5, Claude 4 Opus, Gemini 2.5 Pro, and DeepSeek V4 Flash across writing, coding, analysis, creative, and research. Find the right model for your use case.",
    category: "Career & Learning",
    date: "2026-06-26",
    readTime: "14 min",
    difficulty: "Beginner",
  },
];

export function getArticleMetaList(): ArticleMeta[] {
  return articleMetaList;
}

export function getArticleMeta(slug: string): ArticleMeta | undefined {
  return articleMetaList.find((a) => a.slug === slug);
}

const navigationItems: NavigationItem[] = [
  { label: "Home", href: "/" },
  { label: "Articles", href: "/articles" },
  { label: "Coding", href: "/coding" },
  { label: "Everyday AI", href: "/everyday-ai" },
  { label: "Agents", href: "/agents" },
  { label: "Career", href: "/career" },
];

const homeCategories: CategoryCardItem[] = [
  {
    title: "Coding & Programming",
    href: "/coding",
    description:
      "Learn programming with AI support, practical roadmaps, and project-first skill building.",
    icon: "coding",
    highlight: ["Python basics", "Real projects", "AI pair coding"],
  },
  {
    title: "Everyday AI Tools",
    href: "/everyday-ai",
    description:
      "Use AI to write, design, analyze data, and automate work even if you never plan to code.",
    icon: "everydayAi",
    highlight: ["Writing", "Design", "Automation"],
  },
  {
    title: "Building AI Agents",
    href: "/agents",
    description:
      "Move from prompts to tool-calling systems, workflows, and production-ready agent thinking.",
    icon: "agents",
    highlight: ["No-code", "Low-code", "Full-code"],
  },
  {
    title: "Career & Skills",
    href: "/career",
    description:
      "Build a durable skill stack, choose meaningful projects, and navigate the AI job market with clarity.",
    icon: "career",
    highlight: ["Portfolio", "Skills", "Career pivot"],
  },
];

const searchItems: SearchItem[] = [
  {
    label: "Zero to Developer roadmap",
    href: "/coding",
    category: "Coding",
    keywords: ["python", "beginner", "developer", "roadmap", "learn to code"],
  },
  {
    label: "AI Career Pivot guide",
    href: "/coding",
    category: "Coding",
    keywords: ["career pivot", "developer", "ai jobs", "transition"],
  },
  {
    label: "Writing and content tools",
    href: "/everyday-ai",
    category: "Everyday AI",
    keywords: ["writing", "content", "chatgpt", "claude", "notion ai"],
  },
  {
    label: "Design and visual tools",
    href: "/everyday-ai",
    category: "Everyday AI",
    keywords: ["design", "visual", "midjourney", "canva ai", "figma ai"],
  },
  {
    label: "Agent frameworks comparison",
    href: "/agents",
    category: "Agents",
    keywords: ["langchain", "vercel ai sdk", "claude code", "frameworks"],
  },
  {
    label: "AI job market guide",
    href: "/career",
    category: "Career",
    keywords: ["job market", "skills", "portfolio", "freelance", "full-time"],
  },
  {
    label: "AI Learning Roadmap 2026",
    href: "/career",
    category: "Career",
    keywords: ["learning roadmap", "ai engineer", "2026", "coursera", "mlops", "llmops", "agentic", "rag", "multimodal", "ai safety", "zero to ai engineer"],
  },
  {
    label: "No-Code vs Code-First AI Learning Path",
    href: "/articles/no-code-vs-code-first",
    category: "Career & Learning",
    keywords: ["no-code ai", "code-first ai", "learn ai", "ai path", "beginner", "low-code", "ai agent no code"],
  },
  {
    label: "Build Your First AI Agent Guide",
    href: "/articles/build-first-agent",
    category: "Agents",
    keywords: ["build ai agent", "first agent", "agent tutorial", "step by step", "beginner agent", "no-code agent"],
  },
  {
    label: "AI Portfolio Projects for 2026",
    href: "/articles/portfolio-projects",
    category: "Career & Learning",
    keywords: ["portfolio projects", "ai projects", "beginner projects", "hireable", "2026", "project ideas"],
  },

  {
    label: "Prompt Engineering Guide 2026",
    href: "/articles/prompt-engineering-guide",
    category: "Career & Learning",
    keywords: ["prompt engineering", "how to write prompts", "prompt techniques", "prompt guide", "ai prompting"],
  },
  {
    label: "AI Model Comparison 2026",
    href: "/articles/ai-model-comparison-2026",
    category: "Career & Learning",
    keywords: ["gpt vs claude", "best ai model", "model comparison", "gpt-5", "claude 4", "gemini 2.5", "deepseek", "which ai model"],
  },
];

const codingRoadmaps: CodingRoadmap[] = [
  {
    title: "Zero to Developer",
    duration: "3 months",
    summary:
      "A true beginner path that starts with Python basics, introduces AI-assisted coding early, and ends with a simple but complete application.",
    stages: [
      "Weeks 1-2: Learn variables, functions, loops, and debugging in Python.",
      "Weeks 3-5: Use ChatGPT or Claude as a tutor while solving small exercises.",
      "Weeks 6-8: Build scripts, simple web apps, and learn how to read stack traces.",
      "Weeks 9-12: Ship one project with forms, API usage, and a public README.",
    ],
    tools: ["ChatGPT", "Claude", "Cursor", "Replit", "GitHub"],
  },
  {
    title: "AI Career Pivot",
    duration: "6 weeks",
    summary:
      "For people who already know programming basics and want to move quickly into AI-flavored application work and workflows.",
    stages: [
      "Week 1: Review Python or TypeScript and modern API usage.",
      "Weeks 2-3: Learn prompt design, embeddings, and tool calling by building small features.",
      "Weeks 4-5: Build one AI feature into a real app or automation workflow.",
      "Week 6: Package the result as a portfolio case study with implementation notes.",
    ],
    tools: ["Vercel AI SDK", "Claude Code", "OpenRouter", "Postman", "GitHub"],
  },
  {
    title: "Front-End First",
    duration: "4 weeks",
    summary:
      "A fast-start path for non-technical learners who want visible progress through front-end projects and AI-assisted building.",
    stages: [
      "Week 1: Learn HTML, CSS, and component thinking.",
      "Week 2: Use AI to build landing pages and interactive UI sections.",
      "Week 3: Add JavaScript basics and connect forms, lists, and simple state.",
      "Week 4: Publish a polished portfolio-style site and document what you learned.",
    ],
    tools: ["Cursor", "v0", "Figma", "Vercel", "Chrome DevTools"],
  },
];

const everydayAiCategories: EverydayAiCategory[] = [
  {
    title: "Writing & Content",
    description:
      "Use AI to generate drafts, tighten structure, and repurpose ideas into multiple formats faster.",
    tools: [
      {
        name: "Claude",
        useCase:
          "Excellent for long-form thinking, outlining essays, rewriting dense drafts, and improving tone without losing clarity.",
      },
      {
        name: "ChatGPT",
        useCase:
          "Useful for brainstorming headlines, creating content briefs, summarizing interviews, and turning notes into publishable copy.",
      },
      {
        name: "Notion AI",
        useCase:
          "Helpful when you want writing support directly inside project docs, meeting notes, and editorial calendars.",
      },
    ],
  },
  {
    title: "Design & Visual",
    description:
      "Create concepts, edit layouts, and move from vague ideas to tangible visual directions much faster.",
    tools: [
      {
        name: "Canva AI",
        useCase:
          "Great for quick marketing graphics, presentation assets, and social content when speed matters more than deep customization.",
      },
      {
        name: "Midjourney",
        useCase:
          "Strong for concept visuals, brand moodboards, and image exploration when you need multiple visual directions quickly.",
      },
      {
        name: "Figma AI",
        useCase:
          "Useful for accelerating mockups, naming layers, generating copy placeholders, and speeding up early UI work.",
      },
    ],
  },
  {
    title: "Data & Spreadsheets",
    description:
      "Use AI to interpret data, write formulas, and explain patterns without starting from a blank spreadsheet.",
    tools: [
      {
        name: "ChatGPT with Code Interpreter",
        useCase:
          "Helpful for cleaning CSV files, visualizing trends, spotting anomalies, and generating plain-English summaries from raw data.",
      },
      {
        name: "Tableau AI",
        useCase:
          "Useful for turning dashboards and datasets into clearer business questions, chart suggestions, and quick explanations.",
      },
    ],
  },
  {
    title: "Productivity & Automation",
    description:
      "Reduce repetitive work by connecting tools, summarizing context, and creating repeatable operating systems.",
    tools: [
      {
        name: "Zapier AI",
        useCase:
          "Best for automating recurring tasks across forms, CRM tools, inboxes, and spreadsheets without writing custom code.",
      },
      {
        name: "Cursor",
        useCase:
          "Useful even for non-engineers who want help editing markdown, making small site changes, or understanding codebases faster.",
      },
      {
        name: "Replit",
        useCase:
          "A quick environment for testing tiny tools, internal utilities, or experiments you want to deploy without local setup friction.",
      },
    ],
  },
];

const agentContent: AgentContent = {
  intro: [
    "An AI agent is more than a chatbot with a clever prompt. It is a goal-oriented system that can decide what to do next, call tools, inspect results, and continue until it reaches a useful stopping point.",
    "Good agents depend on clear boundaries. You need a narrow task, reliable tools, memory that actually helps, and evaluation loops that expose failure cases early instead of hiding them behind a nice demo.",
  ],
  paths: [
    {
      level: "No-code",
      description:
        "Start with workflow builders and hosted tools to understand triggers, actions, and tool sequencing without managing infrastructure.",
      outcomes: [
        "Build a support assistant or content workflow with visible steps.",
        "Learn how prompts, memory, and tool access change outcomes.",
        "Develop intuition for where automation breaks.",
      ],
    },
    {
      level: "Low-code",
      description:
        "Use SDKs, hosted UIs, and lightweight scripting to connect models, APIs, and business logic with more control.",
      outcomes: [
        "Create agent flows with retries, tool selection, and human approval steps.",
        "Add structured output, logs, and simple evaluation methods.",
        "Understand where orchestration beats raw prompting.",
      ],
    },
    {
      level: "Full-code",
      description:
        "Build agents as software systems with typed tools, state, monitoring, and production safeguards.",
      outcomes: [
        "Design multi-step graphs with controlled state transitions.",
        "Handle latency, failure recovery, and observability.",
        "Ship something robust enough for repeated real-world use.",
      ],
    },
  ],
  frameworks: [
    {
      name: "LangChain",
      bestFor: "Teams exploring complex agent chains, retrieval, and experimental orchestration patterns.",
      strengths: [
        "Large ecosystem and many building blocks for workflows.",
        "Good fit when you want to prototype multiple agent architectures.",
        "Useful for understanding common abstractions across agent systems.",
      ],
    },
    {
      name: "Vercel AI SDK",
      bestFor: "Developers building modern AI product features inside web applications.",
      strengths: [
        "Great developer experience for app-centric AI features.",
        "Clean fit for streaming UI, tool calling, and product integration.",
        "Strong option for teams already working in the web stack.",
      ],
    },
    {
      name: "Claude Code",
      bestFor: "Developers who want AI assistance embedded deeply in coding, editing, and automation workflows.",
      strengths: [
        "Useful for codebase-aware iteration and agentic coding loops.",
        "Strong when the problem is partly software engineering, not just chat.",
        "Helps bridge manual development with semi-autonomous execution.",
      ],
    },
  ],
  resources: [
    {
      title: "Small workflow demo",
      type: "Project",
      note: "Start with one narrow workflow such as lead enrichment, support triage, or research summarization.",
    },
    {
      title: "Framework quickstarts",
      type: "Documentation",
      note: "Read the official docs only after you know the exact pattern you want to build.",
    },
    {
      title: "Evaluation checklist",
      type: "Practice",
      note: "Measure whether the agent saves time, fails safely, and produces consistent outcomes under repeated runs.",
    },
  ],
};

const careerSections: CareerSection[] = [
  {
    title: "Is AI Going To Replace Developers?",
    paragraphs: [
      "The more honest answer is that AI is replacing certain kinds of development work, not the entire role of a developer. Repetitive implementation, boilerplate generation, and basic debugging are already faster with strong AI assistance. That changes the shape of entry-level work and raises the bar for what makes someone valuable on a team.",
      "But software is still a systems discipline. Real work involves understanding user needs, making trade-offs, decomposing messy problems, integrating tools, reviewing outputs, and deciding what good looks like. AI helps with parts of that process, yet it does not remove the need for judgment, product thinking, communication, or ownership.",
      "What matters is not whether AI writes code. It already does. What matters is whether you can direct AI effectively, verify results, and turn raw output into something reliable. Developers who can scope problems well, use AI without becoming dependent on it, and communicate decisions clearly will still be valuable. The role evolves from pure implementation toward orchestration, review, architecture, and speed of execution.",
    ],
    actionSteps: [
      "Stop asking whether the role disappears and start asking which work moves up the value chain.",
      "Practice reviewing AI output instead of only generating it.",
      "Build one project where you can explain both the product decision and the implementation choice.",
    ],
  },
  {
    title: "Skills That Matter in the AI Era",
    paragraphs: [
      "Technical skill still matters, but isolated coding knowledge is no longer enough. The strongest people combine fundamentals with AI fluency. That means understanding APIs, data flow, debugging, version control, and interface design while also knowing how to prompt, evaluate, and iterate with AI tools. You do not need to know everything, but you do need enough depth to notice when the model is wrong.",
      "Soft skills are becoming more important, not less. AI expands output volume, which makes prioritization, writing, collaboration, and decision-making more valuable. The person who can synthesize information, reduce ambiguity, and keep a team aligned often creates more leverage than the person who simply ships the most lines of code.",
      "A durable skill stack now looks like this: one strong execution layer, one AI-assisted workflow layer, and one communication layer. For many people that means becoming competent in either front-end, automation, or product engineering; pairing that with AI tooling; and then learning to present work clearly through docs, demos, and async updates.",
    ],
    actionSteps: [
      "Pick one technical lane to deepen instead of collecting random tutorials.",
      "Learn one AI tool well enough to use it daily, not occasionally.",
      "Improve your written communication by documenting your projects like a teammate would need to read them.",
    ],
  },
  {
    title: "Portfolio Projects That Get You Hired",
    paragraphs: [
      "A good portfolio project proves more than technical competence. It shows taste, scope control, and the ability to finish. Hiring managers do not need ten shallow clones. They need one or two projects that reveal how you think, what trade-offs you made, and whether you can solve a problem that feels relevant.",
      "In the AI era, the strongest portfolio projects often combine clear user value with realistic AI usage. That might be a customer support assistant with review workflows, a writing companion with structured outputs, a spreadsheet summarizer for operations teams, or a small agent that coordinates information across tools. The key is to solve a believable problem, not to stuff AI into a demo for its own sake.",
      "Your portfolio should make it easy to evaluate you quickly. Include a concise summary, screenshots, a live link if possible, and a short technical write-up. Explain why the project exists, how the system works, what the hard parts were, and what you would improve next. That level of clarity often matters more than adding one more feature.",
    ],
    actionSteps: [
      "Choose a project that reflects the kind of role you want next.",
      "Write a short case study for each serious project instead of relying on screenshots alone.",
      "Optimize for relevance, completeness, and explainability over raw complexity.",
    ],
  },
  {
    title: "Freelance vs Full-Time: Which Path Is Right for You?",
    paragraphs: [
      "Freelance work can be an excellent path if you want speed, varied learning, and early revenue opportunities. AI has lowered the barrier to building small client solutions, internal tools, landing pages, automations, and workflow improvements. If you can identify a business problem, package a result, and communicate clearly, freelance can help you build experience fast.",
      "Full-time roles provide different advantages. You get stronger exposure to team processes, code review, production constraints, and long-term product thinking. That environment can accelerate your growth if you still need reps in engineering discipline, cross-functional collaboration, or larger system design.",
      "The right path depends on your current strengths. If you already have initiative, can manage uncertainty, and are comfortable selling outcomes, freelance may fit. If you need mentorship, stronger technical standards, and a more structured environment, full-time work may be the better next step. Neither path is automatically superior; both are training grounds for different muscles.",
    ],
    actionSteps: [
      "List your current strengths honestly: selling, shipping, collaboration, or technical depth.",
      "If you freelance, package one narrow offer instead of offering everything.",
      "If you want full-time, tailor your portfolio and resume to the team environment you want to join.",
    ],
  },
  {
    title: "Non-Technical Roles in the AI Industry",
    paragraphs: [
      "Not every useful AI role requires writing production code. Companies need people who can translate user problems into workflows, manage AI-enabled operations, write better prompts and knowledge bases, create content systems, conduct evaluations, support adoption inside teams, and shape how products are positioned in the market.",
      "Roles such as AI operations specialist, prompt designer, technical writer, solutions consultant, product marketer, implementation manager, and customer education lead are all growing in importance. These jobs reward clarity, structured thinking, empathy, and the ability to work with both tools and people.",
      "If you are not aiming for a developer path, focus on becoming excellent at one business context and one AI-enabled workflow. For example, if you come from operations, learn how AI improves documentation, intake, reporting, and automation. If you come from content, learn how to build scalable editorial systems. Domain fluency plus practical AI use often beats superficial technical knowledge.",
    ],
    actionSteps: [
      "Map your existing domain expertise to a concrete AI workflow.",
      "Build proof of work in the form of templates, automations, or internal process improvements.",
      "Position yourself around outcomes, not around whether you can code.",
    ],
  },
  {
    title: "2026 AI Learning Roadmap — From Zero to AI Engineer",
    paragraphs: [
      "Coursera's 2026 AI Learning Roadmap lays out a structured path from absolute beginner to working AI engineer. The curriculum is organized around five skill tiers: AI Foundations, Applied Machine Learning, LLM Engineering & RAG, Agentic Systems & MLOps, and AI Safety & Ethics. Each tier builds on the previous, with hands-on projects including a capstone agentic workflow system.",
      "The hottest AI skills for 2026 reflect a shift from model-tinkering to production engineering. Agentic Workflow Orchestration leads the list — building systems where multiple AI agents collaborate, hand off context, and iterate toward goals autonomously. MLOps and LLMOps follow closely, as companies need people who can deploy, monitor, and maintain AI pipelines. Retrieval-Augmented Generation (RAG) remains essential for grounding AI outputs in real data. Multimodal AI (text + image + audio + video) is surging. And AI Safety — red-teaming, guardrails, evaluation — has become a first-class concern for production deployments.",
      "For beginners starting from zero, a realistic 6-month plan looks like this: Month 1 — Python fundamentals and basic data manipulation. Month 2 — Machine learning concepts and hands-on with scikit-learn and simple neural networks. Month 3 — LLM basics: prompt engineering, embeddings, and building a first RAG application. Month 4 — Agent fundamentals: tool-use patterns, multi-step reasoning, and state management. Month 5 — MLOps essentials: deployment pipelines, monitoring, evaluation suites, and safety guardrails. Month 6 — Capstone project: build and deploy an end-to-end agentic workflow that demonstrates all five skill layers.",
      "Notable courses on the 2026 roadmap include Coursera's 'AI for Everyone' (for broad orientation), DeepLearning.AI's 'Generative AI with LLMs' (for practical NLP), Stanford's 'CS224N' NLP course content (free online), and Anthropic's official Agent Cookbook (for production patterns). The key is to pick one platform, finish the sequence, and ship visible work rather than hopping between tutorials.",
    ],
    actionSteps: [
      "Assess your current level honestly — are you at zero, intermediate, or already building? Choose the tier that matches.",
      "Commit to one 6-month path (Coursera, Fast.ai, or self-directed) and finish before expanding.",
      "Build one portfolio project per skill tier to demonstrate progression, not just completion.",
      "Join an AI community — local meetup, Discord server, or study group — to stay accountable and find collaborators.",
    ],
  },
];

/**
 * 返回全站导航配置。
 */
export function getNavigationItems(): NavigationItem[] {
  return navigationItems;
}

/**
 * 返回首页板块入口卡片数据。
 */
export function getHomeCategories(): CategoryCardItem[] {
  return homeCategories;
}

/**
 * 返回首页本地搜索使用的条目。
 */
export function getSearchItems(): SearchItem[] {
  return searchItems;
}

/**
 * 返回 Coding 页面路线数据。
 */
export function getCodingRoadmaps(): CodingRoadmap[] {
  return codingRoadmaps;
}

/**
 * 返回 Everyday AI 页面分类数据。
 */
export function getEverydayAiCategories(): EverydayAiCategory[] {
  return everydayAiCategories;
}

/**
 * 返回 Agents 页面结构化内容。
 */
export function getAgentContent(): AgentContent {
  return agentContent;
}

/**
 * 返回 Career 页面章节数据。
 */
export function getCareerSections(): CareerSection[] {
  return careerSections;
}
