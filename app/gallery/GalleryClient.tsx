'use client';

import { useMemo, useState } from 'react';
import Link from 'next/link';
import type { Artwork, Artist } from '@/types/microcms';
import { formatPrice } from '@/lib/format';

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

  const categories = useMemo(() => {
    const normalized = artworks
      .map((artwork) => artwork.category)
      .filter((category): category is string => typeof category === 'string')
      .map((category) => category.trim())
      .filter(Boolean);

    return Array.from(new Set(normalized)).sort((a, b) => a.localeCompare(b, 'ja'));
  }, [artworks]);

  const statusLabels: Record<string, string> = {
    Available: '販売中',
    Reserved: '予約済み',
    SOLD: '売却済み',
  };

  const filteredArtworks = useMemo(() => {
    let filtered = artworks;

    if (filters.category) {
      filtered = filtered.filter((artwork) => artwork.category === filters.category);
    }
    if (filters.artist) {
      filtered = filtered.filter((artwork) => artwork.artist?.id === filters.artist);
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
    <div className="min-h-screen bg-slate-50">
      <section className="relative overflow-hidden bg-gradient-to-br from-slate-900 via-slate-800 to-indigo-900 text-white">
        <div className="pointer-events-none absolute inset-0 opacity-60">
          <div className="absolute -left-16 top-10 h-64 w-64 rounded-full bg-indigo-500/30 blur-3xl" />
          <div className="absolute bottom-0 right-0 h-72 w-72 rounded-full bg-sky-400/20 blur-3xl" />
        </div>
        <div className="relative mx-auto max-w-7xl px-6 py-24 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <h1 className="text-4xl font-bold tracking-tight sm:text-6xl">
              ギャラリー
            </h1>
            <p className="mt-6 text-lg leading-8 text-slate-200">
              取扱い作品のご紹介
            </p>
          </div>
        </div>
      </section>

      <section className="section-padding">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="rounded-2xl border border-slate-200/80 bg-white/90 p-6 shadow-sm">
            <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
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
                  className="w-full rounded-md border border-gray-300 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-primary-500"
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
                <div className="flex flex-wrap gap-2">
                  {(['Available', 'Reserved', 'SOLD'] as const).map((status) => (
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
                      {statusLabels[status]}
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
            <div className="py-12 text-center">
              <p className="text-lg text-gray-500">該当する作品が見つかりませんでした。</p>
            </div>
          ) : (
            <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
              {filteredArtworks.map((artwork) => (
                <Link
                  key={artwork.id}
                  href={`/gallery/${artwork.slug ?? artwork.id}`}
                  className="group relative overflow-hidden rounded-2xl border border-slate-200/80 bg-white shadow-sm transition hover:-translate-y-1 hover:border-slate-300 hover:shadow-md"
                >
                  <div className="aspect-[4/3] w-full overflow-hidden bg-slate-100">
                    {artwork.images[0]?.url ? (
                      <img
                        src={artwork.images[0].url}
                        alt={artwork.title}
                        className="h-full w-full object-cover object-center transition duration-300 group-hover:scale-105"
                      />
                    ) : (
                      <div className="flex h-full w-full items-center justify-center bg-gradient-to-br from-slate-100 to-slate-200 text-slate-400">
                        <i className="fas fa-image text-4xl"></i>
                      </div>
                    )}
                  </div>
                  <div className="space-y-3 p-5">
                    <div className="flex items-start justify-between gap-2">
                      <div>
                        <h3 className="text-sm font-semibold text-slate-800">
                          {artwork.title}
                        </h3>
                        <p className="mt-1 text-sm text-slate-500">
                          {artwork.artist?.name ?? 'アーティスト未設定'}
                        </p>
                      </div>
                      <span
                        className={`inline-flex items-center rounded-full px-2.5 py-0.5 text-xs font-medium ${
                          artwork.status === 'Available'
                            ? 'bg-green-100 text-green-800'
                            : artwork.status === 'Reserved'
                            ? 'bg-yellow-100 text-yellow-800'
                            : 'bg-red-100 text-red-800'
                        }`}
                      >
                        {statusLabels[artwork.status]}
                      </span>
                    </div>
                    <div className="flex items-center justify-between text-sm text-slate-500">
                      <span>{artwork.year}</span>
                      {artwork.price && (
                        <span className="font-medium text-slate-800">
                          {formatPrice(artwork.price)}
                        </span>
                      )}
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          )}
        </div>
      </section>
    </div>
  );
}
