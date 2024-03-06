import { useEffect, useState } from "react";
import {
  fetchActivePaymentplans,
  fetchProjectTotalDonated,
} from "../../../lib/fetchAPI";
import { LineBox } from "../../../components/lineBox";
import { Link, useNavigate } from "react-router-dom";

export function ProjectsYouSupport() {
  const navigate = useNavigate();
  const [projectsSupported, setProjectsSupported] = useState([]);

  useEffect(async () => {
    let projects = await fetchActivePaymentplans();
    let filtered = [];
    projects.forEach((project) => {
      const id = project.payment_plan_id;
      const amount = project.payment_plan_amount;
      const type = project.payment_plan_type;
      const proj_id = project.project_id;

      //if ("project" + project.project_id in filtered) {
      const mapped = filtered.map((project) => project.project_id);
      if (mapped.includes(proj_id)) {
        //filtered["project" + project.project_id].payment_plans.push({
        filtered[mapped.indexOf(proj_id)].payment_plans.push({
          payment_plan_id: id,
          payment_plan_amount: amount,
          payment_plan_type: type,
          project_id: proj_id,
        });
      } else {
        const proj = project;
        delete proj.payment_plan_id;
        delete proj.payment_plan_amount;
        delete proj.payment_plan_type;

        proj.payment_plans = [
          {
            payment_plan_id: id,
            payment_plan_amount: amount,
            payment_plan_type: type,
            project_id: proj_id,
          },
        ];

        //filtered["project" + project.project_id] = proj;
        filtered.push(proj);
      }
    });
    for (const proj of filtered) {
      const totalDonated = await fetchProjectTotalDonated(proj.project_id);
      proj.donated = {
        total: totalDonated.total,
        thisYear: totalDonated.thisYear,
      };
    }
    setProjectsSupported(filtered);
  }, []);

  function redirectToProject(id) {
    navigate(`/project/${id}`);
  }

  function redirectToPaymentPlan(id) {
    navigate(`/profile/changePaymentPlan?paymentPlanId=${id}`);
  }

  function formatDonateAmount(amount) {
    return amount.toString().replace(/\B(?=(\d{3})+(?!\d))/g, " ");
  }

  /*Component listing projects supported showing project info based on donations*/
  return (
    <LineBox title="PROJECTS YOU SUPPORT" customClass={"projects-you-support"}>
      {/*If no projects are supported show text if not show projects support*/}
      {projectsSupported.length === 0 ? (
        <div className={"profile-projects-followed-find-project-to-support"}>
          {" "}
          You do not support any projects yet, find a project to support{" "}
          <Link to={"/ourProjects"}>here</Link>
        </div>
      ) : (
        <div className={"profile-container"}>
          {/*If project is supported show project info*/}
          <div className={"profile-column"}>
            {projectsSupported.map((projectSupported) => (
              <div
                className={"projects-supported"}
                key={projectSupported.project_id}
              >
                <h2 className={"projects-supported-project-header"}>
                  {projectSupported.project_name}
                </h2>
                <p className={"projects-supported-your-amount-donated"}>
                  YOUR AMOUNT DONATED TO THIS PROJECT:
                </p>
                {/* Donations to given project supported*/}
                <div>
                  Your donations to this project this year:
                  <p className={"projects-supported-donations-this-year"}>
                    {" NOK " +
                      formatDonateAmount(projectSupported.donated.thisYear) +
                      " "}
                  </p>
                </div>

                <div>
                  Your total donations to this project:
                  <p className={"projects-supported-total-donations"}>
                    {" NOK " +
                      formatDonateAmount(projectSupported.donated.total)}{" "}
                  </p>
                </div>
                {/*Project description and image*/}
                <img
                  className={"projects-supported-image"}
                  src={`../${projectSupported.project_description_image_path}`}
                />
                <p className={"projects-supported-project-description"}>
                  {projectSupported.project_description}
                </p>
                <p className={"projects-supported-thank-you"}>
                  Thank you for your support!{" "}
                </p>
                {/*Change payment plan on given project*/}
                {projectSupported.payment_plans.map((paymentPlan) => (
                  <div
                    className={"projects-supported-payment-plan-container"}
                    key={paymentPlan.payment_plan_id}
                  >
                    <p className={"projects-supported-payment-plan-type"}>
                      YOUR PAYMENT PLAN:{" "}
                      {paymentPlan.payment_plan_type.toUpperCase()}
                    </p>
                    <p className={"projects-supported-payment-plan-amount"}>
                      AMOUNT: NOK {paymentPlan.payment_plan_amount}
                    </p>
                    {/*  Buttons - "change payment plan" & "learn more" */}
                    <div className={"projects-supported-buttons"}>
                      <button
                        className={"projects-supported-change-payment-plan-btn"}
                        onClick={() =>
                          redirectToPaymentPlan(paymentPlan.payment_plan_id)
                        }
                      >
                        Change payment plan
                      </button>
                    </div>
                  </div>
                ))}
                <div className={"projects-supported-buttons"}>
                  <button
                    className={"projects-supported-learn-more-btn"}
                    onClick={() =>
                      redirectToProject(projectSupported.project_id)
                    }
                  >
                    Learn more
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}
    </LineBox>
  );
}
