import Image from "next/image";
import Link from "next/link";

import type { productTable, productVariantTable } from "@/db/schema";
import { formatCentsToBRL } from "@/helpers/money";
import { cn } from "@/lib/utils";

interface ProductCardProps {
  product: typeof productTable.$inferSelect & {
    variants: (typeof productVariantTable.$inferSelect)[];
  };
  textContainerClassName?: string;
}

const ProductCard = ({ product, textContainerClassName }: ProductCardProps) => {
  const firstVariant = product.variants[0];
  return (
    <Link href={`/product-variant/${firstVariant.slug}`}>
      <div className="flex flex-col gap-4">
        <Image
          src={firstVariant.imageUrl}
          alt={firstVariant.name}
          sizes="100vw"
          width={0}
          height={0}
          className="h-auto w-full rounded-3xl"
        />
        <div
          className={cn(
            "flex max-w-[200px] flex-col gap-1",
            textContainerClassName,
          )}
        >
          <p className="truncate text-sm font-medium">{product.name}</p>
          <p className="text-muted-foreground truncate text-xs font-medium">
            {product.description}
          </p>
          <p className="truncate text-sm font-semibold">
            {formatCentsToBRL(firstVariant.priceInCents)}
          </p>
        </div>
      </div>
    </Link>
  );
};

export default ProductCard;
