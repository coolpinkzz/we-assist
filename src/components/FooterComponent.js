import React, { Component } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart } from "@fortawesome/free-solid-svg-icons";

class Footer extends Component {
  render() {
    return (
      <div>
        <div className="text-center  bg-secondary text-light">
          <p>
            &copy; Copyright 2020 Made with{" "}
            <span>
              {" "}
              <FontAwesomeIcon icon={faHeart} />{" "}
            </span>
            by We Assist
          </p>
        </div>
      </div>
    );
  }
}
export default Footer;
