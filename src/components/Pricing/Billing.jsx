import PropTypes from "prop-types";
import BillingText from "./BillingText";
import Badge from "./Badge";
import Switch from "./Switch";

function Billing({ onChange, isYearly }) {
  return (
    <>
      <BillingText>Monthly Billing</BillingText>
      <Switch isYearly={isYearly} onChange={onChange} domId="billing" />
      <BillingText>Yearly Billing</BillingText>
      <Badge />
    </>
  );
}

Billing.propTypes = {
  onChange: PropTypes.func.isRequired,
  isYearly: PropTypes.bool.isRequired,
};

export default Billing;
