import "../../../css/donate.css";
import "../../../css/changePaymentPlan.css";
import { useEffect, useState } from "react";
import { useNavigate, useSearchParams } from "react-router-dom";
import { PaymentPlanOptions } from "../../donate/components/paymentPlanOptions";
import { AmountOptions } from "../../donate/components/amountOptions";
import { PaymentMethodOptions } from "../../donate/components/paymentMethodOptions";
import { fetchSpecificPaymentPlan } from "../../../lib/fetchAPI";
import { CurrentPlan } from "./components/currentPlan";
import { patchPaymentplan, setPaymentPlanInactive } from "../../../lib/postAPI";
import { loginCheck } from "../../../lib/loginCheck";
import { NotLoggedIn } from "../../../components/notLoggedIn";
import { useLoading } from "../../../lib/useLoading";
import { ErrorMessage } from "../../../components/errorMessage";

export function ChangePaymentPlan() {
  const navigate = useNavigate();
  const { data, error, isLoading } = useLoading(loginCheck);
  const [paymentPlan, setPaymentPlan] = useState(null);
  const [paymentPlanOptions, setPaymentPlanOptions] = useState(null);
  const [amountOptions, setAmountOptions] = useState(null);
  const [paymentMethodOptions, setPaymentMethodOptions] = useState(null);
  const [searchParams, setSearchParams] = useSearchParams();
  const payment_plan_id = searchParams.get("paymentPlanId");

  useEffect(async () => {
    window.scrollTo(0, 0);

    const paymentPlanFetched = await fetchSpecificPaymentPlan(payment_plan_id);
    setPaymentPlan(paymentPlanFetched);
    setPaymentPlanOptions(paymentPlanFetched.payment_plan_type);
    setAmountOptions(paymentPlanFetched.payment_plan_amount.toString());
    setPaymentMethodOptions(paymentPlanFetched.payment_plan_method);
  }, [setPaymentPlan]);

  if (isLoading) {
    return <div className={"not-logged-in-buffer-height"}> </div>;
  }
  if (data === false) {
    return <NotLoggedIn />;
  }
  if (error) {
    return <ErrorMessage />;
  }

  function handleSubmit(event) {
    event.preventDefault();
    const changedPaymentPlan = {
      payment_plan_method: paymentMethodOptions,
      payment_plan_amount: amountOptions,
      payment_plan_type: paymentPlanOptions,
    };
    if (
      confirm(
        "Current registered payment plan: " +
          paymentPlan.payment_plan_type +
          "\n" +
          "Changed payment plan: " +
          changedPaymentPlan.payment_plan_type +
          "\n\n " +
          "Current registered payment amount: " +
          paymentPlan.payment_plan_amount +
          "\n" +
          "Changed payment amount: " +
          changedPaymentPlan.payment_plan_amount +
          "\n\n" +
          "Current registered payment method: " +
          paymentPlan.payment_plan_method +
          "\n" +
          "Changed payment method: " +
          changedPaymentPlan.payment_plan_method +
          "\n\n" +
          "Are you sure you want to change this payment plan?"
      )
    ) {
      patchPaymentplan(payment_plan_id, changedPaymentPlan);
      navigate("/profile");
    }
  }

  function handleInactive() {
    if (confirm("Are you sure you want to deactivate this payment plan?")) {
      setPaymentPlanInactive(payment_plan_id);
      navigate("/profile");
    }
  }

  return (
    <div className={"payment-container"}>
      <header className={"cpp-header-container"}>
        <h1 className={"cpp-header"}>CHANGE PAYMENT PLAN</h1>
      </header>

      <div className={"current-plan-container"}>
        <CurrentPlan paymentPlan={paymentPlan} />
      </div>

      <div className="payment-line-box-container">
        <form onSubmit={handleSubmit}>
          <PaymentPlanOptions
            setPaymentPlanOption={setPaymentPlanOptions}
            paymentPlanOption={paymentPlanOptions}
          />

          <AmountOptions
            setAmountOption={setAmountOptions}
            amountOption={amountOptions}
          />

          <div className={"new-payment-method-container"}>
            <p className={"change-payment-p"}>CHOOSE PAYMENT METHOD</p>
            <PaymentMethodOptions
              setPaymentMethodOption={setPaymentMethodOptions}
              paymentMethodOption={paymentMethodOptions}
            />
          </div>

          <div className={"payment-container"}>
            <button className={"donation-button"} type={"submit"}>
              CONFIRM CHANGES
            </button>
          </div>
          <div className={"payment-container"}>
            <button
              className={"cancel-payment-button"}
              onClick={handleInactive}
              type={"button"}
            >
              CANCEL PAYMENT PLAN 😭
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
