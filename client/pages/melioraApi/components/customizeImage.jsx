import { LineBox } from "../../../components/lineBox";
import { DonateDropdown } from "../../donate/components/donate-dropdown";
import { DropdownProject } from "./dropdownProject";
import { DropdownImpactGoal } from "./dropdownImpactGoal";
import { SelectImageSize } from "./selectImageSize";

export function CustomizeImage({
  projectId,
  setProjectId,
  setChosenProject,
  setUserImpactId,
  setImageSize,
}) {
  /*Component letting user customize image to preferred size based on use*/
  return (
    <LineBox
      title="CUSTOMIZE IMAGES"
      customClass={"promo-api-customize-images"}
    >
      <div className={"customize-image-container"}>
        <DropdownProject
          setProjectId={setProjectId}
          setChosenProject={setChosenProject}
        />

        <DropdownImpactGoal
          projectId={projectId}
          setUserImpactId={setUserImpactId}
        />
        <SelectImageSize setImageSize={setImageSize} />
      </div>
    </LineBox>
  );
}
