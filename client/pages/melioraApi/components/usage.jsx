import { LineBox } from "../../../components/lineBox";
import "../../../css/global.css";

export function Usage({ currentURL }) {
  function onClickCopy() {
    const copyText = document.getElementById("url-input");

    copyText.select();
    copyText.setSelectionRange(0, 99999); /* For mobile devices */

    /* Copy the text inside the text field */
    navigator.clipboard.writeText(copyText.value);
  }

  let hostName = "";
  if (currentURL !== "") {
    hostName = window.location.hostname + "/";
    if (hostName === "localhost/") {
      hostName = "http://localhost:3000/";
    }
  }

  /*Download button*/
  function DownloadButton({ currentURL }) {
    if (currentURL !== "") {
      return (
        <a href={hostName + currentURL + ""} download="promoImage.png">
          <button className={"button"}>Download</button>
        </a>
      );
    } else {
      return <button className={"button"}>Download</button>;
    }
  }

  /*Component letting user download and copy URL for use on wanted devices for promotional purpose*/
  return (
    <LineBox title="USAGE" customClass={"promo-api-usage"}>
      <div className={"promo-api-text-container"}>
        <p className={"promo-api-paragraph"}>
          The URL below can be embedded on your website or informational screens
          to always display an up to date image. You can also download the image
          if you want it as a file, or simply send the URL in an email
        </p>
      </div>
      <div className={"promo-api-container"}>
        <input
          className={"promo-api-url"}
          type={"text"}
          value={hostName + currentURL}
          id={"url-input"}
          onClick={onClickCopy}
          readOnly
        />
      </div>
      {/*Copy URL button*/}
      <div className={"promo-api-buttons"}>
        <DownloadButton currentURL={currentURL} />
        <button className={"button"} onClick={onClickCopy}>
          Copy URL
        </button>
      </div>
    </LineBox>
  );
}
