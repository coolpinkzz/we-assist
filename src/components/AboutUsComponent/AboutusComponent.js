import React, { Component } from "react";
import MetaTags from "react-meta-tags";

import { Container } from "reactstrap";
import "./aboutus.css";

class Aboutus extends Component {
  render() {
    return (
      <div className="aboutcard">
        <MetaTags>
          <title> About Us </title>
          <meta
            name="description"
            content="WE ASSIST is a step towards self-reliant India. We care your ideas and develop them more with a mix of latest technologies to bring positive changes in new Indian brands. Our team is set on a mission to transform the face of India in the global business industry."
          />
          <meta property="og:title" content="About Us" />
          <meta
            property="og:image"
            content="https://firebasestorage.googleapis.com/v0/b/we-assist-7bb5b.appspot.com/o/logo.png?alt=media&token=ab0f8bc7-bee6-4f30-b5a2-58f8fba20179"
          />
        </MetaTags>
        <Container>
          <h1 style={{ textAlign: "center" }}>OUR MISSION</h1>
          <p>
            <span style={{ fontFamily: "'Krona One', sans-serif" }}>
              WE ASSIST{" "}
            </span>
            is a step towards self-reliant India. We care your ideas and develop
            them more with a mix of latest technologies to bring positive
            changes in new Indian brands. Our team is set on a mission to
            transform the face of India in the global business industry.
            <br />
            <br />
            Every local Indian brand dreams about being a global brand and we
            are ready to fulfill your dream by “being vocal for the local”. As
            fellow Indians, we consider it as our duty to lend you a helping
            hand and to you provide you right steps to grow. Be sure that we
            don’t require too much money, instead we want you to trust us
            because we won’t let your trust go in vain.
            <br />
            <br />
            The Atmanirbhar Bharat Abhiyan is dependent on five pillars, namely:
            Economy, Infrastructure, Technology-driven system, Demography, and
            Demand. Team “We Assist” put all the efforts to strengthen all the
            pillars of local Indian brands as far as possible.
            <br />
            <br />
            We directly work on two pillars: Technology-driven system and
            Demand. Through new technologies, we will make your local brand
            highly advanced and also empower you as a supplier to meet your
            customer’s demands, which will eventually create more demand of your
            product or services.
            <br />
            <br />
            Not only these two pillars, we work indirectly on the other three
            pillars as well, so that you can convert your brand to a global
            brand at a fast rate and low financial input.
            <br />
            <br />
            Have faith in us because we believe in your business!
          </p>
        </Container>
      </div>
    );
  }
}
export default Aboutus;
