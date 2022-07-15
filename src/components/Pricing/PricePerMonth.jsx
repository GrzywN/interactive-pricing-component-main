import PropTypes from "prop-types";

function PricePerMonth({ currentPrice }) {
  return (
    <>
      <h2 className="mr-[0.625rem] text-DarkDesaturatedBlue">{currentPrice}</h2>
      <p className="text-GrayishBlue">/ month</p>
    </>
  );
}

PricePerMonth.propTypes = {
  currentPrice: PropTypes.string.isRequired,
};

export default PricePerMonth;
