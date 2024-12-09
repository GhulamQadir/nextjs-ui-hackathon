import Image from "next/image";

interface TLatestProduct {
  title: string;
  price: number;
  oldPrice: number;
  sale: boolean;
  image: string;
}

function LatestProdCard({ product }: { product: TLatestProduct }) {
  const { title, image, price, oldPrice, sale } = product;
  return (
    <div className="mb-6">
      <div className="relative h-[200px] w-[250px] lg:h-[250px] lg:w-[320px] bg-[#f2f4f9] flex items-center justify-center">
        {sale && (
          <div className="absolute top-2 left-1 px-3 leading-[20px] rounded-lg bg-[#1A0B5B] text-white font-josefin">
            <p>Sale</p>
          </div>
        )}
        <Image
          src={image}
          alt={title}
          height={200}
          width={200}
          className="h-[180px] w-[180px] lg:h-[200px] lg:w-[200px] "
        />
      </div>
      <div className="font-josefin flex justify-between mt-2">
        <div>
          <p className="text-[#1A0B5B]">{title}</p>
        </div>
        <div className="flex gap-x-2 items-center">
          <p className="text-[#1A0B5B]">${price}.00</p>
          <p className="text-xs text-[#FB2E86] line-through">${oldPrice}</p>
        </div>
      </div>
    </div>
  );
}
export default LatestProdCard;
