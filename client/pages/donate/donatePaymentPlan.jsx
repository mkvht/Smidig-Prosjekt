import "../../css/donate.css";
import "../../css/global.css";
import { useNavigate, useSearchParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { fetchProject } from "../../lib/fetchAPI";
import { PaymentPlanOptions } from "./components/paymentPlanOptions";
import { AmountOptions } from "./components/amountOptions";
import { postPaymentplan } from "../../lib/postAPI";
import { loginCheck } from "../../lib/loginCheck";
import { NotLoggedIn } from "../../components/notLoggedIn";
import { useLoading } from "../../lib/useLoading";
import { ErrorMessage } from "../../components/errorMessage";

export function DonatePaymentPlan() {
  const navigate = useNavigate();
  const { data, error, isLoading } = useLoading(loginCheck);
  const [project, setProject] = useState(null);
  const [paymentPlanOption, setPaymentPlanOption] = useState("annually");
  const [amountOption, setAmountOption] = useState("10000");
  const [searchParams, setSearchParams] = useSearchParams();
  const project_id = searchParams.get("project");
  const payment_method = searchParams.get("paymentMethod");

  useEffect(async () => {
    const project = await fetchProject(project_id);
    setProject(project);
  }, []);

  if (isLoading) {
    return <div className={"not-logged-in-buffer-height"}> </div>;
  }
  if (data === false) {
    return <NotLoggedIn />;
  }
  if (error) {
    return <ErrorMessage />;
  }

  /*
Submitting users chosen project and payment details for donation and saves it in the database.
*/
  function handleSubmit(event) {
    event.preventDefault();
    const paymentPlanTest = {
      project_id: project_id,
      //company card or invoice
      payment_plan_method: payment_method,
      //Frequency of payment (Annually, Quarter, Monthly, One time)
      payment_plan_type: paymentPlanOption,
      payment_plan_amount: amountOption,
    };
    postPaymentplan(paymentPlanTest);
    navigate("/donate/thankYou");
  }

  return (
    <div className={"payment-container"}>
      <header>
        <h1 className={"donate-header"}>DONATE</h1>
      </header>

      <p className={"plan-selected-p"}>
        Selected project: <strong>{project ? project.project_name : ""}</strong>
      </p>

      <div className="payment-line-box-container">
        <form
          action={"/api/paymentplan"}
          method={"POST"}
          onSubmit={handleSubmit}
        >
          <PaymentPlanOptions
            paymentPlanOption={paymentPlanOption}
            setPaymentPlanOption={setPaymentPlanOption}
          />
          <AmountOptions
            amountOption={amountOption}
            setAmountOption={setAmountOption}
          />
          <div className={"payment-button-container"}>
            <button className={"donation-button"} type={"submit"}>
              DONATE
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
