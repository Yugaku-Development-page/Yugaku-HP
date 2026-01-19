import { Metadata } from 'next';

export const metadata: Metadata = {
  title: {
    default: '株式会社由岳 - アートとデジタルで、価値を編集する',
    template: '%s | 株式会社由岳',
  },
  description: '株式会社由岳は、アプリの企画・開発と、美術品の取扱いを通じて、個人と企業の価値創造を支援します。',
  keywords: 'アプリ開発, 美術品, ギャラリー, 由岳, 横浜',
  authors: [{ name: '株式会社由岳' }],
  openGraph: {
    title: '株式会社由岳 - アートとデジタルで、価値を編集する',
    description: 'アプリ開発と美術品取扱いで価値創造を支援',
    type: 'website',
    locale: 'ja_JP',
  },
  twitter: {
    card: 'summary_large_image',
  },
};