---
title: "Predição de Custos de Construção Baseada em Algoritmo Genético e BIM"
author: Thiago Bertoldi
lang: pt-BR
theme: default
colorSchema: light
highlighter: shiki
drawings:
  persist: false
transition: slide-left
fonts:
  sans: Inter
  mono: JetBrains Mono
---

<div class="absolute inset-0" style="background-color: #1A1C20;">
</div>

---

# Predição de Custos de Construção Baseada em Algoritmo Genético e BIM

<div class="mt-2 text-sm opacity-70">

**Artigo:** *Construction Cost Prediction Based on Genetic Algorithm and BIM*

**Autores:** Liang Zhao, Wei Zhang, Wenshun Wang

**Publicação:** Int. Journal of Pattern Recognition and AI, 2020

**DOI:** 10.1142/S0218001420590260

</div>

<div class="pt-6">
  <p class="text-lg font-light" style="color: #F2A900;">Thiago Haigerti Bertoldi</p>
  <p class="text-sm opacity-60">Apresentação de artigo — Mestrado EGC/UFSC</p>
</div>

---

# Contextualização

<div class="text-xl">

A China é uma potência em plena expansão.

</div>

<br>

- O setor de **construção civil** está muito aquecido
- Projetos diversos: estradas, pontes, bairros residenciais, centros comerciais
- Os pesquisadores estão olhando para maneiras de **minimizar os custos** necessários para erguer um prédio
- Métodos tradicionais de estimativa já não acompanham a complexidade dos projetos

<br>

> A escala crescente dos projetos torna a projeção de custos um problema cada vez mais difícil.

---

# O problema

<div class="text-2xl mt-8" style="line-height: 1.6;">

Dadas as **características** de um edifício a ser construído — estrutura, estilo arquitetônico, materiais, área, pavimentos, fundação, janelas e portas — conseguimos **predizer o custo total por metro quadrado**?

</div>

---

# Atacando o problema

<div class="grid grid-cols-3 gap-6 mt-6">
<div class="attack-step">
  <div class="attack-num">1</div>
  <div class="attack-title">Identificar características</div>
  <div class="attack-desc">Quais atributos do edifício são relevantes para o custo? Área, fundação, pavimentos, tipo de unidade, taxa de janelas/portas.</div>
</div>
<div class="attack-step">
  <div class="attack-num">2</div>
  <div class="attack-title">Buscar exemplos</div>
  <div class="attack-desc">Definir uma base de dados com edifícios já construídos — treinamento e teste do modelo.</div>
</div>
<div class="attack-step">
  <div class="attack-num">3</div>
  <div class="attack-title">Construir o preditor</div>
  <div class="attack-desc">Dado um novo edifício com suas características, o modelo estima o custo da construção.</div>
</div>
</div>

<br>

Isso é um problema de **aprendizado supervisionado**: conhecemos as características (input) e o custo efetivo (output) de edifícios já construídos, e queremos aprender a mapear um para o outro.

