import ovLogo from "../../../images/ov-logo.png";
import "../../../css/frontPage.css";
import "../../../css/global.css";
import { LineBox } from "../../../components/lineBox";

/*
LineBox - all code for setting up and position green lines.
 */
export function BenefitsForDonors() {
  /*Component listing Benefit for donors */
  return (
    <LineBox title="BENEFITS FOR DONORS" customClass={"benefits-for-donors"}>
      <div className={"our-vision-container"}>
        <div className={"ov-p-container"}>
          <div className={"ov-meliora-logo"}>
            <img className={"ov-logo"} src={ovLogo} alt={"ov-logo"} />
          </div>
          <div>
            <p className={"ov-p"}>
              By using Meliora Impact´s platform, companies can leverage their
              corporate resources for greater social good. <br />
              <br /> Donors who choose our platform get access to carefully
              selected nonprofits and projects to support, will receive inside
              stories about the projects and will see how their donations make
              an impact. <br />
              <br /> Donors get access to engaging reports on their
              philanthropic activity, continuously updated dashboards, and of
              course have full control over their donations. <br />
              <br /> In addition, corporate donors can sign up to receive a
              philanthropic strategy fully tailored to their business and values
            </p>
          </div>
        </div>
      </div>
    </LineBox>
  );
}
