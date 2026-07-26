#!/usr/bin/env python3
"""Audit the strict Philippines evidence article in generated Next.js HTML."""
from __future__ import annotations

import argparse
import json
import re
from html.parser import HTMLParser
from pathlib import Path


class Node:
    def __init__(self, tag: str = "", attrs=(), parent=None):
        self.tag = tag
        self.attrs = dict(attrs)
        self.parent = parent
        self.children: list[Node] = []
        self.text: list[str] = []


class TreeParser(HTMLParser):
    def __init__(self):
        super().__init__()
        self.root = Node("root")
        self.current: Node = self.root

    def handle_starttag(self, tag, attrs):
        node = Node(tag, attrs, self.current)
        self.current.children.append(node)
        self.current = node

    def handle_startendtag(self, tag, attrs):
        self.current.children.append(Node(tag, attrs, self.current))

    def handle_endtag(self, tag):
        node = self.current
        while node is not self.root and node.tag != tag:
            if node.parent is None:
                break
            node = node.parent
        if node is not self.root and node.parent is not None:
            self.current = node.parent

    def handle_data(self, data):
        self.current.text.append(data)


def walk(node):
    yield node
    for child in node.children:
        yield from walk(child)


def classes(node):
    return set(node.attrs.get("class", "").split())


def visible(node):
    if node.tag in {"script", "style", "noscript", "svg"}:
        return ""
    return " ".join(node.text + [visible(child) for child in node.children])


def clean(node):
    return re.sub(r"\s+", " ", visible(node)).strip()


def main():
    parser = argparse.ArgumentParser()
    parser.add_argument("slug")
    parser.add_argument("--root", default=".")
    args = parser.parse_args()
    root = Path(args.root)
    html_path = root / ".next/server/app/blog" / f"{args.slug}.html"
    sitemap_path = root / ".next/server/app/sitemap.xml.body"

    tree = TreeParser()
    tree.feed(html_path.read_text(encoding="utf-8"))
    all_nodes = list(walk(tree.root))
    article = next(node for node in all_nodes if node.tag == "article" and "article-shell" in classes(node))
    nodes = list(walk(article))
    article_text = clean(article)
    words = re.findall(r"\b[\w’'-]+\b", article_text)
    h1 = [clean(node) for node in nodes if node.tag == "h1"]
    banners = [node for node in nodes if node.tag == "aside" and "article-banner" in classes(node)]
    links = [node.attrs.get("href", "") for node in nodes if node.tag == "a"]
    internal = {link for link in links if link.startswith("/")}
    external = {link for link in links if link.startswith("http")}

    bad_paragraphs = []
    paragraph_count = 0
    for section in nodes:
        if section.tag != "section" or "article-copy" not in classes(section) or section.attrs.get("id") == "faq":
            continue
        for child in section.children:
            if child.tag != "p":
                continue
            paragraph_count += 1
            text = clean(child)
            sentences = [part for part in re.split(r"(?<=[.!?])[\"']?\s+", text) if part.strip()]
            if not 2 <= len(sentences) <= 3:
                bad_paragraphs.append({"text": text, "sentences": len(sentences)})

    schema_types = []
    for node in all_nodes:
        if node.tag != "script" or node.attrs.get("type") != "application/ld+json":
            continue
        payload = json.loads("".join(node.text))
        stack = [payload]
        while stack:
            item = stack.pop()
            if isinstance(item, dict):
                if "@type" in item:
                    schema_types.append(item["@type"])
                stack.extend(item.values())
            elif isinstance(item, list):
                stack.extend(item)

    quote = "GitHub is like the air we breathe. It’s such a natural part of the way we work that sometimes we don’t even notice it. We cannot imagine living without GitHub."
    forbidden = re.findall(r"(?i)\b(?:pricing|rates|tiers)\b|/pricing", article_text + " " + " ".join(links))
    result = {
        "article_words": len(words),
        "word_gate": 1500 <= len(words) <= 2000,
        "h1": h1,
        "narrative_paragraphs": paragraph_count,
        "bad_narrative_paragraphs": bad_paragraphs,
        "banner_count": len(banners),
        "banner_slots": [node.attrs.get("data-banner-slot") for node in banners],
        "svg_count": sum(node.tag == "svg" for node in nodes),
        "methods_note_count": sum(node.tag == "p" and "methods-note" in classes(node) for node in nodes),
        "table_count": sum(node.tag == "table" for node in nodes),
        "internal_link_count": len(internal),
        "external_link_count": len(external),
        "exact_quote": quote in article_text,
        "numbered_source_count": sum(bool(re.match(r"^[1-5]\. ", clean(node))) for node in nodes if node.tag == "a"),
        "forbidden_matches": forbidden,
        "schema_types": sorted(set(map(str, schema_types))),
        "sitemap_has_slug": args.slug in sitemap_path.read_text(encoding="utf-8"),
    }
    result["pass"] = all([
        result["word_gate"],
        h1 == ["Hire software developers in the Philippines with a clear code review plan"],
        result["banner_count"] == 3,
        result["banner_slots"] == ["1", "2", "3"],
        result["svg_count"] == 2,
        result["methods_note_count"] >= 2,
        result["table_count"] >= 1,
        result["internal_link_count"] >= 3,
        result["external_link_count"] >= 4,
        not bad_paragraphs,
        result["exact_quote"],
        result["numbered_source_count"] >= 5,
        not forbidden,
        all(kind in schema_types for kind in ["Article", "FAQPage", "BreadcrumbList"]),
        result["sitemap_has_slug"],
    ])
    print(json.dumps(result, indent=2))
    raise SystemExit(0 if result["pass"] else 1)


if __name__ == "__main__":
    main()
