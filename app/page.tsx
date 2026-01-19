import Link from 'next/link';
import { getArtworks, getNews } from '@/lib/microcms';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: '株式会社由岳 - アートとデジタルで、価値を編集する',
  description: '株式会社由岳は、アプリの企画・開発と、美術品の取扱いを通じて、個人と企業の価値創造を支援します。',
};

export default async function Home() {
  const artworks = await getArtworks(4);
  const news = await getNews(3);

  return (
    <div className="bg-gray-50">
      {/* ヒーローセクション */}
      <section className="relative bg-gradient-to-br from-secondary-900 to-secondary-700 text-white">
        <div className="mx-auto max-w-7xl px-6 py-24 lg:px-8">
          <div className="mx-auto max-w-3xl text-center">
            <h1 className="text-4xl font-bold tracking-tight sm:text-6xl text-balance">
              アートとデジタルで、価値を編集する。
            </h1>
            <p className="mt-6 text-lg leading-8 text-gray-300 text-balance">
              株式会社由岳は、アプリの企画・開発と、美術品の取扱いを通じて、個人と企業の価値創造を支援します。
            </p>
            <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center">
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

      {/* 事業セクション */}
      <section className="section-padding">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              私たちの事業
            </h2>
            <p className="mt-4 text-lg text-gray-600">
              デジタルとアートの両領域で、価値を創造します。
            </p>
          </div>
          <div className="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-8 lg:mx-0 lg:max-w-none lg:grid-cols-2">
            {/* アプリ制作 */}
            <div className="card">
              <div className="flex items-center gap-x-4">
                <div className="h-12 w-12 rounded-lg bg-primary-100 flex items-center justify-center">
                  <i className="fas fa-mobile-alt text-primary-600 text-xl"></i>
                </div>
                <h3 className="text-xl font-semibold text-gray-900">アプリ制作（企画・開発）</h3>
              </div>
              <p className="mt-6 text-gray-600">
                要件整理から設計・開発まで。小さく作って、速く改善する開発を得意としています。
              </p>
              <div className="mt-6">
                <Link href="/services#app-development" className="text-primary-600 hover:text-primary-700 font-medium">
                  詳しく見る →
                </Link>
              </div>
            </div>

            {/* 美術品取扱 */}
            <div className="card">
              <div className="flex items-center gap-x-4">
                <div className="h-12 w-12 rounded-lg bg-primary-100 flex items-center justify-center">
                  <i className="fas fa-palette text-primary-600 text-xl"></i>
                </div>
                <h3 className="text-xl font-semibold text-gray-900">美術品取扱</h3>
              </div>
              <p className="mt-6 text-gray-600">
                伝統工芸から現代アートまで。作品の紹介・販売・委託相談に対応します。
              </p>
              <div className="mt-6">
                <Link href="/gallery" className="text-primary-600 hover:text-primary-700 font-medium">
                  ギャラリーを見る →
                </Link>
              </div>
            </div>
          </div>

          {/* SNS運用支援（控えめ） */}
          <div className="mt-12 text-center">
            <p className="text-gray-600">
              <span className="font-medium">SNS運用支援（紹介制）</span>
              <br />
              一部クローズド案件を中心に対応しています。詳細は紹介のある場合のみご案内します。
            </p>
          </div>
        </div>
      </section>

      {/* ギャラリーセクション */}
      {artworks.length > 0 && (
        <section className="section-padding bg-white">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="mx-auto max-w-2xl text-center">
              <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
                ギャラリー
              </h2>
              <p className="mt-4 text-lg text-gray-600">
                取扱い作品の一部をご紹介します。
              </p>
            </div>
            <div className="mx-auto mt-16 grid max-w-2xl auto-rows-fr grid-cols-1 gap-8 sm:mt-20 lg:mx-0 lg:max-w-none lg:grid-cols-4">
              {artworks.map((artwork) => (
                <article key={artwork.id} className="relative isolate flex flex-col justify-end overflow-hidden rounded-2xl bg-gray-900 px-8 pb-8 pt-80">
                  <img
                    src={artwork.images[0]?.url}
                    alt={artwork.title}
                    className="absolute inset-0 -z-10 h-full w-full object-cover"
                  />
                  <div className="absolute inset-0 -z-10 bg-gradient-to-t from-gray-900 via-gray-900/40" />
                  <div className="absolute inset-0 -z-10 rounded-2xl ring-1 ring-inset ring-gray-900/10" />
                  
                  <div className="flex flex-wrap items-center gap-y-1 overflow-hidden text-sm leading-6 text-gray-300">
                    <h3 className="text-white font-semibold">
                      <span className="absolute inset-0" />
                      {artwork.title}
                    </h3>
                    <span className="text-gray-400">{artwork.artist.name}</span>
                  </div>
                  
                  <div className="mt-4">
                    <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${
                      artwork.status === 'Available' ? 'bg-green-100 text-green-800' :
                      artwork.status === 'Reserved' ? 'bg-yellow-100 text-yellow-800' :
                      'bg-red-100 text-red-800'
                    }`}>
                      {artwork.status === 'Available' ? '販売中' :
                       artwork.status === 'Reserved' ? '予約済み' : '売却済み'}
                    </span>
                  </div>
                </article>
              ))}
            </div>
            <div className="mt-12 text-center">
              <Link href="/gallery" className="btn-primary">
                ギャラリーを見る
              </Link>
            </div>
          </div>
        </section>
      )}

      {/* ニュースセクション */}
      {news.length > 0 && (
        <section className="section-padding">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="mx-auto max-w-2xl text-center">
              <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
                ニュース
              </h2>
              <p className="mt-4 text-lg text-gray-600">
                最新のお知らせ
              </p>
            </div>
            <div className="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-8 lg:mx-0 lg:max-w-none lg:grid-cols-3">
              {news.map((item) => (
                <article key={item.id} className="card">
                  <time dateTime={item.date} className="text-gray-500 text-sm">
                    {new Date(item.date).toLocaleDateString('ja-JP')}
                  </time>
                  <div className="group relative mt-4">
                    <h3 className="text-lg font-semibold text-gray-900 group-hover:text-primary-600">
                      <Link href={`/news/${item.slug}`}>
                        <span className="absolute inset-0" />
                        {item.title}
                      </Link>
                    </h3>
                    <p className="mt-4 line-clamp-3 text-sm text-gray-600">
                      {item.body.replace(/<[^>]*>/g, '').substring(0, 100)}...
                    </p>
                  </div>
                </article>
              ))}
            </div>
            <div className="mt-12 text-center">
              <Link href="/news" className="btn-primary">
                ニュース一覧を見る
              </Link>
            </div>
          </div>
        </section>
      )}

      {/* 会社概要セクション */}
      <section className="section-padding bg-white">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              会社概要
            </h2>
          </div>
          <div className="mx-auto mt-16 max-w-2xl">
            <div className="card">
              <p className="text-gray-600 mb-6">
                株式会社由岳は、デジタル領域（アプリ開発）と芸術領域（美術品取扱）を横断し、価値の創造と発信を支援するクリエイティブカンパニーです。
              </p>
              <dl className="divide-y divide-gray-100">
                <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
                  <dt className="text-sm font-medium leading-6 text-gray-900">会社名</dt>
                  <dd className="mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0">株式会社由岳（ゆがく）</dd>
                </div>
                <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
                  <dt className="text-sm font-medium leading-6 text-gray-900">設立</dt>
                  <dd className="mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0">2025年3月</dd>
                </div>
                <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
                  <dt className="text-sm font-medium leading-6 text-gray-900">代表者</dt>
                  <dd className="mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0">青山 遥（ビジネスネーム）</dd>
                </div>
                <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
                  <dt className="text-sm font-medium leading-6 text-gray-900">所在地</dt>
                  <dd className="mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0">神奈川県横浜市</dd>
                </div>
                <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
                  <dt className="text-sm font-medium leading-6 text-gray-900">事業内容</dt>
                  <dd className="mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0">
                    アプリの企画・開発／美術品の取扱／SNS運用支援（紹介制）
                  </dd>
                </div>
              </dl>
            </div>
          </div>
        </div>
      </section>

      {/* CTAセクション */}
      <section className="section-padding bg-secondary-900 text-white">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
              ご相談はお気軽に
            </h2>
            <p className="mx-auto mt-6 max-w-xl text-lg leading-8 text-gray-300">
              アプリ制作や美術品に関するお問い合わせは、お気軽にご相談ください。
            </p>
            <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center">
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