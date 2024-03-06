import { useEffect, useState } from "react";
import { fetchFollow, fetchProject } from "../../../lib/fetchAPI";
import { LineBox } from "../../../components/lineBox";
import { Link, useNavigate, useParams } from "react-router-dom";
import { FollowedProjectsDropdown } from "./followedProjectsDropdown";
import { parseTitles } from "../../project/components/parseTitles";

export function ProjectsYouFollow() {
  const navigate = useNavigate();
  const [followedProjects, setFollowedProjects] = useState([]);
  const [displayedProject, setDisplayedProject] = useState(null);

  useEffect(async () => {
    const follow = await fetchFollow();
    const projects = await Promise.all(
      follow.map(async (f) => {
        return await fetchProject(f.project_id);
      })
    );
    setFollowedProjects(projects);
    if (projects.length > 0) {
      setDisplayedProject(projects[0]);
    }
  }, []);

  function redirectToOurProjects() {
    navigate(`/ourProjects`);
  }

  function onClickDonate(id) {
    navigate(`/donate/paymentMethod?project=${id}`);
  }

  /*Component listing projects followed*/
  return (
    <LineBox
      title="PROJECTS YOU FOLLOW"
      customClass={"profile-projects-you-follow"}
    >
      {/*If no projects are followed show text if not show projects followed*/}
      {followedProjects.length === 0 ? (
        <div className={"profile-projects-followed-find-project-to-follow"}>
          {" "}
          You do not follow any projects yet, find a project to follow{" "}
          <Link to={"/ourProjects"}>here</Link>
        </div>
      ) : (
        <FollowedProjectsDropdown
          followedProjects={followedProjects}
          setDisplayedProject={setDisplayedProject}
        />
      )}
      {/*If project is followed show project info*/}
      <div className={"profile-container"}>
        {displayedProject !== null && (
          <div className={"profile-column-followed"}>
            <div className={"profile-project-followed"}>
              <h1 className={"profile-projects-followed-project-header"}>
                {displayedProject.project_name}
              </h1>
              <p className={"profile-project-followed"}>
                {displayedProject.project_description}
              </p>
              <h2 className={"profile-projects-followed-project-subheader"}>
                Goals by 2030
              </h2>
              <p
                className={"profile-project-followed"}
                dangerouslySetInnerHTML={{
                  __html: parseTitles(displayedProject.project_why_text),
                }}
              />
              {/*Buttons - "Donate to this project" & "Find another project to follow"*/}
              <div className={"profile-projects-followed-buttons"}>
                <button
                  className={"profile-donate-to-followed-btn"}
                  onClick={() => onClickDonate(displayedProject.project_id)}
                >
                  Donate to this project
                </button>
              </div>
              <div className={"profile-projects-followed-buttons"}>
                <button
                  className={"profile-find-another-project-btn"}
                  onClick={() =>
                    redirectToOurProjects(displayedProject.project_id)
                  }
                >
                  Find another project
                </button>
              </div>
            </div>
            {/*Image display -project followed*/}
            <div className={"profile-projects-followed-images"}>
              <img
                className={"profile-project-followed-img-gallery-img1"}
                src={`../${displayedProject.project_description_image_path}`}
              />
              <div className={"profile-project-followed-gallery"}>
                <img
                  className={"profile-project-followed-img-gallery-img2"}
                  src={`../${displayedProject.project_how_it_works_image_path}`}
                />
                <img
                  className={"profile-project-followed-img-gallery-img3"}
                  src={`../${displayedProject.project_what_we_do_image_path}`}
                />
              </div>
              <img
                className={"profile-project-followed-img-gallery-img4"}
                src={`../${displayedProject.project_your_impact_1_image_path}`}
              />
            </div>
          </div>
        )}
        {/*))}*/}
      </div>
    </LineBox>
  );
}
