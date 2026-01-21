const services = [
  {
    title: "アプリ開発・運用",
    description:
      "ビジネス課題の整理からUI/UX設計、開発・運用までを一気通貫で支援します。",
  },
  {
    title: "美術品取扱",
    description:
      "絵画・工芸・写真を中心に、作品の選定や展示・販売に関する提案を行います。",
  },
  {
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
      <header className="border-b border-slate-200 bg-white/90 backdrop-blur">
        <div className="mx-auto flex max-w-5xl items-center justify-between px-6 py-4">
          <div className="text-lg font-semibold tracking-wide">株式会社由岳</div>
          <nav className="hidden gap-6 text-sm text-slate-600 md:flex">
            <a className="hover:text-slate-900" href="#services">
              事業内容
            </a>
            <a className="hover:text-slate-900" href="#gallery">
              ギャラリー
            </a>
            <a className="hover:text-slate-900" href="#news">
              ニュース
            </a>
            <a className="hover:text-slate-900" href="#company">
              会社情報
            </a>
            <a className="hover:text-slate-900" href="#contact">
              お問い合わせ
            </a>
          </nav>
        </div>
      </header>

      <main>
        <section className="bg-slate-900 py-20 text-white">
          <div className="mx-auto max-w-5xl px-6">
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

        <section id="services" className="py-16">
          <div className="mx-auto max-w-5xl px-6">
            <h2 className="text-2xl font-semibold">事業内容</h2>
            <div className="mt-8 grid gap-6 md:grid-cols-3">
              {services.map((service) => (
                <div
                  key={service.title}
                  className="rounded-2xl border border-slate-200 p-6 shadow-sm"
                >
                  <h3 className="text-lg font-semibold">{service.title}</h3>
                  <p className="mt-4 text-sm leading-relaxed text-slate-600">
                    {service.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section id="gallery" className="bg-slate-50 py-16">
          <div className="mx-auto max-w-5xl px-6">
            <h2 className="text-2xl font-semibold">ギャラリー</h2>
            <p className="mt-4 max-w-2xl text-sm text-slate-600">
              microCMSの最新作品を掲載しています。
            </p>
            {artworks.length === 0 ? (
              <p className="mt-6 text-sm text-slate-500">
                現在公開中の作品はありません。
              </p>
            ) : (
              <div className="mt-8 grid gap-6 md:grid-cols-3">
                {artworks.map((artwork) => (
                  <Link
                    key={artwork.id}
                    href={`/gallery/${artwork.slug}`}
                    className="group overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm transition hover:shadow-md"
                  >
                    <div className="aspect-[4/3] overflow-hidden bg-slate-100">
                      <img
                        src={artwork.images[0]?.url}
                        alt={artwork.title}
                        className="h-full w-full object-cover transition duration-300 group-hover:scale-105"
                      />
                    </div>
                    <div className="p-4">
                      <p className="text-sm font-semibold text-slate-800">
                        {artwork.title}
                      </p>
                      <p className="mt-1 text-xs text-slate-500">
                        {artwork.artist.name}
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

        <section id="news" className="py-16">
          <div className="mx-auto max-w-5xl px-6">
            <h2 className="text-2xl font-semibold">ニュース</h2>
            {newsItems.length === 0 ? (
              <p className="mt-6 text-sm text-slate-500">
                現在公開中のお知らせはありません。
              </p>
            ) : (
              <ul className="mt-6 divide-y divide-slate-200 rounded-2xl border border-slate-200 bg-white">
                {newsItems.map((item) => (
                  <li
                    key={item.id}
                    className="flex flex-col gap-2 px-6 py-4 md:flex-row md:items-center md:justify-between"
                  >
                    <div className="flex flex-col gap-2 md:flex-row md:items-center">
                      <span className="text-sm text-slate-500">
                        {new Date(item.date).toLocaleDateString('ja-JP', {
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
                      href={`/news/${item.slug}`}
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

        <section id="company" className="bg-slate-50 py-16">
          <div className="mx-auto max-w-5xl px-6">
            <h2 className="text-2xl font-semibold">会社情報</h2>
            <div className="mt-6 grid gap-4 text-sm text-slate-700">
              <div className="flex flex-col gap-1 border-b border-slate-200 pb-4 md:flex-row md:gap-6">
                <span className="w-28 font-medium">社名</span>
                <span>株式会社由岳</span>
              </div>
              <div className="flex flex-col gap-1 border-b border-slate-200 pb-4 md:flex-row md:gap-6">
                <span className="w-28 font-medium">事業内容</span>
                <span>アプリ制作 / 美術品取扱 / SNS運用支援</span>
              </div>
              <div className="flex flex-col gap-1 md:flex-row md:gap-6">
                <span className="w-28 font-medium">所在地</span>
                <span>神奈川県横浜市（詳細はお問い合わせください）</span>
              </div>
            </div>
          </div>
        </section>

        <section id="contact" className="py-16">
          <div className="mx-auto max-w-5xl px-6">
            <h2 className="text-2xl font-semibold">お問い合わせ</h2>
            <p className="mt-4 max-w-2xl text-sm text-slate-600">
              事業に関するご相談は、お問い合わせフォームよりご連絡ください。
            </p>
            <div className="mt-6 inline-flex rounded-full bg-slate-900 px-6 py-3 text-sm font-semibold text-white">
              /contact へ移動
            </div>
          </div>
        </section>
      </main>

      <footer className="border-t border-slate-200 py-8">
        <div className="mx-auto flex max-w-5xl flex-col gap-2 px-6 text-xs text-slate-500 md:flex-row md:items-center md:justify-between">
          <span>© 2026 Yugaku Inc.</span>
          <span>作品の色味は実物と異なる場合があります。</span>
        </div>
      </footer>
    </div>
  );
}
