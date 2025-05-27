import React from "react";

export default function SportsPage() {
  return (
    <section className="py-16 bg-[var(--background)] text-[var(--foreground)]">
      <div className="max-w-7xl mx-auto px-4">
        <h1 className="text-4xl font-bold mb-6">Sports News</h1>
        <p className="text-gray-600 dark:text-gray-400">
          Scores, highlights, and headlines from your favorite teams and events.
        </p>
      </div>
    </section>
  );
}
