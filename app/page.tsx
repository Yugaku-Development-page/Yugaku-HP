const services = [
  {
    slug: "app-development",
    title: "アプリ開発・運用",
    description:
      "ビジネス課題の整理からUI/UX設計、開発・運用までを一気通貫で支援します。",
  },
  {
    slug: "art-trading",
    title: "美術品取扱",
    description:
      "絵画・工芸・写真を中心に、作品の選定や展示・販売に関する提案を行います。",
  },
  {
    slug: "sns-support",
    title: "SNS運用支援",
    description:
      "アートとデジタルの視点を活かし、ブランドの魅力が伝わる発信設計を支援します。",
  },
];

import Link from 'next/link';
import { getArtworks, getNews } from '@/lib/microcms';

export const revalidate = 60;

export default async function Home() {
  const [artworks, newsItems] = await Promise.all([
    getArtworks(6),
    getNews(3),
  ]);

  return (
    <div className="min-h-screen">
      <main>
        <section className="relative overflow-hidden bg-gradient-to-br from-slate-950 via-slate-900 to-indigo-950 py-24 text-white">
          <div className="pointer-events-none absolute inset-0 opacity-70">
            <div className="absolute -left-20 top-10 h-72 w-72 rounded-full bg-indigo-500/30 blur-3xl" />
            <div className="absolute bottom-0 right-0 h-80 w-80 rounded-full bg-sky-400/20 blur-3xl" />
          </div>
          <div className="relative mx-auto max-w-5xl px-6">
            <p className="text-sm uppercase tracking-[0.3em] text-slate-300">
              Art &amp; Digital
            </p>
            <h1 className="mt-4 text-4xl font-semibold leading-tight md:text-5xl">
              アートとデジタルで、価値を編集する
            </h1>
            <p className="mt-6 max-w-2xl text-base text-slate-200 md:text-lg">
              株式会社由岳は、アプリの企画・開発と、美術品の取扱いを通じて、
              個人と企業の価値創造を支援します。
            </p>
          </div>
        </section>

        <section id="services" className="py-20">
          <div className="mx-auto max-w-5xl px-6">
            <h2 className="text-2xl font-semibold text-slate-900">事業内容</h2>
            <p className="mt-3 max-w-2xl text-sm text-slate-600">
              企画から実装まで、アートとデジタルの両輪で伴走します。
            </p>
            <div className="mt-10 grid gap-6 md:grid-cols-3">
              {services.map((service) => (
                <Link
                  key={service.title}
                  href={`/services/${service.slug}`}
                  className="rounded-2xl border border-slate-200/80 bg-gradient-to-br from-white via-white to-slate-50/80 p-6 shadow-sm transition hover:-translate-y-1 hover:border-slate-300 hover:shadow-md"
                >
                  <h3 className="text-lg font-semibold">{service.title}</h3>
                  <p className="mt-4 text-sm leading-relaxed text-slate-600">
                    {service.description}
                  </p>
                  <span className="mt-6 inline-flex text-sm font-medium text-slate-700">
                    詳細を見る →
                  </span>
                </Link>
              ))}
            </div>
          </div>
        </section>

        <section id="gallery" className="bg-gradient-to-b from-slate-50 via-white to-slate-100 py-20">
          <div className="mx-auto max-w-5xl px-6">
            <h2 className="text-2xl font-semibold text-slate-900">ギャラリー</h2>
            {artworks.length === 0 ? (
              <p className="mt-6 text-sm text-slate-500">
                現在公開中の作品はありません。
              </p>
            ) : (
              <div className="mt-10 grid gap-6 md:grid-cols-3">
                {artworks.map((artwork) => (
                  <Link
                    key={artwork.id}
                    href={`/gallery/${artwork.slug ?? artwork.id}`}
                    className="group overflow-hidden rounded-2xl border border-slate-200/80 bg-white shadow-sm transition hover:-translate-y-1 hover:border-slate-300 hover:shadow-md"
                  >
                    <div className="aspect-[4/3] overflow-hidden bg-slate-100">
                      {artwork.images[0]?.url ? (
                        <img
                          src={artwork.images[0].url}
                          alt={artwork.title}
                          className="h-full w-full object-cover transition duration-300 group-hover:scale-105"
                        />
                      ) : (
                        <div className="flex h-full w-full items-center justify-center bg-gradient-to-br from-slate-100 to-slate-200 text-slate-400">
                          <i className="fas fa-image text-3xl"></i>
                        </div>
                      )}
                    </div>
                    <div className="p-4">
                      <div className="flex items-start justify-between gap-2">
                        <p className="text-sm font-semibold text-slate-800">
                          {artwork.title}
                        </p>
                        <span
                          className={`inline-flex items-center rounded-full px-2 py-0.5 text-[10px] font-medium ${
                            artwork.status === 'Available'
                              ? 'bg-green-100 text-green-800'
                              : artwork.status === 'Reserved'
                              ? 'bg-yellow-100 text-yellow-800'
                              : 'bg-red-100 text-red-800'
                          }`}
                        >
                          {artwork.status === 'Available'
                            ? '販売中'
                            : artwork.status === 'Reserved'
                            ? '予約済み'
                            : '売却済み'}
                        </span>
                      </div>
                      <p className="mt-1 text-xs text-slate-500">
                        {artwork.artist?.name ?? 'アーティスト未設定'}
                      </p>
                    </div>
                  </Link>
                ))}
              </div>
            )}
            <div className="mt-8">
              <Link
                href="/gallery"
                className="inline-flex items-center text-sm font-medium text-slate-700 hover:text-slate-900"
              >
                ギャラリー一覧を見る →
              </Link>
            </div>
          </div>
        </section>

        <section id="news" className="py-20">
          <div className="mx-auto max-w-5xl px-6">
            <h2 className="text-2xl font-semibold text-slate-900">ニュース</h2>
            {newsItems.length === 0 ? (
              <p className="mt-6 text-sm text-slate-500">
                現在公開中のお知らせはありません。
              </p>
            ) : (
              <ul className="mt-8 divide-y divide-slate-200 rounded-2xl border border-slate-200/80 bg-gradient-to-br from-white via-white to-slate-50/80 shadow-sm">
                {newsItems.map((item) => (
                  <li
                    key={item.id}
                    className="flex flex-col gap-2 px-6 py-4 md:flex-row md:items-center md:justify-between"
                  >
                    <div className="flex flex-col gap-2 md:flex-row md:items-center">
                      <span className="text-sm text-slate-500">
                        {new Date(item.date ?? item.createdAt).toLocaleDateString('ja-JP', {
                          year: 'numeric',
                          month: '2-digit',
                          day: '2-digit',
                        })}
                      </span>
                      <span className="text-sm font-medium text-slate-800">
                        {item.title}
                      </span>
                    </div>
                    <Link
                      href={`/news/${item.slug ?? item.id}`}
                      className="text-sm font-medium text-slate-700 hover:text-slate-900"
                    >
                      詳細 →
                    </Link>
                  </li>
                ))}
              </ul>
            )}
            <div className="mt-6">
              <Link
                href="/news"
                className="inline-flex items-center text-sm font-medium text-slate-700 hover:text-slate-900"
              >
                ニュース一覧を見る →
              </Link>
            </div>
          </div>
        </section>

        <section id="company" className="bg-slate-50 py-20">
          <div className="mx-auto max-w-5xl px-6">
            <h2 className="text-2xl font-semibold text-slate-900">会社情報</h2>
            <div className="mt-8 grid gap-6 rounded-2xl border border-slate-200/70 bg-white/80 px-6 py-8 text-sm text-slate-700 shadow-sm">
              <div className="flex flex-col gap-2 border-b border-slate-200/70 pb-5 md:flex-row md:gap-10">
                <span className="w-28 font-medium">社名</span>
                <span>株式会社由岳</span>
              </div>
              <div className="flex flex-col gap-2 border-b border-slate-200/70 pb-5 md:flex-row md:gap-10">
                <span className="w-28 font-medium">事業内容</span>
                <span>アプリ制作 / 美術品取扱 / SNS運用支援</span>
              </div>
              <div className="flex flex-col gap-2 md:flex-row md:gap-10">
                <span className="w-28 font-medium">所在地</span>
                <span>神奈川県横浜市（詳細はお問い合わせください）</span>
              </div>
            </div>
          </div>
        </section>

        <section id="contact" className="py-20">
          <div className="mx-auto max-w-5xl px-6">
            <h2 className="text-2xl font-semibold text-slate-900">お問い合わせ</h2>
            <p className="mt-4 max-w-2xl text-sm text-slate-600">
              事業に関するご相談は、お問い合わせフォームよりご連絡ください。
            </p>
            <Link
              href="/contact"
              className="mt-6 inline-flex rounded-full bg-gradient-to-r from-slate-900 to-indigo-700 px-6 py-3 text-sm font-semibold text-white shadow-sm transition hover:from-slate-800 hover:to-indigo-600"
            >
              メールで問い合わせる
            </Link>
          </div>
        </section>
      </main>
    </div>
  );
}
