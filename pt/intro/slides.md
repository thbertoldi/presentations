---
title: "Agentes de IA para código: um guia prático para engenheiros"
author: Thiago Bertoldi
lang: pt-BR
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

# Agentes de IA para código

Um guia prático para engenheiros

<div class="pt-8">
  <p class="text-lg font-light" style="color: #30BA78;">Thiago Bertoldi</p>
  <p class="text-sm opacity-60">Expert Software Engineer — AI, SUSE</p>
  <p class="text-xs opacity-40 mt-2">thiagobertoldi.com · github.com/thbertoldi</p>
</div>

---

# Quem sou eu

<div class="grid grid-cols-2 gap-8">
<div>

**Thiago Bertoldi**

- Expert Software Engineer — AI na **SUSE**
- Lidero o módulo de AI Observability
- Mestrando na UFSC — Governança de IA e Estratégia Organizacional
- Palestrante na SUSECON 2026 (Praga)

</div>
<div>

**Certificações relevantes**

- CrewAI Multi-Agent Systems
- Observability com OpenTelemetry
- Kubernetes AI/ML
- AI Observability

</div>
</div>

---

# Minha trajetória

<div class="timeline">
  <div class="timeline-line"></div>
  <div class="grid grid-cols-[1fr_1fr] gap-x-6 gap-y-0 relative">
    <div class="timeline-item-right"></div>
    <div class="timeline-item-left">
      <div class="timeline-dot" style="left: -0.95rem;"></div>
      <span class="timeline-year">2014</span>
      <p class="timeline-text">Ingressei em <strong>Eng. de Controle e Automação</strong> na UFSC</p>
    </div>
    <div class="timeline-item-right"></div>
    <div class="timeline-item-left">
      <div class="timeline-dot" style="left: -0.95rem;"></div>
      <span class="timeline-year">2018</span>
      <p class="timeline-text">Desenvolvedor IoT na <strong>Khomp</strong> — Python, Go, MQTT, LoRaWAN</p>
    </div>
    <div class="timeline-item-right">
      <div class="timeline-dot" style="right: -0.95rem;"></div>
      <span class="timeline-year">2022</span>
      <p class="timeline-text">Senior Engineer e depois <strong>Tech Lead</strong> na Engineering Brazil — plataforma de Data & AI, time de 20+ pessoas</p>
    </div>
    <div class="timeline-item-left"></div>
    <div class="timeline-item-right"></div>
    <div class="timeline-item-left">
      <div class="timeline-dot" style="left: -0.95rem;"></div>
      <span class="timeline-year">2023</span>
      <p class="timeline-text">Especialização em <strong>Computação Científica</strong> no IFSC — ML e inverse reinforcement learning</p>
    </div>
    <div class="timeline-item-right">
      <div class="timeline-dot" style="right: -0.95rem;"></div>
      <span class="timeline-year">2024</span>
      <p class="timeline-text">Expert Software Engineer — AI na <strong>SUSE</strong>. Lidero o módulo de AI Observability</p>
    </div>
    <div class="timeline-item-left"></div>
    <div class="timeline-item-right"></div>
    <div class="timeline-item-left">
      <div class="timeline-dot" style="left: -0.95rem;"></div>
      <span class="timeline-year">2025</span>
      <p class="timeline-text">Mestrado em <strong>Engenharia do Conhecimento</strong> na UFSC — Governança de IA</p>
    </div>
    <div class="timeline-item-right">
      <div class="timeline-dot" style="right: -0.95rem;"></div>
      <span class="timeline-year">2026</span>
      <p class="timeline-text">Palestrante na <strong>SUSECON</strong> em Praga</p>
    </div>
    <div class="timeline-item-left"></div>
  </div>
</div>

