import "server-only";

import { db } from "@/db";

import type { Product } from "./product-dto";

export const getProducts = async (): Promise<Product[]> => {
  const products = await db.query.productTable.findMany({
    with: {
      variants: true,
      category: true,
    },
  });
  return products.map((product) => ({
    id: product.id,
    name: product.name,
    description: product.description,
    slug: product.slug,
    categoryId: product.categoryId,
    category: product.category,
    createdAt: product.createdAt,
    updatedAt: product.updatedAt,
    variants: product.variants,
  }));
};
