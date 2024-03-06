import unGoals from "../../../images/unGoals.png";
import { LineBox } from "../../../components/lineBox";

/*
LineBox - all code for setting up and position green lines.
 */
export function UNGoals() {
  /*Component list UN goals associated with Meliora Impact and how they work*/
  return (
    <LineBox title="UN GOALS" customClass={"un-goals"}>
      <div className={"ov-united-goals-container"}>
        <div className={"ov-ung-container"}>
          <div className={"ov-ung-text"}>
            <p className={"ov-ung-p"}>
              We in Meliora use United Nations Sustainable Goals as a guide,{" "}
              <br />
              but have focused on water and knowledge. We have listed all the
              goals and what our focus is.
            </p>
          </div>
        </div>
        <div className={"un-image-container"}>
          <img className={"un-image"} src={unGoals} alt={"un-goals-image"} />
        </div>
      </div>
    </LineBox>
  );
}
