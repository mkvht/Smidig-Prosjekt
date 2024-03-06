import { Link } from "react-router-dom";
import Logo from "../images/Logo.png";
import "../css/nav.css";
import "../css/global.css";
import { loginCheck } from "../lib/loginCheck";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

export function Nav() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const navigate = useNavigate();

  useEffect(async () => {
    const loggedIn = await loginCheck();
    setIsLoggedIn(loggedIn);
  }, []);

  function handleClick() {
    navigate("/");
  }

  return (
    <>
      {/*Nav logo*/}
      <img
        className={"logo"}
        src={Logo}
        alt={"logo"}
        onClick={() => handleClick()}
      />
      {/*Links nav*/}
      <div className={"nav-links"}>
        <Link to={"/"}>Home</Link>
        <Link to={"/ourVision"}>Our Vision</Link>
        <Link to={"/ourProjects"}>Our Projects</Link>
        <Link to={"/donate"}>Donate</Link>
        <Link to={"/contact"}>Contact</Link>
        {/*If logged in - access to profile + logout button visible*/}
        {isLoggedIn ? (
          <>
            <Link to={"/profile"}>Profile</Link>
            <Link to={"/logout"}>Logout</Link>
          </>
        ) : (
          <Link to={"/login"} className={"login-button"}>
            Login
          </Link>
        )}
      </div>
    </>
  );
}
