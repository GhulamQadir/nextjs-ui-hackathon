import Link from "next/link";
import { IoChevronDownOutline } from "react-icons/io5";
import { IoSearch } from "react-icons/io5";
import { GiHamburgerMenu } from "react-icons/gi";

function Navbar() {
  return (
    <div className="w-full lg:py-2 md:py-[5px] py-4 flex justify-center z-10 sticky top-[65px] md:top-[40px] bg-white">
      <div className="lg:w-[85%] px-2 w-full flex justify-between lg:justify-around items-center font-josefin">
        <div>
          <p className="text-[34px] font-bold text-[#0D0E43]">Hekto</p>
        </div>
        <div className="hidden lg:block">
          <ul className="text-base flex gap-x-9">
            <li className="text-[#FB2E86]">
              <Link href={"#"} className="flex items-center">
                {" "}
                Home <IoChevronDownOutline />
              </Link>
            </li>
            <li className="text-[#0D0E43]">
              <Link href={"#"}> Pages</Link>
            </li>
            <li className="text-[#0D0E43]">
              <Link href={"#"}> Products</Link>
            </li>
            <li className="text-[#0D0E43]">
              <Link href={"#"}> Blog</Link>
            </li>
            <li className="text-[#0D0E43]">
              <Link href={"#"}> Shop</Link>
            </li>
            <li className="text-[#0D0E43]">
              <Link href={"#"}> Contact</Link>
            </li>
          </ul>
        </div>
        <div className="hidden lg:block">
          <input
            type="text"
            className="w-60 border-[#E7E6EF] border-2 h-8 m-0"
          />
          <button className="bg-[#FB2E86] py-[11px] h-8 px-2 ">
            <IoSearch color="white" />
          </button>
        </div>
        <div className="block lg:hidden">
          <button className="flex items-center">
            <GiHamburgerMenu size={20} />
          </button>
        </div>
      </div>
    </div>
  );
}
export default Navbar;
