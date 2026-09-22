#!/usr/bin/env python3
"""Validate exported pages and same-site links/assets without a running app."""
import os
import re
from html.parser import HTMLParser
from pathlib import Path
from urllib.parse import unquote, urljoin, urlsplit

ROOT = Path(__file__).resolve().parents[1] / "out"
BASE = os.environ.get("PAGES_BASE_PATH", "").rstrip("/")
ORIGIN = "https://static-check.invalid"
ROUTES = ("/", "/projects/", "/skills/", "/resume/", "/automation/", "/data-engineering/",
          "/research/", "/llm-evaluation/", "/llm-evaluation/ai-judging-panel/")

class Document(HTMLParser):
    def __init__(self, path):
        super().__init__()
        self.ids = set()
        self.targets = []
        self.feed(path.read_text())

    def handle_starttag(self, tag, attributes):
        attrs = dict(attributes)
        if "id" in attrs:
            self.ids.add(attrs["id"])
        if tag in ("a", "link") and attrs.get("href"):
            self.targets.append(attrs["href"])
        if attrs.get("src"):
            self.targets.append(attrs["src"])


def local_file(path):
    if BASE:
        assert path == BASE or path.startswith(BASE + "/"), f"Missing base path: {path}"
        path = path[len(BASE):]
    file = ROOT / unquote(path).lstrip("/")
    return file / "index.html" if file.is_dir() else file


def main():
    assert (ROOT / ".nojekyll").is_file(), "Missing .nojekyll"
    assert (ROOT / "404.html").is_file(), "Missing 404 page"
    documents = {}
    for route in ROUTES:
        file = ROOT / route.lstrip("/") / "index.html"
        assert file.is_file(), f"Missing exported route: {route}"
        documents[file] = Document(file)
    documents[ROOT / "404.html"] = Document(ROOT / "404.html")
    checked = 0
    for file, document in list(documents.items()):
        route = "/" + str(file.relative_to(ROOT))
        if route.endswith("index.html"):
            route = route[:-len("index.html")]
        for href in document.targets:
            target = urlsplit(urljoin(ORIGIN + BASE + route, href))
            if target.scheme not in ("http", "https") or target.netloc != urlsplit(ORIGIN).netloc:
                continue
            dest = local_file(target.path)
            assert dest.is_file(), f"Broken link or asset from {route}: {href}"
            if target.fragment:
                if dest not in documents:
                    documents[dest] = Document(dest)
                assert unquote(target.fragment) in documents[dest].ids, f"Missing anchor: {href}"
            checked += 1
    # Categories open separate pages; every existing project remains accessible there.
    catalog = documents[ROOT / "projects/index.html"]
    for category in ("/llm-evaluation", "/automation", "/data-engineering", "/research"):
        assert BASE + category in catalog.targets, f"Missing category page link: {category}"
    source = (ROOT.parent / "app/projects.ts").read_text()
    entries = re.findall(r"\{id:'([^']+)', category:'([^']+)'", source)
    for project_id, category in entries:
        document = documents[ROOT / category.lstrip("/") / "index.html"]
        assert project_id in document.ids, f"Missing project on category page: {category}#{project_id}"
    evaluation = documents[ROOT / "llm-evaluation/index.html"]
    assert BASE + "/llm-evaluation/ai-judging-panel" in evaluation.targets
    print(f"PASS: {len(ROUTES)} routes, custom 404, all project entries, and {checked} local links/assets (base path: {BASE or '/'}).")

if __name__ == "__main__":
    main()
