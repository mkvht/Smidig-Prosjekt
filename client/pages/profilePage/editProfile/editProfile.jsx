import "../../../css/editProfile.css";
import "../../../css/global.css";
import "../../../css/profile.css";
import { ProfileLinks } from "../../../components/profileLinks";
import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import { SelectCountry } from "./components/countries";
import { loginCheck } from "../../../lib/loginCheck";
import { NotLoggedIn } from "../../../components/notLoggedIn";
import { fetchUserInfo } from "../../../lib/fetchAPI";
import { patchUserDetails } from "../../../lib/postAPI";
import { useLoading } from "../../../lib/useLoading";
import { ErrorMessage } from "../../../components/errorMessage";

export function EditProfile() {
  const navigate = useNavigate();
  const [userInfo, setUserInfo] = useState({});
  const [name, setName] = useState("");
  const [organizationNumber, setOrganizationNumber] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [address, setAddress] = useState("");
  const [city, setCity] = useState("");
  const [zipCode, setZipCode] = useState("");
  const [country, setCountry] = useState("");
  const [email, setEmail] = useState("");

  const { data, error, isLoading } = useLoading(loginCheck);

  useEffect(async () => {
    window.scrollTo(0, 0);

    const userInfoFetched = await fetchUserInfo();
    setUserInfo(userInfoFetched);
    setName(userInfoFetched.user_company_name);
    setOrganizationNumber(userInfoFetched.user_organization_number);
    setEmail(userInfoFetched.user_email);
    setAddress(userInfoFetched.user_address);
    setCity(userInfoFetched.user_city);
    setZipCode(userInfoFetched.user_zip_code);
    setPhoneNumber(userInfoFetched.user_phone);
    setCountry(userInfoFetched.user_country);
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

  function handleSubmit(event) {
    event.preventDefault();
    const formData = new FormData(event.target);
    const formProps = Object.fromEntries(formData);

    const changedUserDetails = {
      user_company_name: formProps["company name"],
      user_organization_number: formProps["organization number"],
      user_email: formProps["email"],
      user_address: formProps["address"],
      user_zip_code: formProps["code"],
      user_city: formProps["city"],
      user_country: formProps["country"],
      user_phone: formProps["phone number"],
    };
    if (
      confirm(
        "Old company name: " +
          userInfo.user_company_name +
          "\n" +
          "New company name: " +
          changedUserDetails.user_company_name +
          "\n" +
          "Old Org. Number: " +
          userInfo.user_organization_number +
          "\n" +
          "New Org. Number: " +
          changedUserDetails.user_organization_number +
          "\n" +
          "Old email address: " +
          userInfo.user_email +
          "\n" +
          "New email address: " +
          changedUserDetails.user_email +
          "\n" +
          "Old address: " +
          userInfo.user_address +
          ", " +
          userInfo.user_city +
          ", " +
          userInfo.user_zip_code +
          ", " +
          userInfo.user_country +
          "\n" +
          "New address: " +
          changedUserDetails.user_address +
          ", " +
          changedUserDetails.user_city +
          ", " +
          changedUserDetails.user_zip_code +
          ", " +
          changedUserDetails.user_country +
          "\n" +
          "Old phone number: " +
          userInfo.user_phone +
          "\n" +
          "New phone number: " +
          changedUserDetails.user_phone +
          "\n\n" +
          "Are you sure you want to change these user details?"
      )
    ) {
      patchUserDetails(changedUserDetails);
      navigate("/editProfile");
    }
  }

  return (
    <div className="profile-main">
      <div>
        <h1 className="profile-header">EDIT PROFILE</h1>
      </div>
      <ProfileLinks />
      <form onSubmit={handleSubmit}>
        <div className="edit-profile-inputs-container">
          <label className="input-column-left">
            <span>Company name:</span>
            <input
              type="text"
              name="company name"
              defaultValue={name}
              required
              className="input-field"
            />
            <span>Organization number:</span>
            <input
              type="number"
              name="organization number"
              defaultValue={organizationNumber}
              required
              className="input-field"
            />
            <span>Address:</span>
            <input
              type="text"
              name="address"
              defaultValue={address}
              required
              className="input-field"
            />

            <label className="input-field-row">
              <div className="input-field-split">
                <span>Zip Code:</span>
                <input
                  type="number"
                  name="code"
                  defaultValue={zipCode}
                  required
                  className="smaller-input-field"
                />
              </div>
              <div className="input-field-split">
                <span>City:</span>
                <input
                  type="text"
                  name="city"
                  defaultValue={city}
                  required
                  className="smaller-input-field"
                />
              </div>
            </label>
          </label>

          <label className="input-column-right">
            <span>E-mail address:</span>
            <input
              type="email"
              name="email"
              defaultValue={email}
              required
              className="input-field"
            />

            <span>Phone number:</span>
            <input
              type="number"
              name="phone number"
              defaultValue={phoneNumber}
              required
              className="input-field"
            />

            <span>Country:</span>
            <SelectCountry setCountry={setCountry} country={country} />
          </label>
        </div>
        <div className={"button-container"}>
          <button type={"submit"} className="button">
            CONFIRM CHANGES
          </button>
        </div>
      </form>
    </div>
  );
}
