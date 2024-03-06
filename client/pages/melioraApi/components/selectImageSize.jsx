export function SelectImageSize({ setImageSize }) {
  function handleChange(e) {
    setImageSize(e.target.value);
  }

  /*Component letting user select image size on promotional material*/
  return (
    <div className={"promo-api-customize-image-size-container"}>
      <p className={"promo-api-p"}>Select image size:</p>
      <div onChange={handleChange}>
        <input type="radio" value="small" defaultChecked name="size" /> Small
        (400*300px)
        <input type="radio" value="large" name="size" /> Large (1920*1080px)
        <input type="radio" value="wide" name="size" /> Wide (800*300px)
      </div>
    </div>
  );
}
