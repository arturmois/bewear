import { desc } from "drizzle-orm";
import Image from "next/image";

import CategorySelector from "@/components/common/category-selector";
import Footer from "@/components/common/footer";
import Header from "@/components/common/header";
import PartnerBrands from "@/components/common/partner-brands";
import ProductList from "@/components/common/product-list";
import { db } from "@/db";
import { productTable } from "@/db/schema";

const Home = async () => {
  const products = await db.query.productTable.findMany({
    with: {
      variants: true,
    },
  });
  const newlyCreatedProducts = await db.query.productTable.findMany({
    with: {
      variants: true,
    },
    orderBy: [desc(productTable.createdAt)],
  });
  const categories = await db.query.categoryTable.findMany();
  const partnerBrands = [
    {
      name: "Nike",
      image: "/nike.svg",
    },
    {
      name: "Adidas",
      image: "/adidas.svg",
    },
    {
      name: "Puma",
      image: "/puma.svg",
    },
    {
      name: "New Balance",
      image: "/newbalance.svg",
    },
  ];
  return (
    <>
      <Header />
      <div className="space-y-6">
        <div className="px-4">
          <Image
            src="/banner-01.png"
            alt="Leve uma vida com estilo"
            width={0}
            height={0}
            sizes="100vw"
            className="h-auto w-full"
          />
        </div>
        <PartnerBrands partnerBrands={partnerBrands} />
        <ProductList title="Mais vendidos" products={products} />
        <div className="px-4">
          <CategorySelector categories={categories} />
        </div>
        <div className="px-4">
          <Image
            src="/banner-02.png"
            alt="Seja autentico"
            width={0}
            height={0}
            sizes="100vw"
            className="h-auto w-full"
          />
        </div>
        <ProductList title="Novos produtos" products={newlyCreatedProducts} />
        <Footer />
      </div>
    </>
  );
};

export default Home;
