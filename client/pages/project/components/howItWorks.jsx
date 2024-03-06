import { LineBox } from "../../../components/lineBox";
import { parseTitles } from "./parseTitles";

export function HowItWorks({ projects }) {
  return (
    <LineBox title="HOW IT WORKS" customClass={"how-it-works"}>
      <div className={"how-it-works-component"}>
        <span className={"how-it-works-container"}>
          <div className={"project-images"}>
            <img
              className={"how-it-works-image"}
              src={`../${projects.project_how_it_works_image_path}`}
            />
          </div>
          <p
            className={"how-it-works-text"}
            dangerouslySetInnerHTML={{
              __html: parseTitles(projects.project_how_it_works_text),
            }}
          />
        </span>
      </div>
    </LineBox>
  );
}
