import type { Metadata } from "next";
import { SiteShell } from "@/components/layout/SiteShell";
import { PageHero } from "@/components/shared/PageHero";
import { SectionCard } from "@/components/shared/SectionCard";
import { Tag } from "@/components/shared/Tag";

export const metadata: Metadata = {
  title: "Build Your First AI Agent in 2026 \u2014 A Step-by-Step Beginner\u2019s Guide",
  description:
    "Build your first AI agent from scratch. This guide covers no-code platforms, low-code frameworks, and a simple Python agent by hand.",
  other: {
    "datePublished": "2026-06-22",
    "slug": "articles/build-first-agent"
  },
  alternates: {
    canonical: "/articles/build-first-agent",
  }
};

const noCodeSteps = [
  {
    title: "Choose a platform",
    detail: "Pick one no-code agent builder to start. Zapier AI is great for workflows that connect SaaS tools. Coze is better for chatbot-style agents. Dify works well for knowledge-base agents. Do not compare five platforms. Pick the one that matches your use case and build with it for a week.",
  },
  {
    title: "Define your agent\u2019s goal",
    detail: "Write one sentence that describes what your agent should accomplish. Example: 'Route incoming customer emails to the correct team and draft a response.' A clear goal prevents scope creep before you start building.",
  },
  {
    title: "Connect your knowledge sources",
    detail: "Upload documents, connect a knowledge base, or paste URLs. The agent needs context to make decisions. Most no-code platforms support PDF uploads, website scraping, and API connections.",
  },
  {
    title: "Configure tools",
    detail: "Define what your agent can do: send emails, search a database, create calendar events, or call external APIs. Start with one tool and add more after the first workflow works end to end.",
  },
  {
    title: "Set guardrails",
    detail: "Define what the agent should NOT do. Limit its scope to the tools you configured. Add a human-in-the-loop step for irreversible actions (sending emails, deleting records, making payments).",
  },
  {
    title: "Test with edge cases",
    detail: "Feed your agent incomplete inputs, confusing phrasing, and out-of-scope requests. See where it breaks and tighten your instructions. Most failure comes from underspecified prompts, not bad model choices.",
  },
];

const pythonAgentCode = `import openai
import json

client = openai.Client()

TOOLS = [
    {
        "type": "function",
        "function": {
            "name": "search_web",
            "description": "Search the web for current information",
            "parameters": {
                "type": "object",
                "properties": {
                    "query": {
                        "type": "string",
                        "description": "Search query"
                    }
                },
                "required": ["query"]
            }
        }
    },
    {
        "type": "function",
        "function": {
            "name": "summarize_text",
            "description": "Summarize a block of text",
            "parameters": {
                "type": "object",
                "properties": {
                    "text": {
                        "type": "string",
                        "description": "Text to summarize"
                    }
                },
                "required": ["text"]
            }
        }
    }
]

def search_web(query: str) -> str:
    # Implement your search function here
    return f"Simulated search results for: {query}"

def summarize_text(text: str) -> str:
    # Use the model itself for summarization
    response = client.chat.completions.create(
        model="gpt-4o",
        messages=[
            {"role": "system", "content": "Summarize the following text concisely."},
            {"role": "user", "content": text}
        ]
    )
    return response.choices[0].message.content

AGENT_INSTRUCTION = (
    "You are a research agent. Your job is to answer user questions "
    "by searching the web and summarizing the results."
)

def run_agent(user_input: str, max_turns: int = 5):
    messages = [
        {"role": "system", "content": AGENT_INSTRUCTION},
        {"role": "user", "content": user_input}
    ]

    for turn in range(max_turns):
        response = client.chat.completions.create(
            model="gpt-4o",
            messages=messages,
            tools=TOOLS,
            tool_choice="auto"
        )

        message = response.choices[0].message
        messages.append(message)

        if message.tool_calls:
            for tc in message.tool_calls:
                fn_name = tc.function.name
                args = json.loads(tc.function.arguments)

                if fn_name == "search_web":
                    result = search_web(args["query"])
                elif fn_name == "summarize_text":
                    result = summarize_text(args["text"])
                else:
                    result = "Unknown tool"

                messages.append({
                    "role": "tool",
                    "tool_call_id": tc.id,
                    "content": result
                })
        else:
            # No tool calls means the agent has a final answer
            return message.content

    return "Agent did not reach a conclusion within the turn limit."

# Example usage
result = run_agent("What happened in AI agents in June 2026?")
print(result)`;

