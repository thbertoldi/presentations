---
title: "Agentes de IA na Engenharia de Software: Pensamento Sistêmico além das amarras da linguagem"
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

<div class="absolute inset-0">
  <img src="/suse-cover-bg.svg" style="width: 100%; height: 100%; object-fit: cover;" />
</div>

---

# Pensamento Sistêmico além das amarras da linguagem

Agentes de IA na Engenharia de Software

<div class="pt-8">
  <p class="text-lg font-light" style="color: #30BA78;">Thiago Bertoldi</p>
  <p class="text-sm opacity-60">Expert Software Engineer — AI, SUSE</p>
  <p class="text-xs opacity-40 mt-2">thiagobertoldi.com · github.com/thbertoldi</p>
</div>

<img src="/suse-logo.svg" alt="SUSE" style="position: absolute; bottom: 2rem; right: 3rem; height: 60px; opacity: 0.7;" />

---

# Quem sou eu

<div class="grid grid-cols-2 gap-8">
<div>

**Thiago Bertoldi**

- Expert Software Engineer — IA na **SUSE**
- Lidero o desenvolvimento do módulo de Observabilidade de IA
- Mestrando na UFSC — Engenharia e Gestão do Conhecimento
- Palestrante na SUSECON 2026 (Praga)

</div>
<div>

**Certificações relevantes**

- CrewAI Multi-Agent Systems
- Observabilidade com OpenTelemetry
- Kubernetes AI/ML
- Observabilidade de IA

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
      <p class="timeline-text">Expert Software Engineer — AI na <strong>SUSE</strong>. Lidero o módulo de Observabilidade de IA</p>
    </div>
    <div class="timeline-item-left"></div>
    <div class="timeline-item-right"></div>
    <div class="timeline-item-left">
      <div class="timeline-dot" style="left: -0.95rem;"></div>
      <span class="timeline-year">2025</span>
      <p class="timeline-text">Mestrado em <strong>Engenharia do Conhecimento</strong> na UFSC — IA</p>
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

<div class="grid grid-cols-[1fr_auto] gap-8">
<div>

- Fundada em 1992 na Alemanha — uma das empresas open source mais antigas do mundo
- Criadora do **SUSE Linux Enterprise** e mantenedora do **openSUSE**
- Desenvolve o **Rancher** (gerenciamento Kubernetes) e o **NeuVector** (segurança de containers)
- Mais de 1.700 funcionários em 30+ países
- Compromisso com **escolha**, **inovação**, **confiança** e **comunidade**

**Por que o open source importa para vocês**

- Código aberto = transparência e auditabilidade
- Sem vendor lock-in: você escolhe suas ferramentas
- Todos os exemplos desta palestra usam ferramentas open source

</div>
<div class="flex items-center">
  <img src="/suse-logo.svg" alt="SUSE" style="height: 140px; opacity: 0.85;" />
</div>
</div>

---

# Pergunta para vocês

<div class="text-2xl mt-8">

Quantos de vocês já usaram alguma ferramenta de IA para escrever código?

</div>

<br>

<p class="text-lg opacity-50">Copilot, ChatGPT, Cursor, Claude...</p>

---
layout: section
---

# A mudança de paradigma

---

# As amarras da linguagem

<div class="text-xl">

Durante décadas, o gargalo da engenharia de software foi a **sintaxe**.

</div>

<br>

O domínio da linguagem de programação era o diferencial técnico:

- Saber o "jeito" de cada linguagem
- Memorizar APIs e bibliotecas
- Digitar rápido e sem erros
- Conhecer a forma idiomática de fazer alguma coisa

<br>

Isso está mudando. A **codificação** — o trabalho braçal de transformar lógica em código — está sendo automatizada.

> O agente resolve a sintaxe. Mas quem define **o que** resolver?

---

# De sintaxe para sistema

```
Antes:  Engenheiro → pensa no problema → codifica a solução
Agora:  Engenheiro → pensa no problema → descreve a solução → agente codifica
```

<br>

<div class="grid grid-cols-2 gap-8">
<div>

**O que a IA automatiza**

- Traduzir lógica em código
- Escrever boilerplate
- Implementar padrões conhecidos
- Seguir convenções e estilo

</div>
<div>

**O que continua sendo seu**

- Decompor o problema em partes
- Modelar o sistema e suas fronteiras
- Definir trade-offs arquiteturais
- Entender o domínio do negócio

</div>
</div>

