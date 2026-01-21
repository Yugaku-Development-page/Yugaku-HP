import Link from 'next/link';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: '事業内容',
  description: '株式会社由岳の事業内容について。アプリ制作、美術品取扱、SNS運用支援をご紹介します。',
};

export default function ServicesPage() {
  return (
    <div className="bg-gray-50">
      {/* ヒーローセクション */}
      <section className="bg-white">
        <div className="mx-auto max-w-7xl px-6 py-24 lg:px-8">
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
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}