'use client';

import Link from 'next/link';

const navItems = [
  { href: '/services', label: '事業内容一覧' },
  { href: '/gallery', label: 'ギャラリー' },
  { href: '/news', label: 'ニュース一覧' },
  { href: '/contact', label: 'お問い合わせ' },
];

export default function ListPageNav() {
  return (
    <details className="relative">
      <summary className="inline-flex cursor-pointer items-center gap-2 rounded-full border border-slate-200 bg-white px-4 py-2 text-sm font-medium text-slate-700 shadow-sm transition hover:border-slate-300 hover:text-slate-900">
        ページ一覧
        <span className="text-xs text-slate-400">▼</span>
      </summary>
      <div className="absolute right-0 mt-2 w-48 rounded-xl border border-slate-200 bg-white p-2 shadow-lg">
        <nav className="flex flex-col gap-1">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="rounded-lg px-3 py-2 text-sm text-slate-700 transition hover:bg-slate-100 hover:text-slate-900"
            >
              {item.label}
            </Link>
          ))}
        </nav>
      </div>
    </details>
  );
}
