export interface Artwork {
  id: string;
  title: string;
  slug?: string;
  images: {
    url: string;
    height: number;
    width: number;
  }[];
  artist?: Artist | null;
  category: string;
  year?: string;
  material?: string;
  size?: string;
  price?: string;
  status: 'Available' | 'Reserved' | 'SOLD';
  description: string;
  createdAt: string;
  updatedAt: string;
}

export interface Artist {
  id: string;
  name: string;
  slug: string;
  profile: string;
  image?: {
    url: string;
    height: number;
    width: number;
  };
  createdAt: string;
  updatedAt: string;
}

export interface News {
  id: string;
  title: string;
  slug?: string;
  date: string;
  body: string;
  cover?: {
    url: string;
    height: number;
    width: number;
  };
  createdAt: string;
  updatedAt: string;
}

export interface ContactForm {
  type: 'app' | 'artwork' | 'other' | 'sns';
  name?: string;
  company?: string;
  email: string;
  phone?: string;
  content: string;
  artworkTitle?: string;
  artworkId?: string;
}
