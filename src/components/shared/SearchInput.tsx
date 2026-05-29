"use client";

import type { SearchItem } from "@/data/site-content";
import { ArrowRight, Search } from "lucide-react";
import Link from "next/link";
import { useMemo, useState } from "react";

export type SearchInputProps = {
  items: SearchItem[];
  placeholder: string;
};

/**
 * 规范化搜索文本，便于本地关键词匹配。
 */
function normalizeQuery(value: string) {
  return value.trim().toLowerCase();
}

/**
 * 首页搜索组件负责本地筛选路线与主题入口。
 */
export function SearchInput({ items, placeholder }: SearchInputProps) {
  const [query, setQuery] = useState("");

  const results = useMemo(() => {
    const normalizedQuery = normalizeQuery(query);

    if (!normalizedQuery) {
      return items.slice(0, 4);
    }

    return items
      .filter((item) => {
        const haystack = [item.label, item.category, ...item.keywords].join(" ").toLowerCase();
        return haystack.includes(normalizedQuery);
      })
      .slice(0, 6);
  }, [items, query]);

  return (
    <div className="search-block">
      <div className="search-shell">
        <Search className="search-icon" size={18} />
        <input
          aria-label="Search guides"
          className="search-input"
          onChange={(event) => setQuery(event.target.value)}
          placeholder={placeholder}
          value={query}
        />
        <button aria-label="Search action" className="search-submit" type="button">
          <ArrowRight size={18} />
        </button>
      </div>
      <p className="search-hint">
        Try: Python roadmap, writing tools, agent frameworks, career pivot
      </p>
      <div className="search-results" role="list" aria-label="Search results">
        {results.length > 0 ? (
          results.map((item) => (
            <Link className="search-result" href={item.href} key={`${item.href}-${item.label}`} role="listitem">
              <span>{item.label}</span>
              <span className="search-result__meta">
                {item.category} / {item.href}
              </span>
            </Link>
          ))
        ) : (
          <div className="empty-state">
            No matching guides found. Try broader keywords like coding, tools, or career.
          </div>
        )}
      </div>
    </div>
  );
}
