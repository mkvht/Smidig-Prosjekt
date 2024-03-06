import "../../css/profilepage.css";
import "../../css/global.css";
import { ProjectsYouSupport } from "./components/projectsYouSupport";
import { ProfileYourImpact } from "./components/profileYourImpact";
import { ProjectsYouFollow } from "./components/projectsYouFollow";
import { PromotionalMaterial } from "./components/promotionalMaterial";
import { ProfileLinks } from "../../components/profileLinks";
import { useEffect, useState } from "react";
import { loginCheck } from "../../lib/loginCheck";
import { useLoading } from "../../lib/useLoading";
import { NotLoggedIn } from "../../components/notLoggedIn";
import { ErrorMessage } from "../../components/errorMessage";

export function ProfilePage({ setProjectsFollowed }) {
  const { data, error, isLoading } = useLoading(loginCheck);

  useEffect(async () => {
    window.scrollTo(0, 0);
  }, []);
  if (isLoading) {
    return <div className={"not-logged-in-buffer-height"}> </div>;
  }
  if (data === false) {
    return <NotLoggedIn />;
  }
  if (error) {
    return <ErrorMessage />;
  }

  /*Profile page for supporters/users: lists projects supported, user impact, projects followed, link to promotional api*/
  return (
    <div className={"profile-main"}>
      {data && (
        <div className={"profile-content"}>
          <div>
            <h1 className={"profile-header"}>YOUR PROFILE</h1>
            <ProfileLinks />
          </div>
          <div className="line-box-container-profile">
            <ProjectsYouSupport />
            <ProfileYourImpact />
            <ProjectsYouFollow setProjectsFollowed={setProjectsFollowed} />
            <PromotionalMaterial />
          </div>
        </div>
      )}
    </div>
  );
}
