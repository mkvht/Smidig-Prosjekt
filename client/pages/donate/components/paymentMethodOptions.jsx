/*
Sets users chosen payment method.
*/
export function PaymentMethodOptions({
  setPaymentMethodOption,
  paymentMethodOption,
}) {
  function handleSelectedOption(e) {
    setPaymentMethodOption(e.target.value);
  }

  return (
    <div className={"payment-option-container"}>
      <div className="payment-option-button">
        <input
          type="radio"
          id="company-card"
          name="check-substitution-2"
          value={"company-card"}
          checked={
            paymentMethodOption === "company-card" ||
            paymentMethodOption === null
          }
          onChange={(e) => {
            handleSelectedOption(e);
          }}
        />
        <label className="btn btn-default" htmlFor="company-card">
          Company Card
        </label>
      </div>

      <div className="payment-option-button">
        <input
          type="radio"
          id="company-invoice"
          name="check-substitution-2"
          value={"company-invoice"}
          checked={paymentMethodOption === "company-invoice"}
          onChange={(e) => {
            handleSelectedOption(e);
          }}
        />
        <label className="btn btn-default" htmlFor="company-invoice">
          Company Invoice
        </label>
      </div>
    </div>
  );
}
