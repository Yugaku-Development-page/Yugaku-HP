import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="bg-secondary-900 text-white">
      <div className="mx-auto max-w-7xl px-6 py-12 lg:px-8">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
          <div>
            <h3 className="text-lg font-semibold mb-4">株式会社由岳</h3>
            <p className="text-gray-300 text-sm">
              アートとデジタルで、価値を編集する。
            </p>
          </div>
          
          <div>
            <h4 className="text-md font-medium mb-4">事業内容</h4>
            <ul className="space-y-2 text-sm text-gray-300">
              <li>アプリ制作（企画・開発）</li>
              <li>美術品取扱（ギャラリー・販売・委託）</li>
              <li>SNS運用支援（紹介制）</li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-md font-medium mb-4">リンク</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/privacy" className="text-gray-300 hover:text-white transition-colors">
                  プライバシーポリシー
                </Link>
              </li>
              <li>
                <Link href="/disclaimer" className="text-gray-300 hover:text-white transition-colors">
                  免責事項
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-gray-300 hover:text-white transition-colors">
                  お問い合わせ
                </Link>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="mt-8 border-t border-gray-700 pt-8 text-center">
          <p className="text-sm text-gray-400">
            © 2025 株式会社由岳. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}