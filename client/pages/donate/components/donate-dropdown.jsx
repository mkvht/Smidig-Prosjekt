import "../../../css/donate.css";
import "../../../css/global.css";
import { useEffect, useState } from "react";
import { fetchAllProjects } from "../../../lib/fetchAPI";

/*
Shows user projects to choose between in a drop down fetched from database.
*/
export function DonateDropdown({ setProjectId, setChosenProject }) {
  const [projectNames, setProjectNames] = useState([]);

  useEffect(async () => {
    setProjectNames(await fetchAllProjects());
  }, []);

  function handleChange(e) {
    setProjectId(e.target.value);
    setChosenProject(e.target.value);
  }

  return (
    <div className="donate-dropdown">
      <select
        className="donate-dropdown-select"
        onChange={(e) => {
          handleChange(e);
        }}
      >
        <option value="">Select a project</option>
        {projectNames.map((project) => (
          <option
            className={""}
            key={project.project_id}
            value={project.project_id}
          >
            {project.project_name}
          </option>
        ))}
      </select>
    </div>
  );
}
