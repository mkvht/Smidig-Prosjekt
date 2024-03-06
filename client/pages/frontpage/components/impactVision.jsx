export function ImpactVision(props) {
  return (
    <div className={"impact-vision-container"}>
      <div className={"iv-item"}>
        <h2 className={"fp-main-h2"}>YOUR IMPACT</h2>
        <p className={"iv-p"}>
          Our platform provides donors with a giving strategy, gives insights
          regarding the company’s philanthropic activities, provides a curated
          list of trusted nonprofits, categorised so they are simple to choose.
        </p>
        <p className={"iv-p"}>
          <strong>
            Donations are unabridged and their impact will be made visible in
            various forms.
          </strong>
        </p>
        <button className={"button"} onClick={props.onClick}>
          START DONATING
        </button>
      </div>
      <div className={"iv-item"}>
        <h2 className={"fp-main-h2"}>OUR VISION</h2>
        <p className={"iv-p"}>
          We envision giving to be impactful and universal, and that nonprofits
          can fully focus on their front line work.
        </p>
        <p className={"iv-p"}>
          We're creating a more intimate connection between donor and cause,
          building a service that is accessible, strategic and effective, and
          that allows nonprofits to carry out their front line work.
        </p>
        <button className={"button"} onClick={props.onClick1}>
          LEARN MORE
        </button>
      </div>
    </div>
  );
}
