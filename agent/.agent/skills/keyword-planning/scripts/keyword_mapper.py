#!/usr/bin/env python3
"""
Keyword-to-Content Mapper
Analyzes keyword intent and suggests mapping to Tools, FAQs, or Articles.
"""
import sys
import json
import re

def analyze_intent(keyword: str):
    """Categorize keyword intent based on linguistic patterns."""
    keyword = keyword.lower().strip()
    
    # Tool/Transactional
    tool_cues = [r"calculator", r"tool", r"check", r"online", r"generator", r"lookup", r"converter"]
    if any(re.search(cue, keyword) for cue in tool_cues):
        return "Tool Page", "Transactional/Commercial"
        
    # FAQ/Question
    faq_cues = [r"what", r"how", r"why", r"when", r"who", r"difference", r"vs", r"is it"]
    if any(re.search(cue, keyword) for cue in faq_cues):
        return "FAQ Section", "Informational (Direct)"
        
    # Article/Informative
    return "Article/Guide", "Informational (Deep)"

def generate_report(keywords_list: list):
    """Generate a structured mapping report."""
    mapping = {
        "Tool Page": [],
        "FAQ Section": [],
        "Article/Guide": []
    }
    
    for kw in keywords_list:
        if not kw.strip(): continue
        target, intent = analyze_intent(kw)
        mapping[target].append({"keyword": kw, "intent": intent})
        
    report = "# Keyword Strategy & Mapping Report\n\n"
    
    for section, kws in mapping.items():
        if not kws: continue
        report += f"## {section} Optimization\n"
        report += f"| Keyword | Intent | Strategy |\n"
        report += f"|---------|--------|----------|\n"
        for item in kws:
            strategy = "Integrate into App/Tool UI" if section == "Tool Page" else \
                      "Add to FAQ component/schema" if section == "FAQ Section" else \
                      "Draft long-form authoritative post"
            report += f"| {item['keyword']} | {item['intent']} | {strategy} |\n"
        report += "\n"
        
    return report, mapping

def main():
    if len(sys.argv) < 2:
        print("Usage: python keyword_mapper.py 'keyword1, keyword2, ...'")
        sys.exit(1)
        
    raw_keywords = sys.argv[1].split(',')
    report_md, mapping_data = generate_report(raw_keywords)
    
    print("\n" + report_md)
    
    # Save to file if needed
    Path("keyword_mapping_report.md").write_text(report_md)
    print(f"Report saved to keyword_mapping_report.md")

if __name__ == "__main__":
    from pathlib import Path
    main()
