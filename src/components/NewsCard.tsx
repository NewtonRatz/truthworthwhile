import React from "react";
import Link from "next/link";

interface NewsCardProps {
  title: string;
  summary: string;
  href: string;
}

export default function NewsCard({ title, summary, href }: NewsCardProps) {
  return (
    <Link href={href} className="block group">
      <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md overflow-hidden hover:shadow-lg transition p-6">
        <h2 className="text-xl font-semibold text-gray-900 dark:text-gray-100 group-hover:text-blue-600 transition">
          {title}
        </h2>
        <p className="mt-2 text-gray-600 dark:text-gray-400">{summary}</p>
        <span className="mt-4 inline-block text-pink-600 dark:text-pink-400 font-medium group-hover:underline">
          Read more →
        </span>
      </div>
    </Link>
  );
}
