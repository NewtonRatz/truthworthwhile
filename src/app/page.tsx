// src/app/page.tsx
import React from "react";
import NewsCard from "@/components/NewsCard";

const dummyArticles = [
  {
    title: "Market Rally: Stocks Surge on Tech Optimism",
    summary:
      "Tech giants led a powerful rally today as investors reacted positively to earnings reports...",
    href: "/business/1",
  },
  {
    title: "Championship Drama: Underdog Team Wins Final",
    summary:
      "In a stunning upset, the underdog emerged victorious in last night’s championship game...",
    href: "/sports/1",
  },
  {
    title: "Election Updates: Polls Tighten Ahead of Vote",
    summary:
      "With just days left before the election, polls show a neck-and-neck race between the leading candidates...",
    href: "/politics/1",
  },
  {
    title: "Blockbuster Release: New Sci-Fi Epic Breaks Records",
    summary:
      "The latest sci-fi epic has shattered box-office records, drawing massive audiences worldwide...",
    href: "/entertainment/1",
  },
];

export default function Home() {
  return (
    <section className="py-16 bg-[var(--background)] text-[var(--foreground)]">
      <div className="max-w-7xl mx-auto px-4">
        <h1 className="text-5xl font-bold text-center mb-12">
          Latest Headlines
        </h1>
        <div className="grid gap-8 grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 xl:grid-cols-4">
          {dummyArticles.map((article) => (
            <NewsCard
              key={article.href}
              title={article.title}
              summary={article.summary}
              href={article.href}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
