import Link from 'next/link';
import { notFound } from 'next/navigation';
import { getNewsItem } from '@/lib/microcms';
import type { Metadata } from 'next';

interface Props {
  params: {
    slug: string;
  };
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const newsItem = await getNewsItem(params.slug);
  
  if (!newsItem) {
    return {
      title: '記事が見つかりません',
    };
  }

  return {
    title: newsItem.title,
    description: newsItem.body.replace(/<[^>]*>/g, '').substring(0, 160),
    openGraph: {
      title: newsItem.title,
      description: newsItem.body.replace(/<[^>]*>/g, '').substring(0, 160),
      type: 'article',
      publishedTime: newsItem.date ?? newsItem.createdAt,
      images: newsItem.cover?.url ? [newsItem.cover.url] : [],
    },
  };
}

export default async function NewsDetailPage({ params }: Props) {
  const newsItem = await getNewsItem(params.slug);

  if (!newsItem) {
    notFound();
  }

  return (
    <div className="min-h-screen bg-slate-50">
      <section className="relative overflow-hidden bg-gradient-to-br from-slate-900 via-slate-800 to-indigo-900 text-white">
        <div className="pointer-events-none absolute inset-0 opacity-60">
          <div className="absolute -left-16 top-10 h-64 w-64 rounded-full bg-indigo-500/30 blur-3xl" />
          <div className="absolute bottom-0 right-0 h-72 w-72 rounded-full bg-sky-400/20 blur-3xl" />
        </div>
        <div className="relative mx-auto max-w-4xl px-6 py-20 lg:px-8">
          <Link
            href="/news"
            className="inline-flex items-center text-sm text-slate-200 hover:text-white"
          >
            <i className="fas fa-arrow-left mr-2"></i>
            ニュース一覧に戻る
          </Link>
          <div className="mt-6 flex items-center gap-x-4 text-xs text-slate-300">
            <time dateTime={newsItem.date ?? newsItem.createdAt}>
              {new Date(newsItem.date ?? newsItem.createdAt).toLocaleDateString('ja-JP', {
                year: 'numeric',
                month: 'long',
                day: 'numeric',
              })}
            </time>
          </div>
          <h1 className="mt-4 text-3xl font-bold tracking-tight sm:text-5xl">
            {newsItem.title}
          </h1>
        </div>
      </section>

      <article className="mx-auto max-w-4xl px-6 pb-24 pt-12 lg:px-8">
        <header className="mb-10">
          {newsItem.cover && (
            <div className="mb-8 overflow-hidden rounded-2xl border border-slate-200/80 bg-white shadow-sm">
              <img
                src={newsItem.cover.url}
                alt={newsItem.title}
                className="h-auto w-full"
              />
            </div>
          )}
        </header>

        <div
          className="prose prose-lg max-w-none text-gray-900"
          dangerouslySetInnerHTML={{ __html: newsItem.body }}
        />

        <footer className="mt-12 border-t border-gray-200 pt-8">
          <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
            <Link
              href="/news"
              className="text-primary-600 hover:text-primary-700 font-medium"
            >
              ← ニュース一覧に戻る
            </Link>
            <Link
              href="/contact"
              className="text-primary-600 hover:text-primary-700 font-medium"
            >
              お問い合わせ →
            </Link>
          </div>
        </footer>
      </article>
    </div>
  );
}
