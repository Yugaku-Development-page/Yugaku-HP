import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="bg-slate-900 text-white">
      <div className="mx-auto max-w-7xl px-6 py-14 lg:px-8">
        <div className="grid grid-cols-1 gap-10 md:grid-cols-2 lg:grid-cols-4">
          <div>
            <h3 className="text-lg font-semibold">株式会社由岳</h3>
            <p className="mt-3 text-sm text-slate-300">
              アートとデジタルの融合で、企業と個人の価値を編集するクリエイティブカンパニー。
            </p>
            <div className="mt-6 space-y-2 text-xs text-slate-400">
              <p>所在地：神奈川県横浜市</p>
              <p>事業領域：アプリ開発 / 美術品取扱 / SNS運用支援</p>
            </div>
          </div>

          <div>
            <h4 className="text-sm font-semibold">サービス</h4>
            <ul className="mt-4 space-y-2 text-sm text-slate-300">
              <li>
                <Link href="/services/app-development" className="hover:text-white">
                  アプリ開発・運用
                </Link>
              </li>
              <li>
                <Link href="/services/art-trading" className="hover:text-white">
                  美術品取扱
                </Link>
              </li>
              <li>
                <Link href="/services/sns-support" className="hover:text-white">
                  SNS運用支援
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-sm font-semibold">コンテンツ</h4>
            <ul className="mt-4 space-y-2 text-sm text-slate-300">
              <li>
                <Link href="/gallery" className="hover:text-white">
                  ギャラリー
                </Link>
              </li>
              <li>
                <Link href="/news" className="hover:text-white">
                  ニュース
                </Link>
              </li>
              <li>
                <Link href="/company" className="hover:text-white">
                  会社情報
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-sm font-semibold">お問い合わせ</h4>
            <p className="mt-4 text-sm text-slate-300">
              プロジェクトのご相談や作品の購入・委託について、まずはお気軽にお問い合わせください。
            </p>
            <Link
              href="/contact"
              className="mt-5 inline-flex items-center rounded-full bg-white/10 px-4 py-2 text-sm font-semibold text-white transition hover:bg-white/20"
            >
              お問い合わせフォーム
            </Link>
            <ul className="mt-6 space-y-2 text-xs text-slate-400">
              <li>
                <Link href="/privacy" className="hover:text-white">
                  プライバシーポリシー
                </Link>
              </li>
              <li>
                <Link href="/disclaimer" className="hover:text-white">
                  免責事項
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-10 border-t border-white/10 pt-6 text-xs text-slate-400 md:flex md:items-center md:justify-between">
          <span>© 2026 Yugaku Inc. All rights reserved.</span>
          <span>作品の色味は実物と異なる場合があります。</span>
        </div>
      </div>
    </footer>
  );
}
