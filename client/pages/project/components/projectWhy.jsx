import { LineBox } from "../../../components/lineBox";
import { parseTitles } from "./parseTitles";

export function ProjectWhy({ projects }) {
  /*Component listing project reason why*/
  return (
    <LineBox title="WHY?" customClass={"why"}>
      <div className={"why-component"}>
        <span className={"why-container"}>
          <div
            className={"why-text"}
            dangerouslySetInnerHTML={{
              __html: parseTitles(projects.project_why_text),
            }}
          />
          <div className={"project-images"}>
            <img
              src={`../${projects.project_why_image_path}`}
              className={"why-image"}
            />
          </div>
        </span>
      </div>
    </LineBox>
  );
}
