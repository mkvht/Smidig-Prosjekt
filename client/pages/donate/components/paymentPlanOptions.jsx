import { LineBox } from "../../../components/lineBox";

/*
Sets users choice of payment plan.
*/
export function PaymentPlanOptions({
  setPaymentPlanOption,
  paymentPlanOption,
}) {
  function handleSelectedOption(e) {
    setPaymentPlanOption(e.target.value);
  }

  return (
    <LineBox title="CHOOSE YOUR PAYMENT PLAN" customClass={"payment-plan-p"}>
      <div className={"payment-plan-option-container-1"}>
        <div className={"payment-plan-option-button"}>
          <input
            type="radio"
            id="annually"
            name="check-substitution-1"
            value={"annually"}
            checked={
              paymentPlanOption === "annually" || paymentPlanOption === null
            }
            onChange={(e) => {
              handleSelectedOption(e);
            }}
          />
          <label className="btn btn-default" htmlFor="annually">
            <h2 className={"plan-option-h2"}>Annually</h2>
            <p className={"plan-option-p"}>
              Donate to Water Aid once every year.
            </p>
          </label>
        </div>
        <div className={"payment-plan-option-button"}>
          <input
            type="radio"
            id="quarterly"
            name="check-substitution-1"
            value={"quarterly"}
            checked={paymentPlanOption === "quarterly"}
            onChange={(e) => {
              handleSelectedOption(e);
            }}
          />
          <label className="btn btn-default" htmlFor="quarterly">
            <h2 className={"plan-option-h2"}>Quarterly</h2>
            <p className={"plan-option-p"}>
              Donate to Water Aid every quarter.
            </p>
          </label>
        </div>
      </div>

      <div className={"payment-plan-option-container-2"}>
        <div className={"payment-plan-option-button"}>
          <input
            type="radio"
            id="monthly"
            name="check-substitution-1"
            value={"monthly"}
            checked={paymentPlanOption === "monthly"}
            onChange={(e) => {
              handleSelectedOption(e);
            }}
          />
          <label className="btn btn-default" htmlFor="monthly">
            <h2 className={"plan-option-h2"}>Monthly</h2>
            <p className={"plan-option-p"}>Donate to Water Aid every month.</p>
          </label>
        </div>
        <div className={"payment-plan-option-button"}>
          <input
            type="radio"
            id="single-payment"
            name="check-substitution-1"
            value={"single-payment"}
            checked={paymentPlanOption === "single-payment"}
            onChange={(e) => {
              handleSelectedOption(e);
            }}
          />
          <label className="btn btn-default" htmlFor="single-payment">
            <h2 className={"plan-option-h2"}>Single payment</h2>
            <p className={"plan-option-p"}>
              Make a single donation to Water aid.{" "}
            </p>
          </label>
        </div>
      </div>
    </LineBox>
  );
}
