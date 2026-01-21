'use client';

import { useMemo, useState } from 'react';
import Link from 'next/link';
import type { Artwork, Artist } from '@/types/microcms';

interface FilterState {
  category: string;
  artist: string;
  status: string;
}

interface GalleryClientProps {
  artworks: Artwork[];
  artists: Artist[];
}

export default function GalleryClient({ artworks, artists }: GalleryClientProps) {
  const [filters, setFilters] = useState<FilterState>({
    category: '',
    artist: '',
    status: '',
  });

  const categories = useMemo(
    () => [...new Set(artworks.map((artwork) => artwork.category))],
    [artworks],
  );

  const filteredArtworks = useMemo(() => {
    let filtered = artworks;

    if (filters.category) {
      filtered = filtered.filter((artwork) => artwork.category === filters.category);
    }
    if (filters.artist) {
      filtered = filtered.filter((artwork) => artwork.artist.id === filters.artist);
    }
    if (filters.status) {
      filtered = filtered.filter((artwork) => artwork.status === filters.status);
    }

    return filtered;
  }, [artworks, filters]);

  const handleFilterChange = (key: keyof FilterState, value: string) => {
    setFilters((prev) => ({
      ...prev,
      [key]: value === prev[key] ? '' : value,
    }));
  };

  return (
    <div className="bg-gray-50 min-h-screen">
      <section className="bg-white">
        <div className="mx-auto max-w-7xl px-6 py-24 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl">
              ギャラリー
            </h1>
            <p className="mt-6 text-lg leading-8 text-gray-600">
              取扱い作品のご紹介
            </p>
          </div>
        </div>
      </section>

      <section className="section-padding">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="card">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  カテゴリ
                </label>
                <div className="flex flex-wrap gap-2">
                  {categories.map((category) => (
                    <button
                      key={category}
                      onClick={() => handleFilterChange('category', category)}
                      className={`px-3 py-1 rounded-full text-sm font-medium transition-colors ${
                        filters.category === category
                          ? 'bg-primary-600 text-white'
                          : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
                      }`}
                    >
                      {category}
                    </button>
                  ))}
                </div>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  作家
                </label>
                <select
                  value={filters.artist}
                  onChange={(e) => setFilters((prev) => ({ ...prev, artist: e.target.value }))}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary-500"
                >
                  <option value="">すべての作家</option>
                  {artists.map((artist) => (
                    <option key={artist.id} value={artist.id}>
                      {artist.name}
                    </option>
                  ))}
                </select>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  在庫状況
                </label>
                <div className="flex gap-2">
                  {['Available', 'Reserved', 'SOLD'].map((status) => (
                    <button
                      key={status}
                      onClick={() => handleFilterChange('status', status)}
                      className={`px-3 py-1 rounded-full text-sm font-medium transition-colors ${
                        filters.status === status
                          ? status === 'Available'
                            ? 'bg-green-600 text-white'
                            : status === 'Reserved'
                            ? 'bg-yellow-600 text-white'
                            : 'bg-red-600 text-white'
                          : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
                      }`}
                    >
                      {status === 'Available'
                        ? '販売中'
                        : status === 'Reserved'
                        ? '予約済み'
                        : '売却済み'}
                    </button>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section-padding">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          {filteredArtworks.length === 0 ? (
            <div className="text-center py-12">
              <p className="text-gray-500 text-lg">該当する作品が見つかりませんでした。</p>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredArtworks.map((artwork) => (
                <div key={artwork.id} className="group relative">
                  <div className="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-md bg-gray-200 lg:aspect-none group-hover:opacity-75 lg:h-80">
                    <img
                      src={artwork.images[0]?.url}
                      alt={artwork.title}
                      className="h-full w-full object-cover object-center lg:h-full lg:w-full"
                    />
                  </div>
                  <div className="mt-4 flex justify-between">
                    <div>
                      <h3 className="text-sm text-gray-700">
                        <Link href={`/gallery/${artwork.slug}`}>
                          <span className="absolute inset-0" />
                          {artwork.title}
                        </Link>
                      </h3>
                      <p className="mt-1 text-sm text-gray-500">{artwork.artist.name}</p>
                      <p className="mt-1 text-sm text-gray-500">{artwork.year}</p>
                    </div>
                    <div className="text-right">
                      <span
                        className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${
                          artwork.status === 'Available'
                            ? 'bg-green-100 text-green-800'
                            : artwork.status === 'Reserved'
                            ? 'bg-yellow-100 text-yellow-800'
                            : 'bg-red-100 text-red-800'
                        }`}
                      >
                        {artwork.status === 'Available'
                          ? '販売中'
                          : artwork.status === 'Reserved'
                          ? '予約済み'
                          : '売却済み'}
                      </span>
                      {artwork.price && (
                        <p className="mt-1 text-sm font-medium text-gray-900">
                          {artwork.price}
                        </p>
                      )}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </section>
    </div>
  );
}
