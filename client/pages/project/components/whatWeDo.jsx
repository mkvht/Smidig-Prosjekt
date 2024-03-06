import { LineBox } from "../../../components/lineBox";

export function WhatWeDo({ projects }) {
  /*Component listing project what we do*/
  return (
    <div className={"what-we-do-test"}>
      <LineBox title="WHAT WE DO" customClass={"what-we-do"}>
        <div className={"what-we-do-component"}>
          <span className={"what-we-do-container"}>
            <div className={"what-we-do-text"}>
              <p>{projects.project_what_we_do_text}</p>
              <div className={"what-we-do-statement"}>
                "{projects.project_statement}"
              </div>
            </div>
            <div className={"project-images"}>
              <img
                src={`../${projects.project_what_we_do_image_path}`}
                className={"what-we-do-image"}
              />
            </div>
          </span>
        </div>
      </LineBox>
    </div>
  );
}
