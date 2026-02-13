#!/usr/bin/env python3
"""
E-E-A-T Signal Checker
Audits the site for Experience, Expertise, Authoritativeness, and Trustworthiness markers.
"""
import sys
import json
import re
from pathlib import Path
from datetime import datetime

# Directories to skip
SKIP_DIRS = {
    'node_modules', '.next', 'dist', 'build', '.git', '.github',
    '__pycache__', '.vscode', '.idea', 'coverage'
}

def analyze_eeat_signals(file_path: Path):
    """Analyze a single file for E-E-A-T linguistic and structural cues."""
    content = ""
    try:
        content = file_path.read_text(encoding='utf-8', errors='ignore')
    except:
        return {}
        
    signals = {
        "experience_markers": 0,
        "expertise_markers": 0,
        "author_info": False,
        "social_proof": False,
        "schema_author": False
    }
    
    # 1. Experience Markers (First-hand cues)
    exp_patterns = [r"i tested", r"in our tests", r"my experience", r"we found that", r"case study", r"project report"]
    for p in exp_patterns:
        signals["experience_markers"] += len(re.findall(p, content, re.I))
        
    # 2. Expertise Markers (Credentials/Terms)
    ext_patterns = [r"certified", r"qualification", r"expert", r"specialist", r"ph\.d", r"experience in", r"years of"]
    for p in ext_patterns:
        signals["expertise_markers"] += len(re.findall(p, content, re.I))
        
    # 3. Author Info
    signals["author_info"] = bool(re.search(r"written by|author|about the author", content, re.I))
    
    # 4. Social Proof
    signals["social_proof"] = bool(re.search(r"reviews|testimonials|featured in|trusted by", content, re.I))
    
    # 5. Schema Check (Author/Person)
    signals["schema_author"] = r'"@type":\s*"Person"' in content or r'"@type":\s*"Author"' in content
    
    return signals

def main():
    path = Path(sys.argv[1] if len(sys.argv) > 1 else ".").resolve()
    
    print(f"\n{'='*60}")
    print(f"  E-E-A-T SIGNAL AUDIT")
    print(f"{'='*60}")
    print(f"Project: {path}")
    print("-"*60)
    
    files_checked = 0
    total_signals = {
        "experience_markers": 0,
        "expertise_markers": 0,
        "author_info_count": 0,
        "social_proof_count": 0,
        "schema_author_count": 0
    }
    
    # Find all potential content files
    for f in path.rglob('*'):
        if any(skip in f.parts for skip in SKIP_DIRS): continue
        if f.is_file() and f.suffix in ['.html', '.md', '.mdx', '.tsx', '.jsx']:
            # Only check "content-rich" files
            if any(x in f.parts for x in ['blog', 'posts', 'articles', 'guides', 'app', 'pages']):
                files_checked += 1
                s = analyze_eeat_signals(f)
                total_signals["experience_markers"] += s.get("experience_markers", 0)
                total_signals["expertise_markers"] += s.get("expertise_markers", 0)
                if s.get("author_info"): total_signals["author_info_count"] += 1
                if s.get("social_proof"): total_signals["social_proof_count"] += 1
                if s.get("schema_author"): total_signals["schema_author_count"] += 1

    # Analysis
    print(f"\n[1] Experience Signals:")
    print(f"  - First-hand markers: {total_signals['experience_markers']} {'(✅ Good)' if total_signals['experience_markers'] > 5 else '(⚠️ Low)'}")
    
    print(f"\n[2] Expertise Signals:")
    print(f"  - Credential markers: {total_signals['expertise_markers']} {'(✅ Good)' if total_signals['expertise_markers'] > 5 else '(⚠️ Low)'}")
    
    print(f"\n[3] Authority & Trust Signals:")
    print(f"  - Author attribution: {total_signals['author_info_count']} pages")
    print(f"  - Social proof/Trust: {total_signals['social_proof_count']} pages")
    print(f"  - Schema Person/Author: {total_signals['schema_author_count']} pages")

    # Final Result
    passed = total_signals["author_info_count"] > 0 and total_signals["social_proof_count"] > 0
    
    output = {
        "script": "eeat_checker",
        "files_checked": files_checked,
        "signals": total_signals,
        "passed": passed
    }
    
    print("\n" + json.dumps(output, indent=2))
    sys.exit(0 if passed else 1)

if __name__ == "__main__":
    main()
