import { Route, Routes, useNavigate } from "react-router-dom";
import { DonatePaymentMethod } from "./donatePaymentMethod";
import { DonatePaymentPlan } from "./donatePaymentPlan";
import "../../css/global.css";
import "../../css/donate.css";

import { DonateDropdown } from "./components/donate-dropdown";
import { useEffect, useState } from "react";
import { loginCheck } from "../../lib/loginCheck";
import { NotLoggedIn } from "../../components/notLoggedIn";
import { useLoading } from "../../lib/useLoading";
import { ThankYou } from "../thankYou";
import { ErrorMessage } from "../../components/errorMessage";

function SelectProject() {
  const navigate = useNavigate();
  const { data, error, isLoading } = useLoading(loginCheck);
  const [projectId, setProjectId] = useState("");
  const [chosenProject, setChosenProject] = useState("");
  const navigateOurProjects = () => {
    navigate("/ourProjects");
  };

  /*
  Checks if user is logged in. You have to be logged in to make a donation.
  */
  useEffect(async () => {
    window.scrollTo(0, 0);
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
      <header className={"donate-header-container"}>
        <h1 className={"donate-header"}>DONATE</h1>
      </header>
      <div className="donate-select-project-container">
        <DonateDropdown
          setProjectId={setProjectId}
          setChosenProject={setChosenProject}
        />

        <p className={"donate-select-project-p"}>
          If you already know which project you want to donate to, you can
          simply select it here. Otherwise you can find a total overview of our
          available projects{" "}
          <button className={"link-button"} onClick={navigateOurProjects}>
            here
          </button>
          .
        </p>

        <button
          className={"donation-button"}
          onClick={() => {
            if (projectId !== "") {
              window.location.href =
                "/donate/paymentMethod?project=" + projectId;
            }
          }}
        >
          CONTINUE
        </button>
      </div>
    </>
  );
}

export function Donate() {
  useEffect(() => {
    window.scrollTo(0, 0);
  });
  return (
    <>
      <Routes>
        <Route path={"/"} element={<SelectProject />} />
        <Route path={"/paymentMethod"} element={<DonatePaymentMethod />} />
        <Route path={"/paymentPlan"} element={<DonatePaymentPlan />} />
        <Route path={"/thankYou"} element={<ThankYou />} />
      </Routes>
    </>
  );
}
