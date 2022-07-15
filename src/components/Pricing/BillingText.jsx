import PropTypes from "prop-types";

function BillingText({ children }) {
  return (
    <p className="text-xs font-semibold tracking-normal text-GrayishBlue">
      {children}
    </p>
  );
}

BillingText.propTypes = {
  children: PropTypes.string.isRequired,
};

export default BillingText;
