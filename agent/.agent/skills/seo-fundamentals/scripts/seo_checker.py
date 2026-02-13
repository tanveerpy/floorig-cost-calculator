#!/usr/bin/env python3
"""
SEO Checker - Search Engine Optimization Audit
Checks HTML/JSX/TSX pages for SEO best practices.

PURPOSE:
    - Verify meta tags, titles, descriptions
    - Check Open Graph tags for social sharing
    - Validate heading hierarchy
    - Check image accessibility (alt attributes)

WHAT IT CHECKS:
    - HTML files (actual web pages)
    - JSX/TSX files (React page components)
    - Only files that are likely PUBLIC pages

Usage:
    python seo_checker.py <project_path>
"""
import sys
import json
import re
from pathlib import Path
from datetime import datetime

# Fix Windows console encoding
try:
    sys.stdout.reconfigure(encoding='utf-8', errors='replace')
except:
    pass


# Directories to skip
SKIP_DIRS = {
    'node_modules', '.next', 'dist', 'build', '.git', '.github',
    '__pycache__', '.vscode', '.idea', 'coverage', 'test', 'tests',
    '__tests__', 'spec', 'docs', 'documentation', 'examples'
}

# Files to skip (not pages)
SKIP_PATTERNS = [
    'config', 'setup', 'util', 'helper', 'hook', 'context', 'store',
    'service', 'api', 'lib', 'constant', 'type', 'interface', 'mock',
    '.test.', '.spec.', '_test.', '_spec.'
]


def is_page_file(file_path: Path) -> bool:
    """Check if this file is likely a public-facing page."""
    name = file_path.name.lower()
    stem = file_path.stem.lower()
    
    # Skip utility/config files
    if any(skip in name for skip in SKIP_PATTERNS):
        return False
    
    # Check path - pages in specific directories are likely pages
    parts = [p.lower() for p in file_path.parts]
    page_dirs = ['pages', 'app', 'routes', 'views', 'screens']
    
    if any(d in parts for d in page_dirs):
        return True
    
    # Filename indicators for pages
    page_names = ['page', 'index', 'home', 'about', 'contact', 'blog', 
                  'post', 'article', 'product', 'landing', 'layout']
    
    if any(p in stem for p in page_names):
        return True
    
    # HTML files are usually pages
    if file_path.suffix.lower() in ['.html', '.htm']:
        return True
    
    return False


def find_pages(project_path: Path) -> list:
    """Find page files to check."""
    patterns = ['**/*.html', '**/*.htm', '**/*.jsx', '**/*.tsx']
    
    files = []
    for pattern in patterns:
        for f in project_path.glob(pattern):
            # Skip excluded directories
            if any(skip in f.parts for skip in SKIP_DIRS):
                continue
            
            # Check if it's likely a page
            if is_page_file(f):
                files.append(f)
    
    return files[:50]  # Limit to 50 files


def check_page(file_path: Path) -> dict:
    """Check a single page for SEO issues."""
    issues = []
    
    try:
        content = file_path.read_text(encoding='utf-8', errors='ignore')
    except Exception as e:
        return {"file": str(file_path.name), "issues": [f"Error: {e}"]}
    
    # Detect if this is a layout/template file (has Head component)
    is_layout = 'Head>' in content or '<head' in content.lower()
    
    # 1. Title tag
    title_match = re.search(r'<title[^>]*>(.*?)</title>', content, re.I | re.S)
    if not title_match and (is_layout or '<Head>' in content):
        issues.append("Missing <title> tag")
    elif title_match:
        title_text = title_match.group(1).strip()
        if len(title_text) > 60:
            issues.append(f"Title too long ({len(title_text)} chars). Recommended < 60.")
        if len(title_text) < 10:
            issues.append(f"Title too short ({len(title_text)} chars).")

    # 2. Meta description
    desc_match = re.search(r'name=["\']description["\'][^>]*content=["\'](.*?)["\']', content, re.I)
    if not desc_match:
        desc_match = re.search(r'content=["\'](.*?)["\'][^>]*name=["\']description["\']', content, re.I)
    
    if not desc_match and (is_layout or '<Head>' in content):
        issues.append("Missing meta description")
    elif desc_match:
        desc_text = desc_match.group(1).strip()
        if len(desc_text) > 160:
            issues.append(f"Description too long ({len(desc_text)} chars). Recommended < 160.")
        if len(desc_text) < 50:
            issues.append(f"Description too short ({len(desc_text)} chars).")

    # 3. Meta keywords (New Screaming Frog requirement)
    key_match = re.search(r'name=["\']keywords["\'][^>]*content=["\'](.*?)["\']', content, re.I)
    if not key_match:
        key_match = re.search(r'content=["\'](.*?)["\'][^>]*name=["\']keywords["\']', content, re.I)
    
    if not key_match and (is_layout or '<Head>' in content):
        issues.append("Missing meta keywords")

    # 4. Open Graph tags
    has_og = 'og:' in content or 'property="og:' in content.lower()
    if not has_og and (is_layout or '<Head>' in content):
        issues.append("Missing Open Graph tags")
    
    # 5. Heading hierarchy - H1
    h1_matches = re.findall(r'<h1[^>]*>', content, re.I)
    if len(h1_matches) == 0 and not is_layout:
        issues.append("Missing H1 tag")
    elif len(h1_matches) > 1:
        issues.append(f"Multiple H1 tags ({len(h1_matches)})")
    
    # 6. Heading hierarchy - H2 (Screaming Frog recommendation)
    h2_matches = re.findall(r'<h2[^>]*>', content, re.I)
    if len(h2_matches) == 0 and not is_layout:
        issues.append("Missing H2 tags (recommended for structure)")
    
    # 7. Images without alt
    img_pattern = r'<img[^>]+>'
    imgs = re.findall(img_pattern, content, re.I)
    for img in imgs:
        if 'alt=' not in img.lower():
            issues.append("Image missing alt attribute")
            break
        if 'alt=""' in img or "alt=''" in img:
            issues.append("Image has empty alt attribute")
            break
    
    # 9. Word count (Thin content detection)
    # Remove tags to count plain text
    text_content = re.sub(r'<[^>]+>', ' ', content)
    words = text_content.split()
    if len(words) < 300 and not is_layout:
        issues.append(f"Thin content suspected ({len(words)} words). Recommended > 300.")

    return {
        "file": str(file_path.name),
        "issues": issues
    }


