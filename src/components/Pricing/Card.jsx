import PageViews from "./PageViews";
import Slider from "./Slider";
import PricePerMonth from "./PricePerMonth";
import Billing from "./Billing";

function Card() {
  const currentPageviews = "100K";
  const currentPrice = "$16.00";

  return (
    <div className="mx-auto max-w-[33.75rem] rounded-lg bg-White pb-[5.5rem]">
      <div className="flex flex-col items-center justify-center px-6 pt-[2.125rem] sm:grid sm:grid-cols-2 sm:grid-rows-3 sm:gap-8 sm:px-12 sm:pt-10">
        <div className="mb-[1.5625rem] sm:order-[-2] sm:mb-0">
          <PageViews currentPageviews={currentPageviews} />
        </div>
        <div className="col-span-full">
          <Slider />
        </div>
        <div className="mb-[2.125rem] flex items-center sm:order-[-1] sm:mb-0">
          <PricePerMonth currentPrice={currentPrice} />
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
