import { fetchImpactByProject } from "../../../lib/fetchAPI";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { LineBox } from "../../../components/lineBox";

export function WhatYourDonationsCanDo() {
  const [impacts, setImpacts] = useState([]);
  const id = useParams()["*"];

  useEffect(async () => {
    setImpacts(await fetchImpactByProject(id));
  }, []);

  /*Component listing what users donations can do*/
  return (
    <LineBox
      title="WHAT YOUR DONATIONS CAN DO"
      customClass={"what-your-donations-can-do"}
    >
      <div className="what-your-donations-can-do-container">
        {/*List what donations can do based on amount donated */}
        <div className="impact-list">
          {impacts.map((impact) => (
            <div className="impact-item" key={impact.impact_id}>
              <div className="impact-item-cost">
                <div className="impact-item-cost-text">
                  NOK {impact.impact_cost}
                </div>
                <p>covers</p>
              </div>
              <div className="impact-item-text">
                <p>{impact.impact_description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </LineBox>
  );
}
