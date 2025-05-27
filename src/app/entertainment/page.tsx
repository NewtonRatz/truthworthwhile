import React from "react";
import NewsCard from "@/components/NewsCard";

const dummyEntertainment = [
  {
    title: "Blockbuster Release: New Sci-Fi Epic Breaks Records",
    summary:
      "The latest sci-fi extravaganza has dominated the box office with unprecedented opening weekend earnings...",
    href: "/entertainment/1",
  },
  {
    title: "Celebrity Interview: A-List Star Opens Up",
    summary:
      "In an exclusive interview, the star discusses their career, upcoming projects, and personal life...",
    href: "/entertainment/2",
  },
  {
    title: "Music Festival: Lineup Announced for Summer",
    summary:
      "Fans rejoice as organizers reveal headliners and acts for the highly anticipated festival...",
    href: "/entertainment/3",
  },
  {
    title: "TV Revival: Classic Show Returns",
    summary:
      "After a decade, the beloved series is back with new episodes and cast reunions...",
    href: "/entertainment/4",
  },
];

export default function EntertainmentPage() {
  return (
    <section className="py-16 bg-[var(--background)] text-[var(--foreground)]">
      <div className="max-w-7xl mx-auto px-4">
        <h1 className="text-4xl font-bold mb-6">Entertainment News</h1>
        <div className="grid gap-8 grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 xl:grid-cols-4">
          {dummyEntertainment.map((article) => (
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
