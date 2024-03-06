import { useEffect, useState } from "react";
import { fetchUserImpactByProjectId } from "../../../lib/fetchAPI";

export function DropdownImpactGoal({ projectId, setUserImpactId }) {
  const [userImpact, setUserImpact] = useState([]);

  useEffect(async () => {
    if (projectId) {
      setUserImpact(await fetchUserImpactByProjectId(projectId));
    }
  }, [projectId]);

  function handleChange(e) {
    setUserImpactId(e.target.value);
  }

  if (!projectId) {
    return <></>;
  }

  /*Dropdown showing impact goals based on projects supported. Only visible after selecting project supported*/
  return (
    <div className={"promo-api-customize-dropdown-container"}>
      <p className={"promo-api-p"}>Select impact goal:</p>
      <div className={"promo-api-dd-list"}>
        <select
          className={"dropdown"}
          onChange={(e) => {
            handleChange(e);
          }}
        >
          <option className={"promo-api-dd-option"} value="">
            Select impact
          </option>
          <option className={"promo-api-dd-option"} value={"total"}>
            Total donated
          </option>
          {userImpact.map((impact) => (
            <option key={impact.user_impact_id} value={impact.user_impact_id}>
              {impact.impact_name}
            </option>
          ))}
        </select>
      </div>
    </div>
  );
}
