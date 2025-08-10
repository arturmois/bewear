import Image from "next/image";
import Link from "next/link";

interface BrandCardProps {
  partnerBrand: {
    name: string;
    image: string;
  };
}

const BrandCard = ({ partnerBrand }: BrandCardProps) => {
  return (
    <Link href={`/`}>
      <div className="flex flex-col gap-4">
        <Image
          src={partnerBrand.image}
          alt={partnerBrand.name}
          width={80}
          height={80}
          className="rounded-3xl border-2 border-gray-200 p-6"
        />
        <div className="flex w-[80px] flex-col">
          <p className="truncate text-center text-sm font-medium">
            {partnerBrand.name}
          </p>
        </div>
      </div>
    </Link>
  );
};

export default BrandCard;
