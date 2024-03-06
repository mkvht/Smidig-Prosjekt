import "../../css/project.css";
import "../../css/global.css";
import { useNavigate, useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { fetchFollow, fetchProject } from "../../lib/fetchAPI";
import { SocialMediaLinks } from "./components/socialMediaLinks";
import { WhatYourDonationsCanDo } from "./components/whatYourDonationsCanDo";
import { ProjectWhy } from "./components/projectWhy";
import { HowItWorks } from "./components/howItWorks";
import { WhatWeDo } from "./components/whatWeDo";
import { Supporters } from "./components/suporters";
import { YourImpact } from "./components/yourimpact";
import { postFollowProject, unFollowProject } from "../../lib/postAPI";
import { loginCheck } from "../../lib/loginCheck";

export function Project() {
  const navigate = useNavigate();
  const [projects, setProjects] = useState([]);
  const [isFollowing, setIsFollowing] = useState(null);
  const id = useParams()["*"];
  // debugger;
  useEffect(async () => {
    window.scrollTo(0, 0);
    setProjects(await fetchProject(id));
    if (await loginCheck()) {
      const followIds = await fetchFollow();
      const follow = followIds
        .map(({ project_id }) => project_id)
        .includes(parseInt(id));
      setIsFollowing(follow);
    }
  }, []);

  function onClickDonate() {
    navigate("/donate/paymentMethod?project=" + id);
  }

  async function followProject() {
    if (isFollowing) {
      const res = await unFollowProject(id);
      if (res.message === "Follow deleted") {
        setIsFollowing(false);
      }
    } else {
      const res = await postFollowProject(id);
      if (res.message === "Followed project") {
        setIsFollowing(true);
      }
    }
  }

  /*Profile page lists all individual non-profit projects*/
  return (
    <div>
      <div>
        <h1 className={"project-header"}>Project:</h1>
        <h2 className={"project-subheader"}>{projects.project_name}</h2>
        {/*Follow project if logged in*/}
        {isFollowing !== null && (
          <div className={"project-follow-btn-container"}>
            <button className={"project-follow-btn"} onClick={followProject}>
              {isFollowing ? "Unfollow project" : "Follow project"}
            </button>
          </div>
        )}
      </div>
      {/*List project description*/}
      <div className="line-box-container">
        <WhatWeDo projects={projects} />
        <HowItWorks projects={projects} />
        <ProjectWhy projects={projects} />
        <WhatYourDonationsCanDo />
        <YourImpact projects={projects} projectId={id} />
        <Supporters projectId={id} />
      </div>
      {/*Donate button redirect to given projects donation page*/}
      <div className={"donate-button"}>
        <button onClick={onClickDonate} className={"project-donate-button"}>
          DONATE
        </button>
      </div>
      <SocialMediaLinks />
    </div>
  );
}
