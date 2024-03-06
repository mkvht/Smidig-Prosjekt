import education from "../../../images/education.jpeg";
import { LineBox } from "../../../components/lineBox";

/*
LineBox - all code for setting up and position green lines.
 */
export function BenefitsForNP() {
  /*Component listing Benefit for non-profits */
  return (
    <LineBox
      title="BENEFITS FOR NON PROFITS"
      customClass={"benefits-for-non-profits"}
    >
      <div className={"ov-bfnp-container"}>
        <div className={"our-vision-container"}>
          <div className={"ov-p-container"}>
            <p className={"ov-p"}>
              More nonprofits are going digital: payments platforms, marketing
              and storytelling are done and supported online. <br />
              <br /> Individual donations via digital platforms have increased
              by 45% in Norway alone. <br />
              <br /> This trend means that nonprofits need to spend time and
              money to develop those new solutions. Our platform gives the non
              profits exactly these tools(and more) for free, and ensures that
              also smaller nonprofits can be part of the digitization without
              using up their own resources.
            </p>
            <div>
              <img
                className={"education-image"}
                src={education}
                alt={"education-image"}
              />
            </div>
          </div>
        </div>
      </div>
    </LineBox>
  );
}
