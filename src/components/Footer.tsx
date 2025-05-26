'use client';

import React, { useEffect, useState } from 'react';
import { useTheme } from 'next-themes';
import { Twitter, Youtube, Mail } from 'lucide-react';

const Footer = () => {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => setMounted(true), []);

  if (!mounted) return null;

  return (
    <footer className="bg-gray-900 text-white px-4 py-10">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-8">
        {/* Brand */}
        <div>
          <h2 className="text-xl font-semibold">TruthWorthwhile</h2>
          <p className="text-sm mt-2 text-gray-400">
            Your trusted source for real-time news in business, sports, politics, and entertainment.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-lg font-semibold mb-2">Quick Links</h3>
          <ul className="space-y-1 text-sm text-gray-400">
            <li><a href="/sports" className="hover:underline">Sports</a></li>
            <li><a href="/business" className="hover:underline">Business</a></li>
            <li><a href="/politics" className="hover:underline">Politics</a></li>
            <li><a href="/entertainment" className="hover:underline">Entertainment</a></li>
            <li><a href="/livestream" className="hover:underline">Live Stream</a></li>
            <li><a href="/donate" className="hover:underline">Donate</a></li>
          </ul>
        </div>

        {/* Newsletter Signup */}
        <div>
          <h3 className="text-lg font-semibold mb-2">Newsletter</h3>
          <p className="text-sm mb-2 text-gray-400">Stay informed with our latest updates.</p>
          <form className="flex flex-col gap-2">
            <input
              type="email"
              placeholder="you@example.com"
              className="px-3 py-2 rounded bg-gray-800 border border-gray-700 text-white"
            />
            <button
              type="submit"
              className="bg-blue-600 hover:bg-blue-700 px-4 py-2 text-sm rounded text-white"
            >
              Subscribe
            </button>
          </form>
        </div>

        {/* Connect & Theme Toggle */}
        <div className="flex flex-col justify-between">
          <div>
            <h3 className="text-lg font-semibold mb-2">Connect</h3>
            <div className="flex space-x-4 text-gray-400">
              <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" aria-label="Twitter">
                <Twitter size={20} />
              </a>
              <a href="https://youtube.com" target="_blank" rel="noopener noreferrer" aria-label="YouTube">
                <Youtube size={20} />
              </a>
              <a href="mailto:contact@truthworthwhile.com" aria-label="Email">
                <Mail size={20} />
              </a>
            </div>
          </div>

          <div className="mt-6">
            <h4 className="text-sm font-semibold mb-1">Theme</h4>
            <div className="flex space-x-2">
              <button
                onClick={() => setTheme('light')}
                className={`px-3 py-1 rounded text-sm ${
                  theme === 'light' ? 'bg-blue-600 text-white' : 'bg-gray-700 text-gray-200'
                }`}
              >
                Light
              </button>
              <button
                onClick={() => setTheme('dark')}
                className={`px-3 py-1 rounded text-sm ${
                  theme === 'dark' ? 'bg-blue-600 text-white' : 'bg-gray-700 text-gray-200'
                }`}
              >
                Dark
              </button>
            </div>
          </div>
        </div>
      </div>

      <div className="text-center text-sm text-gray-500 mt-10 pt-4 border-t border-gray-800">
        &copy; {new Date().getFullYear()} TruthWorthwhile. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
