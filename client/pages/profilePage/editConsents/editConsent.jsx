import "../../../css/editConsent.css";
import "../../../css/global.css";
import "../../../css/profile.css";
import { useEffect, useState } from "react";
import { fetchConsent } from "../../../lib/fetchAPI";
import { putChangeConsent } from "../../../lib/postAPI";
import { loginCheck } from "../../../lib/loginCheck";
import { NotLoggedIn } from "../../../components/notLoggedIn";
import { ProfileLinks } from "../../../components/profileLinks";
import { useLoading } from "../../../lib/useLoading";
import { ErrorMessage } from "../../../components/errorMessage";

export function EditConsent() {
  const [consent, setConsent] = useState(null);
  const { data, error, isLoading } = useLoading(loginCheck);
  useEffect(async () => {
    window.scrollTo(0, 0);
    const cons = await fetchConsent();
    setConsent(cons);
  }, []);

  if (isLoading) {
    return <div className={"not-logged-in-buffer-height"}> </div>;
  }
  if (data === false) {
    return <NotLoggedIn />;
  }
  if (error) {
    return <ErrorMessage />;
  }

  async function handleChangeConsent(e) {
    e.target.defaultChecked = !e.target.checked;
    await putChangeConsent({
      consent: e.target.value,
      value: e.target.checked,
    });
  }

  return (
    consent && (
      <div className="profile-main">
        <div>
          <h1 className="profile-header">EDIT CONSENT</h1>
        </div>
        <ProfileLinks />
        <form>
          <div className="checkbox-field">
            <div className="checkbox-field-row">
              <input
                type="checkbox"
                id="consent1"
                name="consent1"
                value={"consent_newsletter"}
                onChange={handleChangeConsent}
                defaultChecked={consent.consent_newsletter}
              />
              <label htmlFor="consent1">
                I consent to recieve Meliora Impact Newsletter via Email. For
                further information, please consult the Privacy Policy
              </label>
            </div>
            <div className="checkbox-field-row">
              <input
                type="checkbox"
                id="consent2"
                name="consent2"
                value={"consent_logo_rights"}
                onChange={handleChangeConsent}
                defaultChecked={consent.consent_logo_rights}
              />
              <label htmlFor="consent2">
                I consent to give Meliora Impact the rights to use our company
                logo as a project partner (also requires a company logo)
              </label>
            </div>
          </div>
        </form>
      </div>
    )
  );
}