<br>

A evolução não é autocomplete → agente. É **escrita de código → pensamento sistêmico**.

---

# Pensamento sistêmico: o novo diferencial

<div class="text-xl">

Um bom engenheiro **não brilha** pela sintaxe que domina, mas pelo **sistema que modela**.

</div>

<br>

O pensamento sistêmico é a capacidade de:

- Ver **o todo**, não só a parte que você está codificando
- Antecipar **efeitos colaterais** de mudanças
- Identificar **fronteiras** entre domínios
- Tomar decisões de **trade-off** com consciência

<br>

Agentes de IA te libertam das amarras da linguagem para que você opere nesse nível de abstração.

Mas para isso, você precisa entender como eles funcionam.

---
layout: section
---

# A anatomia de um agente

---

# O cérebro e a cognição

<div class="grid grid-cols-2 gap-8">
<div>

**O cérebro: o LLM**

O motor de inferência. Recebe texto, gera texto.

- Processa linguagem natural
- Raciocina sobre problemas
- Gera código e respostas

Sozinho, é como um cérebro em um pote — brilhante, mas não consegue agir.

</div>
<div>

**A cognição: o orquestrador**

A lógica que dá ao cérebro um corpo.

- Decide **quando** chamar o LLM
- Gerencia **o que** mostrar ao LLM
- Controla **quais ferramentas** estão disponíveis
- Implementa o loop de observar → pensar → agir

É o que separa um chatbot de um agente.

</div>
</div>

---

# A estrutura completa

<div class="agent-diagram">
  <div class="agent-box">
    <div class="agent-label">Agente</div>
    <div class="agent-top">
      <div class="agent-block orchestrator">Orquestrador<br><span>(cognição)</span></div>
      <div class="agent-arrow">&#8596;</div>
      <div class="agent-block llm">LLM<br><span>(cérebro)</span></div>
    </div>
    <div class="agent-bottom">
      <div class="agent-block-sm">Tools<br><span>(agir)</span></div>
      <div class="agent-block-sm">Knowledge<br><span>(entender)</span></div>
      <div class="agent-block-sm">MCP<br><span>(conectar)</span></div>
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

Quando você usa um editor com IA, você está escolhendo **dois componentes independentes**:

1. O **LLM** — o cérebro (Claude, GPT, DeepSeek, Llama)
2. O **orquestrador** — a cognição (Cursor, Copilot, OpenCode, Windsurf)

---

# Componentes de um agente

| Componente | Papel | Analogia |
|---|---|---|
| **LLM** | Raciocina e gera respostas | O cérebro |
| **Orquestrador** | Decide o que fazer e quando | A cognição |
| **Tools** | Executam ações no mundo real (terminal, editor, browser) | Os atuadores |
| **Knowledge** | Contexto consultável — docs, AGENTS.md, arquitetura | A memória |
| **MCP** | Extensões que conectam a serviços externos | Os sentidos |

<br>

> Trocar o LLM muda a **qualidade** do raciocínio. Trocar o orquestrador muda **como** o agente trabalha.

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

> Knowledge (conhecimento) é **passivo** (o agente lê). MCP é **ativo** (o agente executa).

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
- **OpenAI** — Codex (GPT-5.4, etc.)
- **Google** — Gemini 3 Pro/Flash
- **Meta** — Llama 4 (open source)
- **DeepSeek** — R1, V3

</div>
<div>

**O que avaliar**

- Qualidade de raciocínio para código
- Custo por token (entrada vs. saída vs. cache)
- Tamanho da janela de contexto
- Latência

</div>
</div>

<br>

**Importante:** os rankings mudam a cada semana. Não case com um modelo — aprenda a trocar.

---

# A janela de contexto: memória de trabalho

<div class="text-lg">

A janela de contexto é tudo o que o modelo "enxerga" ao gerar uma resposta.

</div>

<br>

| Conceito | Detalhe |
|---|---|
| **Tamanho** | Medido em tokens (~0,75 palavras por token) |
| **Comportamento** | Cada mensagem carrega **todo** o histórico acumulado |
| **Custo** | 100k tokens custa ~10x mais que 10k — **a cada mensagem** |
| **Lost in the middle** | Modelos "esquecem" informações no meio de contextos longos |
| **Degradação** | Mais contexto irrelevante = respostas piores |

<br>

**Regra de ouro:** comece uma conversa nova ao mudar de tarefa. Menos é mais.

