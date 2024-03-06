import unFocus from "../../../images/goalsFocus.png";
import { LineBox } from "../../../components/lineBox";

/*
LineBox - all code for setting up and position green lines.
 */
export function OurUNFocus() {
  /*Component lists UN focus goals and linking to https://sdgs.un.org/goals */
  return (
    <LineBox title="OUR UN FOCUS" customClass={"our-un-focus"}>
      <div className={"ov-united-focus-container"}>
        <div className={"ov-unf-container"}>
          <div className={"ov-unf-text"}>
            <p className={"ov-unf-paragraph"}>
              Our main focus areas are water and knowledge and here you can see
              some of the UN´s goals, <br />
              which cover these areas.
            </p>
          </div>
          <div className={"un-image-container"}>
            <img className={"un-image"} src={unFocus} alt={"un-focus-image"} />
          </div>
        </div>
      </div>
      <p className={"ov-unf-second-p"}>
        Interested in learning more? Click{" "}
        <a href={"https://sdgs.un.org/goals"}>here</a>
      </p>
    </LineBox>
  );
}
