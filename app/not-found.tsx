import Link from 'next/link';

export default function NotFound() {
  return (
    <div className="bg-gray-50 min-h-screen flex items-center justify-center">
      <div className="mx-auto max-w-7xl px-6 py-24 lg:px-8 text-center">
        <div className="mx-auto max-w-2xl">
          <h1 className="text-6xl font-bold text-gray-900 mb-4">404</h1>
          <h2 className="text-3xl font-semibold text-gray-900 mb-6">
            ページが見つかりません
          </h2>
          <p className="text-lg text-gray-600 mb-8">
            お探しのページは、削除されたかURLが変更された可能性があります。
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/" className="btn-primary">
              トップページに戻る
            </Link>
            <Link href="/contact" className="btn-secondary">
              お問い合わせ
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}