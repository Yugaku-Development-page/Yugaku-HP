import Link from 'next/link';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: '免責事項',
  description: '株式会社由岳のウェブサイト利用に関する免責事項',
};

export default function DisclaimerPage() {
  return (
    <div className="bg-gray-50 min-h-screen">
      {/* ヒーローセクション */}
      <section className="bg-white">
        <div className="mx-auto max-w-7xl px-6 py-24 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl">
              免責事項
            </h1>
            <p className="mt-6 text-lg leading-8 text-gray-600">
              Disclaimer
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
                株式会社由岳（以下「当社」といいます。）は、以下のとおり免責事項を定めます。
              </p>

              <h2 className="text-xl font-bold text-gray-900 mt-8 mb-4">1. 情報の正確性について</h2>
              <p className="text-gray-600 mb-6">
                当社は、本サイトに掲載されている情報の正確性、完全性、有用性について、いかなる保証も行いません。本サイトの情報を利用されたことにより、利用者または第三者に生じた損害について、当社は一切の責任を負いません。
              </p>

              <h2 className="text-xl font-bold text-gray-900 mt-8 mb-4">2. サービスの変更・中断・停止</h2>
              <p className="text-gray-600 mb-6">
                当社は、本サイトの利用者に事前に通知することなく、本サイトに掲載された情報の変更、削除、本サイトの運営を中断または停止することがあります。本サイトの運営の中断または停止により、利用者または第三者が被った損害について、当社は一切の責任を負いません。
              </p>

              <h2 className="text-xl font-bold text-gray-900 mt-8 mb-4">3. リンク先のウェブサイト</h2>
              <p className="text-gray-600 mb-6">
                本サイトからリンクされている他のウェブサイト（以下「リンクサイト」といいます。）の内容は、それぞれリンクサイトの責任において管理されるものです。リンクサイトの内容について、当社は一切の責任を負いません。
              </p>

              <h2 className="text-xl font-bold text-gray-900 mt-8 mb-4">4. 著作権</h2>
              <p className="text-gray-600 mb-6">
                本サイトに掲載されている内容（文章、図表、画像、映像、音楽、プログラム等）に関する著作権等の権利は、特に記載のない限り当社に帰属します。これらの情報は、私的使用その他著作権法により認められる範囲を超えて、当社の事前の同意なく使用（複製、改変、転載、配布等を含む）することはできません。
              </p>

              <h2 className="text-xl font-bold text-gray-900 mt-8 mb-4">5. 商品・サービスの内容</h2>
              <p className="text-gray-600 mb-6">
                当社は、本サイトで紹介している商品・サービスの内容、仕様、外観、価格等を予告なしに変更することがあります。また、商品・サービスの販売・提供を予告なしに中止することがあります。
              </p>

              <h2 className="text-xl font-bold text-gray-900 mt-8 mb-4">6. 美術品に関する注意事項</h2>
              <p className="text-gray-600 mb-6">
                本サイトに掲載されている美術品の色味は、ご利用のモニターや環境により実際の作品と異なる場合があります。作品の在庫状況は常に変動しており、掲載時点での在庫状況を保証するものではありません。価格は予告なく変更される場合があります。
              </p>

              <div className="mt-12 pt-8 border-t border-gray-200">
                <p className="text-sm text-gray-500 text-center">
                  最終更新日：{new Date().toLocaleDateString('ja-JP')}
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
              ご不明な点がございましたら
            </h2>
            <p className="mx-auto mt-6 max-w-xl text-lg leading-8 text-gray-300 mb-8">
              免責事項についてご不明な点がございましたら、お気軽にお問い合わせください。
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