import React, { Component } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { SocialIcon } from "react-social-icons";
import { faHeart } from "@fortawesome/free-solid-svg-icons";

import { Container } from "reactstrap";
import "./fotter.css";

class Footer extends Component {
  render() {
    return (
      <div className="footer">
        <Container>
          <div className="row p-2">
            <div className="col-12 col-sm-9 pt-3">
              <ul id="foot" className="d-sm-flex">
                <a href="privacy-policy">
                  <li className="mx-4"> → Privacy policy</li>
                </a>
                <a href="terms-and-conditions">
                  <li className="mx-4">→ Terms and Condition</li>
                </a>
                <a href="/contact-us">
                  {" "}
                  <li className="mx-4">→ COntact Us</li>
                </a>
              </ul>
            </div>
            <div className="social col-12 col-sm-3 text-center">
              <SocialIcon url="https://www.facebook.com/" />
              <SocialIcon url="https://www.linkedin.com/" />
              <SocialIcon url="https://www.instagram.com/" />
            </div>
          </div>
          <div className="text-center py-1">
            &copy; Copyright 2020 Made with ❤️ by We Assist
          </div>
        </Container>
      </div>
    );
  }
}
export default Footer;
