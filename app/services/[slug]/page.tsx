import Link from 'next/link';
import { notFound } from 'next/navigation';
import type { Metadata } from 'next';

const serviceDetails = {
  'app-development': {
    title: 'アプリ開発・運用',
    lead: '課題整理からプロダクト設計、開発・運用まで一気通貫で支援します。',
    summary: [
      'ビジネス課題の整理と要件定義を丁寧に実施',
      'UI/UX設計とプロトタイプ検証で早期に価値を確認',
      'モダンな技術スタックでスピーディに実装',
      '運用フェーズの改善提案まで伴走',
    ],
    highlights: [
      { title: 'プロジェクト設計', body: '目的とKPIを明確にし、短期間で成果が出る開発計画を策定します。' },
      { title: 'アジャイル開発', body: '小さく作って検証し、フィードバックを反映しながら改善します。' },
      { title: '運用支援', body: 'ローンチ後も分析・改善を繰り返し、価値の最大化を支援します。' },
    ],
    action: { href: '/contact?type=app', label: 'アプリ制作の相談をする' },
  },
  'art-trading': {
    title: '美術品取扱',
    lead: '現代アートから工芸品まで、作品紹介・販売・委託相談に対応します。',
    summary: [
      '作家や作品のストーリーを丁寧に紹介',
      '購入・委託に関する相談をサポート',
      '展示やコレクションの企画提案',
      '作品の価値を高める見せ方を提案',
    ],
    highlights: [
      { title: '作品セレクション', body: 'ご要望や空間に合わせて、最適な作品をご提案します。' },
      { title: '販売サポート', body: '購入検討時の作品背景やケア方法なども丁寧にご案内します。' },
      { title: '委託相談', body: '大切な作品の委託・販売について、安心できる形でサポートします。' },
    ],
    action: { href: '/gallery', label: 'ギャラリーを見る' },
  },
  'sns-support': {
    title: 'SNS運用支援',
    lead: 'アートとデジタルの視点で、ブランドの魅力が伝わる発信設計を支援します。',
    summary: [
      '紹介制のクローズド案件を中心に対応',
      'ブランドの世界観に合わせた発信設計',
      '撮影・デザイン・コピーを一貫して提案',
      '守秘義務の観点から実績は個別にご紹介',
    ],
    highlights: [
      { title: '戦略設計', body: 'ターゲット・目的に合わせた発信戦略を設計します。' },
      { title: 'コンテンツ制作', body: '視覚表現とメッセージを統一し、ブランド価値を高めます。' },
      { title: '運用改善', body: '数値分析とクリエイティブ改善で継続的に成果を追求します。' },
    ],
    action: { href: '/contact?type=sns', label: '紹介のある場合はこちらから' },
  },
} as const;

type ServiceSlug = keyof typeof serviceDetails;

interface Props {
  params: { slug: ServiceSlug };
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const service = serviceDetails[params.slug];
  if (!service) {
    return { title: 'サービスが見つかりません' };
  }

  return {
    title: `${service.title} | 事業内容`,
    description: service.lead,
  };
}

export default function ServiceDetailPage({ params }: Props) {
  const service = serviceDetails[params.slug];

  if (!service) {
    notFound();
  }

  return (
    <div className="bg-gray-50 min-h-screen">
      <section className="bg-white">
        <div className="mx-auto max-w-7xl px-6 py-24 lg:px-8">
          <div className="mx-auto max-w-3xl text-center">
            <p className="text-sm font-semibold text-primary-600">事業内容</p>
            <h1 className="mt-3 text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl">
              {service.title}
            </h1>
            <p className="mt-6 text-lg leading-8 text-gray-600">{service.lead}</p>
          </div>
        </div>
      </section>

      <section className="section-padding">
        <div className="mx-auto max-w-6xl px-6 lg:px-8">
          <div className="grid gap-8 lg:grid-cols-[2fr,1fr]">
            <div className="space-y-6">
              <div className="rounded-2xl border border-gray-200 bg-white p-8 shadow-sm">
                <h2 className="text-2xl font-semibold text-gray-900">提供内容</h2>
                <ul className="mt-6 space-y-3 text-sm text-gray-600">
                  {service.summary.map((item) => (
                    <li key={item} className="flex items-start gap-3">
                      <span className="mt-1 h-2 w-2 rounded-full bg-primary-600" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="grid gap-6 md:grid-cols-3">
                {service.highlights.map((highlight) => (
                  <div key={highlight.title} className="rounded-2xl border border-gray-200 bg-white p-6 shadow-sm">
                    <h3 className="text-base font-semibold text-gray-900">{highlight.title}</h3>
                    <p className="mt-3 text-sm text-gray-600">{highlight.body}</p>
                  </div>
                ))}
              </div>
            </div>
            <aside className="space-y-6">
              <div className="rounded-2xl border border-gray-200 bg-white p-6 shadow-sm">
                <h3 className="text-base font-semibold text-gray-900">お問い合わせ</h3>
                <p className="mt-3 text-sm text-gray-600">
                  詳細なご相談や案件のご依頼は、以下よりご連絡ください。
                </p>
                <Link href={service.action.href} className="mt-6 inline-flex w-full justify-center rounded-full bg-slate-900 px-4 py-3 text-sm font-semibold text-white hover:bg-slate-800">
                  {service.action.label}
                </Link>
              </div>
              <div className="rounded-2xl border border-gray-200 bg-white p-6 text-sm text-gray-600">
                <p className="font-medium text-gray-900">他の事業を見る</p>
                <div className="mt-4 space-y-2">
                  {Object.entries(serviceDetails).map(([slug, detail]) => (
                    <Link
                      key={slug}
                      href={`/services/${slug}`}
                      className={`block text-sm ${slug === params.slug ? 'text-primary-600 font-semibold' : 'text-gray-600 hover:text-primary-600'}`}
                    >
                      {detail.title}
                    </Link>
                  ))}
                </div>
              </div>
            </aside>
          </div>
          <div className="mt-12">
            <Link href="/services" className="text-sm font-medium text-primary-600 hover:text-primary-700">
              ← 事業一覧に戻る
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
