import "server-only";

import { db } from "@/db";

export const getCategories = async () => {
  const categories = await db.query.categoryTable.findMany({
    with: {
      products: true,
    },
  });
  return categories;
};
