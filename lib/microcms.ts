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

const normalizeArtwork = (artwork: Artwork) => {
  const images = Array.isArray(artwork.images)
    ? artwork.images
    : artwork.images
      ? [artwork.images as Artwork['images'][number]]
      : [];

  return {
    ...artwork,
    images,
  };
};

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
    const response = await cmsClient.get({
      endpoint: 'artworks',
      queries: {
        limit: 1,
        filters: `slug[equals]${slug}`,
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

export const getNews = async (limit = 10, offset = 0) => {
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
        orders: '-date',
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
    const response = await cmsClient.get({
      endpoint: 'news',
      contentId: slug,
    });
    return response as News;
  } catch (error) {
    console.error('Error fetching news item:', error);
    return null;
  }
};