<style>
  .attack-step { border: 1.5px solid #F2A900; border-radius: 10px; padding: 1rem; text-align: center; background: rgba(242, 169, 0, 0.04); }
  .attack-num { font-size: 1.5rem; font-weight: 700; color: #F2A900; margin-bottom: 0.3rem; }
  .attack-title { font-size: 0.85rem !important; font-weight: 600; color: #1A1C20 !important; margin-bottom: 0.4rem; }
  .attack-desc { font-size: 0.75rem !important; color: #666 !important; line-height: 1.5 !important; }
</style>

---
layout: section
---

# 3 Conceitos

BIM · Rede Neural · Algoritmo Genético

---

# BIM

**BIM** — Modelagem de Informação da Construção *(Building Information Modeling)*

<div class="grid grid-cols-[1fr_1.1fr] gap-6">
<div>

Modelo computacional que abrange **todo o ciclo de vida** de uma construção: do planejamento ao projeto, da construção até as operações.

- Base da **transformação digital** no setor AEC
- Softwares populares: **Autodesk Revit**, ArchiCAD
- Modelo 3D criado via CAD/SolidWorks → importado na plataforma BIM

</div>
<div>

<img src="/slide7-img1.png" style="width: 100%; border-radius: 8px; border: 1px solid #D5D8DC;" />

<div class="text-xs opacity-50 mt-1 text-center">Interface do Autodesk BIM — modelo 3D de um projeto</div>

</div>
</div>

<br>

**Para o artigo:** a partir do BIM, conseguimos extrair as **características de engenharia** (features) que alimentam o modelo preditivo.

---

# Preparação dos dados

A partir do BIM, os autores definem dois conjuntos de dados:

<div class="grid grid-cols-[1.3fr_1fr] gap-6 mt-2">
<div>

| Código | Feature | Descrição |
|---|---|---|
| C1 | Área construída | Área total do edifício |
| C2 | Forma da fundação | Tipo de fundação utilizada |
| C3 | Pavimentos | Número de andares |
| C4 | Tipo de unidade | Tipo habitacional |
| C5 | Taxa janela/porta | Proporção de aberturas |

</div>
<div>

**20 edifícios** residenciais na comunidade YJW, China.

<div class="data-split">
  <div class="split-box split-train">
    <div class="split-num">16</div>
    <div class="split-label">Treinamento</div>
    <div class="split-pct">84%</div>
  </div>
  <div class="split-box split-test">
    <div class="split-num">3</div>
    <div class="split-label">Teste</div>
    <div class="split-pct">16%</div>
  </div>
  <div class="split-box split-pred">
    <div class="split-num">1</div>
    <div class="split-label">Previsão</div>
    <div class="split-pct">B20</div>
  </div>
</div>

</div>
</div>

<style>
  .data-split { display: flex; gap: 0.5rem; margin-top: 1rem; }
  .split-box { flex: 1; border-radius: 8px; padding: 0.5rem; text-align: center; }
  .split-train { background: rgba(242, 169, 0, 0.1); border: 1.5px solid #F2A900; }
  .split-test { background: rgba(138, 143, 150, 0.1); border: 1.5px solid #8A8F96; }
  .split-pred { background: rgba(254, 124, 63, 0.08); border: 1.5px solid #FE7C3F; }
  .split-num { font-size: 1.3rem; font-weight: 700; color: #1A1C20; }
  .split-label { font-size: 0.7rem !important; font-weight: 500; color: #1A1C20 !important; }
  .split-pct { font-size: 0.6rem !important; color: #8A8F96 !important; }
</style>

---

# Redes Neurais

<div class="grid grid-cols-[1.2fr_1fr] gap-6">
<div>

Um sistema que aprende, com exemplos de **características vs. custo**, como calcular os custos de um novo projeto.

<img src="/slide11-img2.png" style="width: 100%; border-radius: 8px;" />

<div class="text-xs opacity-50 mt-1 text-center">Rede Neural Totalmente Conectada de 3 Camadas</div>

</div>
<div>

**Como funciona:**

- Cada conexão entre neurônios tem um **peso** (w)
- A rede recebe as características (X1–X5) na entrada
- Processa na camada oculta (h1...hN)
- Produz a previsão de custo (Y) na saída

**Treinamento:**

- Apresentamos pares de input (características) e output (custo real)
- A rede ajusta os pesos para minimizar o erro
- Para isso, usamos o **backpropagation**...

</div>
</div>

---

# Backpropagation e o problema do mínimo local

<div class="grid grid-cols-[1fr_1fr] gap-6">
<div>

**Backpropagation (BP):**

Os pesos são ajustados iterativamente "descendo" o gradiente do erro — como descer um morro para encontrar o vale mais baixo.

1. **Forward:** dados entram → rede gera previsão
2. **Backward:** calcula o erro → propaga de volta → ajusta pesos
3. Repete até convergir

**O problema:**

Se a função de erro tem vários vales, o BP pode ficar preso em um **mínimo local** e nunca encontrar o **mínimo global**.

O resultado depende do **ponto de partida** (pesos iniciais aleatórios).

</div>
<div>

<img src="/slide14-img1.png" style="width: 100%; border-radius: 8px; border: 1px solid #D5D8DC;" />

<div class="text-xs opacity-50 mt-1 text-center">O backpropagation pode convergir para o mínimo local em vez do global</div>

<br>

> Precisamos de algo que explore o espaço de soluções de forma mais ampla — entra o **Algoritmo Genético**.

</div>
</div>

---

# Algoritmo Genético — Conceito

<div class="text-lg">

Inspirado na **evolução natural**: uma população de soluções compete, se reproduz e muta.

</div>

<br>

<div class="ga-flow">
  <div class="ga-step">
    <div class="ga-icon">&#127981;</div>
    <div class="ga-step-title">População inicial</div>
    <div class="ga-step-desc">Gerar soluções candidatas aleatórias (cromossomos)</div>
  </div>
  <div class="ga-arrow">→</div>
  <div class="ga-step">
    <div class="ga-icon">&#9878;</div>
    <div class="ga-step-title">Avaliar fitness</div>
    <div class="ga-step-desc">Quão boa é cada solução? (quão pequeno é o erro)</div>
  </div>
  <div class="ga-arrow">→</div>
  <div class="ga-step">
    <div class="ga-icon">&#9733;</div>
    <div class="ga-step-title">Seleção</div>
    <div class="ga-step-desc">Soluções melhores têm maior chance de sobreviver</div>
  </div>
  <div class="ga-arrow">→</div>
  <div class="ga-step">
    <div class="ga-icon">&#128260;</div>
    <div class="ga-step-title">Cruzamento</div>
    <div class="ga-step-desc">Combinar partes de dois "pais" para gerar "filhos"</div>
  </div>
  <div class="ga-arrow">→</div>
  <div class="ga-step">
    <div class="ga-icon">&#9889;</div>
    <div class="ga-step-title">Mutação</div>
    <div class="ga-step-desc">Perturbação aleatória para manter diversidade</div>
  </div>
</div>

<div class="text-center mt-4 text-sm opacity-60">
  ← Repete por várias gerações até estabilizar →
</div>

<br>

No contexto do artigo, cada **cromossomo** codifica um conjunto de **pesos da rede neural** (14 variáveis de design).

<style>
  .ga-flow { display: flex; align-items: flex-start; justify-content: center; gap: 0.3rem; margin: 0.5rem 0; }
  .ga-step { text-align: center; flex: 1; min-width: 0; }
  .ga-icon { font-size: 1.3rem; margin-bottom: 0.2rem; }
  .ga-step-title { font-size: 0.72rem !important; font-weight: 600; color: #1A1C20 !important; margin-bottom: 0.15rem; }
  .ga-step-desc { font-size: 0.62rem !important; color: #999 !important; line-height: 1.3 !important; }
  .ga-arrow { font-size: 1.2rem; color: #F2A900; margin-top: 0.8rem; flex-shrink: 0; }
</style>

---

# Operadores do Algoritmo Genético

<div class="grid grid-cols-2 gap-6">
<div>

**Fitness (aptidão)**

Mede a qualidade de cada solução. No artigo:

$$G = \lambda \left( \sum_{i=1}^{n} |c_i - o_i| \right)^2$$

Onde $c_i$ é a saída real e $o_i$ a saída esperada.

Quanto **menor** o erro, **melhor** o fitness.

**Seleção**

Probabilidade proporcional ao fitness: $p_i = \frac{g_i}{\sum g_j}$

Soluções com menor erro têm maior chance de serem escolhidas.

</div>
<div>

**Cruzamento (crossover)**

Combina genes de dois cromossomos:

$$m_{kj} = m_{kj}(1-R) + m_{lj} R$$

Onde $R$ é um número aleatório. Os filhos herdam características de ambos os pais.

**Mutação**

Introduz variação aleatória em um gene:

$$m_{ij} = \begin{cases} m_{ij} + (m_{ij} - m_{max}) \cdot \rho(d) \\ m_{ij} + (m_{min} - m_{ij}) \cdot \rho(d) \end{cases}$$

Evita que a população fique "presa" em uma região do espaço.

</div>
</div>

---

# GA-BP: Por que combinar?

<div class="grid grid-cols-[1fr_1.5fr] gap-6">
<div>

**O problema:**

BP sozinha depende dos pesos iniciais aleatórios → pode ficar presa em **mínimo local**.

**A solução:**

1. GA explora o espaço de soluções **globalmente**
2. Encontra bons **pesos iniciais**
3. BP refina **localmente** a partir desse ponto

**Resultado:** evita mínimos locais, melhor convergência.

</div>
<div>

<div class="pipeline">
  <div class="pipe-step pipe-ga">
    <div class="pipe-label">Algoritmo Genético</div>
    <div class="pipe-items">
      <span>Inicializar população</span>
      <span>Avaliar fitness</span>
      <span>Seleção + Cruzamento + Mutação</span>
      <span>Repetir até estabilizar</span>
    </div>
    <div class="pipe-output">Melhores pesos iniciais</div>
  </div>
  <div class="pipe-arrow">&#8595;</div>
  <div class="pipe-step pipe-bp">
    <div class="pipe-label">Rede Neural BP</div>
    <div class="pipe-items">
      <span>Treinar com os pesos otimizados</span>
      <span>Backpropagation para refinar</span>
    </div>
    <div class="pipe-output">Modelo treinado</div>
  </div>
  <div class="pipe-arrow">&#8595;</div>
  <div class="pipe-step pipe-result">
    <div class="pipe-label">Previsão de custo</div>
  </div>
</div>

</div>
</div>

<style>
  .pipeline { display: flex; flex-direction: column; align-items: center; gap: 0.3rem; }
  .pipe-step { border: 1.5px solid #F2A900; border-radius: 8px; padding: 0.5rem 0.8rem; width: 100%; text-align: center; }
  .pipe-ga { background: rgba(242, 169, 0, 0.06); }
  .pipe-bp { background: rgba(138, 143, 150, 0.08); border-color: var(--harpy-crown-ash-dark); }
  .pipe-result { background: rgba(254, 124, 63, 0.06); border-color: #FE7C3F; }
  .pipe-label { font-size: 0.75rem !important; font-weight: 600; color: #1A1C20 !important; margin-bottom: 0.3rem; }
  .pipe-items { display: flex; flex-direction: column; gap: 0.1rem; }
  .pipe-items span { font-size: 0.65rem !important; color: #666 !important; }
  .pipe-output { font-size: 0.65rem !important; color: #F2A900 !important; font-weight: 500; margin-top: 0.3rem; border-top: 1px dashed #D5D8DC; padding-top: 0.2rem; }
  .pipe-arrow { font-size: 1.2rem; color: #F2A900; }
</style>

---

# Resumo do método

<div class="text-center">

<img src="/slide17-img1.png" style="max-height: 400px; border-radius: 8px; border: 1px solid #D5D8DC; display: inline-block;" />

</div>

<div class="text-xs opacity-50 mt-2 text-center">Fluxo completo: importação do modelo BIM → extração de features → otimização GA → treinamento BP → previsão</div>

---

# Resultados

<div class="grid grid-cols-2 gap-8">
<div>

**Treinamento do GA-BP:**

- Regularização Bayesiana
- 1000 iterações, erro esperado: 1e-007
- Convergência em **597 épocas**
- Melhor resultado na época 152
- R² do treinamento: **0.99983**

**Convergência do GA:**

- Estabilizou em ~35 iterações
- Erro iterativo próximo de $10^{-3}$

</div>
<div>

**Validação (B17–B19):**

| Edifício | Real (yuan/m²) | Previsto | Erro |
|---|---|---|---|
| B17 | 2369.83 | 2370.68 | 0.04% |
| B18 | 2382.55 | 2379.17 | 0.14% |
| B19 | 2412.53 | 2403.62 | 0.37% |

<br>

**Previsão final (B20):**

Custo previsto: **2393.51 yuan/m²**

</div>
</div>

---
layout: section
---

# Análise Crítica

---

# Crítica 1: Fórmula Max-Min errada

<div class="grid grid-cols-2 gap-8">
<div>

**Fórmula correta (Max-Min):**

$$x_i' = \frac{x_i - Min(x)}{Max(x) - Min(x)}$$

Mapeia para o intervalo **[0, 1]**:
- Quando $x_i = Min(x)$ → resultado = **0**
- Quando $x_i = Max(x)$ → resultado = **1**

</div>
<div>

**Fórmula do artigo (Fórmula 8):**

$$x_i = \frac{x_i - Max(x)}{Max(x) - Min(x)}$$

Mapeia para o intervalo **[−1, 0]**:
- Quando $x_i = Min(x)$ → resultado = **−1**
- Quando $x_i = Max(x)$ → resultado = **0**

</div>
</div>

<br>

<div style="background: rgba(254, 124, 63, 0.08); padding: 0.8rem 1rem; border-radius: 8px; border-left: 3px solid #FE7C3F;">

**Exemplo numérico:** dados = {2, 5, 8}, Min = 2, Max = 8

| $x_i$ | Fórmula correta | Fórmula do artigo |
|---|---|---|
| 2 | (2−2)/(8−2) = **0.00** | (2−8)/(8−2) = **−1.00** |
| 5 | (5−2)/(8−2) = **0.50** | (5−8)/(8−2) = **−0.50** |
| 8 | (8−2)/(8−2) = **1.00** | (8−8)/(8−2) = **0.00** |

</div>

---

# Críticas 2 e 3 + Encerramento

**Crítica 2 — Fórmula não utilizada**

Os autores apresentam a fórmula Max-Min (errada), mas **não a utilizam**. Na prática, normalizam dividindo todas as features pelos valores de **B20** (o edifício-alvo).

- Todos os valores de B20 são **exatamente 1.000** — evidência de divisão por referência, não Max-Min
- A normalização real depende do edifício-alvo → compromete a **reprodutibilidade**

<br>

**Crítica 3 — Diagrama inconsistente**

- A **Figura 1** do artigo mostra uma rede com **8 entradas** e **3 saídas** (custo, iluminação, consumo energético)
- O **experimento real** usa **5 entradas** (C1–C5) e **1 saída** (custo)
- A figura parece pertencer a outro contexto

<br>

**Resumo:**

| # | Problema |
|---|---|
| 1 | Fórmula Max-Min com erro — mapeia para [−1, 0] em vez de [0, 1] |
| 2 | Fórmula não utilizada — dados normalizados por divisão pela referência (B20) |
| 3 | Diagrama da rede neural não corresponde ao experimento realizado |

<div class="text-center text-lg mt-4">

**Perguntas?**

</div>
