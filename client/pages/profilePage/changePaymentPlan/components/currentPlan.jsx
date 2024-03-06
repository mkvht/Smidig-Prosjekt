import "../../../../css/changePaymentPlan.css";
import "../../../../css/global.css";

export function CurrentPlan({ paymentPlan }) {
  if (paymentPlan === null || paymentPlan === "") {
    return <h1>Please provide payment plan id</h1>;
  }
  return (
    <>
      <h2
        className={'"current-project-header"'}
        key={paymentPlan.payment_plan_id}
      >
        {paymentPlan.project_name}
      </h2>
      This is your current payment details for this specific project:
      <div className={"current-plan-details"}>
        <p className={"current-p"}>
          <strong>Payment plan:</strong> {paymentPlan.payment_plan_type}
        </p>
        <p className={"current-p"}>
          <strong>Amount:</strong> {paymentPlan.payment_plan_amount} NOK
        </p>
        <p className={"current-p"}>
          <strong>Payment method:</strong> {paymentPlan.payment_plan_method}
        </p>
      </div>
    </>
  );
}
