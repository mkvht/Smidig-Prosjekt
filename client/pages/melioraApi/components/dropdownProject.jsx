import { useEffect, useState } from "react";
import {
  fetchAllProjects,
  fetchProjectsDonatedTo,
} from "../../../lib/fetchAPI";

export function DropdownProject({ setProjectId, setChosenProject }) {
  const [projectNames, setProjectNames] = useState([]);

  useEffect(async () => {
    setProjectNames(await fetchProjectsDonatedTo());
  }, []);

  function handleChange(e) {
    setProjectId(e.target.value);
    setChosenProject(e.target.value);
  }

  /*Dropdown showing projects supported*/
  return (
    <div className={"promo-api-customize-dropdown-container"}>
      <p className={"promo-api-p"}>Select project:</p>
      <div className={"promo-api-dd-list"}>
        <select
          className={"dropdown"}
          onChange={(e) => {
            handleChange(e);
          }}
        >
          <option className={"promo-api-dd-option"} value="">
            Select a project
          </option>
          {projectNames.map((project) => (
            <option
              className={"promo-api-dd-option"}
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
