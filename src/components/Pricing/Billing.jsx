import BillingText from "./BillingText";
import Badge from "./Badge";
import Switch from "./Switch";

function Billing() {
  return (
    <>
      <BillingText>Monthly Billing</BillingText>
      <Switch domId="billing" />
      <BillingText>Yearly Billing</BillingText>
      <Badge />
    </>
  );
}

export default Billing;
