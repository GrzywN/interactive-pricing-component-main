import { motion } from "framer-motion";
import { createOpacityVariants } from "../utils/animationVariants";

function Header() {
  const animationVariants = createOpacityVariants(3);

  return (
    <motion.header
      initial="initial"
      animate="animate"
      className="mt-[5.5625rem] mb-16 w-full text-center md:mb-[5.6875rem] md:mt-[6.5rem]"
    >
      <motion.h1
        className="mb-2 text-DarkDesaturatedBlue md:mb-3"
        variants={animationVariants[0]}
      >
        Simple, traffic-based pricing
      </motion.h1>
      <motion.p className="text-GrayishBlue" variants={animationVariants[1]}>
        Sign-up for our 30-day trial.
        <br /> No credit card required.
      </motion.p>
    </motion.header>
  );
}

export default Header;