const codeFirstSteps = [
  {
    title: "Set up your environment",
    detail: "Create a new Python project with a virtual environment. Install the OpenAI SDK: pip install openai python-dotenv. Create a .env file with your API key.",
  },
  {
    title: "Define your agent\u2019s tools",
    detail: "Tools are the actions your agent can take. Each tool has a name, description, and input schema. The model uses the description to decide when to call each tool, so write clear descriptions.",
  },
  {
    title: "Implement the tool functions",
    detail: "Write the actual Python functions that execute when the model calls a tool. Keep them simple at first. A search tool can start as a placeholder that returns simulated results.",
  },
  {
    title: "Build the agent loop",
    detail: "The core of any agent is a loop: receive input, call the model, check if it wants to use a tool, execute the tool, feed the result back, repeat. The code above shows this pattern in about 50 lines.",
  },
  {
    title: "Test with diverse inputs",
    detail: "Feed your agent questions that require tools, questions that don\u2019t, and ambiguous questions. Watch where the loop spirals or hallucinates. Tighten the system prompt for each failure.",
  },
  {
    title: "Add safety and limits",
    detail: "Set a maximum turn limit. Add timeout per tool call. Log every interaction. These three things prevent your agent from burning through your API budget or running indefinitely.",
  },
];

export default function BuildFirstAgentPage() {
  return (
    <SiteShell>
      <PageHero
        asideBody="The agent loop is surprisingly simple: model decides whether to call a tool, executes it, feeds the result back, and repeats until it has a final answer."
        asideTitle="Core pattern"
        description="A practical guide for developers and non-developers. Choose your comfort level and build an agent you can show to someone else."
        eyebrow="Article"
        title="Build Your First AI Agent in 2026 \u2014 A Step-by-Step Beginner\u2019s Guide"
      />

      <section aria-label="Article content" className="page-stack">
        <SectionCard>
          <div className="section-card__header">
            <p className="card-kicker">What is an agent?</p>
            <h2 className="card-title">An agent is a loop, not just a prompt</h2>
          </div>
          <div className="prose">
            <p>
              A plain chatbot answers one question, then waits for the next one. An AI agent keeps going. It can decide what to do next, call tools, inspect results, and continue toward a goal. The key insight is that an agent is a loop: model decides, tool executes, result goes back to the model, repeat.
            </p>
            <p>
              The most common mistake beginners make is overcomplicating this. You do not need LangChain, vector databases, or multi-agent orchestration for your first agent. A Python script with one API call and one tool function is a valid agent.
            </p>
            <p>
              As the &quot;How I Escaped Tutorial Hell&quot; post on dev.to makes clear, the best way to learn agents is to build one ugly one before you read another tutorial. Watching someone else build feels productive but your brain stays in passive mode.
            </p>
          </div>
        </SectionCard>

        <div className="section-header">
          <div className="list-stack">
            <p className="eyebrow">Path 1: No-code</p>
            <h2 className="section-title">Build an agent without writing any code</h2>
          </div>
        </div>

        <SectionCard>
          <div className="prose">
            <p>
              If you have never programmed, start here. No-code agent builders have matured dramatically in 2026. You can build a working customer support triage agent, lead qualifier, or content summarizer in under an hour using visual tools alone.
            </p>
            <p>
              These platforms work the same way: you define instructions, connect data sources, configure tools, set guardrails, and deploy. The model handles the reasoning; the platform handles the infrastructure.
            </p>
          </div>
        </SectionCard>

        {noCodeSteps.map((step, i) => (
          <SectionCard key={step.title}>
            <div className="tag-row">
              <Tag tone="accent">Step {i + 1}</Tag>
            </div>
            <h2 className="card-title">{step.title}</h2>
            <p className="section-copy">{step.detail}</p>
          </SectionCard>
        ))}

        <div className="subtle-divider" />

        <div className="section-header">
          <div className="list-stack">
            <p className="eyebrow">Path 2: Code-first</p>
            <h2 className="section-title">Build an agent in Python from scratch</h2>
          </div>
        </div>

        <SectionCard>
          <div className="prose">
            <p>
              For developers and technical learners, building an agent from scratch gives you complete understanding of the pattern. The entire core fits in about 50 lines of Python. Here is a research agent that can search the web and summarize results:
            </p>
          </div>
        </SectionCard>

        <SectionCard>
          <div className="section-card__header">
            <p className="card-kicker">Code</p>
            <h2 className="card-title">A research agent in ~50 lines</h2>
          </div>
          <pre className="code-block"><code>{pythonAgentCode}</code></pre>
          <div className="section-card__body">
            <p className="section-copy">
              This pattern is the foundation of almost every production AI agent. The model receives a system instruction, decides whether to call a tool, and loops until it has enough information to answer. Add more tools, better error handling, and evaluation loops as you scale.
            </p>
          </div>
        </SectionCard>

        {codeFirstSteps.map((step, i) => (
          <SectionCard key={step.title}>
            <div className="tag-row">
              <Tag tone="cyan">Step {i + 1}</Tag>
            </div>
            <h2 className="card-title">{step.title}</h2>
            <p className="section-copy">{step.detail}</p>
          </SectionCard>
        ))}

        <SectionCard>
          <div className="section-card__header">
            <p className="card-kicker">External references</p>
            <h2 className="card-title">Sources and further reading</h2>
          </div>
          <ul className="stage-list">
            <li className="stage-item"><a href="https://www.deeplearning.ai/courses/agentic-ai" target="_blank" rel="noopener noreferrer" data-slug="deeplearning-agentic">DeepLearning.AI: Agentic AI Course</a></li>
            <li className="stage-item"><a href="https://dev.to/kesimo/how-i-escaped-tutorial-hell-and-actually-learned-to-build-ai-agents-in-2026-3j65" target="_blank" rel="noopener noreferrer" data-slug="dev-escape-hell">DEV: How I Escaped Tutorial Hell</a></li>
            <li className="stage-item"><a href="https://www.betterclaw.io/blog/how-to-build-ai-agent" target="_blank" rel="noopener noreferrer" data-slug="betterclaw-paths">BetterClaw: 3 Paths to Build an AI Agent</a></li>
          </ul>
        </SectionCard>
        
        <SectionCard>
          <div className="section-card__header">
            <p className="card-kicker">Next steps</p>
            <h2 className="card-title">What to do after your first agent runs</h2>
          </div>
          <ul className="stage-list">
            <li className="stage-item">Add a third tool: file reading, database query, or email sending.</li>
            <li className="stage-item">Add structured output so your agent returns JSON instead of plain text.</li>
            <li className="stage-item">Add a simple evaluation: run the agent 10 times and check how often it chooses the wrong tool.</li>
            <li className="stage-item">Turn it into an HTTP server with FastAPI so other applications can call it.</li>
            <li className="stage-item">Explore the full-code agent patterns in our <a href="/agents" style={{color: "var(--cyan)", textDecoration: "underline"}}>Building AI Agents</a> section for production-ready patterns.</li>
          </ul>
        </SectionCard>
      </section>
    </SiteShell>
  );
}
