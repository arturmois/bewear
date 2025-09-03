import CategorySelector from "@/components/common/category-selector";
import Footer from "@/components/common/footer";
import { Header } from "@/components/common/header";
import { MenuBar } from "@/components/common/menu-bar";
import ProductList from "@/components/common/product-list";
import { getCategories } from "@/data/categories/get-categories";
import { getNewlyCreatedProducts } from "@/data/products/get-newly-created-products";
import { getProducts } from "@/data/products/get-products";

import ResponsiveBanner from "../components/common/responsive-banner";

const Home = async () => {
  const [products, newlyCreatedProducts, categories] = await Promise.all([
    getProducts(),
    getNewlyCreatedProducts(),
    getCategories(),
  ]);
  return (
    <>
      <Header />
      <MenuBar />
      <div className="space-y-6">
        <div className="px-5">
          <ResponsiveBanner
            desktopSrc="/banner-desktop-01.png"
            mobileSrc="/banner-mobile-01.png"
            alt="Leve uma vida com estilo"
          />
        </div>

        <ProductList products={products} title="Mais vendidos" />

        <div className="px-5">
          <CategorySelector categories={categories} />
        </div>

        <div className="px-5">
          <ResponsiveBanner
            desktopSrc="/banner-desktop-02.png"
            mobileSrc="/banner-mobile-02.png"
            alt="Leve uma vida com estilo"
          />
        </div>

        <ProductList products={newlyCreatedProducts} title="Novos produtos" />
        <Footer />
      </div>
    </>
  );
};

export default Home;
