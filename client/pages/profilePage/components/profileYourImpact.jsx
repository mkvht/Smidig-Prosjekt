import { LineBox } from "../../../components/lineBox";
import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import { fetchUserImpact } from "../../../lib/fetchAPI";

export function ProfileYourImpact() {
  const navigate = useNavigate();
  const [userImpact, setUserImpact] = useState([]);

  useEffect(async () => {
    setUserImpact(await fetchUserImpact());
  }, []);

  function redirectToTransactionHistory() {
    navigate(`/transactionHistory`);
  }

  /*Component listing impacts based on users donations*/
  return (
    <LineBox title="YOUR IMPACT" customClass={"profile-your-impact"}>
      <h2 className={"profile-impact-subheader"}>
        THANKS TO YOUR DONATIONS WE HAVE BEEN ABLE TO:
      </h2>
      <div className={"profile-your-impact-container"}>
        <div className={"profile-your-impact-column"}>
          {/*Listing impact + impact icon*/}
          {userImpact.map((impact) => (
            <div className={"profile-impact"} key={impact.user_impact_id}>
              <img
                className={"profile-image-impact-icon"}
                src={`../${impact.impact_image_path}`}
              />
              <p className={"profile-impact-impact-text"}>
                {impact.impact_impact_text.toUpperCase()}
              </p>
            </div>
          ))}
        </div>
      </div>
      {/*Link to transaction history*/}
      <div className={"profile-impact-button"}>
        <button
          className={"profile-your-impact-transaction-history-btn"}
          onClick={() => redirectToTransactionHistory()}
        >
          Transaction history
        </button>
      </div>
    </LineBox>
  );
}
