import React from "react";
import NewsCard from "@/components/NewsCard";

const dummyBusiness = [
  {
    title: "Market Rally: Stocks Surge on Tech Optimism",
    summary:
      "Tech giants led a powerful rally today as investors reacted positively to earnings reports...",
    href: "/business/1",
  },
  {
    title: "Startups Boom: Funding Hits Record High",
    summary:
      "Early-stage startups are securing record investments in Q1, driven by AI and green tech sectors...",
    href: "/business/2",
  },
  {
    title: "Economic Outlook: Inflation Cools Down",
    summary:
      "Inflation rates are showing signs of slowing, prompting analysts to revise growth forecasts...",
    href: "/business/3",
  },
  {
    title: "Global Trade: New Agreements Signed",
    summary:
      "Several countries have signed new trade pacts aimed at reducing tariffs and boosting exports...",
    href: "/business/4",
  },
];

export default function BusinessPage() {
  return (
    <section className="py-16 bg-[var(--background)] text-[var(--foreground)]">
      <div className="max-w-7xl mx-auto px-4">
        <h1 className="text-4xl font-bold mb-6">Business News</h1>
        <div className="grid gap-8 grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 xl:grid-cols-4">
          {dummyBusiness.map((article) => (
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
