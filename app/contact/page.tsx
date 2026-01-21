'use client';

import { useMemo, useState } from 'react';
import { useSearchParams } from 'next/navigation';
import Link from 'next/link';
import ListPageNav from '@/components/ListPageNav';

const typeLabels: Record<string, string> = {
  app: 'アプリ制作の相談',
  artwork: '美術品（購入・委託・紹介）の相談',
  sns: 'SNS運用支援（紹介制）',
  other: 'その他',
};

export default function ContactPage() {
  const searchParams = useSearchParams();
  const [name, setName] = useState('');
  const [role, setRole] = useState('');
  const [message, setMessage] = useState('');

  const type = searchParams.get('type') ?? 'other';
  const artworkTitle = searchParams.get('artworkTitle');
  const artworkId = searchParams.get('artworkId');
  const typeLabel = typeLabels[type] ?? typeLabels.other;

  const mailtoLink = useMemo(() => {
    const subject = `お問い合わせ：${typeLabel}`;
    const bodyLines = [
      `お名前: ${name || '未入力'}`,
      `役職: ${role || '未入力'}`,
      `お問い合わせ種別: ${typeLabel}`,
      artworkTitle ? `作品名: ${decodeURIComponent(artworkTitle)}` : null,
      artworkId ? `作品ID: ${artworkId}` : null,
      '',
      'お問い合わせ内容:',
      message || '未入力',
    ].filter(Boolean);

    return `mailto:kurodasc@gmail.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(bodyLines.join('\n'))}`;
  }, [name, role, message, typeLabel, artworkTitle, artworkId]);

  return (
    <div className="bg-gray-50 min-h-screen">
      <header className="sticky top-0 z-20 border-b border-slate-200 bg-white/90 backdrop-blur">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4 lg:px-8">
          <Link href="/" className="text-sm font-semibold tracking-wide text-slate-900">
            株式会社由岳
          </Link>
          <ListPageNav />
        </div>
      </header>
      <section className="bg-white">
        <div className="mx-auto max-w-7xl px-6 py-24 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl">
              お問い合わせ
            </h1>
            <p className="mt-6 text-lg leading-8 text-gray-600">
              フォーム入力後、メールアプリが起動します。
            </p>
          </div>
        </div>
      </section>

      <section className="section-padding">
        <div className="mx-auto max-w-3xl px-6 lg:px-8">
          <div className="card">
            <div className="mb-6 rounded-lg border border-blue-200 bg-blue-50 p-4 text-sm text-blue-800">
              宛先：kurodasc@gmail.com
            </div>
            <div className="space-y-6">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  お問い合わせ種別
                </label>
                <div className="rounded-lg border border-gray-200 bg-gray-50 px-4 py-3 text-sm text-gray-700">
                  {typeLabel}
                </div>
              </div>

              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                  お客様のお名前 <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  id="name"
                  required
                  value={name}
                  onChange={(event) => setName(event.target.value)}
                  className="w-full rounded-md border border-gray-300 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                  placeholder="山田 太郎"
                />
              </div>

              <div>
                <label htmlFor="role" className="block text-sm font-medium text-gray-700 mb-2">
                  役職 <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  id="role"
                  required
                  value={role}
                  onChange={(event) => setRole(event.target.value)}
                  className="w-full rounded-md border border-gray-300 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                  placeholder="代表取締役 / 担当者など"
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                  お問い合わせ内容 <span className="text-red-500">*</span>
                </label>
                <textarea
                  id="message"
                  rows={6}
                  required
                  value={message}
                  onChange={(event) => setMessage(event.target.value)}
                  className="w-full rounded-md border border-gray-300 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                  placeholder="お問い合わせ内容をご記入ください"
                />
              </div>

              <a
                href={mailtoLink}
                className="inline-flex w-full justify-center rounded-full bg-slate-900 px-6 py-3 text-sm font-semibold text-white transition hover:bg-slate-800"
              >
                メールを作成する
              </a>

              <p className="text-xs text-gray-500">
                ※「メールを作成する」を押すと、お使いのメールアプリが起動します。
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
