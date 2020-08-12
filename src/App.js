import React from "react";
import "./App.css";
import Example from "./components/HeaderComponent";
import { BrowserRouter, Route, Switch } from "react-router-dom";

import Aboutus from "./components/AboutusComponent";
import Home from "./components/HomeComponent";
import Footer from "./components/FooterComponent";
import MarketingSchemes from "./components/MarketingSchemes";
import Switchtoonline from "./components/SwitchToOnlineComponent";
import BusinessAnalysis from "./components/BusinessAnalysisComponent";

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
          <Route path="/path-to-start" component={Aboutus} />
        </Switch>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
