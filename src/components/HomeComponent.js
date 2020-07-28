import React, { Component } from "react";
import "../styles/home.css";
import { Container } from "reactstrap";

class Home extends Component {
  render() {
    return (
      <div className="home">
        <div className="row">
          <div className="moto col-12  col-sm-6 text-center text-sm-left">
            <h1 id="heading">WE THINK ABOUT YOU AND YOUR FUTURE !</h1>
            <hr></hr>
            <p>
              Running a business can be a difficult job sometimes, but keep all
              your stress aside as we can help your business to prosper. We will
              take care of your business and come up with advanced solutions, so
              it can grow and reach new levels of success. If you are still
              unsure, take a tour of our website and at the end you will surely
              want our help.
            </p>
          </div>
          <div className="col-12 col-sm-6 mt-2">
            <img
              className="d-none d-sm-block"
              id="poster"
              src="images/poster.jpg"
              alt=" poster"
            />
          </div>
        </div>

        <Container>
          <div className="row mt-5 justify-content-center">
            <div className="">
              <img id="iag" src="images/iac.png" alt="Ideal action and Goal" />
            </div>
          </div>
        </Container>
      </div>
    );
  }
}

export default Home;
