import Link from 'next/link';
import { notFound } from 'next/navigation';
import { getArtwork } from '@/lib/microcms';
import type { Metadata } from 'next';

interface Props {
  params: {
    slug: string;
  };
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const artwork = await getArtwork(params.slug);
  
  if (!artwork) {
    return {
      title: '作品が見つかりません',
    };
  }

  return {
    title: `${artwork.title} | ${artwork.artist.name}`,
    description: artwork.description.substring(0, 160),
    openGraph: {
      title: `${artwork.title} | ${artwork.artist.name}`,
      description: artwork.description.substring(0, 160),
      images: artwork.images[0]?.url ? [artwork.images[0].url] : [],
    },
  };
}

export default async function ArtworkDetailPage({ params }: Props) {
  const artwork = await getArtwork(params.slug);

  if (!artwork) {
    notFound();
  }

  return (
    <div className="bg-gray-50 min-h-screen">
      <div className="mx-auto max-w-7xl px-6 py-24 lg:px-8">
        <div className="mx-auto max-w-4xl">
          <Link
            href="/gallery"
            className="inline-flex items-center text-sm text-gray-600 hover:text-gray-900 mb-8"
          >
            <i className="fas fa-arrow-left mr-2"></i>
            ギャラリーに戻る
          </Link>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* 画像セクション */}
            <div>
              <div className="aspect-w-1 aspect-h-1 w-full overflow-hidden rounded-lg bg-gray-200">
                <img
                  src={artwork.images[0]?.url}
                  alt={artwork.title}
                  className="h-full w-full object-cover object-center"
                />
              </div>
              {artwork.images.length > 1 && (
                <div className="mt-4 grid grid-cols-4 gap-2">
                  {artwork.images.slice(1).map((image, index) => (
                    <div key={index} className="aspect-w-1 aspect-h-1 overflow-hidden rounded-md bg-gray-200">
                      <img
                        src={image.url}
                        alt={`${artwork.title} - 画像${index + 2}`}
                        className="h-full w-full object-cover object-center"
                      />
                    </div>
                  ))}
                </div>
              )}
            </div>

            {/* 情報セクション */}
            <div>
              <div className="mb-6">
                <h1 className="text-3xl font-bold text-gray-900 mb-2">{artwork.title}</h1>
                <p className="text-lg text-gray-600">{artwork.artist.name}</p>
              </div>

              <div className="space-y-4 mb-8">
                <div className="flex justify-between items-center py-3 border-b border-gray-200">
                  <span className="text-sm font-medium text-gray-500">カテゴリ</span>
                  <span className="text-sm text-gray-900">{artwork.category}</span>
                </div>
                {artwork.year && (
                  <div className="flex justify-between items-center py-3 border-b border-gray-200">
                    <span className="text-sm font-medium text-gray-500">制作年</span>
                    <span className="text-sm text-gray-900">{artwork.year}</span>
                  </div>
                )}
                {artwork.material && (
                  <div className="flex justify-between items-center py-3 border-b border-gray-200">
                    <span className="text-sm font-medium text-gray-500">素材</span>
                    <span className="text-sm text-gray-900">{artwork.material}</span>
                  </div>
                )}
                {artwork.size && (
                  <div className="flex justify-between items-center py-3 border-b border-gray-200">
                    <span className="text-sm font-medium text-gray-500">サイズ</span>
                    <span className="text-sm text-gray-900">{artwork.size}</span>
                  </div>
                )}
                <div className="flex justify-between items-center py-3 border-b border-gray-200">
                  <span className="text-sm font-medium text-gray-500">在庫状況</span>
                  <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${
                    artwork.status === 'Available' ? 'bg-green-100 text-green-800' :
                    artwork.status === 'Reserved' ? 'bg-yellow-100 text-yellow-800' :
                    'bg-red-100 text-red-800'
                  }`}>
                    {artwork.status === 'Available' ? '販売中' :
                     artwork.status === 'Reserved' ? '予約済み' : '売却済み'}
                  </span>
                </div>
                {artwork.price && (
                  <div className="flex justify-between items-center py-3 border-b border-gray-200">
                    <span className="text-sm font-medium text-gray-500">価格</span>
                    <span className="text-lg font-semibold text-gray-900">{artwork.price}</span>
                  </div>
                )}
              </div>

              <div className="mb-8">
                <h3 className="text-lg font-semibold text-gray-900 mb-3">作品について</h3>
                <div 
                  className="text-gray-600 prose prose-sm max-w-none"
                  dangerouslySetInnerHTML={{ __html: artwork.description }}
                />
              </div>

              {artwork.status === 'Available' && (
                <div className="space-y-3">
                  <Link
                    href={`/contact?type=artwork&artworkId=${artwork.id}&artworkTitle=${encodeURIComponent(artwork.title)}`}
                    className="w-full btn-primary text-center"
                  >
                    この作品について問い合わせる
                  </Link>
                  <p className="text-xs text-gray-500 text-center">
                    ※色味は実際の作品と若干異なる場合があります。
                  </p>
                </div>
              )}

              {artwork.status === 'Reserved' && (
                <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-4">
                  <p className="text-yellow-800 text-sm">
                    <i className="fas fa-info-circle mr-2"></i>
                    この作品は現在予約済みです。キャンセル待ちをご希望の場合はお問い合わせください。
                  </p>
                </div>
              )}

              {artwork.status === 'SOLD' && (
                <div className="bg-gray-50 border border-gray-200 rounded-lg p-4">
                  <p className="text-gray-600 text-sm">
                    <i className="fas fa-check-circle mr-2"></i>
                    この作品は売却済みです。類似の作品をお探しの場合はお問い合わせください。
                  </p>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}