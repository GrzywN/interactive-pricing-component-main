import PropTypes from "prop-types";
import PricingText from "./PricingText";
import Badge from "./Badge";
import Switch from "./Switch";

function Billing({ onChange, isYearly }) {
  return (
    <>
      <PricingText>Monthly Billing</PricingText>
      <Switch isYearly={isYearly} onChange={onChange} domId="billing" />
      <PricingText>Yearly Billing</PricingText>
      <Badge />
    </>
  );
}

Billing.propTypes = {
  onChange: PropTypes.func.isRequired,
  isYearly: PropTypes.bool.isRequired,
};

export default Billing;