<style>
  .timeline {
    position: relative;
    margin-top: 0.5rem;
  }
  .timeline-line {
    position: absolute;
    left: 50%;
    top: 0;
    bottom: 0;
    width: 2px;
    background: linear-gradient(to bottom, #30BA78, #90EBCD);
    transform: translateX(-50%);
  }
  .timeline-item-left,
  .timeline-item-right {
    position: relative;
    padding: 0.25rem 0;
    min-height: 1.2rem;
  }
  .timeline-item-left {
    padding-left: 1.2rem;
  }
  .timeline-item-right {
    text-align: right;
    padding-right: 1.2rem;
  }
  .timeline-dot {
    position: absolute;
    top: 0.55rem;
    width: 10px;
    height: 10px;
    background-color: #30BA78;
    border-radius: 50%;
    border: 2px solid #0C322C;
  }
  .timeline-year {
    font-family: 'SUSE', sans-serif;
    font-weight: 600;
    font-size: 0.8rem;
    color: #30BA78;
    letter-spacing: 0.02em;
  }
  .timeline-text {
    font-size: 0.78rem !important;
    line-height: 1.35 !important;
    margin: 0.1rem 0 0 0;
    color: #0C322C !important;
  }
</style>

---

# Sobre a SUSE

<div class="grid grid-cols-2 gap-8">
<div>

- Fundada em 1992 na Alemanha — uma das empresas open source mais antigas do mundo
- Criadora do **SUSE Linux Enterprise** e mantenedora do **openSUSE**
- Desenvolve o **Rancher** (gerenciamento Kubernetes) e o **NeuVector** (segurança de containers)
- Mais de 1.700 funcionários em 30+ países
- Compromisso com **escolha**, **inovação**, **confiança** e **comunidade**

</div>
<div>

**Por que open source importa para vocês**

- Código aberto = transparência e auditabilidade
- Sem vendor lock-in: você escolhe suas ferramentas
- Comunidade global colaborando para resolver problemas reais
- Todos os exemplos desta palestra usam ferramentas open source

> "Tecnologia deve empoderar as pessoas e respeitar sua soberania."

</div>
</div>

---

# Antes de começar: ambiente

<div class="grid grid-cols-2 gap-8">
<div>

Os exemplos desta palestra assumem que você está usando **Linux**.

**Recomendação:** openSUSE Tumbleweed

- Rolling release — sempre atualizado
- Ótimo suporte a hardware e ferramentas de desenvolvimento
- Gerenciador de pacotes `zypper` robusto e confiável

</div>
<div>

**Usando Windows?**

Use **WSL2** (Windows Subsystem for Linux):

```bash
wsl --install -d openSUSE-Tumbleweed
```

**Para containers:**

- **Rancher Desktop** — alternativa open source ao Docker Desktop
- Desenvolvido pela SUSE
- Suporte a containerd e dockerd

</div>
</div>

---

# O que vamos discutir hoje

<div class="text-xl">

Agentes de IA **para tarefas de código**, não agentes genéricos.

</div>

<br>

```
Autocomplete → Geração de código → Prompting → Agentes
```

<br>

A programação está mudando:

de **"saber o que digitar"** para **"saber o que resolver"**

---
layout: section
---

# A anatomia de um agente

---

# O LLM é o cérebro

<div class="grid grid-cols-2 gap-8">
<div>

Um Large Language Model (LLM) sozinho é como um cérebro sem corpo.

- Processa linguagem natural
- Gera texto e código
- Raciocina sobre problemas

Mas **não pode agir** no mundo real sem uma estrutura ao redor.

</div>
<div>

```
┌─────────────────────────┐
│         Agente           │
│                          │
│  ┌───────────────────┐   │
│  │    LLM (cérebro)  │   │
│  └───────────────────┘   │
│          │               │
│  ┌───────┴───────┐       │
│  │               │       │
│  ▼               ▼       │
│ Tools          Context   │
│ (atuadores)   (sensores) │
└─────────────────────────┘
```

</div>
</div>

---

# Componentes de um agente

| Componente | Papel | Exemplo |
|---|---|---|
| **LLM** | O cérebro. Raciocina e gera respostas. | Claude, GPT, Gemini, Llama |
| **Tools** | Os atuadores. Executam ações no mundo real. | Terminal, editor de arquivos, browser |
| **Knowledge** | Contexto consultável. O agente lê para entender o projeto. | AGENTS.md, docs do projeto, arquitetura |
| **MCP** | Extensões acionáveis. Conectam o agente a ferramentas e serviços externos. | Buscar docs atualizadas, acessar APIs, consultar bancos de dados |

---

# Knowledge vs. MCP

<div class="grid grid-cols-2 gap-8">
<div>

**Knowledge (conhecimento)**

Arquivos que o agente **lê** para entender o contexto.

- AGENTS.md, README, docs do projeto
- O agente pode **consultar**, mas não **agir**
- Estático: você escreve, o agente lê
- Pense como uma **biblioteca**

</div>
<div>

**MCP (Model Context Protocol)**

Servidores que o agente **usa** para agir no mundo externo.

- Buscar documentação atualizada (context7)
- Consultar bancos de dados ao vivo
- Executar ações em APIs externas
- Pense como **braços e pernas**

</div>
</div>

<br>

> Knowledge é **passivo** (o agente lê). MCP é **ativo** (o agente executa).

---
layout: section
---

# Escolhendo o cérebro

---

# O cenário atual de LLMs

<div class="grid grid-cols-2 gap-8">
<div>

**Provedores principais**

- **Anthropic** — Claude (Opus, Sonnet, Haiku)
- **OpenAI** — GPT-4o, o3, o4-mini
- **Google** — Gemini 2.5 Pro/Flash
- **Meta** — Llama 4 (open source)
- **DeepSeek** — R1, V3

</div>
<div>

**O que avaliar**

- Custo por token (entrada vs. saída vs. cache)
- Tamanho da janela de contexto
- Latência
- Qualidade do raciocínio para código

</div>
</div>

---

# Janela de contexto

<div class="text-lg">

A janela de contexto é a **memória de trabalho** do modelo.

</div>

| O que é | Por que importa |
|---|---|
| Quantidade de texto que o modelo "enxerga" por vez | Determina quanto código o agente consegue analisar |
| Medida em tokens (~0,75 palavras por token) | Projetos grandes podem estourar o limite |

<br>

**Regra prática:** sempre limpe seu contexto antes de mudar de tarefa.

Um contexto poluído gera respostas piores — o modelo se confunde com informações irrelevantes.

---

# Os problemas de contextos longos

<div class="grid grid-cols-2 gap-8">
<div>

**Lost in the middle**

Modelos tendem a "esquecer" informações que estão no meio de contextos longos. Eles prestam mais atenção no início e no fim.

**Custo exponencial**

Cada mensagem carrega todo o histórico. Um contexto de 100k tokens custa 10x mais que um de 10k — e a cada mensagem.

</div>
<div>

**Degradação de qualidade**

Quanto mais informação irrelevante no contexto, piores as respostas. O modelo não consegue separar sinal de ruído.

**Latência**

Contextos grandes = respostas mais lentas. O modelo precisa processar tudo antes de responder.

</div>
</div>

<br>

**Na prática:** comece uma conversa nova ao mudar de tarefa. Forneça apenas o código e contexto relevantes. Menos é mais.

---

# Custo: a conta chega

<div class="grid grid-cols-2 gap-8">
<div>

**Tokens de entrada** — o que você envia

**Tokens de saída** — o que o modelo responde

**Tokens em cache** — reutilização de contexto (mais barato)

</div>
<div>

**Recomendação: DeepSeek API**

- Custo por token muito abaixo dos concorrentes
- DeepSeek V3 e R1 competem com modelos premium
- Ótimo para quem está começando ou quer economizar
- api.deepseek.com

</div>
</div>

<br>

> Escolher o modelo certo para cada tarefa é a diferença entre R$50 e R$500 por mês.

---

# OpenRouter: um agregador de modelos

**OpenRouter** (openrouter.ai) reúne dezenas de provedores em uma única API.

<div class="grid grid-cols-2 gap-8">
<div>

**Por que usar**

- Uma API, muitos modelos
- Vários modelos **gratuitos** disponíveis
- Bom para experimentar sem compromisso
- Suporte a fallback automático entre provedores

</div>
<div>

**Modelos gratuitos interessantes**

- DeepSeek R1 (raciocínio)
- Llama 4 Scout
- Gemini 2.5 Flash
- Qwen3

Crie uma conta e use a API key em qualquer agente que suporte OpenAI-compatible.

</div>
</div>

---
layout: section
---

# Editores e ferramentas

---

# Editores com capacidades de agente

| Editor | Destaques |
|---|---|
| **VS Code** | Copilot integrado, extensões como Cline e Continue |
| **Cursor** | Fork do VS Code focado em IA, Tab + Agent mode |
| **Windsurf** | Cascade flow para tarefas multi-arquivo |
| **Zed** | Performance nativa, suporte a LLMs em crescimento |

<br>

**Ponto chave:** você precisa escolher dois componentes:

1. Um **LLM** para o "cérebro"
2. Um **agente** para a "cognição" (o editor ou extensão que orquestra)

---

# Opções de agentes

<div class="grid grid-cols-2 gap-8">
<div>

**Integrados a editores**

- GitHub Copilot (VS Code)
- Cursor Agent
- Windsurf Cascade
- Continue (open source)

</div>
<div>

**Standalone (terminal)**

- **OpenCode** (open source, SUSE)
- Claude Code (Anthropic)
- Codex CLI (OpenAI)
- Aider (open source)

</div>
</div>

<br>

**Dica:** agentes de terminal são poderosos para tarefas de refatoração, migração e automação em larga escala.

---
layout: section
---

# OpenCode: um agente open source

---

# O que é o OpenCode

OpenCode é um agente de IA para o terminal, **open source** e agnóstico de provedor.

<div class="grid grid-cols-2 gap-8">
<div>

**Características**

- Interface TUI (Terminal UI) interativa
- Suporte a múltiplos provedores (DeepSeek, OpenAI, Anthropic, Ollama)
- Suporte nativo a MCP servers
- Suporte a LSP (Language Server Protocol)
- Arquitetura cliente/servidor

</div>
<div>

**Instalar**

```bash
# Com curl (recomendado)
curl -fsSL https://opencode.ai/install | bash

# Ou com bun
bun install -g opencode-ai
```

Depois, basta rodar:

```bash
opencode
```

</div>
</div>

---

# Configurando o OpenCode com DeepSeek

Crie um arquivo `opencode.json` na raiz do projeto:

```json
{
  "$schema": "https://opencode.ai/config.json",
  "provider": {
    "deepseek": {}
  }
}
```

Exporte a chave da API:

```bash
export DEEPSEEK_API_KEY="sua-chave-aqui"
```

Obtenha a chave em **api.deepseek.com**. O cadastro oferece créditos gratuitos para começar.

---

# Configurando MCP no OpenCode

Adicione um MCP server ao `opencode.json` para dar superpoderes ao agente:

```json
{
  "$schema": "https://opencode.ai/config.json",
  "provider": {
    "deepseek": {}
  },
  "mcp": {
    "context7": {
      "type": "remote",
      "url": "https://mcp.context7.com/mcp"
    }
  }
}
```

O **context7** permite que o agente busque documentação atualizada de qualquer biblioteca.

Uso no prompt: `"Configure o FastAPI com autenticação JWT. use context7"`

---
layout: section
---

# Conselhos práticos

---

# Escolhendo um plano

<div class="grid grid-cols-2 gap-8">
<div>

**Para começar (grátis ou barato)**

- OpenRouter com modelos gratuitos
- DeepSeek API (créditos iniciais)
- Modelos locais com Ollama (custo zero)

</div>
<div>

**Para uso intensivo**

- DeepSeek API (melhor custo-benefício)
- Planos Pro/Max dos provedores
- Avalie: o tempo que você economiza compensa o custo?

</div>
</div>

<br>

**Checklist antes de assinar:**

- Custo por token de saída (o mais caro)
- Custo por token de entrada
- Tamanho da janela de contexto
- Limites de uso diário/mensal

---

# Engenharia de contexto

<div class="text-lg">

Prompt engineering é sobre **uma pergunta**. Context engineering é sobre **o ambiente inteiro**.

</div>

<br>

**Técnicas essenciais:**

- Forneça exemplos do resultado esperado
- Inclua o código relevante (não o projeto inteiro)
- Seja específico sobre restrições e requisitos
- Use linguagem imperativa: "implemente", "refatore", "corrija"

<br>

```markdown
# Bom
"Refatore a função calcularFrete em utils/frete.ts
para usar o padrão Strategy. Mantenha a interface atual."

# Ruim
"Melhore esse código"
```

---
layout: section
---

# Modelos locais

---

# Por que rodar modelos locais?

- **Privacidade:** seu código não sai da sua máquina
- **Custo:** depois do hardware, custo zero por token
- **Offline:** funciona sem internet
- **Aprendizado:** entenda como os modelos funcionam na prática

<br>

**Conceitos importantes:**

| Conceito | O que é |
|---|---|
| **Parâmetros** | "Tamanho" do modelo — mais parâmetros = mais capacidade (e mais memória) |
| **Quantização** | Compressão do modelo — reduz memória ao custo de qualidade |

---

# Hardware para modelos locais

<div class="grid grid-cols-2 gap-8">
<div>

**Para rodar modelos (inferência)**

- Memória RAM/VRAM é o recurso mais importante
- 16 GB RAM: modelos de 7-8B parâmetros
- 32 GB RAM: modelos de 13-14B parâmetros
- GPU AMD ou NVIDIA funcionam

</div>
<div>

**Para treinar/fine-tune**

- NVIDIA com CUDA é praticamente obrigatório
- O ecossistema CUDA ainda é imbatível para treinamento
- Geração de imagens também depende de CUDA

</div>
</div>

<br>

**Regra prática:**

- Precisa **rodar** modelo? Mais memória importa mais.
- Precisa **treinar** modelo? NVIDIA + CUDA.

---

# Instalando e usando o Ollama

```bash
# Instalar Ollama
curl -fsSL https://ollama.com/install.sh | sh

# Baixar um modelo
ollama pull qwen3:8b

# Rodar interativamente
ollama run qwen3:8b
```

**Configurando a janela de contexto:**

Por padrão, Ollama usa 2048 tokens de contexto. Para tarefas de código, aumente:

```bash
# Rodar com contexto expandido (16k tokens)
ollama run qwen3:8b --num-ctx 16384
```

Valores recomendados: **16384** (16k) ou **32768** (32k). Mais contexto = mais memória necessária.

---

# Modelos locais recomendados

| Modelo | Parâmetros | Melhor para | RAM mínima |
|---|---|---|---|
| **qwen3:8b** | 8B | Uso geral, bom equilíbrio | 16 GB |
| **qwen3:14b** | 14B | Tarefas mais complexas | 32 GB |
| **deepseek-r1:8b** | 8B | Raciocínio e lógica | 16 GB |
| **codellama:7b** | 7B | Foco em código | 16 GB |

<br>

**Regras para escolher:**

- Mais novo costuma ser melhor (avanços rápidos)
- Balance janela de contexto com número de parâmetros
- Teste com suas tarefas reais antes de decidir
- Se travar, reduza o `num-ctx` ou escolha um modelo menor

---

# OpenCode com modelos locais (Ollama)

Configure o `opencode.json` para usar o Ollama local:

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

Rode o Ollama em um terminal (`ollama serve`) e abra o OpenCode em outro.

Custo zero. Privacidade total. Sem internet.

---
layout: section
---

# Pensamento sistêmico e o engenheiro moderno

---

# O papel do engenheiro muda

<div class="text-xl">

Um bom programador **não brilha** pelo conhecimento profundo de sintaxe, mas pelo **conhecimento profundo do domínio**.

</div>

<br>

Com agentes de IA, o engenheiro se torna mais:

- **Arquiteto** — desenha a solução, o agente implementa
- **Revisor** — valida o que o agente produziu
- **Pensador sistêmico** — entende o todo, não só a parte

<br>

> A IA é sua ferramenta. O domínio é seu diferencial.

---

# Gerenciando conhecimento para o agente

O agente só é tão bom quanto o contexto que você fornece.

<br>

**Estratégias práticas:**

```
projeto/
├── AGENTS.md          # Instruções para o agente
├── knowledge/         # Documentação do domínio
│   ├── arquitetura.md
│   ├── padroes.md
│   └── glossario.md
├── opencode.json      # Configuração do OpenCode + MCP
├── src/
└── ...
```

<br>

- **AGENTS.md** — regras, convenções e estilo de código do projeto
- **knowledge/** — contexto de domínio que o agente pode consultar
- **opencode.json** — configuração de provedor e MCP servers
- Quanto melhor a documentação, melhor o agente trabalha

---

# Decompondo tarefas para o agente

<div class="grid grid-cols-2 gap-8">
<div>

**Não faça isso**

"Crie um sistema de e-commerce completo"

O agente vai alucinar, perder contexto e produzir código inconsistente.

</div>
<div>

**Faça isso**

1. "Crie o modelo de dados para produtos"
2. "Implemente o endpoint de listagem"
3. "Adicione filtros por categoria"
4. "Escreva testes para o endpoint"

</div>
</div>

<br>

**Princípios:**

- Tarefas pequenas e bem definidas
- Uma responsabilidade por vez
- Valide cada etapa antes de avançar
- Limpe o contexto entre tarefas diferentes

---
layout: section
---

# Para onde ir a partir daqui

---

# Próximos passos

<div class="grid grid-cols-2 gap-8">
<div>

**Comece agora**

1. Instale o Ollama e teste um modelo local
2. Instale o OpenCode e configure com DeepSeek ou Ollama
3. Crie um AGENTS.md no seu próximo projeto
4. Pratique decompor tarefas

</div>
<div>

**Evolua depois**

- Configure MCP servers (context7, bancos de dados)
- Explore agentes customizados com **CrewAI** ou **LangGraph**
- Experimente o **OpenRouter** para testar vários modelos
- Contribua com projetos open source de agentes

</div>
</div>

---

# Recapitulando

<br>

| Conceito | Lição |
|---|---|
| Agente | LLM + Tools + Knowledge + MCP = capacidade de agir |
| Escolha do LLM | DeepSeek API para custo-benefício, Ollama para privacidade |
| Contexto | Limpe sempre. Contextos longos degradam qualidade e custam caro. |
| OpenCode | Agente open source no terminal. Configure com DeepSeek ou Ollama. |
| Domínio | Seu diferencial como engenheiro |
| Decomposição | Tarefas pequenas = resultados melhores |

---
layout: center
class: text-center
---

<div style="color: #0C322C;">
  <h1 style="color: #30BA78; border-bottom: none; font-size: 2.5rem;">Obrigado</h1>
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