---

# Custo: a conta chega

<div class="grid grid-cols-2 gap-8">
<div>

**Três tipos de token**

- **Entrada** — o que você envia (código, contexto, prompt)
- **Saída** — o que o modelo gera (sempre o mais caro)
- **Cache** — reutilização de contexto (mais barato)

Cada mensagem carrega todo o histórico. Um contexto poluído não é só ruim — é **caro**.

</div>
<div>

**Recomendação: DeepSeek API**

- Custo por token muito abaixo dos concorrentes
- DeepSeek V3 e R1 competem com modelos premium
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

Crie uma conta e use a API key em qualquer agente que suporte a APIs compatíveis com OpenAI.

</div>
</div>

---
layout: section
---

# Decisões práticas: nuvem vs. local

---

# O trade-off fundamental

<div class="grid grid-cols-3 gap-6">
<div>

**Nuvem (API)**

- Modelos maiores e mais capazes
- Sem custo de hardware
- Custo proporcional ao uso
- Código sai da sua máquina

</div>
<div>

**Local (Ollama)**

- Privacidade total
- Custo zero por token
- Funciona offline
- Limitado pelo hardware

</div>
<div>

**Híbrido**

- Local para tarefas simples
- Nuvem para tarefas complexas
- Melhor custo-benefício
- Abordagem recomendada

</div>
</div>

<br>

> Não existe resposta universal. Avalie: **privacidade**, **custo**, **qualidade** e **conveniência**.

---

# Quantização: encaixando o modelo na sua máquina

<div class="text-lg">

Quantização é comprimir um modelo para que ele rode com menos memória.

</div>

<br>

| Quantização | O que faz | Impacto na qualidade | Uso de memória |
|---|---|---|---|
| **FP16** (sem compressão) | Pesos em 16 bits | Qualidade original | Alto |
| **Q8** | 8 bits por peso | Quase imperceptível | ~50% do FP16 |
| **Q4** | 4 bits por peso | Leve degradação | ~25% do FP16 |
| **Q2** | 2 bits por peso | Degradação perceptível | ~12% do FP16 |

<br>

**Na prática:** quando você baixa `qwen3:8b` no Ollama, já está baixando uma versão quantizada (Q4). É a melhor relação qualidade/memória para a maioria dos casos.

---

# Hardware para modelos locais

<div class="grid grid-cols-2 gap-8">
<div>

**Para rodar modelos (inferência)**

- **Memória** (RAM/VRAM) é o recurso crítico
- 16 GB RAM: modelos de 7-8B parâmetros (Q4)
- 32 GB RAM: modelos de 13-14B parâmetros (Q4)
- GPU com mais VRAM = respostas mais rápidas
- AMD ou NVIDIA funcionam para inferência

</div>
<div>

**Para treinar / fine-tune**

- NVIDIA com CUDA é praticamente obrigatório
- O ecossistema CUDA ainda é imbatível
- Geração de imagens também depende de CUDA
- Você provavelmente **não precisa** treinar modelos

</div>
</div>

<br>

**Regra prática:**

- Precisa **rodar** modelo? Mais memória.
- Precisa **treinar** modelo? NVIDIA + CUDA.
- Na dúvida? Comece com uma API e migre para local depois.

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

Valores recomendados: **16384** (16k) ou **32768** (32k). Mais contexto = mais memória.

---

# Modelos locais recomendados

| Modelo | Parâmetros | Melhor para | RAM mínima |
|---|---|---|---|
| **qwen3:8b** | 8B | Uso geral, bom equilíbrio | 16 GB |
| **qwen3:14b** | 14B | Tarefas mais complexas | 32 GB |
| **deepseek-r1:32b** | 32B | Raciocínio e lógica | 64 GB |
| **codellama:7b** | 7B | Foco em código | 16 GB |

<br>

**Regras para escolher:**

- Mais novo costuma ser melhor (a área avança rápido)
- Balance janela de contexto com número de parâmetros
- Teste com suas tarefas reais antes de decidir
- Se travar, reduza o `num-ctx` ou escolha um modelo menor

---
layout: section
---

# Ferramentas: o orquestrador na prática

---

# Editores com capacidades de agente

| Editor | Destaques |
|---|---|
| **VS Code** | Copilot integrado, extensões como Cline e Continue |
| **Cursor** | Fork do VS Code focado em IA, Tab + Agent mode |
| **Windsurf** | Cascade flow para tarefas multi-arquivo |
| **Zed** | Performance nativa, suporte a LLMs em crescimento |

