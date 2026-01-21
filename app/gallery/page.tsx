import { getArtists, getArtworks } from '@/lib/microcms';
import GalleryClient from './GalleryClient';

export const revalidate = 60;

export default async function GalleryPage() {
  const [artworks, artists] = await Promise.all([getArtworks(), getArtists()]);

  return <GalleryClient artworks={artworks} artists={artists} />;
}
