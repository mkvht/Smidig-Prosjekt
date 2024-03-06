import logo from "../../../images/Logo.png";

export function Header() {
  return (
    <header className={"fp-header-container"}>
      <img className={"fp-logo-img"} src={logo} alt={"Logo"} />
      {/*<div className={"fp-header-logo"}>*/}
      {/*</div>*/}
      <div className={"fp-header-content"}>
        <h1 className={"fp-header-h1"}>MELIORA IMPACT</h1>
        <h3 className={"fp-header-h3"}>REIMAGINING PHILANTHROPIC GIVING</h3>
        <p className={"fp-header-p"}>
          We help connect corporate donors with non-profit organizations.
        </p>
      </div>
    </header>
  );
}
