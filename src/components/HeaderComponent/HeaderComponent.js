import React, { useState, Component } from "react";
import Headroom from "react-headroom";
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
  NavbarText,
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
    if (this.state.isOpen == true) {
      this.setState({ isOpen: false });
    } else this.setState({ isOpen: true });
  }

  render() {
    const mystyle = {
      color: "#0C0032",
      padding: "10px",
      fontFamily: "'Poppins', sans-serif",
      marginLeft: "10px",
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
              <NavbarBrand className="brand " href="/">
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
              </NavbarBrand>
              <NavbarToggler onClick={this.clicktoggle} />
              <Collapse isOpen={this.state.isOpen} navbar>
                <Nav className="ml-auto " navbar>
                  <NavItem>
                    <NavLink style={mystyle} href="/">
                      <span>
                        <FontAwesomeIcon icon={faHome} />{" "}
                      </span>
                      Home
                    </NavLink>
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
                      {" "}
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
                      <NavLink href="/switch-to-online">
                        <DropdownItem>Switch to Online</DropdownItem>
                      </NavLink>
                      <DropdownItem divider />
                      <NavLink href="/marketing-schemes">
                        <DropdownItem>Marketing Schemes</DropdownItem>
                      </NavLink>
                      <DropdownItem divider />
                      <NavLink href="/business-analytics">
                        <DropdownItem>Business Analytics</DropdownItem>
                      </NavLink>
                      <DropdownItem divider />
                      <NavLink href="/path-to-start">
                        <DropdownItem>Path to Start-Startup</DropdownItem>
                      </NavLink>
                    </DropdownMenu>
                  </UncontrolledDropdown>
                  <NavItem>
                    <NavLink style={mystyle} href="/aboutus">
                      <span>
                        {" "}
                        <FontAwesomeIcon icon={faUser} />{" "}
                      </span>
                      About us
                    </NavLink>
                  </NavItem>
                  <NavItem>
                    <NavLink style={mystyle} href="/contactus">
                      <span>
                        {" "}
                        <FontAwesomeIcon icon={faPhoneSquare} />{" "}
                      </span>
                      Contact us
                    </NavLink>
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
