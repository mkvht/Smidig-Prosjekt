import { LineBox } from "../../../components/lineBox";
import { useEffect, useState } from "react";

/*
Sets users choice of amount to donate.
*/
export function AmountOptions({ setAmountOption, amountOption }) {
  const [custom, setCustom] = useState(false);
  const [customValue, setCustomValue] = useState("0");
  /*
Sets one of the predefined amount options for donation if chosen.
*/
  function handleSelectedOption(e) {
    setCustom(false);
    setAmountOption(e.target.value);
  }
  /*
 Sets a custom amount of users choice for donation. Button and input field.
 */
  function handleSelectedOptionCustom() {
    setAmountOption(customValue);
    setCustom(true);
  }

  function handleSelectedOptionCustomInput(e) {
    if (isNaN(e.target.value)) {
      e.target.value = e.target.value.substring(0, e.target.value.length - 1);
    }
    let val = e.target.value === "" ? "0" : e.target.value;
    setAmountOption(val);
    setCustomValue(val);
  }

  function activateCustomInput(e) {
    setCustom(true);
    setAmountOption(customValue);

    setTimeout(() => {
      if (e.target.children[0] !== undefined) {
        e.target.children[0].focus();
      }
    }, 1);
  }

  useEffect(() => {
    if (
      amountOption !== "50000" &&
      amountOption !== "20000" &&
      amountOption !== "10000" &&
      amountOption !== null
    ) {
      setCustomValue(amountOption);
    }
  }, []);

  return (
    <LineBox title="CHOOSE YOUR AMOUNT" customClass={"payment-amount-p"}>
      <div className={"payment-container"}>
        <div className={"choose-amount-container"}>
          <div className={"payment-option-container"}>
            <div className="amount-option-button">
              <input
                type="radio"
                id="a10000"
                name="check-substitution-3"
                value={"10000"}
                checked={amountOption === "10000" || amountOption === null}
                onChange={(e) => {
                  handleSelectedOption(e);
                }}
              />
              <label className="btn btn-default" htmlFor="a10000">
                10 000kr
              </label>
            </div>
            <div className="amount-option-button">
              <input
                type="radio"
                id="a20000"
                name="check-substitution-3"
                value={"20000"}
                checked={amountOption === "20000"}
                onChange={(e) => {
                  handleSelectedOption(e);
                }}
              />
              <label className="btn btn-default" htmlFor="a20000">
                20 000kr
              </label>
            </div>
            <div className="amount-option-button">
              <input
                type="radio"
                id="a50000"
                name="check-substitution-3"
                value={"50000"}
                checked={amountOption === "50000"}
                onChange={(e) => {
                  handleSelectedOption(e);
                }}
              />
              <label className="btn btn-default" htmlFor="a50000">
                50 000kr
              </label>
            </div>

            <div className="amount-option-button">
              <input
                type="radio"
                id="custom"
                name="check-substitution-3"
                value={"custom"}
                checked={
                  amountOption !== "50000" &&
                  amountOption !== "20000" &&
                  amountOption !== "10000"
                }
                onChange={(e) => {
                  handleSelectedOptionCustom(e);
                }}
              />
              <label className="btn btn-default" htmlFor="custom">
                Custom Amount
              </label>
            </div>
          </div>
          <br />
          <div
            className="payment-option-custom-input"
            onClick={(e) => {
              activateCustomInput(e);
            }}
          >
            <input
              type="input"
              id="custom"
              name="check-substitution-3"
              placeholder="Input custom amount"
              defaultValue={
                amountOption !== "50000" &&
                amountOption !== "20000" &&
                amountOption !== "10000" &&
                amountOption !== "0"
                  ? amountOption
                  : ""
              }
              disabled={!custom}
              onChange={(e) => {
                handleSelectedOptionCustomInput(e);
              }}
            />
          </div>
        </div>
      </div>
    </LineBox>
  );
}
