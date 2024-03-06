import "../../../css/frontPage.css";
import "../../../css/global.css";
import "../../../css/ourvision.css";
import { LineBox } from "../../../components/lineBox";

/*
LineBox - all code for setting up and position green lines.
 */
export function OurVisionPart() {
  /*Component lists Meliora Impact's vision*/
  return (
    <LineBox title="OUR VISION" customClass={"our-vision"}>
      <div className={"our-vision-container"}>
        <div className={"ov-container"}>
          <div>
            <p className={"ov-p"}>
              We envision giving to be impactful and universal, and that
              nonprofits can fully focus on their front line work. <br />
              <br /> The majority of consumers choose companies that give back.
              But while many companies don´t have an impactful philanthropic
              strategy, many nonprofits don´t have the resources for an engaging
              digital presence.
              <br />
              <br /> This is where Meliora Impact comes in. We´re creating a
              more intimate connection between donor and cause, building a
              service that is accessible, strategic, and effective, and that
              allows nonprofits to carry out their front line work.
            </p>
          </div>
          <div className={"motto-container"}>
            <h3 className={"ov-motto"}>
              "The world is still not on track to have reached universal access
              to basic water, sanitation and hygiene services"
            </h3>
          </div>
        </div>
      </div>
    </LineBox>
  );
}
