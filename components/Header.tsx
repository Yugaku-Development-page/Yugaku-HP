'use client';

import { useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

const navigation = [
  { name: 'ホーム', href: '/' },
  { name: '事業内容', href: '/services' },
  { name: 'ギャラリー', href: '/gallery' },
  { name: 'ニュース', href: '/news' },
  { name: '会社情報', href: '/company' },
];

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const pathname = usePathname();

  return (
    <header className="sticky top-0 z-30 border-b border-slate-200 bg-white/90 backdrop-blur">
      <div className="bg-slate-900 text-slate-200">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-2 text-xs lg:px-8">
          <span className="tracking-[0.3em] text-[10px] uppercase">
            Art &amp; Digital
          </span>
          <div className="flex items-center gap-4">
            <span className="hidden sm:inline">アートとデジタルで、価値を編集する</span>
            <Link
              href="/contact"
              className="inline-flex items-center rounded-full border border-white/30 px-3 py-1 text-[11px] font-medium text-white transition hover:border-white"
            >
              お問い合わせ
            </Link>
          </div>
        </div>
      </div>
      <nav className="mx-auto max-w-7xl px-6 lg:px-8" aria-label="Top">
        <div className="flex w-full items-center justify-between py-4">
          <div className="flex items-center gap-4">
            <Link href="/" className="text-xl font-semibold text-gray-900 font-brand tracking-wide">
              株式会社由岳
            </Link>
            <span className="hidden text-xs text-slate-500 md:inline">
              Creative Company in Yokohama
            </span>
          </div>
          <div className="hidden lg:flex items-center gap-8">
            {navigation.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className={`text-sm font-medium transition-colors ${
                  pathname === link.href
                    ? 'text-primary-600'
                    : 'text-slate-600 hover:text-slate-900'
                }`}
              >
                {link.name}
              </Link>
            ))}
            <Link
              href="/contact"
              className="inline-flex items-center rounded-full bg-slate-900 px-4 py-2 text-sm font-semibold text-white transition hover:bg-slate-800"
            >
              ご相談はこちら
            </Link>
          </div>
          <div className="lg:hidden">
            <button
              type="button"
              className="inline-flex items-center justify-center rounded-md p-2 text-gray-700"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              <span className="sr-only">メニューを開く</span>
              <svg
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                aria-hidden="true"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
                />
              </svg>
            </button>
          </div>
        </div>
        {mobileMenuOpen && (
          <div className="lg:hidden border-t border-slate-200 pb-4">
            <div className="space-y-1 pt-4">
              {navigation.map((link) => (
                <Link
                  key={link.name}
                  href={link.href}
                  className={`block py-2 text-sm font-medium ${
                    pathname === link.href
                      ? 'text-primary-600'
                      : 'text-slate-700 hover:text-primary-600'
                  }`}
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {link.name}
                </Link>
              ))}
              <Link
                href="/contact"
                className="mt-2 inline-flex w-full justify-center rounded-full bg-slate-900 px-4 py-2 text-sm font-semibold text-white"
                onClick={() => setMobileMenuOpen(false)}
              >
                ご相談はこちら
              </Link>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
}
