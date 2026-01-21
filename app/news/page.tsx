import Link from 'next/link';
import { getNews } from '@/lib/microcms';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'ニュース',
  description: '株式会社由岳の最新ニュース・お知らせ',
};

export const revalidate = 60;

export default async function NewsPage() {
  const news = await getNews();

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
              ニュース
            </h1>
            <p className="mt-6 text-lg leading-8 text-slate-200">
              最新のお知らせ
            </p>
          </div>
        </div>
      </section>

      {/* ニュース一覧 */}
      <section className="section-padding">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          {news.length === 0 ? (
            <div className="text-center py-12">
              <p className="text-gray-500 text-lg">現在、お知らせはありません。</p>
            </div>
          ) : (
            <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 sm:mt-16 sm:pt-16 lg:mx-0 lg:max-w-none lg:grid-cols-3">
              {news.map((item) => (
                <article
                  key={item.id}
                  className="flex max-w-xl flex-col items-start justify-between rounded-2xl border border-slate-200/80 bg-white/90 p-6 shadow-sm transition hover:-translate-y-1 hover:border-slate-300 hover:shadow-md"
                >
                  {item.cover && (
                    <div className="mb-4 w-full">
                      <img
                        src={item.cover.url}
                        alt={item.title}
                        className="h-48 w-full object-cover rounded-lg"
                      />
                    </div>
                  )}
                  <div className="flex items-center gap-x-4 text-xs">
                    <time dateTime={item.date ?? item.createdAt} className="text-gray-500">
                      {new Date(item.date ?? item.createdAt).toLocaleDateString('ja-JP', {
                        year: 'numeric',
                        month: 'long',
                        day: 'numeric',
                      })}
                    </time>
                  </div>
                  <div className="group relative">
                    <h3 className="mt-3 text-lg font-semibold leading-6 text-gray-900 group-hover:text-primary-600">
                      <Link href={`/news/${item.slug ?? item.id}`}>
                        <span className="absolute inset-0" />
                        {item.title}
                      </Link>
                    </h3>
                    <div 
                      className="mt-5 line-clamp-3 text-sm leading-6 text-gray-600 prose prose-sm"
                      dangerouslySetInnerHTML={{ __html: item.body }}
                    />
                  </div>
                  <div className="mt-6">
                    <Link
                      href={`/news/${item.slug ?? item.id}`}
                      className="text-primary-600 hover:text-primary-700 text-sm font-medium"
                    >
                      記事を読む →
                    </Link>
                  </div>
                </article>
              ))}
            </div>
          )}
        </div>
      </section>
    </div>
  );
}
