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
      publishedTime: newsItem.date,
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
    <div className="bg-gray-50 min-h-screen">
      <article className="mx-auto max-w-4xl px-6 py-24 lg:px-8">
        <div className="mb-8">
          <Link
            href="/news"
            className="inline-flex items-center text-sm text-gray-600 hover:text-gray-900"
          >
            <i className="fas fa-arrow-left mr-2"></i>
            ニュース一覧に戻る
          </Link>
        </div>

        <header className="mb-8">
          <div className="flex items-center gap-x-4 text-xs mb-4">
            <time dateTime={newsItem.date} className="text-gray-500">
              {new Date(newsItem.date).toLocaleDateString('ja-JP', {
                year: 'numeric',
                month: 'long',
                day: 'numeric',
              })}
            </time>
          </div>
          <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl mb-6">
            {newsItem.title}
          </h1>
          {newsItem.cover && (
            <div className="mb-8">
              <img
                src={newsItem.cover.url}
                alt={newsItem.title}
                className="w-full h-auto rounded-lg shadow-lg"
              />
            </div>
          )}
        </header>

        <div 
          className="prose prose-lg max-w-none text-gray-900"
          dangerouslySetInnerHTML={{ __html: newsItem.body }}
        />

        <footer className="mt-12 pt-8 border-t border-gray-200">
          <div className="flex justify-between items-center">
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