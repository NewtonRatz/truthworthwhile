import React from "react";
import NewsCard from "@/components/NewsCard";

const dummyPolitics = [
  {
    title: "Election Update: Polls Tighten in Battleground States",
    summary:
      "With polls narrowing, both campaigns ramp up efforts ahead of the decisive debates...",
    href: "/politics/1",
  },
  {
    title: "New Legislation: Impact on Your Taxes",
    summary:
      "A recently passed bill could alter tax brackets and deductions—here’s what it means for you...",
    href: "/politics/2",
  },
  {
    title: "Diplomacy: Summit Yields Historic Agreement",
    summary:
      "Leaders from multiple nations signed a landmark pact aimed at reducing carbon emissions...",
    href: "/politics/3",
  },
  {
    title: "Local Elections: Key Races to Watch",
    summary:
      "From mayoral contests to city councils, this guide covers the most consequential local races...",
    href: "/politics/4",
  },
];

export default function PoliticsPage() {
  return (
    <section className="py-16 bg-[var(--background)] text-[var(--foreground)]">
      <div className="max-w-7xl mx-auto px-4">
        <h1 className="text-4xl font-bold mb-6">Politics News</h1>
        <div className="grid gap-8 grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 xl:grid-cols-4">
          {dummyPolitics.map((article) => (
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
