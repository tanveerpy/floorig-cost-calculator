---
name: keyword-planning
description: Principles and patterns for mapping keywords to content types (Tools, FAQs, Articles).
allowed-tools: Read, Glob, Grep
---

# Keyword Planning & Mapping

> "Mapping intent to the right content format."

---

## 1. Intent-Based Mapping Framework

| Intent Type | Search Cues | Content Target | Optimization Strategy |
|-------------|-------------|----------------|------------------------|
| **Transactional** | "calculator", "tool", "online" | **Tool Page** | Fast performance, clear USP, direct action. |
| **Informational (Quick)** | "what is", "how much", "why" | **FAQ Page** | Zero-click snippets, FAQ Schema, concise answers. |
| **Informational (Deep)** | "guide", "best ways", "how to" | **Articles (Blog)** | Long-form depth, Pillar/Cluster internal linking. |

---

## 2. Content Type Logic

### A. Tool Pages (The Utility)
- **Goal**: Solve a problem instantly.
- **Keywords**: "free [X] calculator", "[X] generator", "check [X]".
- **Mapping**: Integrate keywords into Title, H1, and "How it works" descriptions.

### B. FAQ Sections (The Speed)
- **Goal**: Answer specific, narrow questions.
- **Keywords**: "Is [X] worth it?", "How does [X] work?", "Difference between [A] and [B]".
- **Mapping**: Direct question-answer pairs with `FAQPage` schema.

### C. Articles/Guides (The Authority)
- **Goal**: Educate and build topical authority.
- **Keywords**: "Ultimate guide to [X]", "Top 10 [X] for 2026", "[X] strategy".
- **Mapping**: Broad topic coverage with semantically related sub-headings (H2, H3).

---

## 3. Topic Clustering Pattern

1.  **Pillar Content**: High-level article covering the core keyword.
2.  **Cluster Content**: Specific tool pages and deep-dive guides for sub-keywords.
3.  **Hyper-linking**: Links from Pillar -> Cluster and Cluster -> Tool to signal authority.

---

## 4. GEO (Generative Engine) Strategy

- **Direct Answer Blocks**: 50-70 word summaries at the top of pages.
- **Expert Attribution**: "According to [Specialist Agent]...".
- **Structured Data**: Linking entities via schema to confirm facts.

---

## Verification

| Script | Purpose | Command |
|--------|---------|---------|
| `scripts/keyword_mapper.py` | Strategic Content Mapping | `python .agent/skills/keyword-planning/scripts/keyword_mapper.py "keyword1, keyword2"` |
