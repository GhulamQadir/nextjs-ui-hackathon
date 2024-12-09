function Pages() {
  return (
    <div>
      <div className="bg-[#f4f3fc] w-full lg:h-[320px] h-[270px] font-josefin content-center">
        <div className="lg:pl-[15%] px-2">
          <p className="text-4xl text-[#1A0B5B] font-bold">Shop Grid Default</p>
          <ul className="flex gap-x-2 mt-1">
            <li className="text-[#1A0B5B]">Home .</li>
            <li className="text-[#1A0B5B]">Pages .</li>
            <li className="text-[#FB2E86]">Shop Grid Default</li>
          </ul>
        </div>
      </div>

      <div className="my-20">
        <div className="flex justify-around">
          <div>
            <p className="text-[#1A0B5B] lg:text-2xl text-lg font-bold">
              Ecommerce Accessories & Fashion item
            </p>
            <p className="text-[#8A8FB9] text-sm">
              About 9,620 results (0.62 seconds)
            </p>
          </div>
          <div></div>
        </div>
      </div>
    </div>
  );
}
export default Pages;
