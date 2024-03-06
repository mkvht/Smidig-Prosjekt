import "../../../../css/transactionHistory.css";
import { useEffect, useState } from "react";
import { fetchAllProjects } from "../../../../lib/fetchAPI";

export function TransactionDropdown({ setProjectId, setChosenProject }) {
  const [projectNames, setProjectNames] = useState([]);

  useEffect(async () => {
    setProjectNames(await fetchAllProjects());
  }, []);

  function handleChange(e) {
    setProjectId(e.target.value);
    setChosenProject(e.target.value);
  }
  return (
    <div>
      <div className="dropdown">
        <select
          className="dropdown-select"
          onChange={(e) => {
            handleChange(e);
          }}
        >
          <option value="All Projects">All projects</option>
          {projectNames.map((project) => (
            <option
              className={"dropdown-option"}
              key={project.project_id}
              value={project.project_id}
            >
              {project.project_name}
            </option>
          ))}
        </select>
      </div>
    </div>
  );
}
