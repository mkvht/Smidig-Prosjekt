import { postFollowProject, unFollowProject } from "../../../lib/postAPI";
import { useNavigate } from "react-router-dom";

export function ProjectList({ isLoggedIn, projects, addFollowToProjects }) {
  const navigate = useNavigate();

  function redirectToProject(id) {
    navigate(`/project/${id}`);
  }

  function redirectToDonate(id) {
    navigate(`/donate/paymentMethod?project=${id}`);
  }

  async function followProject(id, follow) {
    if (follow) {
      const res = await unFollowProject(id);
      if (res.message === "Follow deleted") {
        await addFollowToProjects();
      }
    } else {
      const res = await postFollowProject(id);
      if (res.message === "Followed project") {
        await addFollowToProjects();
      }
    }
  }
  /* Listing all non-profit projects */
  return (
    <div className={"our-projects-container"}>
      <div className={"our-projects-columns"}>
        {projects.map(
          ({
            project_id,
            project_name,
            project_description_image_path,
            project_description,
            followed,
          }) => (
            <div className={"our-projects-project"} key={project_id}>
              <h2
                className={"our-projects-project-header"}
                onClick={() => redirectToProject(project_id)}
              >
                {project_name}
                {followed ? " (Followed)" : ""}
              </h2>
              <img
                src={project_description_image_path}
                onClick={() => redirectToProject(project_id)}
                className={"our-projects-image"}
              />
              <p className={"our-projects-project-desc"}>
                {project_description}
              </p>
              {/*Button "Learn more" redirects user to project page based on chosen project*/}
              <div className={"our-projects-buttons"}>
                <button
                  onClick={() => redirectToProject(project_id)}
                  className={"small-button-dark"}
                >
                  Learn more
                </button>
                {/*Button"Donate" redirects user donate page based on chosen project*/}
                <button
                  onClick={() => redirectToDonate(project_id)}
                  className={"small-button-light"}
                >
                  Donate
                </button>
                {/*If logged in: button "Follow" is visible and lets user followed desired project*/}
                {isLoggedIn ? (
                  <button
                    onClick={() => followProject(project_id, followed)}
                    className={"small-button-light"}
                  >
                    {followed ? "Unfollow" : "Follow"}
                  </button>
                ) : (
                  ""
                )}
              </div>
            </div>
          )
        )}
      </div>
    </div>
  );
}
