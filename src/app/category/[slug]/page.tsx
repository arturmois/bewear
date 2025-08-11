import { eq } from "drizzle-orm";
import { notFound } from "next/navigation";

import Footer from "@/components/common/footer";
import Header from "@/components/common/header";
import ProductCard from "@/components/common/product-card";
import { db } from "@/db";
import { categoryTable, productTable } from "@/db/schema";

interface CategoryPageProps {
  params: Promise<{ slug: string }>;
}

const CategoryPage = async ({ params }: CategoryPageProps) => {
  const { slug } = await params;
  const category = await db.query.categoryTable.findFirst({
    where: eq(categoryTable.slug, slug),
  });
  if (!category) {
    notFound();
  }
  const products = await db.query.productTable.findMany({
    where: eq(productTable.categoryId, category.id),
    with: {
      variants: true,
    },
  });

  return (
    <>
      <Header />
      <div className="space-y-5 px-5">
        <h1 className="text-2xl font-semibold">{category.name}</h1>
        <div className="grid grid-cols-2 gap-4">
          {products.map((product) => (
            <ProductCard
              key={product.id}
              product={product}
              textContainerClassName="max-w-full"
            />
          ))}
        </div>
      </div>
      <Footer />
    </>
  );
};

export default CategoryPage;
