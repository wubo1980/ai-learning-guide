// 自动生成 — 文章内容数据
// 由 deploy 脚本自动追加新条目

export interface ArticleSection {
  heading: string;
  content: string[];
}

export interface ArticleData {
  slug: string;
  title: string;
  description: string;
  date: string;
  sections: ArticleSection[];
}

export const articlesData: Record<string, ArticleData> = {};
