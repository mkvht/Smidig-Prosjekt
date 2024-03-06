import "../../../css/frontPage.css";
import { useNavigate } from "react-router-dom";
import { Login } from "../../login";

export function StartDonating() {
  const navigate = useNavigate();

  function onClickDonate() {
    navigate("/donate");
  }

  function onClickFindProject() {
    navigate("/ourProjects");
  }

  function onClickLogin() {
    navigate("/login");
  }

  return (
    <div id={"startDonateSteps"}>
      <div className={"fp-startdonating-container2"}>
        <h1 className={"fp-startdonating-header"}>START DONATING</h1>
      </div>
      <div className={"fp-startdonating-box"}>
        <div className={"fp-startdonating-1-new"}>
          <p className={"fp-startdonating-numbers-new"}>1</p>
          <div className={"fp-startdonating-textbox-new"}>
            <h1 className={"fp-startdonating-subheaders-new"}>
              FIND YOUR PROJECT
            </h1>
            <p className={"fp-startdonating-p-new"}>
              Research different charity initiatives and find a cause that
              engages you.
            </p>
            <button
              onClick={onClickFindProject}
              className={"fp-startdonating-buttons"}
            >
              FIND PROJECT
            </button>
          </div>
        </div>

        <div className={"fp-startdonating-2-new"}>
          <p className={"fp-startdonating-numbers-new"}>2</p>
          <div className={"fp-startdonating-textbox-new"}>
            <h1 className={"fp-startdonating-subheaders-new"}>Login</h1>
            <p className={"fp-startdonating-p-new"}>
              Login and register your business and a contact person.
            </p>
            <button
              onClick={onClickLogin}
              className={"fp-startdonating-buttons"}
            >
              LOGIN
            </button>
          </div>
        </div>

        <div className={"fp-startdonating-3-new"}>
          <p className={"fp-startdonating-numbers-new"}>3</p>
          <div className={"fp-startdonating-textbox-new"}>
            <h1 className={"fp-startdonating-subheaders-new"}>Donate</h1>
            <p className={"fp-startdonating-p-new"}>
              Donate to your chosen project and make your Meliora impact!
            </p>
            <button
              onClick={onClickDonate}
              className={"fp-startdonating-buttons"}
            >
              DONATE
            </button>
          </div>
        </div>
      </div>
    </div>
  );
  /*return (
    <div>
      <div id={"startDonateSteps"} className={"fp-startdonating-container"}>
        <div>
          <h1 className={"fp-startdonating-header"}>START DONATING</h1>
        </div>
        <div className={"fp-startdonating-1"}>
          <p className={"fp-startdonating-numbers"}>1</p>
          <div className={"fp-startdonating-textbox"}>
            <h1 className={"fp-startdonating-subheaders"}>FIND YOUR PROJECT</h1>
            <p className={"fp-startdonating-p"}>
              Research different charity initiatives and find a cause that
              engages you.
            </p>
            <button
              onClick={onClickFindProject}
              className={"fp-startdonating-buttons"}
            >
              FIND PROJECT
            </button>
          </div>
        </div>
        <div className={"fp-startdonating-2"}>
          <p className={"fp-startdonating-numbers"}>2</p>
          <div className={"fp-startdonating-textbox"}>
            <h1 className={"fp-startdonating-subheaders"}>Login</h1>
            <p className={"fp-startdonating-p"}>
              Login and register your business and a contact person.
            </p>
            <button
              onClick={onClickLogin}
              className={"fp-startdonating-buttons"}
            >
              LOGIN
            </button>
          </div>
        </div>
        <div className={"fp-startdonating-3"}>
          <p className={"fp-startdonating-numbers"}>3</p>
          <div className={"fp-startdonating-textbox"}>
            <h1 className={"fp-startdonating-subheaders"}>DONATE</h1>
            <p className={"fp-startdonating-p"}>
              Donate to your chosen project and make your Meliora impact!
            </p>
            <button
              onClick={onClickDonate}
              className={"fp-startdonating-buttons"}
            >
              DONATE
            </button>
          </div>
        </div>
      </div>
    </div>
  );*/
}
