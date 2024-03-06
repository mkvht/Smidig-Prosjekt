import { Link } from "react-router-dom";
import "../css/profile.css";
import { useEffect, useState } from "react";

export function ProfileLinks() {
  const [currLink, setCurrLink] = useState(null);
  useEffect(() => {
    const link = window.location.pathname;
    setCurrLink(link);
  }, []);
  return (
    <form className={"profile-links"}>
      <Link
        to={"/editProfile"}
        style={{ color: currLink === "/editProfile" ? "#0bcfbb" : "#000" }}
      >
        Edit profile
      </Link>
      <Link
        to={"/editConsent"}
        style={{ color: currLink === "/editConsent" ? "#0bcfbb" : "#000" }}
      >
        Edit consent
      </Link>
      <Link
        to={"/profile"}
        style={{ color: currLink === "/profile" ? "#0bcfbb" : "#000" }}
      >
        Profile
      </Link>
      <Link
        to={"/transactionHistory"}
        style={{
          color: currLink === "/transactionHistory" ? "#0bcfbb" : "#000",
        }}
      >
        Transaction history
      </Link>
    </form>
  );
}
