import { TiTick } from "react-icons/ti";

function DiscountItem() {
  return (
    <div className="font-josefin my-8 text-center">
      <div>
        <p className="text-3xl text-[#1A0B5B] font-bold">Discount Item</p>
        <ul className="flex justify-center mt-4 gap-x-6">
          <li className="text-[#FB2E86] underline">Wood Chair</li>
          <li>Plastic Chair</li>
          <li>Sofa Collection</li>
        </ul>
      </div>
      <div className="flex justify-center mt-10">
        <div className="lg:w-[35%] border-2 text-start">
          <p className="lg:text-[35px] text-[26px] text-[#1A0B5B] font-bold">
            20% Discount Of All Products
          </p>
          <p className="text-[#FB2E86] mb-4">Eams Sofa Compact</p>
          <p className="text-gray-400">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto,
            tenetur quae facilis doloremque ea itaque.
          </p>
          <ul className="flex justify-between flex-wrap gap-x-6">
            <li className="flex items-center gap-x-1">
              <TiTick color="purple" />
              <p className="text-[#B7BACB] text-sm">
                Material Expose like metals
              </p>
            </li>
            <li className="flex items-center">
              <TiTick color="purple" />
              <p className="text-[#B7BACB] text-sm">
                Clear lines and geomatric figures
              </p>
            </li>
            <li className="flex items-center">
              <TiTick color="purple" />
              <p className="text-[#B7BACB] text-sm">Simple neutral colours</p>
            </li>
            <li className="flex items-center">
              <TiTick color="purple" />
              <p className="text-[#B7BACB] text-sm">
                Material Expose like metals
              </p>
            </li>
          </ul>
        </div>
        <div></div>
      </div>
    </div>
  );
}
export default DiscountItem;
