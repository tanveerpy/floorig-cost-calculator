#!/usr/bin/env python3
"""
AdSense Readiness Checker
Audits the site for Google AdSense eligibility requirements.
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

def check_essential_pages(project_path: Path):
    """Verify presence of About, Contact, Privacy, and Terms."""
    essential = {
        "about": False,
        "contact": False,
        "privacy": False,
        "terms": False
    }
    
    # Common search patterns
    patterns = {
        "about": [r"about", r"who-we-are"],
        "contact": [r"contact"],
        "privacy": [r"privacy", r"policy"],
        "terms": [r"terms", r"tos", r"condition"]
    }
    
    found_files = []
    # Search in common directories
    search_dirs = [project_path, project_path / 'public', project_path / 'src' / 'app', project_path / 'pages']
    
    for s_dir in search_dirs:
        if not s_dir.exists(): continue
        for f in s_dir.rglob('*'):
            if any(skip in f.parts for skip in SKIP_DIRS): continue
            if f.is_file() and f.suffix in ['.html', '.md', '.mdx', '.tsx', '.jsx']:
                stem = f.stem.lower()
                parent = f.parent.name.lower()
                # Check both filename stem and parent directory (for Next.js page.tsx)
                for key, ps in patterns.items():
                    if any(re.search(p, stem) or (stem == 'page' and re.search(p, parent)) for p in ps):
                        essential[key] = True
                        found_files.append(f"{key}: {f.relative_to(project_path)}")
    
    return essential, found_files

def audit_privacy_policy(project_path: Path):
    """Check Privacy Policy for mandatory Google/Cookie clauses."""
    mandatory_clauses = {
        "google": False,
        "adsense": False,
        "cookie": False,
        "dart": False
    }
    
    privacy_files = list(project_path.rglob('*privacy*'))
    if not privacy_files: return mandatory_clauses
    
    content = ""
    for f in privacy_files:
        if f.suffix in ['.html', '.md', '.tsx', '.jsx']:
            content += f.read_text(encoding='utf-8', errors='ignore').lower()
            
    mandatory_clauses["google"] = "google" in content
    mandatory_clauses["adsense"] = "adsense" in content
    mandatory_clauses["cookie"] = "cookie" in content
    mandatory_clauses["dart"] = "dart" in content or "doubleclick" in content
    
    return mandatory_clauses

def analyze_content(project_path: Path):
    """Analyze content volume and word counts."""
    articles = 0
    total_words = 0
    
    # Look for content in common patterns
    for f in project_path.rglob('*'):
        if any(skip in f.parts for skip in SKIP_DIRS): continue
        # Only count potential articles (not layouts or system files)
        if f.is_file() and f.suffix in ['.html', '.md', '.mdx', '.tsx', '.jsx']:
            # Count guides, material pages (slugs), and the main hub page
            is_content_dir = any(x in f.parts for x in ['blog', 'posts', 'articles', 'guides', '[slug]'])
            is_main_page = f.name == 'page.tsx' and len(f.parts) > 0 and f.parts[-2] == 'app'
            
            if is_content_dir or is_main_page:
                articles += 1
                text = re.sub(r'<[^>]+>', ' ', f.read_text(encoding='utf-8', errors='ignore'))
                # Basic cleanup for code-based pages (strip TSX syntax roughly)
                text = re.sub(r'import.*?;', '', text, flags=re.DOTALL)
                text = re.sub(r'export.*?;', '', text, flags=re.DOTALL)
                words = text.split()
                total_words += len(words)
    
    avg_words = total_words / articles if articles > 0 else 0
    return articles, avg_words

def main():
    path = Path(sys.argv[1] if len(sys.argv) > 1 else ".").resolve()
    
    print(f"\n{'='*60}")
    print(f"  ADSENSE READINESS AUDIT")
    print(f"{'='*60}")
    
    # 1. Page Audit
    essential, details = check_essential_pages(path)
    print("\n[1] Essential Pages Check:")
    for key, found in essential.items():
        status = "✅ FOUND" if found else "❌ MISSING"
        print(f"  - {key.capitalize():<10}: {status}")
    
    # 2. Privacy Audit
    clauses = audit_privacy_policy(path)
    print("\n[2] Privacy Policy Clause Audit:")
    for key, found in clauses.items():
        status = "✅ PRESENT" if found else "⚠️  RECOMMENDED" if key == "dart" else "❌ MISSING"
        print(f"  - {key.capitalize():<10}: {status}")
        
    # 3. Content Audit
    count, avg = analyze_content(path)
    print("\n[3] Content Volume Audit:")
    print(f"  - Total Articles: {count} {'(✅ Good)' if count >= 20 else '(⚠️ Aim for 20+)'}")
    print(f"  - Avg Word Count: {int(avg)} {'(✅ Good)' if avg >= 800 else '(⚠️ Aim for 800+)'}")

    # Results
    passed = all(essential.values()) and clauses["google"] and clauses["adsense"] and count >= 10
    
    output = {
        "script": "adsense_checker",
        "essential_pages": essential,
        "privacy_clauses": clauses,
        "content": {"count": count, "avg_words": int(avg)},
        "passed": passed
    }
    
    print("\n" + json.dumps(output, indent=2))
    sys.exit(0 if passed else 1)

if __name__ == "__main__":
    main()
