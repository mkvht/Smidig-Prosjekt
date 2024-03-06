import "../css/global.css";
import { useNavigate } from "react-router-dom";

export function NotLoggedIn() {
  const navigate = useNavigate();
  return (
    <div className="not-logged-in-container">
      <div className="not-logged-in-green-line-box">
        <h1>You are not logged in</h1>
        <p>Please log in to view this page.</p>
        <button onClick={() => navigate("/login")} className={"login-button"}>
          Login
        </button>
      </div>
    </div>
  );
}
