import React from 'react';
import LivePlayer from '@/components/LivePlayer';

export default function LivestreamPage() {
  const channelId = 'YOUR_CHANNEL_ID'; // replace with your actual YouTube channel ID

  return (
    <section className="py-16 bg-[var(--background)] text-[var(--foreground)]">
      <div className="max-w-4xl mx-auto px-4 text-center">
        <h1 className="text-4xl font-bold mb-6">Live News Stream</h1>
        <p className="text-gray-600 dark:text-gray-400 mb-8">
          Tune in for 24/7 live coverage of breaking news and special events.
        </p>
        <LivePlayer channelId={channelId} />
      </div>
    </section>
  );
}