<br>

Lembre: o editor é o **orquestrador**. O **LLM** é configurado separadamente.

Você pode usar Cursor com DeepSeek, VS Code com Claude, ou qualquer combinação.

---

# Agentes de terminal

<div class="grid grid-cols-2 gap-8">
<div>

**Por que terminal?**

- Controle total sobre o ambiente
- Automação de tarefas em larga escala
- Refatorações, migrações, CI/CD
- Sem overhead de interface gráfica

</div>
<div>

**Opções**

- **OpenCode** (open source)
- Claude Code (Anthropic)
- Codex CLI (OpenAI)
- Aider (open source)

</div>
</div>

<br>

> Agentes de terminal são o canivete suíço do engenheiro que pensa em sistemas — não em arquivos individuais.

---
layout: section
---

# OpenCode: um agente open source

<img src="/suse-logo.svg" alt="SUSE" style="position: absolute; bottom: 3rem; right: 3rem; height: 50px; opacity: 0.4; filter: brightness(3);" />

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

Exporte a chave da API:

```bash
export DEEPSEEK_API_KEY="sua-chave-aqui"
```

Obtenha a chave em **api.deepseek.com**. A API opera com base na compra de créditos, então não há risco de ter um gasto acima do projetado.

---

# Configurando MCP no OpenCode

Adicione um MCP server ao `opencode.json` para dar superpoderes ao agente:

```json
{
  "$schema": "https://opencode.ai/config.json",
  "mcp": {
    "context7": {
      "enabled": true,
      "headers": {
        "CONTEXT7_API_KEY": "<sua-chave-aqui>"
      },
      "type": "remote",
      "url": "https://mcp.context7.com/mcp"
    }
  }
}
```

O **context7** permite que o agente busque documentação atualizada de qualquer biblioteca.

Uso no prompt: `"Configure o FastAPI com autenticação JWT. Use context7"`

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

# Operando no novo paradigma

---

# Engenharia de contexto

<div class="text-lg">

Prompt engineering é sobre **uma pergunta**. Context engineering é sobre **o ambiente inteiro**.

</div>

<br>

**O que muda na prática:**

| Antes (prompt) | Agora (contexto) |
|---|---|
| "Como faço X?" | Fornecer AGENTS.md, docs de arquitetura, exemplos |
| Copiar/colar código | Deixar o agente ler os arquivos relevantes |
| Iterar no prompt | Iterar na **estrutura de conhecimento** do projeto |

<br>

```markdown
# Bom
"Refatore a função calcularFrete em utils/frete.ts
para usar o padrão Strategy. Mantenha a interface atual."

# Ruim
"Melhore esse código"
```

---

# Estruturando conhecimento para o agente

O agente só é tão bom quanto o contexto que você fornece.

```
projeto/
├── AGENTS.md          # Instruções para o agente: regras, estilo, convenções
├── knowledge/         # Documentação do domínio
│   ├── arquitetura.md # Decisões arquiteturais e suas razões
│   ├── padroes.md     # Padrões de código do time
│   └── glossario.md   # Linguagem ubíqua do domínio
├── opencode.json      # Configuração do OpenCode + MCP
├── src/
└── ...
```

<br>

