import { promises as fs } from "fs";
import path from "path";

const CONTENT_DIR = path.join(process.cwd(), "content");

type ArticleIndexEntry = {
  slug: string;
  title: string;
  description: string;
  date: string;
};

type ArticleData = {
  slug: string;
  title: string;
  description: string;
  date: string;
  sections: { heading: string; content: string[] }[];
};

export async function getIndex() {
  const raw = await fs.readFile(path.join(CONTENT_DIR, "index.json"), "utf-8");
  return JSON.parse(raw);
}

export async function getArticleBySlug(slug: string): Promise<ArticleData | null> {
  try {
    const raw = await fs.readFile(path.join(CONTENT_DIR, "articles", `${slug}.json`), "utf-8");
    return JSON.parse(raw);
  } catch {
    return null;
  }
}

export async function getAllArticles(): Promise<ArticleData[]> {
  const index = await getIndex();
  const results = await Promise.all(
    index.articles.map((e: any) => getArticleBySlug(e.slug))
  );
  return results.filter((a): a is ArticleData => a !== null);
}
