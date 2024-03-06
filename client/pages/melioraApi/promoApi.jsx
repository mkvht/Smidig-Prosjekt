import "../../css/promoApi.css";
import "../../css/global.css";
import { MelioraApi } from "./components/melioraApi";
import { CustomizeImage } from "./components/customizeImage";
import { Preview } from "./components/preview";
import { Usage } from "./components/usage";
import { useEffect, useState } from "react";
import { loginCheck } from "../../lib/loginCheck";
import { useNavigate } from "react-router-dom";
import { fetchLogin } from "../../lib/fetchAPI";

export function PromoApi() {
  const navigate = useNavigate();
  const [projectId, setProjectId] = useState("");
  const [chosenProject, setChosenProject] = useState("");
  const [userImpactId, setUserImpactId] = useState("");
  const [loggedIn, setLoggedIn] = useState(false);
  const [imageSize, setImageSize] = useState("small");
  const [userInfo, setUserInfo] = useState(null);
  const [currentURL, setCurrentURL] = useState("");

  useEffect(async () => {
    window.scrollTo(0, 0);
    const logged_in = await loginCheck();
    if (!logged_in) {
      navigate("/login");
    }
    setLoggedIn(logged_in);
    setUserInfo(await fetchLogin());
  }, []);

  /* Meliora Api page lets user customize, preview and donload promotional material */
  return (
    <div className={"promo-api-container"}>
      <div className={"promo-api-content"}>
        <div>
          <h1 className={"promo-api-header"}>THE MELIORA API</h1>
        </div>
        <div className="line-box-container-promo-api">
          <MelioraApi />
          <CustomizeImage
            chosenProject={chosenProject}
            setChosenProject={setChosenProject}
            setProjectId={setProjectId}
            projectId={projectId}
            setUserImpactId={setUserImpactId}
            setImageSize={setImageSize}
          />
          <Preview
            userImpactId={userImpactId}
            imageSize={imageSize}
            projectId={projectId}
            userInfo={userInfo}
            setCurrentURL={setCurrentURL}
          />
          <Usage currentURL={currentURL} />
        </div>
      </div>
    </div>
  );
}
