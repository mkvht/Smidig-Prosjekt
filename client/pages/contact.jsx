import "../css/contact.css";
import "../css/global.css";
import { useEffect } from "react";

export function Contact() {
  useEffect(() => {
    window.scrollTo(0, 0);
  });

  return (
    <div className="ContactMain">
      <div>
        <h1 className="ContactTitle">CONTACT US</h1>
        <div className="ContactText">
          Reach out if you want to collaborate or know more about our services
          or just to connect!
        </div>
      </div>
      <form>
        <div>
          <div className="ContactLabelInputField">
            <label className="ContactLabelField">
              <span>
                First name <span className="ContactMandatory"> *</span>
              </span>
              <input
                type="text"
                name="First name"
                required
                className="ContactInputWidth"
              />
            </label>

            <label className="ContactLabelField">
              <span>
                Last name<span className="ContactMandatory"> *</span>
              </span>
              <input
                type="text"
                name="Last name"
                required
                className="ContactInputWidth"
              />
            </label>
          </div>

          <div className="ContactLabelInputField">
            <label className="ContactLabelField">
              <span>
                Email<span className="ContactMandatory"> *</span>
              </span>
              <input
                type="email"
                name="Email"
                required
                className="ContactInputWidth"
              />
            </label>

            <label className="ContactLabelField">
              <span>Phone</span>
              <input type="number" name="Phone" className="ContactInputWidth" />
            </label>
          </div>
        </div>
        <div className="ContactBottomHalf">
          <label className="ContactLabelField">
            <span>
              Your message<span className="ContactMandatory"> *</span>
            </span>
            <textarea
              name="Your message"
              required
              className="ContactYourMessage"
            />
          </label>
          <input type="submit" className="ContactSubmitButton" />
        </div>
      </form>
    </div>
  );
}
