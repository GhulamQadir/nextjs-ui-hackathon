import Image from "next/image";

interface TProduct {
  title: string;
  code: string;
  price: number;
  image: string;
}
function Product({ product }: { product: TProduct }) {
  const { title, code, image, price } = product;
  return (
    <div className="shadow-lg rounded-xl mb-4">
      <div className="h-[180px] w-[220px] bg-[#f2f4f9] flex items-center justify-center">
        <Image
          src={image}
          alt={title}
          height={200}
          width={200}
          priority
          className="h-[130px] w-[130px]"
        />
      </div>
      <div className="mt-2 py-2">
        <p className="text-[#FB2E86] text-lg">{title}</p>
        <div className="flex justify-center gap-x-2 mt-2">
          <div className="w-4 h-[5px] bg-[#05E6B7] rounded-lg"></div>
          <div className="w-3 h-[5px] bg-[#FB2E86] rounded-lg"></div>
          <div className="w-3 h-[5px] bg-[#00009D] rounded-lg"></div>
        </div>
        <p className="font-josefin text-sm mt-3">Code: {code}</p>
        <p className="font-josefin text-sm mt-1">${price}.00</p>
      </div>
    </div>
  );
}
export default Product;
