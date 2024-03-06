import { LineBox } from "../../../components/lineBox";
import { fetchSupporter } from "../../../lib/fetchAPI";
import { useState, useEffect } from "react";

export function Supporters({ projectId }) {
  const [supporters, setSupporters] = useState([]);
  useEffect(async () => {
    const result = await fetchSupporter(projectId);
    setSupporters(result.supporters);
  }, []);

  /*Component list supporters donated to spesific project*/
  return (
    <LineBox title="SUPPORTERS" customClass={"supporters"}>
      {/*Supporters logo if wanting tp display them for promotional reasons*/}
      <div className={"supporters-logo-container"}>
        {supporters.map(({ user_logo_path }) => (
          <div className={"supporters-image-size"} key={user_logo_path}>
            <img
              className={"supporters-logo"}
              src={"../" + user_logo_path}
              alt="test"
              key={user_logo_path}
              id="supporterImg"
            />
          </div>
        ))}
      </div>
    </LineBox>
  );
}
