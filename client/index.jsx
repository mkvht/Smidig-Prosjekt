import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { FrontPage } from "./pages/frontpage/frontPage";
import { OurVision } from "./pages/ourvision/ourVision";
import { Contact } from "./pages/contact";
import { Nav } from "./components/nav";
import { Footer } from "./components/footer";
import { Login } from "./pages/login";
import { Donate } from "./pages/donate/donate";
import { OurProjects } from "./pages/ourProjects/ourProjects";
import { EditProfile } from "./pages/profilePage/editProfile/editProfile";
import { EditConsent } from "./pages/profilePage/editConsents/editConsent";
import { Project } from "./pages/project/project";
import { Logout } from "./pages/logout";
import { ProfilePage } from "./pages/profilePage/profilePage";
import { TransactionHistory } from "./pages/profilePage/transactionHistory/transactionHistory";
import { ChangePaymentPlan } from "./pages/profilePage/changePaymentPlan/changePaymentPlan";
import { PromoApi } from "./pages/melioraApi/promoApi";

function Application() {
  return (
    <BrowserRouter>
      <nav className={"navlist"}>
        <Nav />
      </nav>
      <main>
        <Routes>
          <Route path={"/"} element={<FrontPage />} />
          <Route path={"/ourVision"} element={<OurVision />} />
          <Route path={"/contact"} element={<Contact />} />
          <Route path={"/login/*"} element={<Login />} />
          <Route path={"/donate/*"} element={<Donate />} />
          <Route path={"/ourProjects"} element={<OurProjects />} />
          <Route path={"/project/*"} element={<Project />} />
          <Route path={"/logout"} element={<Logout />} />
          <Route path={"/profile"} element={<ProfilePage />} />
          <Route
            path={"/profile/changePaymentPlan"}
            element={<ChangePaymentPlan />}
          />
          <Route path={"/melioraApi"} element={<PromoApi />} />
          <Route path={"/editProfile"} element={<EditProfile />} />
          <Route path={"/editConsent"} element={<EditConsent />} />
          <Route
            path={"/transactionHistory"}
            element={<TransactionHistory />}
          />
        </Routes>
      </main>
      <footer className={"footerlist"}>
        <Footer />
      </footer>
    </BrowserRouter>
  );
}

ReactDOM.render(<Application />, document.getElementById("app"));
