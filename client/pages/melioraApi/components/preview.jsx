import { LineBox } from "../../../components/lineBox";
import { useEffect } from "react";

export function Preview({
  userImpactId,
  projectId,
  imageSize,
  userInfo,
  setCurrentURL,
}) {
  let imageURL = "";

  useEffect(() => {
    setCurrentURL(imageURL);
  }, [imageURL]);

  if (!userInfo || !projectId || !userImpactId) {
    return (
      <LineBox title="PREVIEW" customClass={"promo-api-preview"}>
        <div className={"promo-api-preview-info"}>
          <p>Please select all above parameters</p>
        </div>
      </LineBox>
    );
  }

  if (userImpactId === "total") {
    imageURL = `api/promo?projectId=${projectId}&userId=${userInfo.user.user_id}&size=${imageSize}`;
    setCurrentURL(imageURL);
  } else {
    imageURL = `api/promo?userImpactId=${userImpactId}&size=${imageSize}`;
    setCurrentURL(imageURL);
  }

  /*Component showing preview of image based on project supported, impact selected and size wanted*/
  return (
    <LineBox title="PREVIEW" customClass={"promo-api-preview"}>
      <div className={"promo-api-image-container"}>
        <img className={"promo-api-image"} src={imageURL} alt={"image"} />
      </div>
    </LineBox>
  );
}
