import henriette from "../../../images/MelioraHenriette.png";
import emailIcon from "../../../images/email.png";
import phoneIcon from "../../../images/phone-call.png";
import mara from "../../../images/MelioraMara.png.jpeg";
import acacia from "../../../images/MelioraAcacia.png";

export function OurTeam() {
  return (
    <div className={"our-team-container"}>
      <h2 className={"fp-main-h2"}>OUR TEAM</h2>
      <p className={"our-team-p"}>
        We're a Norwegian female-founded startup changing corporate giving and
        the way companies and nonprofits connect.
      </p>
      <div className={"profile-container"}>
        <div className={"profile"}>
          <img
            className={"profile-image"}
            src={henriette}
            alt={"Profile image"}
          />
          <div className={"profile-info-container"}>
            <p className={"name-p"}>HENRIETTE FRILING</p>
            <p className={"field-p"}>Non profit</p>
            <div className={"profile-email-phone"}>
              <img
                className={"profile-info-icon"}
                src={emailIcon}
                alt={"Email icon"}
              />
              <p className={"info-p"}>henriettefriling@gmail.com</p>
            </div>
            <div className={"profile-email-phone"}>
              <img
                className={"profile-info-icon"}
                src={phoneIcon}
                alt={"Phone icon"}
              />
              <p className={"info-p"}>+47 410 00 000</p>
            </div>
          </div>
        </div>
        <div className={"profile"}>
          <img className={"profile-image"} src={mara} alt={"Profile image"} />
          <div className={"profile-info-container"}>
            <p className={"name-p"}>MARA LEHMANN</p>
            <p className={"field-p"}>Product Design</p>
            <div className={"profile-email-phone"}>
              <img
                className={"profile-info-icon"}
                src={emailIcon}
                alt={"Email icon"}
              />
              <p className={"info-p"}>mara@melioraimpact.no</p>
            </div>
            <div className={"profile-email-phone"}>
              <img
                className={"profile-info-icon"}
                src={phoneIcon}
                alt={"Phone icon"}
              />
              <p className={"info-p"}>+47 411 00 000</p>
            </div>
          </div>
        </div>
        <div className={"profile"}>
          <img className={"profile-image"} src={acacia} alt={"Profile image"} />
          <div className={"profile-info-container"}>
            <p className={"name-p"}>ACACIA DE MEO</p>
            <p className={"field-p"}>Partnerships</p>
            <div className={"profile-email-phone"}>
              <img
                className={"profile-info-icon"}
                src={emailIcon}
                alt={"Email icon"}
              />
              <p className={"info-p"}>acacia@melioraimpact.no</p>
            </div>
            <div className={"profile-email-phone"}>
              <img
                className={"profile-info-icon"}
                src={phoneIcon}
                alt={"Phone icon"}
              />
              <p className={"info-p"}>+47 412 00 000</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
