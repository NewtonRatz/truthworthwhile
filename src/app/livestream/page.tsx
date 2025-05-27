// src/app/livestream/page.tsx

import React from 'react';
import LivePlayer from '@/components/LivePlayer';

export default function LivestreamPage() {
  const channelId = 'YOUR_CHANNEL_ID';

  return (
    <section className="bg-gradient-to-br from-pink-400 to-blue-500 text-white">
      {/* Hero Wrapper */}
      <div className="relative overflow-hidden">
        <div className="absolute inset-0 bg-[rgba(0,0,0,0.4)]"></div>
        <div className="max-w-5xl mx-auto px-6 py-24 relative z-10 text-center">
          {/* Live Badge + Title */}
          <div className="inline-flex items-center space-x-4 mb-4">
            <span className="bg-white text-pink-500 font-bold uppercase text-xs px-3 py-1 rounded-full animate-pulse">
              Live
            </span>
            <h1 className="text-5xl sm:text-6xl font-extrabold">
              TruthWorthwhile Live
            </h1>
          </div>
          <p className="max-w-3xl mx-auto text-lg sm:text-xl text-white/90 mb-16">
            Tune in now for 24/7 live coverage of breaking news, in-depth reports, and special events.
          </p>
        </div>
      </div>

      {/* Video Card */}
      <div className="max-w-3xl mx-auto px-4 -mt-12 mb-16">
        <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-2xl overflow-hidden transform hover:scale-[1.01] transition-transform">
          <LivePlayer channelId={channelId} />
        </div>
      </div>
    </section>
  );
}
