import "../../css/global.css";
import "../../css/donate.css";
import { useSearchParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { fetchProject } from "../../lib/fetchAPI";
import { PaymentMethodOptions } from "./components/paymentMethodOptions";
import { loginCheck } from "../../lib/loginCheck";
import { NotLoggedIn } from "../../components/notLoggedIn";
import { useLoading } from "../../lib/useLoading";
import { ErrorMessage } from "../../components/errorMessage";

export function DonatePaymentMethod() {
  const { data, error, isLoading } = useLoading(loginCheck);
  const [paymentMethodOption, setPaymentMethodOption] =
    useState("company-card");
  const [project, setProject] = useState(null);
  const [searchParams, setSearchParams] = useSearchParams();
  const project_id = searchParams.get("project");

  /*
Checks if user is logged in to have access to this page and fetch chosen project from previous step.
*/
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

  return (
    <>
      <header>
        <h1 className={"donate-header"}>DONATE</h1>
      </header>

      <div className={"payment-container"}>
        <p className={"selected-p"}>
          Your selected project:{" "}
          <strong>{project ? project.project_name : ""}</strong>
        </p>

        <p className={"payment-p"}>CHOOSE YOUR PAYMENT METHOD</p>

        <PaymentMethodOptions
          paymentMethodOption={paymentMethodOption}
          setPaymentMethodOption={setPaymentMethodOption}
        />

        <button
          className={"donation-button"}
          onClick={() => {
            if (paymentMethodOption !== "" || project_id !== "") {
              window.location.href =
                "/donate/paymentPlan?project=" +
                project_id +
                "&paymentMethod=" +
                paymentMethodOption;
            }
          }}
        >
          CONTINUE
        </button>
      </div>
    </>
  );
}
