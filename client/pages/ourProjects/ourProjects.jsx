import "../../css/ourprojects.css";
import "../../css/global.css";
import { OurProjectsDropdown } from "./components/ourprojects-dropdowm";
import { useEffect, useState } from "react";
import {
  fetchAllProjects,
  fetchFollow,
  fetchProjectsByCategory,
} from "../../lib/fetchAPI";
import { loginCheck } from "../../lib/loginCheck";
import { OurProjectsIntro } from "./components/ourProjectsIntro";
import { ProjectList } from "./components/projectList";

export function OurProjects() {
  const [projects, setProjects] = useState([]);
  const [chosenCategory, setChosenCategory] = useState("All categories");
  const [followedProjects, setFollowedProjects] = useState([]);
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(async () => {
    window.scrollTo(0, 0);
    if (chosenCategory === "All categories") {
      setProjects(await fetchAllProjects());
    } else {
      setProjects(await fetchProjectsByCategory(chosenCategory));
    }
    const loggedIn = await loginCheck();
    setIsLoggedIn(loggedIn);
    if (loggedIn) {
      await addFollowToProjects(setProjects, setFollowedProjects);
    }
  }, [chosenCategory]);

  async function addFollowToProjects() {
    const followedProjects = await fetchFollow();
    setProjects((projects) => {
      projects.forEach((project) => {
        project.followed = followedProjects
          .map(({ project_id }) => project_id)
          .includes(project.project_id);
      });
      return projects;
    });
    setFollowedProjects(await fetchFollow());
  }

  /* Our Projects lists all non-profit projects */
  return (
    <div>
      <OurProjectsIntro />
      <OurProjectsDropdown setChosenCategory={setChosenCategory} />
      <ProjectList
        isLoggedIn={isLoggedIn}
        projects={projects}
        addFollowToProjects={addFollowToProjects}
      />
    </div>
  );
}
