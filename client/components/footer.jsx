import { Link } from "react-router-dom";
import LogoFooter from "../images/logo_footer.png";
import Instagram from "../images/instagram.png";
import Facebook from "../images/facebook.png";
import LinkedIn from "../images/linkedin.png";
import "../css/footer.css";
import "../css/global.css";

export function Footer() {
  return (
    <>
      {/*Footer logo*/}
      <hr className={"footer-line"} />
      <div className={"footer_container"}>
        <div className={"footer_container_left"}>
          <div className={"logo-footer-container"}>
            <img
              className={"logo-footer"}
              src={LogoFooter}
              alt={"logo-footer"}
            />
          </div>
          {/*Footer links*/}
          <div className={"footer_container_links"}>
            <Link to={"/ourVision"}>Our Vision</Link>
            <Link to={"/ourProjects"}>Our Projects</Link>
            <Link to={"/login"}>Login</Link>
            <Link to={"/contact"}>Contact</Link>
          </div>
          <p>We're based in Oslo but often work remotely</p>
          <div className={"footer_social_media_container"}>
            <img
              className={"instagram-icon"}
              src={Instagram}
              alt={"instagram"}
            />
            <img className={"facebook-icon"} src={Facebook} alt={"facebook"} />
            <img className={"linkedin-icon"} src={LinkedIn} alt={"linkedIn"} />
          </div>
          <p>© 2021 by Meliora Impact. Org.nr 926 638 564</p>
        </div>
        {/*Footer subscribe to newsletter (non-functional)*/}
        <div className={"footer_container_right"}>
          <p>SUBSCRIBE TO OUR NEWSLETTER</p>
          <p>Sign up to out newsletter and follow our journey!</p>
          <div className={"subscribe_container"}>
            <input
              className={"input-field"}
              type={"email"}
              placeholder={"Your email address"}
            />
            <button className={"subscribe-button"}>Subscribe</button>
          </div>
        </div>
      </div>
    </>
  );
}
