import React from "react";
import "./App.css";
import Example from "./components/HeaderComponent/HeaderComponent";
import { BrowserRouter, Route, Switch } from "react-router-dom";

import Aboutus from "./components/AboutUsComponent/AboutusComponent";

import Footer from "./components/FooterComponent/FooterComponent";
import MarketingSchemes from "./components/MarketingSchemes/MarketingSchemes";
import Switchtoonline from "./components/SwitchToOnlineComponent/SwitchToOnlineComponent";
import BusinessAnalysis from "./components/BusinessAnalysisComponent/BusinessAnalysisComponent";
import Privacy from "./components/PrivacyPolicy";
import TermsAndConditions from "./components/TermsandconditionsComponent";
import pathtostart from "./components/PathToStartComponent/PathToStartComponent";
import Home from "./components/HomeCompononet/HomeComponent";
import Contactus from "./components/ContactusComponent/ContactusComponent";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Example />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/aboutus" component={Aboutus} />
          <Route path="/switch-to-online" component={Switchtoonline} />
          <Route path="/marketing-schemes" component={MarketingSchemes} />
          <Route path="/business-analytics" component={BusinessAnalysis} />
          <Route path="/path-to-start" component={pathtostart} />
          <Route path="/privacy-policy" component={Privacy} />
          <Route path="/terms-and-conditions" component={TermsAndConditions} />
          <Route path="/contactus" component={Contactus} />
        </Switch>

        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
