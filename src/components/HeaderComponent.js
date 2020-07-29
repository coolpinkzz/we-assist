import React, { useState } from "react";
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
import "../styles/header.css";
import "../App.css";

const Example = (props) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);
  const mystyle = {
    color: "#0C0032",
    padding: "10px",
    fontFamily: "'Poppins', sans-serif",
    marginLeft: "10px",
  };

  return (
    <div>
      <Navbar
        className="header shadow-sm p-3 "
        id="myHeader"
        style={{ backgroundColor: "hsl(222deg 56% 96%)", height: "100px" }}
        light
        expand="md"
      >
        <Container>
          <img
            className="logo"
            style={{ height: "70px" }}
            src="images/finallogo.png"
            alt="logo"
          />
          <NavbarBrand className="brand " href="/">
            <h4>We Assist</h4>
            <p
              className="d-none d-sm-block"
              style={{ fontSize: "15px", fontFamily: "'Courgette', cursive" }}
            >
              An Inititative to become Atmanirbhar
            </p>
          </NavbarBrand>
          <NavbarToggler onClick={toggle} />
          <Collapse isOpen={isOpen} navbar>
            <Nav className="ml-auto " navbar>
              <NavItem>
                <NavLink style={mystyle} href="/">
                  <FontAwesomeIcon icon={faHome} />
                  Home
                </NavLink>
              </NavItem>
              <UncontrolledDropdown nav inNavbar>
                <DropdownToggle style={mystyle} nav caret>
                  {" "}
                  <FontAwesomeIcon icon={faCog} />
                  Services
                </DropdownToggle>
                <DropdownMenu
                  className="shadow p-3 mb-5 bg-white rounded"
                  id="dropdown"
                  style={mystyle}
                  right
                >
                  <DropdownItem>Switch to Online</DropdownItem>
                  <DropdownItem divider />
                  <DropdownItem>Marketing Schemes</DropdownItem>
                  <DropdownItem divider />
                  <DropdownItem>Business Analytics</DropdownItem>
                  <DropdownItem divider />
                  <DropdownItem>Path to Start-Startup</DropdownItem>
                </DropdownMenu>
              </UncontrolledDropdown>
              <NavItem>
                <NavLink style={mystyle} href="/aboutus">
                  <FontAwesomeIcon icon={faUser} />
                  About us
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink style={mystyle} href="/contactus">
                  <FontAwesomeIcon icon={faPhoneSquare} />
                  Contact us
                </NavLink>
              </NavItem>
            </Nav>
          </Collapse>
        </Container>
      </Navbar>
    </div>
  );
};

export default Example;
