import { motion } from "framer-motion";
import PropTypes from "prop-types";

const loaderVariants = {
  animate: {
    x: [-20, 20],
    y: [0, -30],
    transition: {
      x: {
        repeatType: "reverse",
        repeat: Infinity,
        duration: 0.5,
      },
      y: {
        repeatType: "reverse",
        repeat: Infinity,
        duration: 0.25,
        ease: "easeInOut",
      },
    },
  },
};

function Loader({ onClick }) {
  return (
    <motion.button
      type="button"
      onClick={onClick}
      className="absolute top-0 h-full w-full cursor-default bg-[rgba(255,255,255,0.5)] backdrop-blur-lg"
      exit={{ opacity: 0 }}
    >
      <motion.div
        className="absolute top-1/2 left-1/2 h-3 w-3 -translate-x-1/2 -translate-y-1/2 rounded-full bg-StrongCyan"
        animate="animate"
        variants={loaderVariants}
      />
    </motion.button>
  );
}

Loader.propTypes = {
  onClick: PropTypes.func.isRequired,
};

export default Loader;
