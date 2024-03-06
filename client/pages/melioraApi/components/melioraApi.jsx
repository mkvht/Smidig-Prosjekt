import { LineBox } from "../../../components/lineBox";

export function MelioraApi() {
  /*Component explaining purpose of Meliora Api and how to use it*/
  return (
    <LineBox title="MELIORA API" customClass={"promo-api-meliora-api"}>
      <div className={"promo-api-text-container"}>
        <p className={"promo-api-paragraph"}>
          We have made an API to make it easy for you as a user to promote your
          philantropic activites. The API lets you fetch promotional images with
          updated information about the projects you have donated to, and what
          your contribution has resulted in.
          <br /> <br /> You can use the API to always have updated images on
          your website or on information screens in your office, and you only
          need to set it up once. You can also use this page to simply download
          a promotional image
        </p>
      </div>
    </LineBox>
  );
}
