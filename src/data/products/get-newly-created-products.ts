import "server-only";

import { desc } from "drizzle-orm";

import { db } from "@/db";
import { productTable } from "@/db/schema";

import type { Product } from "./product-dto";

export const getNewlyCreatedProducts = async (): Promise<Product[]> => {
  const products = await db.query.productTable.findMany({
    orderBy: [desc(productTable.createdAt)],
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
