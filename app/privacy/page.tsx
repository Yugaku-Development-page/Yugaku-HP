import Link from 'next/link';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'プライバシーポリシー',
  description: '株式会社由岳のプライバシーポリシー',
};

export default function PrivacyPage() {
  return (
    <div className="bg-gray-50 min-h-screen">
      {/* ヒーローセクション */}
      <section className="bg-white">
        <div className="mx-auto max-w-7xl px-6 py-24 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl">
              プライバシーポリシー
            </h1>
            <p className="mt-6 text-lg leading-8 text-gray-600">
              Privacy Policy
            </p>
          </div>
        </div>
      </section>

      {/* コンテンツ */}
      <section className="section-padding">
        <div className="mx-auto max-w-4xl px-6 lg:px-8">
          <div className="card">
            <div className="prose prose-lg max-w-none">
              <p className="text-gray-600 mb-8">
                株式会社由岳（以下「当社」といいます。）は、当社が運営するウェブサイト（以下「本サイト」といいます。）において取得する利用者の情報について、以下のとおりプライバシーポリシー（以下「本ポリシー」といいます。）を定めます。
              </p>

              <h2 className="text-xl font-bold text-gray-900 mt-8 mb-4">1. 取得する情報</h2>
              <p className="text-gray-600 mb-6">
                当社は、本サイトの利用にあたり、以下の情報を取得する場合があります。
              </p>
              <h3 className="text-lg font-semibold text-gray-900 mb-3">利用者が入力する情報</h3>
              <ul className="text-gray-600 mb-6 space-y-2">
                <li>・氏名、会社名（屋号）、メールアドレス、電話番号、お問い合わせ内容、その他フォームに入力された情報</li>
              </ul>
              <h3 className="text-lg font-semibold text-gray-900 mb-3">自動的に取得される情報</h3>
              <ul className="text-gray-600 mb-6 space-y-2">
                <li>・Cookie、アクセスログ、端末情報、ブラウザ情報、IPアドレス等</li>
                <li>※取得の有無や範囲は、本サイトの構成や利用状況により異なります。</li>
              </ul>

              <h2 className="text-xl font-bold text-gray-900 mt-8 mb-4">2. 利用目的</h2>
              <p className="text-gray-600 mb-6">
                当社は、取得した情報を以下の目的で利用します。
              </p>
              <ul className="text-gray-600 mb-6 space-y-2">
                <li>・お問い合わせへの回答、連絡、必要な手続のため</li>
                <li>・本サイトおよび当社サービスの提供・運営・改善のため</li>
                <li>・不正アクセス、不正利用の防止、セキュリティ確保のため</li>
                <li>・利用規約・ポリシー違反への対応、紛争対応のため</li>
                <li>・法令またはガイドライン等への対応のため</li>
                <li>・その他、上記利用目的に付随する目的のため</li>
              </ul>

              <h2 className="text-xl font-bold text-gray-900 mt-8 mb-4">3. 第三者提供</h2>
              <p className="text-gray-600 mb-6">
                当社は、次の場合を除き、利用者の個人情報を第三者に提供しません。
              </p>
              <ul className="text-gray-600 mb-6 space-y-2">
                <li>・利用者の同意がある場合</li>
                <li>・法令に基づく場合</li>
                <li>・人の生命・身体・財産の保護のために必要で、本人の同意を得ることが困難な場合</li>
                <li>・公衆衛生の向上または児童の健全な育成の推進のために特に必要で、本人の同意を得ることが困難な場合</li>
                <li>・国の機関等が法令の定める事務を遂行することに協力する必要があり、本人の同意を得ることで当該事務の遂行に支障を及ぼすおそれがある場合</li>
              </ul>

              <h2 className="text-xl font-bold text-gray-900 mt-8 mb-4">4. 委託</h2>
              <p className="text-gray-600 mb-6">
                当社は、利用目的の達成に必要な範囲で、取得した情報の取扱いを外部事業者に委託する場合があります（例：ホスティング、CMS、フォーム、メール配信、アクセス解析等）。この場合、当社は委託先に対し適切な監督を行います。
              </p>

              <h2 className="text-xl font-bold text-gray-900 mt-8 mb-4">5. Cookie等の利用</h2>
              <p className="text-gray-600 mb-6">
                本サイトでは、利便性向上や利用状況の把握のため、Cookie等を使用する場合があります。利用者はブラウザ設定によりCookieを無効化できますが、その場合、本サイトの一部機能が利用できないことがあります。
              </p>

              <h2 className="text-xl font-bold text-gray-900 mt-8 mb-4">6. 外部サービスへのリンク・埋め込み</h2>
              <p className="text-gray-600 mb-6">
                本サイトには、外部サービスへのリンクや埋め込みコンテンツが含まれる場合があります。外部サービスにおける個人情報等の取扱いについては、当該サービス提供者のプライバシーポリシーをご確認ください。
              </p>

              <h2 className="text-xl font-bold text-gray-900 mt-8 mb-4">7. 安全管理措置</h2>
              <p className="text-gray-600 mb-6">
                当社は、個人情報の漏えい、滅失、毀損等を防止するため、必要かつ適切な安全管理措置を講じます。
              </p>

              <h2 className="text-xl font-bold text-gray-900 mt-8 mb-4">8. 開示・訂正・利用停止等</h2>
              <p className="text-gray-600 mb-6">
                利用者は、当社が保有する自己の個人情報について、法令に基づき、開示、訂正、追加、削除、利用停止等を求めることができます。ご希望の場合は、下記窓口までご連絡ください。
              </p>

              <h2 className="text-xl font-bold text-gray-900 mt-8 mb-4">9. お問い合わせ窓口</h2>
              <p className="text-gray-600 mb-6">
                本ポリシーに関するお問い合わせは、本サイトのお問い合わせフォームよりご連絡ください。
              </p>

              <h2 className="text-xl font-bold text-gray-900 mt-8 mb-4">10. 本ポリシーの変更</h2>
              <p className="text-gray-600 mb-6">
                当社は、法令等の変更や運用上の必要に応じて、本ポリシーを変更することがあります。変更後の内容は、本サイトに掲載した時点で効力を生じます。
              </p>

              <div className="mt-12 pt-8 border-t border-gray-200">
                <p className="text-sm text-gray-500 text-center">
                  制定日：2026年1月19日<br />
                  株式会社由岳
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* お問い合わせ */}
      <section className="section-padding bg-secondary-900 text-white">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl mb-6">
              プライバシーポリシーについて
            </h2>
            <p className="mx-auto mt-6 max-w-xl text-lg leading-8 text-gray-300 mb-8">
              プライバシーポリシーについてご不明な点がございましたら、お気軽にお問い合わせください。
            </p>
            <Link href="/contact" className="btn-primary">
              お問い合わせ
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
