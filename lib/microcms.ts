import { createClient } from 'microcms-js-sdk';
import type { Artwork, Artist, News } from '@/types/microcms';

const serviceDomain =
  process.env.MICROCMS_SERVICE_DOMAIN ||
  process.env.NEXT_PUBLIC_MICROCMS_SERVICE_DOMAIN ||
  '';
const apiKey =
  process.env.MICROCMS_API_KEY || process.env.NEXT_PUBLIC_MICROCMS_API_KEY || '';

const client = serviceDomain && apiKey
  ? createClient({
      serviceDomain,
      apiKey,
    })
  : null;

const getClient = () => {
  if (!client) {
    console.warn('microCMS client is not configured. Check environment variables.');
    return null;
  }
  return client;
};

const normalizeArtworkStatus = (status?: Artwork['status'] | string) => {
  if (!status) {
    return 'Available' as Artwork['status'];
  }

  const normalized = status.toString().trim().toLowerCase();

  if (['available', '販売中', '販売', 'on sale', 'for sale'].includes(normalized)) {
    return 'Available';
  }

  if (['reserved', '予約済み', '予約', 'hold', 'held'].includes(normalized)) {
    return 'Reserved';
  }

  if (['sold', '売却済み', '売却', 'completed'].includes(normalized)) {
    return 'SOLD';
  }

  return 'Available';
};

const normalizeArtworkImages = (artwork: Artwork) => {
  const rawImages = (artwork as Artwork & { image?: Artwork['images'][number] }).images ??
    (artwork as Artwork & { image?: Artwork['images'][number] }).image;

  if (Array.isArray(rawImages)) {
    return rawImages.filter((image) => Boolean(image?.url));
  }

  if (rawImages && typeof rawImages === 'object' && 'url' in rawImages) {
    return [rawImages as Artwork['images'][number]];
  }

  return [];
};

const normalizeArtwork = (artwork: Artwork) => ({
  ...artwork,
  status: normalizeArtworkStatus(artwork.status),
  images: normalizeArtworkImages(artwork),
});

export const getArtworks = async (limit = 100, offset = 0) => {
  try {
    const cmsClient = getClient();
    if (!cmsClient) {
      return [];
    }
    const response = await cmsClient.get({
      endpoint: 'artworks',
      queries: {
        limit,
        offset,
        orders: '-createdAt',
        depth: 2,
      },
    });
    return (response.contents as Artwork[]).map(normalizeArtwork);
  } catch (error) {
    console.error('Error fetching artworks:', error);
    return [];
  }
};

export const getArtworkBySlug = async (slug: string) => {
  try {
    const cmsClient = getClient();
    if (!cmsClient) {
      return null;
    }
    try {
      const response = await cmsClient.get({
        endpoint: 'artworks',
        contentId: slug,
        queries: {
          depth: 2,
        },
      });
      return normalizeArtwork(response as Artwork);
    } catch (error) {
      console.warn('Fallback to slug query for artwork:', error);
    }

    const response = await cmsClient.get({
      endpoint: 'artworks',
      queries: {
        limit: 1,
        filters: `slug[equals]${slug}`,
        depth: 2,
      },
    });
    const artwork = (response.contents as Artwork[])[0];
    return artwork ? normalizeArtwork(artwork) : null;
  } catch (error) {
    console.error('Error fetching artwork:', error);
    return null;
  }
};

export const getArtists = async () => {
  try {
    const cmsClient = getClient();
    if (!cmsClient) {
      return [];
    }
    const response = await cmsClient.get({
      endpoint: 'artists',
      queries: {
        limit: 100,
      },
    });
    return response.contents as Artist[];
  } catch (error) {
    console.error('Error fetching artists:', error);
    return [];
  }
};

export const getNews = async (limit = 100, offset = 0) => {
  try {
    const cmsClient = getClient();
    if (!cmsClient) {
      return [];
    }
    const response = await cmsClient.get({
      endpoint: 'news',
      queries: {
        limit,
        offset,
        orders: '-date,-createdAt',
      },
    });
    return response.contents as News[];
  } catch (error) {
    console.error('Error fetching news:', error);
    return [];
  }
};

export const getNewsItem = async (slug: string) => {
  try {
    const cmsClient = getClient();
    if (!cmsClient) {
      return null;
    }
    try {
      const response = await cmsClient.get({
        endpoint: 'news',
        contentId: slug,
      });
      return response as News;
    } catch (error) {
      console.warn('Fallback to slug query for news item:', error);
    }

    const response = await cmsClient.get({
      endpoint: 'news',
      queries: {
        limit: 1,
        filters: `slug[equals]${slug}`,
      },
    });
    return (response.contents as News[])[0] ?? null;
  } catch (error) {
    console.error('Error fetching news item:', error);
    return null;
  }
};
