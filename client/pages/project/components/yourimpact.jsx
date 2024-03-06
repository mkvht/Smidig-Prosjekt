import { LineBox } from "../../../components/lineBox";
import { parseTitles } from "./parseTitles";
import { fetchProjectStatistics } from "../../../lib/fetchAPI";
import { useEffect, useState } from "react";

export function YourImpact({ projects, projectId }) {
  const [projectStats, setProjectStats] = useState([]);
  useEffect(async () => {
    setProjectStats(await fetchProjectStatistics(projectId));
  }, []);

  /*Component listing supporters impact on specific project based on donation */
  return (
    <LineBox title="YOUR IMPACT" customClass={"your-impact"}>
      <div className={"your-impact-component"}>
        <span className={"your-impact-container"}>
          <div className={"your-impact-images-container"}>
            <img
              className={"your-impact-image"}
              src={`../${projects.project_your_impact_1_image_path}`}
              alt="Image 1"
            />
            <img
              className={"your-impact-image"}
              src={`../${projects.project_your_impact_2_image_path}`}
              alt={"Image 2"}
            />
          </div>

          <p
            className={"your-impact-text"}
            dangerouslySetInnerHTML={{
              __html: parseTitles(projects.project_your_impact_text),
            }}
          />
          {/*Supporters donation to project - this year, last 2 years & total*/}
          <div className={"your-impact-stats"}>
            <h2>Total donations so far this year</h2>
            <p>NOK {projectStats.thisYear} </p>
            <h2>Total donations the last 2 years</h2>
            <p>NOK {projectStats.last2Years} </p>
            <h2>Total donations</h2>
            <p>NOK {projectStats.total}</p>
          </div>
        </span>
      </div>
    </LineBox>
  );
}
