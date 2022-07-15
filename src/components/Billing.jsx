import Badge from "./Badge";
import Switch from "./Switch";

export default function Billing() {
  return (
    <>
      <p className="text-xs font-semibold tracking-normal text-GrayishBlue">
        Monthly Billing
      </p>
      <Switch domId="billing" />
      <p className="text-xs font-semibold tracking-normal text-GrayishBlue">
        Yearly Billing
      </p>
      <Badge />
    </>
  );
}
