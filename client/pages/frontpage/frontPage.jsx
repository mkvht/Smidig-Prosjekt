import "../../css/frontPage.css";
import "../../css/global.css";
import { useNavigate } from "react-router-dom";
import { Header } from "./components/header";
import { ImpactVision } from "./components/impactVision";
import { Testimonials } from "./components/testimonials";
import { Statistics } from "./components/statistics";
import { WhyMeliora } from "./components/whyMeliora";
import { StartDonating } from "./components/startDonating";
import { OurTeam } from "./components/ourTeam";

export function FrontPage() {
  const navigate = useNavigate();

  const navigateOurVision = () => {
    navigate("/ourVision");
  };

  const navigateDonate = () => {
    location.href = "#startDonateSteps";
  };

  return (
    <>
      <Header />
      <ImpactVision onClick={navigateDonate} onClick1={navigateOurVision} />
      <Testimonials />
      <Statistics />
      <WhyMeliora />
      <StartDonating />
      <OurTeam />
    </>
  );
}
