import Link from 'next/link';
import type { Metadata } from 'next';
import ListPageNav from '@/components/ListPageNav';

export const metadata: Metadata = {
  title: '事業内容',
  description: '株式会社由岳の事業内容について。アプリ制作、美術品取扱、SNS運用支援をご紹介します。',
};

const serviceCards = [
  {
    slug: 'app-development',
    title: 'アプリ開発・運用',
    description: '要件整理からUI/UX設計、開発・運用までを一気通貫で支援します。',
    highlights: ['課題ヒアリング', 'プロトタイピング', '運用改善'],
    image: '/images/services/app-development.jpg',
  },
  {
    slug: 'art-trading',
    title: '美術品取扱',
    description: '絵画・工芸・写真を中心に、作品の選定や展示・販売に関する提案を行います。',
    highlights: ['作品選定', '展示・販売支援', '委託相談'],
    image: '/images/services/art-trading.jpg',
  },
  {
    slug: 'sns-support',
    title: 'SNS運用支援',
    description: 'アートとデジタルの視点を活かし、ブランドの魅力が伝わる発信設計を支援します。',
    highlights: ['発信設計', 'ブランド整理', '紹介制対応'],
    image: '/images/services/sns-support.jpg',
  },
];

export default function ServicesPage() {
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
      {/* ヒーローセクション */}
      <section className="bg-gradient-to-br from-white via-white to-slate-100">
        <div className="mx-auto max-w-7xl px-6 py-20 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl">
              事業内容
            </h1>
            <p className="mt-6 text-lg leading-8 text-gray-600">
              アートとデジタルの両領域で、価値を創造します。
            </p>
          </div>
        </div>
      </section>

      {/* 事業一覧 */}
      <section className="section-padding">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid gap-8 md:grid-cols-3">
            {serviceCards.map((service) => (
              <Link
                key={service.slug}
                href={`/services/${service.slug}`}
                className="group overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-sm transition hover:-translate-y-1 hover:shadow-lg"
              >
                <div
                  className="aspect-[4/3] w-full overflow-hidden bg-gradient-to-br from-slate-100 via-white to-slate-200"
                  style={{ backgroundImage: `url(${service.image})`, backgroundSize: 'cover' }}
                  aria-label={`${service.title}のイメージ`}
                />
                <div className="p-6">
                  <h3 className="text-lg font-semibold text-gray-900">{service.title}</h3>
                  <p className="mt-3 text-sm leading-relaxed text-gray-600">
                    {service.description}
                  </p>
                  <ul className="mt-4 space-y-2 text-sm text-gray-500">
                    {service.highlights.map((highlight) => (
                      <li key={highlight} className="flex items-center gap-2">
                        <span className="h-1.5 w-1.5 rounded-full bg-primary-600" />
                        {highlight}
                      </li>
                    ))}
                  </ul>
                  <span className="mt-6 inline-flex text-sm font-medium text-primary-600">
                    詳細を見る →
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* アプリ制作セクション */}
      <section id="app-development" className="section-padding">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 sm:gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-2">
            <div className="lg:ml-auto lg:pl-4 lg:pt-4">
              <div className="lg:max-w-lg">
                <h2 className="text-base font-semibold leading-7 text-primary-600">
                  主な事業
                </h2>
                <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
                  アプリ制作
                </p>
                <p className="mt-6 text-lg leading-8 text-gray-600">
                  要件整理から設計・開発まで。小さく作って、速く改善する開発を得意としています。
                </p>
                <div className="mt-8 space-y-4">
                  <div className="flex items-start gap-x-3">
                    <div className="mt-1 h-2 w-2 rounded-full bg-primary-600"></div>
                    <div>
                      <h4 className="font-semibold text-gray-900">要件整理</h4>
                      <p className="text-gray-600">お客様の課題を丁寧にヒアリングし、最適な解決策を提案します。</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-x-3">
                    <div className="mt-1 h-2 w-2 rounded-full bg-primary-600"></div>
                    <div>
                      <h4 className="font-semibold text-gray-900">プロトタイプ開発</h4>
                      <p className="text-gray-600">素早く動くものを作り、実際に使いながら改善していきます。</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-x-3">
                    <div className="mt-1 h-2 w-2 rounded-full bg-primary-600"></div>
                    <div>
                      <h4 className="font-semibold text-gray-900">Webアプリ開発</h4>
                      <p className="text-gray-600">モダンな技術スタックを用いた、使いやすいアプリケーションを開発します。</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-x-3">
                    <div className="mt-1 h-2 w-2 rounded-full bg-primary-600"></div>
                    <div>
                      <h4 className="font-semibold text-gray-900">運用改善</h4>
                      <p className="text-gray-600">リリース後も継続的に改善し、価値を最大化します。</p>
                    </div>
                  </div>
                </div>
                <div className="mt-8">
                  <Link href="/contact?type=app" className="btn-primary">
                    アプリ制作の相談をする
                  </Link>
                  <Link
                    href="/services/app-development"
                    className="ml-4 text-sm font-medium text-primary-600 hover:text-primary-700"
                  >
                    詳細を見る →
                  </Link>
                </div>
              </div>
            </div>
            <div className="flex items-center justify-center lg:order-first">
              <div className="w-full h-80 bg-gradient-to-br from-primary-100 to-primary-200 rounded-2xl flex items-center justify-center">
                <i className="fas fa-code text-primary-600 text-6xl"></i>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 開発事例 */}
      <section className="section-padding bg-white">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              開発事例
            </h2>
            <p className="mt-4 text-lg text-gray-600">
              これまでの開発事例をご紹介します。
            </p>
          </div>
          <div className="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-8 lg:mx-0 lg:max-w-none lg:grid-cols-3">
            <div className="card">
              <div className="h-12 w-12 rounded-lg bg-primary-100 flex items-center justify-center mb-4">
                <i className="fas fa-calendar-alt text-primary-600 text-xl"></i>
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">予約管理システム</h3>
              <p className="text-gray-600 text-sm">
                美容室・飲食店向けの予約管理システム。カレンダー連携、自動リマインダー機能を実装。
              </p>
            </div>
            <div className="card">
              <div className="h-12 w-12 rounded-lg bg-primary-100 flex items-center justify-center mb-4">
                <i className="fas fa-users text-primary-600 text-xl"></i>
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">顧客管理システム</h3>
              <p className="text-gray-600 text-sm">
                中小企業向けの顧客情報管理システム。売上分析、フォローアップ機能を搭載。
              </p>
            </div>
            <div className="card">
              <div className="h-12 w-12 rounded-lg bg-primary-100 flex items-center justify-center mb-4">
                <i className="fas fa-tasks text-primary-600 text-xl"></i>
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">業務効率化ツール</h3>
              <p className="text-gray-600 text-sm">
                社内業務を効率化するためのカスタムツール。複数の業務プロセスを自動化。
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 美術品取扱セクション */}
      <section className="section-padding">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 sm:gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-2">
            <div className="flex items-center justify-center">
              <div className="w-full h-80 bg-gradient-to-br from-secondary-100 to-secondary-200 rounded-2xl flex items-center justify-center">
                <i className="fas fa-palette text-secondary-600 text-6xl"></i>
              </div>
            </div>
            <div className="lg:mr-auto lg:pl-8">
              <div className="lg:max-w-lg">
                <h2 className="text-base font-semibold leading-7 text-primary-600">
                  主な事業
                </h2>
                <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
                  美術品取扱
                </p>
                <p className="mt-6 text-lg leading-8 text-gray-600">
                  伝統工芸から現代アートまで。作品の紹介・販売・委託相談に対応します。
                </p>
                <div className="mt-8 space-y-4">
                  <div className="flex items-start gap-x-3">
                    <div className="mt-1 h-2 w-2 rounded-full bg-primary-600"></div>
                    <div>
                      <h4 className="font-semibold text-gray-900">作品紹介</h4>
                      <p className="text-gray-600">作家の想いや作品の背景を丁寧にご紹介します。</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-x-3">
                    <div className="mt-1 h-2 w-2 rounded-full bg-primary-600"></div>
                    <div>
                      <h4 className="font-semibold text-gray-900">販売</h4>
                      <p className="text-gray-600">Availableな作品を随時ご紹介しています。</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-x-3">
                    <div className="mt-1 h-2 w-2 rounded-full bg-primary-600"></div>
                    <div>
                      <h4 className="font-semibold text-gray-900">委託相談</h4>
                      <p className="text-gray-600">お持ちの作品の販売をお手伝いします。</p>
                    </div>
                  </div>
                </div>
                <div className="mt-8">
                  <Link href="/gallery" className="btn-primary">
                    ギャラリーを見る
                  </Link>
                  <Link
                    href="/services/art-trading"
                    className="ml-4 text-sm font-medium text-primary-600 hover:text-primary-700"
                  >
                    詳細を見る →
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SNS運用支援セクション（控えめ） */}
      <section className="section-padding bg-gray-100">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              SNS運用支援
            </h2>
            <div className="mt-6 p-6 bg-yellow-50 border border-yellow-200 rounded-lg">
              <p className="text-yellow-800 font-medium mb-2">紹介制・クローズド案件中心</p>
              <p className="text-gray-600 text-sm">
                一部クローズド案件を中心に対応しています。詳細は紹介のある場合のみご案内します。
              </p>
            </div>
            <p className="mt-6 text-gray-600">
              守秘義務のため、実績に関しては匿名・数値非公開でご紹介させていただきます。
            </p>
            <div className="mt-8">
              <Link href="/contact?type=sns" className="text-primary-600 hover:text-primary-700 text-sm">
                紹介のある場合はこちらから →
              </Link>
              <span className="mx-2 text-gray-400">/</span>
              <Link href="/services/sns-support" className="text-primary-600 hover:text-primary-700 text-sm">
                詳細を見る →
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
