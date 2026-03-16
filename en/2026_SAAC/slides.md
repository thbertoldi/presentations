---
title: "AI Agents in Software Engineering: Systems Thinking beyond the shackles of language"
author: Thiago Bertoldi
lang: en
theme: default
colorSchema: light
highlighter: shiki
lineNumbers: true
drawings:
  persist: false
transition: slide-left
fonts:
  sans: SUSE
  mono: Fira Code
---

# Systems Thinking beyond the shackles of language

AI Agents in Software Engineering

<div class="pt-8">
  <p class="text-lg font-light" style="color: #30BA78;">Thiago Bertoldi</p>
  <p class="text-sm opacity-60">Expert Software Engineer — AI, SUSE</p>
  <p class="text-xs opacity-40 mt-2">thiagobertoldi.com · github.com/thbertoldi</p>
</div>

---

# A question for you

<div class="text-2xl mt-8">

How many of you have already used an AI tool to write code?

</div>

<br>

<p class="text-lg opacity-50">Copilot, ChatGPT, Cursor, Claude...</p>

---
layout: section
---

# The paradigm shift

---

# The shackles of language

<div class="text-xl">

For decades, the bottleneck of software engineering was **syntax**.

</div>

<br>

Mastery of a programming language was the technical differentiator:

- Knowing the "way" of each language
- Memorizing APIs and libraries
- Typing fast and without errors
- Knowing the idiomatic way to do something

<br>

This is changing. **Coding** — the manual labor of turning logic into code — is being automated.

> The agent handles the syntax. But who defines **what** to solve?

---

# From syntax to system

```
Before:  Engineer → thinks about the problem → codes the solution
Now:     Engineer → thinks about the problem → describes the solution → agent codes
```

<br>

<div class="grid grid-cols-2 gap-8">
<div>

**What AI automates**

- Translating logic into code
- Writing boilerplate
- Implementing known patterns
- Following conventions and style

</div>
<div>

**What remains yours**

- Decomposing the problem into parts
- Modeling the system and its boundaries
- Defining architectural trade-offs
- Understanding the business domain

</div>
</div>

<br>

The evolution isn't autocomplete → agent. It's **writing code → systems thinking**.

---

# Systems thinking: the new differentiator

<div class="text-xl">

A good engineer **doesn't shine** by the syntax they master, but by the **system they model**.

</div>

<br>

Systems thinking is the ability to:

- See **the whole**, not just the part you're coding
- Anticipate **side effects** of changes
- Identify **boundaries** between domains
- Make **trade-off** decisions with awareness

<br>

AI agents free you from the shackles of language so you can operate at this level of abstraction.

But for that, you need to understand how they work.

---
layout: section
---

# The anatomy of an agent

---

# The brain and cognition

<div class="grid grid-cols-2 gap-8">
<div>

**The brain: the LLM**

The inference engine. Receives text, generates text.

- Processes natural language
- Reasons about problems
- Generates code and responses

On its own, it's like a brain in a jar — brilliant, but unable to act.

</div>
<div>

**The cognition: the orchestrator**

The logic that gives the brain a body.

- Decides **when** to call the LLM
- Manages **what** to show the LLM
- Controls **which tools** are available
- Implements the observe → think → act loop

It's what separates a chatbot from an agent.

</div>
</div>

---

# The complete structure

<div class="agent-diagram">
  <div class="agent-box">
    <div class="agent-label">Agent</div>
    <div class="agent-top">
      <div class="agent-block orchestrator">Orchestrator<br><span>(cognition)</span></div>
      <div class="agent-arrow">&#8596;</div>
      <div class="agent-block llm">LLM<br><span>(brain)</span></div>
    </div>
    <div class="agent-bottom">
      <div class="agent-block-sm">Tools<br><span>(act)</span></div>
      <div class="agent-block-sm">Knowledge<br><span>(understand)</span></div>
      <div class="agent-block-sm">MCP<br><span>(connect)</span></div>
    </div>
  </div>
</div>

