import { LineBox } from "../../../components/lineBox";
import { useNavigate } from "react-router-dom";

export function PromotionalMaterial() {
  const navigate = useNavigate();

  function redirectToMelioraApi() {
    navigate(`/melioraApi`);
  }

  /*Component showing info about and link to promotional Api*/
  return (
    <LineBox
      title="PROMOTIONAL MATERIAL"
      customClass={"profile-promotional-material"}
    >
      <div className="Parent-PromotionalMaterial">
        <div className="Child1">
          <p>
            We have made a tool to make it easy for you to customize promotional
            images, that you can use however you want. If you set it up
            correctly they will even update in real time! Click the button to
            check it out
          </p>
        </div>
        {/*Button linking to "Meliora Api"*/}
        <div className="Child2">
          <button
            type="button"
            className="button-light"
            onClick={() => redirectToMelioraApi()}
          >
            Explore the Meliora API
          </button>
        </div>
      </div>
    </LineBox>
  );
}
