'use client';

import { useMemo, useState } from 'react';

interface ArtworkImage {
  url: string;
  height?: number;
  width?: number;
}

interface ArtworkImageGalleryProps {
  images: ArtworkImage[];
  title: string;
}

export default function ArtworkImageGallery({ images, title }: ArtworkImageGalleryProps) {
  const sanitizedImages = useMemo(
    () => images.filter((image) => Boolean(image?.url)),
    [images],
  );
  const [activeIndex, setActiveIndex] = useState(0);
  const activeImage = sanitizedImages[activeIndex];

  if (sanitizedImages.length === 0) {
    return (
      <div className="aspect-[4/3] w-full overflow-hidden rounded-2xl border border-slate-200/80 bg-gray-200 shadow-sm">
        <div className="flex h-full w-full items-center justify-center bg-gradient-to-br from-slate-100 to-slate-200 text-slate-400">
          <i className="fas fa-image text-4xl"></i>
        </div>
      </div>
    );
  }

  return (
    <div>
      <div className="aspect-[4/3] w-full overflow-hidden rounded-2xl border border-slate-200/80 bg-gray-200 shadow-sm">
        <img
          src={activeImage.url}
          alt={title}
          className="h-full w-full object-cover object-center"
        />
      </div>
      {sanitizedImages.length > 1 && (
        <div className="mt-4 grid grid-cols-4 gap-3">
          {sanitizedImages.map((image, index) => (
            <button
              key={`${image.url}-${index}`}
              type="button"
              onClick={() => setActiveIndex(index)}
              className={`aspect-square overflow-hidden rounded-lg border ${
                index === activeIndex
                  ? 'border-primary-600 ring-2 ring-primary-200'
                  : 'border-slate-200/80'
              } bg-gray-200 focus:outline-none focus:ring-2 focus:ring-primary-500`}
            >
              <img
                src={image.url}
                alt={`${title} - 画像${index + 1}`}
                className="h-full w-full object-cover object-center"
              />
            </button>
          ))}
        </div>
      )}
    </div>
  );
}
