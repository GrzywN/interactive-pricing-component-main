import PropTypes from "prop-types";

function PricingText({ children }) {
  return (
    <p className="text-xs font-semibold tracking-normal text-GrayishBlue">
      {children}
    </p>
  );
}

PricingText.propTypes = {
  children: PropTypes.string.isRequired,
};

export default PricingText;
