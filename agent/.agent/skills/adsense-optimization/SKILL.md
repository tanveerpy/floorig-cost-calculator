---
name: adsense-optimization
description: Principles and checks for Google AdSense approval readiness.
allowed-tools: Read, Glob, Grep
---

# AdSense Optimization

> "A site built for humans, compliant for Google."

---

## 1. Core Approval Pillars

| Pillar | Focus | Requirement |
|--------|-------|-------------|
| **Content** | High Value | 20+ articles, 800+ words, unique human insights |
| **Trust** | Transparency | About, Contact, Privacy, Terms pages present |
| **UX** | Experience | Fast loading, mobile-first, intuitive navigation |
| **Policy** | Compliance | No copyrighted material, no prohibited content |

---

## 2. Essential Pages Audit

Google requires clear identification and policy transparency:

| Page | Must Include | Placement |
|------|--------------|-----------|
| **About Us** | Who you are,expertise, contact details | Header/Footer |
| **Contact Us** | Form or email address | Navigation/Footer |
| **Privacy Policy** | Cookie usage, Google AdSense/DART clause | Footer (Mandatory) |
| **Terms of Service** | Usage rules, disclaimer | Footer |

---

## 3. High Value Content Guidelines

Avoid the "Low Value Content" rejection:

1.  **Originality**: No scraped or raw AI content. Infuse personal experience.
2.  **Depth**: Targeted articles should be 1,000 - 1,500 words.
3.  **Visuals**: Use unique images or data tables.
4.  **Quantity**: Wait for ~20 indexable articles before applying.
5.  **Hierarchy**: Use logical H1 -> H2 -> H3 structure.

---

## 4. Technical Readiness

| Factor | Verification |
|--------|--------------|
| **HTTPS** | Valid SSL certificate |
| **Indexability** | Sitemap linked in `robots.txt` |
| **Speed** | LCP < 2.5s (Core Web Vitals) |
| **Structure** | Clean HTML, no 404 errors |

---

## 5. Policy Prohibitions

Strictly avoid content involving:
- Hate speech or violence
- Plagiarized text or images
- Deceptive practices/clickbait
- Adult or sensitive mature content

---

## Verification

| Script | Purpose | Command |
|--------|---------|---------|
| `scripts/adsense_checker.py` | AdSense Eligibility Audit | `python .agent/skills/adsense-optimization/scripts/adsense_checker.py .` |
