import React, { Component } from "react";
import { Link } from 'react-router-dom'
import Headroom from "react-headroom";
import {
  Collapse,
  Navbar,
  NavbarToggler,

  Nav,
  NavItem,

  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,

} from "reactstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faHome,
  faCog,
  faUser,
  faPhoneSquare,
} from "@fortawesome/free-solid-svg-icons";
import { Container } from "react-bootstrap";
import "./header.css";
class Example extends Component {
  constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);
    this.onMouseEnter = this.onMouseEnter.bind(this);
    this.onMouseLeave = this.onMouseLeave.bind(this);
    this.clicktoggle = this.clicktoggle.bind(this);
    this.state = {
      dropdownOpen: false,
      isOpen: false,
    };
  }

  toggle() {
    this.setState((prevState) => ({
      dropdownOpen: !prevState.dropdownOpen,
    }));
  }

  onMouseEnter() {
    this.setState({ dropdownOpen: true });
  }

  onMouseLeave() {
    this.setState({ dropdownOpen: false });
  }
  clicktoggle() {
    if (this.state.isOpen === true) {
      this.setState({ isOpen: false });
    } else this.setState({ isOpen: true });
  }

  render() {
    const mystyle = {
      color: "#0C0032",
      padding: "10px",
      fontFamily: "'Poppins', sans-serif",
      textDecoration: "none"

    };
    return (
      <div>
        <Headroom>
          <Navbar
            className="header  p-3 shadow"
            id="myHeader"
            style={{
              backgroundColor: "hsl(222deg 56% 96%)",
              height: "89px",
              width: "100%",
            }}
            light
            expand="md"
          >
            <Container>


              <img
                className="logo mt-0"
                style={{ height: "auto", width: "4%" }}
                src="images/finallogo2.png"
                alt="logo"
              />
              <div className="brand " to="/">

                <h4>We Assist</h4>
                <p
                  className="d-none d-sm-block"
                  style={{
                    fontSize: "15px",
                    fontFamily: "'Courgette', cursive",
                  }}
                >
                  An Inititative to become Atmanirbhar
                </p>
              </div>
              <NavbarToggler onClick={this.clicktoggle} />
              <Collapse isOpen={this.state.isOpen} navbar>
                <Nav className="ml-auto " navbar>
                  <NavItem className="d-flex">
                    <Link style={mystyle} to="/">
                      <span>
                        <FontAwesomeIcon icon={faHome} />{" "}
                      </span>
                      Home
                    </Link>
                  </NavItem>
                  <UncontrolledDropdown
                    onMouseOver={this.onMouseEnter}
                    onMouseLeave={this.onMouseLeave}
                    isOpen={this.state.dropdownOpen}
                    toggle={this.toggle}
                    nav
                    inNavbar
                  >
                    <DropdownToggle style={mystyle} nav caret>

                      <span>
                        <FontAwesomeIcon icon={faCog} />{" "}
                      </span>
                      Services
                    </DropdownToggle>
                    <DropdownMenu
                      className="shadow p-3 mb-5 bg-white rounded"
                      id="dropdown"
                      style={mystyle}
                      right
                    >
                      <Link className="dropdownstyle" to="/switch-to-online">
                        <DropdownItem>Switch to Online</DropdownItem>
                      </Link>
                      <DropdownItem divider />
                      <Link className="dropdownstyle" to="/marketing-schemes">
                        <DropdownItem>Marketing Schemes</DropdownItem>
                      </Link>
                      <DropdownItem divider />
                      <Link className="dropdownstyle" to="/business-analytics">
                        <DropdownItem>Business Analytics</DropdownItem>
                      </Link>
                      <DropdownItem divider />
                      <Link className="dropdownstyle" to="/path-to-start">
                        <DropdownItem>Path to Start-Startup</DropdownItem>
                      </Link>
                    </DropdownMenu>
                  </UncontrolledDropdown>
                  <NavItem className="d-flex">
                    <Link style={mystyle} to="/aboutus">
                      <span>
                        {" "}
                        <FontAwesomeIcon icon={faUser} />{" "}
                      </span>
                      About us
                    </Link>
                  </NavItem>
                  <NavItem className="d-flex">
                    <Link style={mystyle} to="/contactus">
                      <span>
                        {" "}
                        <FontAwesomeIcon icon={faPhoneSquare} />{" "}
                      </span>
                      Contact us
                    </Link>
                  </NavItem>
                </Nav>
              </Collapse>
            </Container>
          </Navbar>
        </Headroom>
      </div>
    );
  }
}

export default Example;
