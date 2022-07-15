import Billing from "./Billing";
import Slider from "./Slider";

function Card() {
  const currentPageviews = "100K";
  const currentPrice = "$16.00";
  return (
    <div className="mx-auto max-w-[33.75rem] rounded-lg bg-White pb-[5.5rem]">
      <div className="flex flex-col items-center justify-center px-6 pt-[2.125rem] sm:grid sm:grid-cols-2 sm:grid-rows-3 sm:gap-8 sm:px-12 sm:pt-10">
        <p className="mb-[1.5625rem] text-xs font-extrabold tracking-widest text-GrayishBlue sm:order-[-2] sm:mb-0 md:text-[0.875rem] md:leading-[1.1875rem]">
          {currentPageviews} Pageviews
        </p>
        <div className="col-span-full">
          <Slider />
        </div>
        <div className="mb-[2.125rem] flex items-center sm:order-[-1] sm:mb-0">
          <h2 className="mr-[0.625rem] text-DarkDesaturatedBlue">
            {currentPrice}
          </h2>
          <p className="text-GrayishBlue">/ month</p>
        </div>
        <div className="relative col-span-full mx-auto mb-[2.375rem] flex w-[14.0625rem] items-center gap-3 sm:mt-[-3.5rem] sm:mb-0">
          <Billing />
        </div>
      </div>
      <hr className="border-[#ECF0FB]" />
    </div>
  );
}

export default Card;
