/* eslint-disable jsx-a11y/accessible-emoji */
import React, { Component } from "react";
import { SocialIcon } from "react-social-icons";
import { Link } from 'react-router-dom'

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
                <Link to="privacy-policy">
                  <li className="mx-4"> → Privacy policy</li>
                </Link>
                <Link to="terms-and-conditions">
                  <li className="mx-4">→ Terms and Condition</li>
                </Link>
                <Link to="/contactus">
                  {" "}
                  <li className="mx-4">→ Contact Us</li>
                </Link>
              </ul>
            </div>
            <div className="social col-12 col-sm-3 text-center">
              <SocialIcon url="https://www.facebook.com/We-Assist-132069195031913/" />
              <SocialIcon url="https://www.linkedin.com/company/we-assist-your-business/" />
              <SocialIcon url="https://www.instagram.com/_we_assist_/" />
            </div>
          </div>
          <div className="text-center py-1">
            &copy; Copyright 2020 Made with <span> ❤️   </span> by We Assist
          </div>
        </Container>
      </div>
    );
  }
}
export default Footer;