- **AGENTS.md** — o arquivo mais importante. Regras que o agente segue em toda interação.
- **knowledge/** — contexto de domínio consultável sob demanda.
- Quanto melhor sua documentação, melhor o agente trabalha.

> Documentar o domínio deixou de ser "burocracia" — agora é **infraestrutura**.

---

# Exemplo: um AGENTS.md real

```markdown
# AGENTS.md

## Linguagem e estilo
- Use Go. Siga o padrão do projeto (handlers em /api, lógica em /domain).
- Nomes em inglês. Comentários e commits em português.
- Trate erros explicitamente — nunca use _ para ignorar um error.

## Arquitetura
- Hexagonal: ports em /domain/ports, adapters em /infra.
- Cada novo endpoint precisa de testes em /api/*_test.go.
- Não crie dependências diretas entre adapters.

## Regras do domínio
- "Pedido" só pode ser cancelado se status == "pendente".
- Preço final = subtotal - desconto + frete. Nunca negativo.

## O que NÃO fazer
- Não altere migrations existentes — crie novas.
- Não adicione dependências sem aprovação (abra issue antes).
```

Este arquivo é lido automaticamente pelo agente e guia **todas** as interações.

---

# Decompondo tarefas: a habilidade central

<div class="decomp">
  <div class="decomp-monolith">
    <div class="decomp-bad-label">Pedido monolítico</div>
    <div class="decomp-bad-box">"Crie um sistema de e-commerce completo"</div>
    <div class="decomp-result-bad">Alucinação, perda de contexto, código inconsistente</div>
  </div>
  <div class="decomp-arrow-down">&#8595;</div>
  <div class="decomp-waterfall">
    <div class="decomp-good-label">Decomposição em etapas validáveis</div>
    <div class="decomp-steps">
      <div class="decomp-step">
        <div class="decomp-step-num">1</div>
        <div class="decomp-step-text">"Crie o modelo de dados para produtos"</div>
        <div class="decomp-check">&#10003;</div>
      </div>
      <div class="decomp-step-arrow">&#8594;</div>
      <div class="decomp-step">
        <div class="decomp-step-num">2</div>
        <div class="decomp-step-text">"Implemente o endpoint de listagem"</div>
        <div class="decomp-check">&#10003;</div>
      </div>
      <div class="decomp-step-arrow">&#8594;</div>
      <div class="decomp-step">
        <div class="decomp-step-num">3</div>
        <div class="decomp-step-text">"Adicione filtros por categoria"</div>
        <div class="decomp-check">&#10003;</div>
      </div>
      <div class="decomp-step-arrow">&#8594;</div>
      <div class="decomp-step">
        <div class="decomp-step-num">4</div>
        <div class="decomp-step-text">"Escreva testes para o endpoint"</div>
        <div class="decomp-check">&#10003;</div>
      </div>
    </div>
  </div>
</div>

<p class="mt-3 text-sm" style="text-align: center; color: #0C322C;">
  Cada etapa cabe no contexto · Pode ser validada antes de avançar · Você mantém controle sobre a <strong>arquitetura</strong>
</p>

<p class="mt-2" style="text-align: center; font-size: 0.95rem; color: #0C322C;">
  <span style="background: rgba(48, 186, 120, 0.15); padding: 0.2em 0.6em; border-radius: 4px; border-left: 3px solid #30BA78;">
    Decomposição de tarefas <strong>é</strong> pensamento sistêmico aplicado.
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

# O que a IA não faz por você

<div class="grid grid-cols-2 gap-8">
<div>

**A IA resolve**

- Codificação mecânica (boilerplate, CRUD)
- Tradução entre linguagens
- Implementação de padrões conhecidos
- Busca em documentação
- Testes unitários repetitivos

</div>
<div>

**Você resolve**

- Modelagem de domínio
- Decisões arquiteturais e trade-offs
- Decomposição lógica de problemas
- Definição de fronteiras entre serviços
- Comunicação com stakeholders

</div>
</div>

<br>

A IA automatiza a **codificação**: o trabalho mecânico de transformar lógica em sintaxe.

A **decomposição lógica** e a **modelagem do sistema** continuam sendo responsabilidade exclusiva do engenheiro.

---
layout: section
---

# Antes de começar

---

# Ambiente recomendado

<div class="grid grid-cols-2 gap-8">
<div>

Os exemplos desta palestra assumem **Linux**.

**Recomendação:** openSUSE Tumbleweed

- Rolling release — sempre atualizado
- Ótimo suporte a hardware e desenvolvimento
- Gerenciador de pacotes `zypper` robusto

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

</div>
</div>

---

# Próximos passos

<div class="grid grid-cols-2 gap-8">
<div>

**Comece agora**

1. Instale o Ollama e teste um modelo local
2. Instale o OpenCode e configure com DeepSeek ou Ollama
3. Crie um AGENTS.md no seu próximo projeto
4. Pratique decompor tarefas em partes pequenas

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
| Paradigma | Sintaxe → pensamento sistêmico. A IA codifica, você modela. |
| Agente | Cérebro (LLM) + cognição (orquestrador) + tools + knowledge + MCP |
| LLM | DeepSeek API para custo-benefício, Ollama para privacidade |
| Contexto | Limpe sempre. Contextos longos degradam qualidade e custam caro. |
| Quantização | Compressão que permite rodar modelos grandes em hardware modesto |
| Decomposição | Tarefas pequenas e bem definidas = resultados melhores |
| Domínio | Seu diferencial como engenheiro. Documente-o para o agente. |

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
