import BrandCard from "./brand-card";

interface PartnerBrandsProps {
  partnerBrands: {
    name: string;
    image: string;
  }[];
}

const PartnerBrands = ({ partnerBrands }: PartnerBrandsProps) => {
  return (
    <div className="space-y-6">
      <h3 className="px-4 font-semibold">Parceiros</h3>
      <div className="flex w-full gap-4 overflow-x-auto px-4 [&::-webkit-scrollbar]:hidden">
        {partnerBrands.map((brand) => (
          <BrandCard key={brand.name} partnerBrand={brand} />
        ))}
      </div>
    </div>
  );
};

export default PartnerBrands;
