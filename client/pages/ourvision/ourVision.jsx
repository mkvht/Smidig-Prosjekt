import "../../css/global.css";
import "../../css/ourvision.css";
import { OurVisionPart } from "./components/ourVisionPart";
import { BenefitsForNP } from "./components/benefitsForNP";
import { BenefitsForDonors } from "./components/benefitsForDonors";
import { UNGoals } from "./components/UNGoals";
import { OurUNFocus } from "./components/ourUNFocus";
import { useEffect } from "react";

export function OurVision() {
  useEffect(() => {
    window.scrollTo(0, 0);
  });

  /*Our vision: informational page listing Meliora Impacts vision, benefits for donors, benefits for non-profits, UN-goals*/
  return (
    <div className={"our-vision-component"}>
      <div className={"our-vision-content"}>
        <div className="line-box-container-our-vision">
          <OurVisionPart />
          <BenefitsForDonors />
          <BenefitsForNP />
          <UNGoals />
          <OurUNFocus />
        </div>
      </div>
    </div>
  );
}
