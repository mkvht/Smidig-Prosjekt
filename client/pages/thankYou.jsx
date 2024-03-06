import "../css/thankYou.css";
import ThankYouImage from "../images/ThankYou.png";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

export function ThankYou() {
  const navigate = useNavigate();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  function handleClick() {
    navigate("/profile");
  }

  return (
    <div>
      {/* HOVED BILDE */}
      <div className="thankYouPicture">
        <img src={ThankYouImage} alt="Thank you" />
      </div>
      {/* TEKST UNDER BILDET */}
      <div className="thankYouFont">Thank you for your donation!</div>
      {/* TILBAKE TIL PROFIL - KNAPP */}
      <div className="thankYouButtonPlacement">
        <button
          type="button"
          className="thankYouButton"
          onClick={handleClick}
        >
          BACK TO PROFILE
        </button>
      </div>
    </div>
  );
}
