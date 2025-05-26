'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { useTheme } from 'next-themes';
import { Menu, X, Moon, Sun } from 'lucide-react';

const Header = () => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => setMounted(true), []);

  const toggleMenu = () => setMobileOpen(!mobileOpen);

  const navLinks = [
    { href: '/', label: 'Home' },
    { href: '/business', label: 'Business' },
    { href: '/politics', label: 'Politics' },
    { href: '/sports', label: 'Sports' },
    { href: '/entertainment', label: 'Entertainment' },
    { href: '/livestream', label: 'Live' },
  ];

  return (
    <header className="bg-gray-900 text-white px-4 py-4 shadow-md">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="text-xl font-bold text-white">
          TruthWorthwhile
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden md:flex space-x-6 text-sm">
          {navLinks.map((link) => (
            <Link key={link.href} href={link.href} className="hover:text-blue-400">
              {link.label}
            </Link>
          ))}
        </nav>

        {/* Theme Toggle */}
        {mounted && (
          <button
            onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
            className="hidden md:inline-block p-2 rounded hover:bg-gray-800"
          >
            {theme === 'dark' ? <Sun size={18} /> : <Moon size={18} />}
          </button>
        )}

        {/* Mobile Menu Icon */}
        <button onClick={toggleMenu} className="md:hidden p-2">
          {mobileOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Nav Dropdown */}
      {mobileOpen && (
        <nav className="md:hidden mt-4 space-y-2 bg-gray-800 p-4 rounded">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="block text-sm text-white hover:text-blue-400"
              onClick={() => setMobileOpen(false)}
            >
              {link.label}
            </Link>
          ))}
          {mounted && (
            <button
              onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
              className="w-full text-left mt-2 text-sm text-gray-300 hover:text-white"
            >
              Toggle {theme === 'dark' ? 'Light' : 'Dark'} Mode
            </button>
          )}
        </nav>
      )}
    </header>
  );
};

export default Header;
