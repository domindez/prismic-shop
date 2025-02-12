import type { ImageFieldImage, RichTextField } from "@prismicio/client";

interface IGalleryItem {
  image: ImageFieldImage & {
    thumbnail: ImageFieldImage;
  };
}

export interface IProduct {
  uid: string | null;
  name: RichTextField;
  description: RichTextField;
  price: number;
  gallery: IGalleryItem[];
}