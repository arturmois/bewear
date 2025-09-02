export interface Product {
  id: string;
  name: string;
  createdAt: Date;
  updatedAt: Date;
  description: string;
  slug: string;
  categoryId: string;
  category: {
    id: string;
    name: string;
    createdAt: Date;
    updatedAt: Date;
    slug: string;
  };
  variants: {
    id: string;
    name: string;
    createdAt: Date;
    updatedAt: Date;
    slug: string;
    productId: string;
    color: string;
    priceInCents: number;
    imageUrl: string;
  }[];
}
export interface ProductVariant {
  id: string;
  name: string;
  createdAt: Date;
  updatedAt: Date;
  slug: string;
  productId: string;
}