def main():
    project_path = Path(sys.argv[1] if len(sys.argv) > 1 else ".").resolve()
    
    print(f"\n{'='*60}")
    print(f"  SEO CHECKER - Search Engine Optimization Audit")
    print(f"{'='*60}")
    print(f"Project: {project_path}")
    print(f"Time: {datetime.now().strftime('%Y-%m-%d %H:%M:%S')}")
    print("-"*60)
    
    # Find pages
    pages = find_pages(project_path)
    
    if not pages:
        print("\n[!] No page files found.")
        print("    Looking for: HTML, JSX, TSX in pages/app/routes directories")
        output = {"script": "seo_checker", "files_checked": 0, "passed": True}
        print("\n" + json.dumps(output, indent=2))
        sys.exit(0)
    
    print(f"Found {len(pages)} page files to analyze\n")
    
    # Check each page
    all_issues = []
    titles = {}
    descriptions = {}
    
    for f in pages:
        result = check_page(f)
        
        # Track duplicates for cross-page analysis
        content = f.read_text(encoding='utf-8', errors='ignore')
        title_match = re.search(r'<title[^>]*>(.*?)</title>', content, re.I | re.S)
        if title_match:
            t = title_match.group(1).strip()
            if t in titles:
                titles[t].append(f.name)
            else:
                titles[t] = [f.name]
        
        desc_match = re.search(r'name=["\']description["\'][^>]*content=["\'](.*?)["\']', content, re.I)
        if not desc_match:
            desc_match = re.search(r'content=["\'](.*?)["\'][^>]*name=["\']description["\']', content, re.I)
        if desc_match:
            d = desc_match.group(1).strip()
            if d in descriptions:
                descriptions[d].append(f.name)
            else:
                descriptions[d] = [f.name]
        
        if result["issues"]:
            all_issues.append(result)
    
    # Add duplicate issues to results
    for t, files in titles.items():
        if len(files) > 1:
            for issue_item in all_issues:
                if issue_item["file"] in files:
                    issue_item["issues"].append(f"Duplicate title found in: {', '.join([f for f in files if f != issue_item['file']])}")
            # If a file had no individual issues but is a duplicate, add it
            for f_name in files:
                if not any(item["file"] == f_name for item in all_issues):
                    all_issues.append({"file": f_name, "issues": [f"Duplicate title found in: {', '.join([fn for fn in files if fn != f_name])}"]})

    for d, files in descriptions.items():
        if len(files) > 1:
            for issue_item in all_issues:
                if issue_item["file"] in files:
                    issue_item["issues"].append(f"Duplicate description found in: {', '.join([f for f in files if f != issue_item['file']])}")
            for f_name in files:
                if not any(item["file"] == f_name for item in all_issues):
                    all_issues.append({"file": f_name, "issues": [f"Duplicate description found in: {', '.join([fn for fn in files if fn != f_name])}"]})

    # Summary
    print("=" * 60)
    print("SEO ANALYSIS RESULTS (Screaming Frog Aligned)")
    print("=" * 60)
    
    if all_issues:
        # Group by issue type
        issue_counts = {}
        for item in all_issues:
            for issue in item["issues"]:
                # Normalize duplicate messages for summary
                sum_issue = issue
                if "Duplicate title" in issue: sum_issue = "Duplicate titles"
                if "Duplicate description" in issue: sum_issue = "Duplicate descriptions"
                issue_counts[sum_issue] = issue_counts.get(sum_issue, 0) + 1
        
        print("\nIssue Summary:")
        for issue, count in sorted(issue_counts.items(), key=lambda x: -x[1]):
            print(f"  [{count}] {issue}")
        
        print(f"\nAffected files ({len(all_issues)}):")
        for item in sorted(all_issues, key=lambda x: x["file"])[:10]:
            print(f"  - {item['file']}: {len(item['issues'])} issues")
        if len(all_issues) > 10:
            print(f"  ... and {len(all_issues) - 10} more")
    else:
        print("\n[OK] No SEO issues found!")
    
    total_issues = sum(len(item["issues"]) for item in all_issues)
    passed = total_issues == 0
    
    output = {
        "script": "seo_checker",
        "project": str(project_path),
        "files_checked": len(pages),
        "files_with_issues": len(all_issues),
        "issues_found": total_issues,
        "passed": passed,
        "screaming_frog_aligned": True
    }
    
    print("\n" + json.dumps(output, indent=2))
    
    sys.exit(0 if passed else 1)


if __name__ == "__main__":
    main()
