import React from "react";
import NewsCard from "@/components/NewsCard";

const dummySports = [
  {
    title: "Championship Recap: Underdogs Triumph",
    summary:
      "In a stunning final, the underdog team clinched victory with a last-minute goal...",
    href: "/sports/1",
  },
  {
    title: "Player Spotlight: Rising Star of the League",
    summary:
      "At just 19, this rookie is breaking records and capturing the hearts of fans everywhere...",
    href: "/sports/2",
  },
  {
    title: "Match Preview: Rivals Face Off This Weekend",
    summary:
      "A deep dive into the strategies and storylines ahead of Saturday’s marquee matchup...",
    href: "/sports/3",
  },
  {
    title: "Injury Report: Key Players Questionable",
    summary:
      "Teams are monitoring recovery timelines as several starters deal with late-season injuries...",
    href: "/sports/4",
  },
];

export default function SportsPage() {
  return (
    <section className="py-16 bg-[var(--background)] text-[var(--foreground)]">
      <div className="max-w-7xl mx-auto px-4">
        <h1 className="text-4xl font-bold mb-6">Sports News</h1>
        <div className="grid gap-8 grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 xl:grid-cols-4">
          {dummySports.map((article) => (
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
