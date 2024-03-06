import star from "../../../images/star.png";
import { useEffect, useState } from "react";
import { fetchStatistics } from "../../../lib/fetchAPI";

/*
Fetching statistics from database and displaying them in black box.
*/
export function Statistics() {
  const [statistics, setStatistics] = useState("");
  useEffect(async () => {
    setStatistics(await fetchStatistics());
  }, []);
  if (!statistics) {
    return <></>;
  }
  return (
    <div className={"fp-black-box"}>
      <div className={"black-box-item"}>
        <h2 className={"black-box-header"}>
          <img className={"fp-star-logo"} src={star} alt={"Star logo"} />
          {statistics.total.count}
        </h2>
        <p className={"black-box-p"}>TOTAL DONATIONS MADE</p>
      </div>
      <div className={"black-box-item"}>
        <h2 className={"black-box-header"}>NOK {statistics.total.sum} </h2>
        <p className={"black-box-p"}>FUNDS RAISED IN TOTAL</p>
      </div>
      <div className={"black-box-item"}>
        <h2 className={"black-box-header"}>NOK {statistics.this_year.sum}</h2>
        <p className={"black-box-p"}>FUNDS RAISED THIS YEAR</p>
      </div>
    </div>
  );
}
