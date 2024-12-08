import HeroComponent from "../components/HeroComponent";
import {
  featuredProducts,
  latestProducts,
  trendingProducts,
} from "../data/data";
import Product from "../components/Product";
import { nanoid } from "nanoid";
import LatestProdCard from "@/components/LatestProdCard";
import WhatWeOffer from "@/components/WhatWeOffer";
import UniqueFeaturesBanner from "@/components/UniqueFeaturesBanner";
import TrendingProdCard from "@/components/TrendingProdCard";
import DiscountItem from "@/components/DiscountItem";

export default function Home() {
  return (
    <div>
      <HeroComponent />
      <div className="text-center my-12">
        <div className="mb-3">
          <p className="text-3xl text-[#1A0B5B] font-bold font-josefin">
            Featured Products
          </p>
        </div>
        <div className="flex flex-wrap justify-center gap-x-4 mt-5">
          {featuredProducts.map((prod) => {
            return <Product key={nanoid()} product={prod} />;
          })}
        </div>
      </div>
      <div className="flex justify-center gap-x-3 mt-10">
        <div className="w-6 h-[6px] border-[#FB2E86] border-2 bg-[#FB2E86] rounded-md"></div>
        <div className="w-6 h-[6px] border-[#FB2E86] border-2 rounded-md"></div>
        <div className="w-6 h-[6px] border-[#FB2E86] border-2  rounded-md"></div>
      </div>
      <div className="mt-16 content-center text-center">
        <div>
          <p className="text-3xl text-[#1A0B5B] font-bold font-josefin">
            Latest Products
          </p>
        </div>
        <ul className="flex justify-center md:gap-x-10 gap-x-5 font-lato md:text-lg text-base mt-4 lg:mb-5">
          <li className="text-[#FB2E86] underline">New Arrival</li>
          <li className="text-[#1A0B5B]">Best Seller</li>
          <li className="text-[#1A0B5B]">Special Offer</li>
          <li className="text-[#1A0B5B]">Featured</li>
        </ul>
        <div className="flex flex-wrap justify-center gap-x-6 mt-5 lg:w-[80%] lg:m-auto">
          {latestProducts.map((prod) => {
            return <LatestProdCard key={nanoid()} product={prod} />;
          })}
        </div>
      </div>
      {/* <div className="text-center mt-10 mb-10">
        <div>
          <p className="text-[#1A0B5B] font-josefin text-3xl font-bold">
            What Shopex Offer!
          </p>
        </div>
      </div> */}
      <WhatWeOffer />
      <UniqueFeaturesBanner />
      <div className="mt-10">
        <div className="mb-5 text-center">
          <p className="text-3xl text-[#1A0B5B] font-bold font-josefin">
            Trending Products
          </p>
        </div>
        <div className="flex flex-wrap justify-center gap-x-4 mt-5">
          {trendingProducts.map((prod) => {
            return <TrendingProdCard key={nanoid()} product={prod} />;
          })}
        </div>
      </div>
      <DiscountItem />
    </div>
  );
}
