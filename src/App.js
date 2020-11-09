import React from "react";
import "./App.css";
import Example from "./components/HeaderComponent/HeaderComponent";
import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom";

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

import firebase from "firebase";
import "firebase/firestore";

// Initialize Cloud Firestore through Firebase

var firebaseConfig = {
  apiKey: "AIzaSyDOU9lyR_rfK1xCryB5IqQphjcMlH9aPag",
  authDomain: "we-assist-7bb5b.firebaseapp.com",
  databaseURL: "https://we-assist-7bb5b.firebaseio.com",
  projectId: "we-assist-7bb5b",
  storageBucket: "we-assist-7bb5b.appspot.com",
  messagingSenderId: "96684577166",
  appId: "1:96684577166:web:4298800fbdf0142f1154df",
  measurementId: "G-SEQP5K66H6",
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

const db = firebase.firestore();

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
          <Redirect to="/" />
        </Switch>

        <Footer />
      </BrowserRouter>
    </div>
  );
}

export { db };
export default App;
