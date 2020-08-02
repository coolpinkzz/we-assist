import React from "react";
import "./App.css";
import Example from "./components/HeaderComponent";
import { BrowserRouter, Route, Switch } from "react-router-dom";

import Aboutus from "./components/AboutusComponent";
import Home from "./components/HomeComponent";
import Footer from "./components/FooterComponent";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Example />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/aboutus" component={Aboutus} />
        </Switch>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