<style>
  .agent-diagram { display: flex; justify-content: center; margin: 0.5rem 0; }
  .agent-box {
    border: 2px solid #30BA78;
    border-radius: 12px;
    padding: 1.2rem 1.5rem;
    width: 85%;
    position: relative;
  }
  .agent-label {
    position: absolute;
    top: -0.7rem;
    left: 1.5rem;
    background: white;
    padding: 0 0.5rem;
    font-weight: 600;
    font-size: 0.85rem;
    color: #0C322C;
  }
  .agent-top {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 1rem;
    margin-bottom: 1rem;
  }
  .agent-arrow { font-size: 1.5rem; color: #30BA78; }
  .agent-block {
    border: 1.5px solid #0C322C;
    border-radius: 8px;
    padding: 0.5rem 1.2rem;
    text-align: center;
    font-size: 0.85rem !important;
    font-weight: 500;
    color: #0C322C !important;
  }
  .agent-block span { font-weight: 300; font-size: 0.75rem !important; color: #999 !important; }
  .agent-block.llm { background: rgba(48, 186, 120, 0.1); }
  .agent-bottom {
    display: flex;
    justify-content: space-around;
    border-top: 1.5px dashed #90EBCD;
    padding-top: 0.8rem;
  }
  .agent-block-sm {
    text-align: center;
    font-size: 0.8rem !important;
    font-weight: 500;
    color: #0C322C !important;
  }
  .agent-block-sm span { font-weight: 300; font-size: 0.7rem !important; color: #999 !important; }
</style>

When you use an AI-powered editor, you're choosing **two independent components**:

1. The **LLM** — the brain (Claude, GPT, DeepSeek, Llama)
2. The **orchestrator** — the cognition (Cursor, Copilot, OpenCode, Windsurf)

---

# Components of an agent

| Component | Role | Analogy |
|---|---|---|
| **LLM** | Reasons and generates responses | The brain |
| **Orchestrator** | Decides what to do and when | The cognition |
| **Tools** | Execute actions in the real world (terminal, editor, browser) | The actuators |
| **Knowledge** | Queryable context — docs, AGENTS.md, architecture | The memory |
| **MCP** | Extensions that connect to external services | The senses |

<br>

> Swapping the LLM changes the **quality** of reasoning. Swapping the orchestrator changes **how** the agent works.

---

# Knowledge vs. MCP

<div class="grid grid-cols-2 gap-8">
<div>

**Knowledge**

Files that the agent **reads** to understand the context.

- AGENTS.md, README, project docs
- The agent can **query**, but not **act**
- Static: you write, the agent reads
- Think of it as a **library**

</div>
<div>

**MCP (Model Context Protocol)**

Servers that the agent **uses** to act on the external world.

- Fetch up-to-date documentation (context7)
- Query live databases
- Execute actions on external APIs
- Think of it as **arms and legs**

</div>
</div>

<br>

> Knowledge is **passive** (the agent reads). MCP is **active** (the agent executes).

---
layout: section
---

# Choosing the brain

---

# The current LLM landscape

<div class="grid grid-cols-2 gap-8">
<div>

**Main providers**

- **Anthropic** — Claude (Opus, Sonnet, Haiku)
- **OpenAI** — Codex (GPT-5.4, etc.)
- **Google** — Gemini 3 Pro/Flash
- **Meta** — Llama 4 (open source)
- **DeepSeek** — R1, V3

</div>
<div>

**What to evaluate**

- Reasoning quality for code
- Cost per token (input vs. output vs. cache)
- Context window size
- Latency

</div>
</div>

<br>

**Important:** rankings change every week. Don't marry a model — learn to switch.

---

# The context window: working memory

<div class="text-lg">

The context window is everything the model "sees" when generating a response.

</div>

<br>

| Concept | Detail |
|---|---|
| **Size** | Measured in tokens (~0.75 words per token) |
| **Behavior** | Each message carries **all** accumulated history |
| **Cost** | 100k tokens costs ~10x more than 10k — **per message** |
| **Lost in the middle** | Models "forget" information in the middle of long contexts |
| **Degradation** | More irrelevant context = worse responses |

<br>

**Golden rule:** start a new conversation when switching tasks. Less is more.

---

# Cost: the bill arrives

<div class="grid grid-cols-2 gap-8">
<div>

**Three types of tokens**

- **Input** — what you send (code, context, prompt)
- **Output** — what the model generates (always the most expensive)
- **Cache** — context reuse (cheaper)

Each message carries the full history. A polluted context isn't just bad — it's **expensive**.

</div>
<div>

**Recommendation: DeepSeek API**

- Cost per token well below competitors
- DeepSeek V3 and R1 compete with premium models
- api.deepseek.com

</div>
</div>

<br>

> Choosing the right model for each task is the difference between $10 and $100 per month.

---

# OpenRouter: a model aggregator

**OpenRouter** (openrouter.ai) gathers dozens of providers under a single API.

<div class="grid grid-cols-2 gap-8">
<div>

**Why use it**

- One API, many models
- Several **free** models available
- Great for experimenting without commitment
- Supports automatic fallback between providers

</div>
<div>

**Interesting free models**

- DeepSeek R1 (reasoning)
- Llama 4 Scout
- Gemini 2.5 Flash
- Qwen3

Create an account and use the API key in any agent that supports OpenAI-compatible APIs.

</div>
</div>

---
layout: section
---

# Practical decisions: cloud vs. local

---

# The fundamental trade-off

<div class="grid grid-cols-3 gap-6">
<div>

**Cloud (API)**

- Larger and more capable models
- No hardware cost
- Cost proportional to usage
- Code leaves your machine

</div>
<div>

**Local (Ollama)**

- Total privacy
- Zero cost per token
- Works offline
- Limited by hardware

</div>
<div>

**Hybrid**

- Local for simple tasks
- Cloud for complex tasks
- Best cost-benefit
- Recommended approach

</div>
</div>

<br>

> There's no universal answer. Evaluate: **privacy**, **cost**, **quality**, and **convenience**.

---

# Quantization: fitting the model on your machine

<div class="text-lg">

Quantization is compressing a model so it runs with less memory.

</div>

<br>

| Quantization | What it does | Quality impact | Memory usage |
|---|---|---|---|
| **FP16** (no compression) | 16-bit weights | Original quality | High |
| **Q8** | 8 bits per weight | Nearly imperceptible | ~50% of FP16 |
| **Q4** | 4 bits per weight | Slight degradation | ~25% of FP16 |
| **Q2** | 2 bits per weight | Noticeable degradation | ~12% of FP16 |

<br>

**In practice:** when you download `qwen3:8b` on Ollama, you're already downloading a quantized version (Q4). It's the best quality/memory ratio for most cases.

---

# Hardware for local models

<div class="grid grid-cols-2 gap-8">
<div>

**For running models (inference)**

- **Memory** (RAM/VRAM) is the critical resource
- 16 GB RAM: 7-8B parameter models (Q4)
- 32 GB RAM: 13-14B parameter models (Q4)
- GPU with more VRAM = faster responses
- AMD or NVIDIA work for inference

</div>
<div>

**For training / fine-tuning**

- NVIDIA with CUDA is practically mandatory
- The CUDA ecosystem is still unbeatable
- Image generation also depends on CUDA
- You probably **don't need** to train models

</div>
</div>

<br>

**Practical rule:**

- Need to **run** a model? More memory.
- Need to **train** a model? NVIDIA + CUDA.
- Not sure? Start with an API and migrate to local later.

---

# Installing and using Ollama

```bash
# Install Ollama
curl -fsSL https://ollama.com/install.sh | sh

# Download a model
ollama pull qwen3:8b

# Run interactively
ollama run qwen3:8b
```

**Configuring the context window:**

By default, Ollama uses 2048 context tokens. For code tasks, increase it:

```bash
# Run with expanded context (16k tokens)
ollama run qwen3:8b --num-ctx 16384
```

Recommended values: **16384** (16k) or **32768** (32k). More context = more memory.

---

# Recommended local models

| Model | Parameters | Best for | Minimum RAM |
|---|---|---|---|
| **qwen3:8b** | 8B | General use, good balance | 16 GB |
| **qwen3:14b** | 14B | More complex tasks | 32 GB |
| **deepseek-r1:32b** | 32B | Reasoning and logic | 64 GB |
| **codellama:7b** | 7B | Code-focused | 16 GB |

<br>

**Rules for choosing:**

- Newer is usually better (the field moves fast)
- Balance context window with number of parameters
- Test with your actual tasks before deciding
- If it freezes, reduce `num-ctx` or choose a smaller model

---
layout: section
---

# Tools: the orchestrator in practice

---

# Editors with agent capabilities

| Editor | Highlights |
|---|---|
| **VS Code** | Integrated Copilot, extensions like Cline and Continue |
| **Cursor** | VS Code fork focused on AI, Tab + Agent mode |
| **Windsurf** | Cascade flow for multi-file tasks |
| **Zed** | Native performance, growing LLM support |

<br>

Remember: the editor is the **orchestrator**. The **LLM** is configured separately.

You can use Cursor with DeepSeek, VS Code with Claude, or any combination.

---

# Terminal agents

<div class="grid grid-cols-2 gap-8">
<div>

**Why terminal?**

- Full control over the environment
- Automation of large-scale tasks
- Refactors, migrations, CI/CD
- No GUI overhead

</div>
<div>

**Options**

- **OpenCode** (open source)
- Claude Code (Anthropic)
- Codex CLI (OpenAI)
- Aider (open source)

</div>
</div>

<br>

> Terminal agents are the Swiss army knife of the engineer who thinks in systems — not in individual files.

---
layout: section
---

# OpenCode: an open source agent

---

# What is OpenCode

OpenCode is an AI agent for the terminal, **open source** and provider-agnostic.

<div class="grid grid-cols-2 gap-8">
<div>

**Features**

- Interactive TUI (Terminal UI)
- Support for multiple providers (DeepSeek, OpenAI, Anthropic, Ollama)
- Native MCP server support
- LSP (Language Server Protocol) support
- Client/server architecture

</div>
<div>

**Install**

```bash
# With curl (recommended)
curl -fsSL https://opencode.ai/install | bash

# Or with bun
bun install -g opencode-ai
```

Then just run:

```bash
opencode
```

</div>
</div>

---

# Configuring OpenCode with DeepSeek

Create an `opencode.json` file at the project root:

```json
{
  "$schema": "https://opencode.ai/config.json",
  "provider": {
    "deepseek": {
      "npm": "@ai-sdk/openai-compatible",
      "name": "DeepSeek",
      "env": ["DEEPSEEK_API_KEY"],
      "options": {
        "baseURL": "https://api.deepseek.com/v1"
      },
      "models": {
        "deepseek-reasoner": {
          "name": "DeepSeek Reasoner"
        }
      }
    },
  }
}
```

Export the API key:

```bash
export DEEPSEEK_API_KEY="your-key-here"
```

Get the key at **api.deepseek.com**. The API operates on a credit-based system, so there's no risk of spending more than planned.

---

# Configuring MCP in OpenCode

Add an MCP server to `opencode.json` to give the agent superpowers:

```json
{
  "$schema": "https://opencode.ai/config.json",
  "mcp": {
    "context7": {
      "enabled": true,
      "headers": {
        "CONTEXT7_API_KEY": "<your-key-here>"
      },
      "type": "remote",
      "url": "https://mcp.context7.com/mcp"
    }
  }
}
```

**context7** allows the agent to fetch up-to-date documentation for any library.

Usage in prompt: `"Set up FastAPI with JWT authentication. Use context7"`

---

# OpenCode with local models (Ollama)

Configure `opencode.json` to use local Ollama:

```json
{
  "$schema": "https://opencode.ai/config.json",
  "provider": {
    "ollama": {
      "npm": "@ai-sdk/openai-compatible",
      "name": "Ollama (local)",
      "options": {
        "baseURL": "http://localhost:11434/v1"
      },
      "models": {
        "qwen3:8b": {
          "name": "Qwen3 8B (local)"
        }
      }
    }
  }
}
```

Run Ollama in one terminal (`ollama serve`) and open OpenCode in another.

Zero cost. Total privacy. No internet.

---
layout: section
---

# Operating in the new paradigm

---

# Context engineering

<div class="text-lg">

Prompt engineering is about **a single question**. Context engineering is about **the entire environment**.

</div>

<br>

**What changes in practice:**

| Before (prompt) | Now (context) |
|---|---|
| "How do I do X?" | Provide AGENTS.md, architecture docs, examples |
| Copy/paste code | Let the agent read the relevant files |
| Iterate on the prompt | Iterate on the project's **knowledge structure** |

<br>

```markdown
# Good
"Refactor the calculateShipping function in utils/shipping.ts
to use the Strategy pattern. Keep the current interface."

# Bad
"Improve this code"
```

---

# Structuring knowledge for the agent

The agent is only as good as the context you provide.

```
project/
├── AGENTS.md          # Instructions for the agent: rules, style, conventions
├── knowledge/         # Domain documentation
│   ├── architecture.md # Architectural decisions and their reasons
│   ├── patterns.md     # Team code patterns
│   └── glossary.md     # Domain ubiquitous language
├── opencode.json      # OpenCode configuration + MCP
├── src/
└── ...
```

<br>

- **AGENTS.md** — the most important file. Rules the agent follows in every interaction.
- **knowledge/** — domain context queryable on demand.
- The better your documentation, the better the agent works.

> Documenting the domain is no longer "bureaucracy" — it's now **infrastructure**.

---

# Example: a real AGENTS.md

```markdown
# AGENTS.md

## Language and style
- Use Go. Follow the project pattern (handlers in /api, logic in /domain).
- Names in English. Comments and commits in English.
- Handle errors explicitly — never use _ to ignore an error.

## Architecture
- Hexagonal: ports in /domain/ports, adapters in /infra.
- Each new endpoint needs tests in /api/*_test.go.
- Don't create direct dependencies between adapters.

## Domain rules
- "Order" can only be cancelled if status == "pending".
- Final price = subtotal - discount + shipping. Never negative.

## What NOT to do
- Don't alter existing migrations — create new ones.
- Don't add dependencies without approval (open an issue first).
```

This file is automatically read by the agent and guides **all** interactions.

---

# Decomposing tasks: the core skill

<div class="decomp">
  <div class="decomp-monolith">
    <div class="decomp-bad-label">Monolithic request</div>
    <div class="decomp-bad-box">"Create a complete e-commerce system"</div>
    <div class="decomp-result-bad">Hallucination, context loss, inconsistent code</div>
  </div>
  <div class="decomp-arrow-down">&#8595;</div>
  <div class="decomp-waterfall">
    <div class="decomp-good-label">Decomposition into validatable steps</div>
    <div class="decomp-steps">
      <div class="decomp-step">
        <div class="decomp-step-num">1</div>
        <div class="decomp-step-text">"Create the data model for products"</div>
        <div class="decomp-check">&#10003;</div>
      </div>
      <div class="decomp-step-arrow">&#8594;</div>
      <div class="decomp-step">
        <div class="decomp-step-num">2</div>
        <div class="decomp-step-text">"Implement the listing endpoint"</div>
        <div class="decomp-check">&#10003;</div>
      </div>
      <div class="decomp-step-arrow">&#8594;</div>
      <div class="decomp-step">
        <div class="decomp-step-num">3</div>
        <div class="decomp-step-text">"Add filters by category"</div>
        <div class="decomp-check">&#10003;</div>
      </div>
      <div class="decomp-step-arrow">&#8594;</div>
      <div class="decomp-step">
        <div class="decomp-step-num">4</div>
        <div class="decomp-step-text">"Write tests for the endpoint"</div>
        <div class="decomp-check">&#10003;</div>
      </div>
    </div>
  </div>
</div>

<p class="mt-3 text-sm" style="text-align: center; color: #0C322C;">
  Each step fits in the context · Can be validated before moving on · You maintain control over the <strong>architecture</strong>
</p>

<p class="mt-2" style="text-align: center; font-size: 0.95rem; color: #0C322C;">
  <span style="background: rgba(48, 186, 120, 0.15); padding: 0.2em 0.6em; border-radius: 4px; border-left: 3px solid #30BA78;">
    Task decomposition <strong>is</strong> applied systems thinking.
  </span>
</p>

<style>
  .decomp { display: flex; flex-direction: column; align-items: center; gap: 0.3rem; margin-top: 0.3rem; }
  .decomp-monolith { text-align: center; width: 90%; }
  .decomp-bad-label { font-size: 0.7rem; font-weight: 600; color: #999; text-transform: uppercase; letter-spacing: 0.05em; margin-bottom: 0.3rem; }
  .decomp-bad-box {
    border: 2px solid #FE7C3F;
    border-radius: 8px;
    padding: 0.5rem 1rem;
    font-size: 0.85rem;
    color: #0C322C;
    background: rgba(254, 124, 63, 0.06);
  }
  .decomp-result-bad { font-size: 0.7rem; color: #FE7C3F; margin-top: 0.2rem; }
  .decomp-arrow-down { font-size: 1.2rem; color: #30BA78; }
  .decomp-waterfall { width: 90%; }
  .decomp-good-label { font-size: 0.7rem; font-weight: 600; color: #999; text-transform: uppercase; letter-spacing: 0.05em; margin-bottom: 0.4rem; text-align: center; }
  .decomp-steps { display: flex; align-items: center; justify-content: center; gap: 0.2rem; }
  .decomp-step {
    border: 1.5px solid #30BA78;
    border-radius: 8px;
    padding: 0.35rem 0.5rem;
    text-align: center;
    background: rgba(48, 186, 120, 0.05);
    position: relative;
    flex: 1;
    min-width: 0;
  }
  .decomp-step-num {
    font-size: 0.65rem;
    font-weight: 600;
    color: #30BA78;
    margin-bottom: 0.15rem;
  }
  .decomp-step-text { font-size: 0.65rem !important; color: #0C322C !important; line-height: 1.3 !important; }
  .decomp-check {
    position: absolute;
    top: -0.4rem;
    right: -0.3rem;
    background: #30BA78;
    color: white;
    width: 14px;
    height: 14px;
    border-radius: 50%;
    font-size: 0.55rem;
    display: flex;
    align-items: center;
    justify-content: center;
  }
  .decomp-step-arrow { font-size: 0.9rem; color: #90EBCD; flex-shrink: 0; }
</style>

---

# What AI doesn't do for you

<div class="grid grid-cols-2 gap-8">
<div>

**AI solves**

- Mechanical coding (boilerplate, CRUD)
- Translation between languages
- Implementation of known patterns
- Documentation search
- Repetitive unit tests

</div>
<div>

**You solve**

- Domain modeling
- Architectural decisions and trade-offs
- Logical decomposition of problems
- Defining boundaries between services
- Communication with stakeholders

</div>
</div>

<br>

AI automates **coding**: the mechanical work of turning logic into syntax.

**Logical decomposition** and **system modeling** remain the engineer's exclusive responsibility.

---
layout: section
---

# Before you start

---

# Recommended environment

<div class="grid grid-cols-2 gap-8">
<div>

The examples in this talk assume **Linux**.

**Recommendation:** openSUSE Tumbleweed

- Rolling release — always up to date
- Great hardware and development support
- Robust `zypper` package manager

</div>
<div>

**Using Windows?**

Use **WSL2** (Windows Subsystem for Linux):

```bash
wsl --install -d openSUSE-Tumbleweed
```

**For containers:**

- **Rancher Desktop** — open source alternative to Docker Desktop

</div>
</div>

---

# Next steps

<div class="grid grid-cols-2 gap-8">
<div>

**Start now**

1. Install Ollama and test a local model
2. Install OpenCode and configure with DeepSeek or Ollama
3. Create an AGENTS.md in your next project
4. Practice decomposing tasks into small parts

</div>
<div>

**Level up later**

- Configure MCP servers (context7, databases)
- Explore custom agents with **CrewAI** or **LangGraph**
- Try **OpenRouter** to test various models
- Contribute to open source agent projects

</div>
</div>

---

# Recap

<br>

| Concept | Lesson |
|---|---|
| Paradigm | Syntax → systems thinking. AI codes, you model. |
| Agent | Brain (LLM) + cognition (orchestrator) + tools + knowledge + MCP |
| LLM | DeepSeek API for cost-benefit, Ollama for privacy |
| Context | Always keep it clean. Long contexts degrade quality and cost more. |
| Quantization | Compression that allows running large models on modest hardware |
| Decomposition | Small and well-defined tasks = better results |
| Domain | Your differentiator as an engineer. Document it for the agent. |

---
layout: center
class: text-center
---

<div style="color: #0C322C;">
  <h1 style="color: #30BA78; border-bottom: none; font-size: 2.5rem;">Thank you</h1>
  <div class="grid grid-cols-[1fr_auto] gap-8 items-center mt-6 text-left" style="max-width: 520px; margin: 1.5rem auto 0;">
    <div>
      <p class="text-lg font-medium">Thiago Bertoldi</p>
      <p class="text-sm opacity-60 mt-1">Expert Software Engineer — AI, SUSE</p>
      <div class="mt-4 text-sm" style="line-height: 1.8;">
        <p>thiagobertoldi.com</p>
        <p>github.com/thbertoldi</p>
        <p>linkedin.com/in/thiago-bertoldi</p>
      </div>
    </div>
    <div>
      <img src="/linkedin-qr.png" alt="LinkedIn QR Code" style="width: 120px; height: 120px;" />
    </div>
  </div>
</div>
