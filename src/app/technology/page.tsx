import React from "react";
import NewsCard from "@/components/NewsCard";

const dummyTech = [
  {
    title: "AI Breakthrough: New Model Sets Records",
    summary:
      "A new AI model has outperformed all previous benchmarks, raising the bar for machine learning...",
    href: "/technology/1",
  },
  {
    title: "Gadget Review: The Latest Smartphone",
    summary:
      "We put the newest flagship smartphone through its paces—here's what you need to know before you buy...",
    href: "/technology/2",
  },
  {
    title: "Cybersecurity: How to Stay Safe Online",
    summary:
      "Experts share top tips for protecting your data and privacy in an increasingly connected world...",
    href: "/technology/3",
  },
  {
    title: "Green Tech: Innovations for a Sustainable Future",
    summary:
      "From solar roads to vertical farms, explore the technologies aiming to save our planet...",
    href: "/technology/4",
  },
];

export default function TechnologyPage() {
  return (
    <section className="py-16 bg-[var(--background)] text-[var(--foreground)]">
      <div className="max-w-7xl mx-auto px-4">
        <h1 className="text-4xl font-bold mb-6">Technology News</h1>
        <div className="grid gap-8 grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 xl:grid-cols-4">
          {dummyTech.map((article) => (
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
