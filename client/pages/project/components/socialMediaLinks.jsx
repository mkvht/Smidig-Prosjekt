import Instagram from "../../../images/instagram.png";
import Facebook from "../../../images/facebook.png";
import LinkedIn from "../../../images/linkedin.png";

/*Component listing social media links for user to share info about project (non-functional at the moment)*/
export function SocialMediaLinks() {
  return (
    <div>
      <p className={"share-project"}>Share project</p>
      <div className={"project-social-media-container"}>
        <img
          className={"project-instagram-icon"}
          src={Instagram}
          alt={"instagram"}
        />
        <img
          className={"project-facebook-icon"}
          src={Facebook}
          alt={"facebook"}
        />
        <img
          className={"project-linkedin-icon"}
          src={LinkedIn}
          alt={"linkedIn"}
        />
      </div>
    </div>
  );
}
