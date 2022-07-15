import CheckIcon from "./CheckIcon";
import Divider from "./Divider";
import PageViews from "./PageViews";
import Slider from "./Slider";
import PricePerMonth from "./PricePerMonth";
import Billing from "./Billing";
import BillingText from "./BillingText";

function Card() {
  const currentPageviews = "100K";
  const currentPrice = "$16.00";

  return (
    <div className="mx-auto max-w-[33.75rem] rounded-lg bg-White shadow-xl">
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
      <Divider />
      <div className="flex flex-col items-center justify-between gap-8 pt-6 pb-8 sm:flex-row sm:pl-12 sm:pr-11">
        <ul className="grid gap-[0.625rem]">
          <li className="flex items-center gap-4">
            <CheckIcon />
            <BillingText>Unlimited websites</BillingText>
          </li>
          <li className="flex items-center gap-4">
            <CheckIcon />
            <BillingText>100% data ownership</BillingText>
          </li>
          <li className="flex items-center gap-4">
            <CheckIcon />
            <BillingText>Email reports</BillingText>
          </li>
        </ul>
        <button
          type="button"
          className="h-10 w-full max-w-[10.625rem] rounded-full bg-DarkDesaturatedBlue text-PaleBlue transition-colors duration-200 hover:text-White"
        >
          Start my trial
        </button>
      </div>
    </div>
  );
}

export default Card;
