import React from 'react';
import LivePlayer from '@/components/LivePlayer';

export default function LivestreamPage() {
  const channelId = 'YOUR_CHANNEL_ID'; // replace with your YouTube channel ID

  return (
    <section className="py-16 bg-gradient-to-br from-pink-50 to-blue-50 text-[var(--foreground)]">
      <div className="max-w-4xl mx-auto px-4 text-center">
        <div className="inline-flex items-center space-x-2 mb-6">
          {/* Live Badge */}
          <span className="bg-pink-600 text-white text-xs font-semibold uppercase px-2 py-1 rounded-full animate-pulse">
            Live
          </span>
          <h1 className="text-5xl font-bold text-gray-900 dark:text-white">
            TruthWorthwhile Live Stream
          </h1>
        </div>
        <p className="text-lg text-gray-700 dark:text-gray-300 mb-10">
          Tune in now for 24/7 live coverage of breaking news and special events.
        </p>

        {/* Player Container */}
        <div className="relative w-full pb-[56.25%] rounded-xl overflow-hidden shadow-lg border-4 border-pink-200 dark:border-blue-800">
          <LivePlayer channelId={channelId} />
        </div>
      </div>
    </section>
  );
}
