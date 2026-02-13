---
name: eeat-optimization
description: Principles and checks for Experience, Expertise, Authoritativeness, and Trustworthiness (E-E-A-T).
allowed-tools: Read, Glob, Grep
---

# E-E-A-T Optimization

> "Demonstrating real-world value and human expertise."

---

## 1. The E-E-A-T Pillars

| Pillar | Focus | Signals |
|--------|-------|---------|
| **Experience** | First-hand use | "In my tests", case studies, original photos/videos, detailed process docs. |
| **Expertise** | Subject mastery | Credentials, certifications, technical depth, correct terminology. |
| **Authoritativeness** | Peer recognition | Backlinks from authority sites, mentions in reputable news/blogs, awards. |
| **Trustworthiness** | Reliability | HTTPS, clear contact info, factual accuracy, transparency about authors. |

---

## 2. Demonstrating Experience (The 2026 Key)

With the rise of generic AI content, **Experience** is the ultimate differentiator:
1.  **Original Media**: Use your own photos, not stock images.
2.  **Case Studies**: Document the "Before and After" of a process.
3.  **Personal Anecdotes**: Mention specific challenges faced and how they were solved.
4.  **Operational Details**: Share unique insights only an "insider" would know.

---

## 3. Expertise & Author Signals

| Element | Best Practice |
|---------|---------------|
| **Author Bio** | Highlight years of experience, relevant degrees, and social proof. |
| **Author Page** | Dedicated URL for each author with a full portfolio and awards. |
| **SameAs Schema** | Link the `Person` schema to LinkedIn, X, and Wikipedia profiles. |
| **Citations** | Quote and link to primary sources (studies, govt data, official reports). |

---

## 4. Trust & Technical Signals

Trust is the foundation of E-E-A-T. Verify these on every project:
- [ ] **Contact Info**: Physical address (if applicable) and verifiable email/form.
- [ ] **Fact-Checking**: No unverifiable claims or medical/legal advice without expert review.
- [ ] **Regular Updates**: Date-stamped content showing "Last Updated" within the last 6 months.
- [ ] **HTTPS**: Secure data transmission.

---

## 5. Structured Data for E-E-A-T

Mandatory schema types to signal authority:
- `Organization`: Linked to social profiles.
- `Person`: For every significant author.
- `Review`: To showcase customer/peer feedback.

---

## Verification

| Script | Purpose | Command |
|--------|---------|---------|
| `scripts/eeat_checker.py` | E-E-A-T Signal Audit | `python .agent/skills/eeat-optimization/scripts/eeat_checker.py .` |
