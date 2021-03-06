import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import Button from "./Button";
import CheckIcon from "./CheckIcon";
import Divider from "./Divider";
import PageViews from "./PageViews";
import Slider from "./Slider";
import PricePerMonth from "./PricePerMonth";
import Billing from "./Billing";
import PricingText from "./PricingText";
import Loader from "../Loader";
import { createOpacityVariants } from "../../utils/animationVariants";

function Card() {
  const [isLoading, setIsLoading] = useState(false);

  const toggleLoading = () => {
    setIsLoading((prevIsLoading) => !prevIsLoading);
  };

  const [pricing, setPricing] = useState({
    value: 50,
    isYearly: false,
    pageviews: "100K",
    price: 16,
  });

  const setSliderValue = (value) => {
    setPricing((prevState) => {
      return { ...prevState, value };
    });
  };

  const setIsYearly = (isYearly) => {
    setPricing((prevState) => {
      return { ...prevState, isYearly };
    });
  };

  const setPageviews = (pageviews) => {
    setPricing((prevState) => {
      return { ...prevState, pageviews };
    });
  };

  const setPrice = (price) => {
    setPricing((prevState) => {
      return { ...prevState, price };
    });
  };

  const sliderChangeHandler = (event) => {
    const { value } = event.target;
    setSliderValue(+value);

    const views = calcPageViews();
    setPageviews(views);

    const price = calcPricePerMonth();
    setPrice(price);
  };

  const calcPageViews = () => {
    const { value } = pricing;
    if (value < 20) {
      return "10K";
    }
    if (value < 40) {
      return "50K";
    }
    if (value < 60) {
      return "100K";
    }
    if (value < 80) {
      return "500K";
    }
    return "1M";
  };

  const calcPricePerMonth = () => {
    const { value } = pricing;

    if (value < 20) {
      return 8;
    }
    if (value < 40) {
      return 12;
    }
    if (value < 60) {
      return 16;
    }
    if (value < 80) {
      return 24;
    }
    return 36;
  };

  const handleSwitchChange = (event) => {
    setIsYearly(event.target.checked);
  };

  const animationVariants = createOpacityVariants(7);

  return (
    <motion.div
      className="relative mx-auto max-w-[33.75rem] rounded-lg bg-White shadow-xl"
      initial="initial"
      animate="animate"
    >
      <div className="flex flex-col items-center justify-center px-6 pt-[2.125rem] sm:grid sm:grid-cols-2 sm:grid-rows-3 sm:gap-6 sm:px-12 sm:pt-10">
        <motion.div
          className="mb-[1.5625rem] sm:order-[-2] sm:mb-0"
          variants={animationVariants[0]}
        >
          <PageViews pageViews={pricing.pageviews} />
        </motion.div>
        <motion.div className="col-span-full" variants={animationVariants[1]}>
          <Slider onChange={sliderChangeHandler} value={pricing.value} />
        </motion.div>
        <motion.div
          className="mb-[2.125rem] flex items-center sm:order-[-1] sm:mb-0"
          variants={animationVariants[0]}
        >
          <PricePerMonth
            currentPrice={`$${(pricing.isYearly
              ? (pricing.price / 100) * 75
              : pricing.price
            ).toFixed(2)}`}
          />
        </motion.div>
        <motion.div
          className="relative col-span-full mx-auto mb-[2.375rem] flex w-[14.0625rem] items-center gap-3 sm:mt-[-2.5rem] sm:mb-0"
          variants={animationVariants[2]}
        >
          <Billing onChange={handleSwitchChange} isYearly={pricing.isYearly} />
        </motion.div>
      </div>
      <Divider />
      <div className="flex flex-col items-center justify-between gap-8 pt-6 pb-8 sm:flex-row sm:pl-12 sm:pr-11 sm:pt-8">
        <ul className="grid gap-[0.625rem]">
          <motion.li
            className="flex items-center gap-4"
            variants={animationVariants[3]}
          >
            <CheckIcon />
            <PricingText>Unlimited websites</PricingText>
          </motion.li>
          <motion.li
            className="flex items-center gap-4"
            variants={animationVariants[4]}
          >
            <CheckIcon />
            <PricingText>100% data ownership</PricingText>
          </motion.li>
          <motion.li
            className="flex items-center gap-4"
            variants={animationVariants[5]}
          >
            <CheckIcon />
            <PricingText>Email reports</PricingText>
          </motion.li>
        </ul>
        <motion.div
          className="w-full max-w-[10.625rem]"
          variants={animationVariants[6]}
        >
          <Button onClick={toggleLoading}>Start my trial</Button>
        </motion.div>
      </div>
      <AnimatePresence>
        {isLoading && <Loader onClick={toggleLoading} />}
      </AnimatePresence>
    </motion.div>
  );
}

export default Card;
