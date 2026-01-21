import Link from 'next/link';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: '会社情報',
  description: '株式会社由岳の会社情報。企業理念、会社概要、事業内容についてご紹介します。',
};

export default function CompanyPage() {
  return (
    <div className="min-h-screen bg-slate-50">
      {/* ヒーローセクション */}
      <section className="relative overflow-hidden bg-gradient-to-br from-slate-900 via-slate-800 to-indigo-900 text-white">
        <div className="pointer-events-none absolute inset-0 opacity-60">
          <div className="absolute -left-16 top-10 h-64 w-64 rounded-full bg-indigo-500/30 blur-3xl" />
          <div className="absolute bottom-0 right-0 h-72 w-72 rounded-full bg-sky-400/20 blur-3xl" />
        </div>
        <div className="relative mx-auto max-w-7xl px-6 py-24 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <h1 className="text-4xl font-bold tracking-tight sm:text-6xl">
              会社情報
            </h1>
            <p className="mt-6 text-lg leading-8 text-slate-200">
              株式会社由岳について
            </p>
          </div>
        </div>
      </section>

      {/* 企業理念 */}
      <section className="section-padding">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              企業理念
            </h2>
          </div>
          <div className="mx-auto mt-16 max-w-4xl">
            <div className="card text-center">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                アートとデジタルで、価値を編集する。
              </h3>
              <p className="text-lg text-gray-600 leading-relaxed">
                株式会社由岳は、デジタル領域（アプリ開発）と芸術領域（美術品取扱）を横断し、価値の創造と発信を支援するクリエイティブカンパニーです。
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 会社概要 */}
      <section className="section-padding bg-white">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              会社概要
            </h2>
          </div>
          <div className="mx-auto mt-16 max-w-4xl">
            <div className="card">
              <dl className="divide-y divide-gray-100">
                <div className="px-4 py-8 sm:grid sm:grid-cols-3 sm:gap-6 sm:px-0">
                  <dt className="text-sm font-medium leading-6 text-gray-900">会社名</dt>
                  <dd className="mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0">
                    株式会社由岳（ゆがく）
                  </dd>
                </div>
                <div className="px-4 py-8 sm:grid sm:grid-cols-3 sm:gap-6 sm:px-0">
                  <dt className="text-sm font-medium leading-6 text-gray-900">設立</dt>
                  <dd className="mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0">
                    2025年3月
                  </dd>
                </div>
                <div className="px-4 py-8 sm:grid sm:grid-cols-3 sm:gap-6 sm:px-0">
                  <dt className="text-sm font-medium leading-6 text-gray-900">代表者</dt>
                  <dd className="mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0">
                    青山 遥（ビジネスネーム）
                  </dd>
                </div>
                <div className="px-4 py-8 sm:grid sm:grid-cols-3 sm:gap-6 sm:px-0">
                  <dt className="text-sm font-medium leading-6 text-gray-900">所在地</dt>
                  <dd className="mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0">
                    神奈川県横浜市
                  </dd>
                </div>
                <div className="px-4 py-8 sm:grid sm:grid-cols-3 sm:gap-6 sm:px-0">
                  <dt className="text-sm font-medium leading-6 text-gray-900">事業内容</dt>
                  <dd className="mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0">
                    <ul className="space-y-1">
                      <li>・アプリの企画・開発</li>
                      <li>・美術品の取扱（ギャラリー・販売・委託）</li>
                      <li>・SNS運用支援（紹介制）</li>
                    </ul>
                  </dd>
                </div>
              </dl>
            </div>
          </div>
        </div>
      </section>

      {/* 事業内容詳細 */}
      <section className="section-padding">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              事業内容
            </h2>
          </div>
          <div className="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-8 lg:mx-0 lg:max-w-none lg:grid-cols-3">
            <div className="card">
              <div className="h-12 w-12 rounded-lg bg-primary-100 flex items-center justify-center mb-4">
                <i className="fas fa-mobile-alt text-primary-600 text-xl"></i>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">アプリ制作</h3>
              <p className="text-gray-600 text-sm">
                要件整理から設計・開発まで。小さく作って、速く改善する開発を得意としています。
              </p>
            </div>
            <div className="card">
              <div className="h-12 w-12 rounded-lg bg-primary-100 flex items-center justify-center mb-4">
                <i className="fas fa-palette text-primary-600 text-xl"></i>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">美術品取扱</h3>
              <p className="text-gray-600 text-sm">
                伝統工芸から現代アートまで。作品の紹介・販売・委託相談に対応します。
              </p>
            </div>
            <div className="card">
              <div className="h-12 w-12 rounded-lg bg-secondary-100 flex items-center justify-center mb-4">
                <i className="fas fa-share-alt text-secondary-600 text-xl"></i>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">SNS運用支援</h3>
              <p className="text-gray-600 text-sm">
                紹介制・クローズド案件を中心に対応しています。
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section-padding bg-secondary-900 text-white">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl mb-6">
              ご相談はお気軽に
            </h2>
            <p className="mx-auto mt-6 max-w-xl text-lg leading-8 text-gray-300 mb-8">
              事業内容について、もっと詳しく知りたい方はお気軽にお問い合わせください。
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/contact?type=app" className="btn-primary">
                アプリ制作の相談
              </Link>
              <Link href="/contact?type=artwork" className="btn-secondary">
                作品・委託の相談
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
