import React, { Component } from "react";
import "../styles/home.css";
import { Container } from "reactstrap";
import { Fade } from "react-reveal";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPhoneSquare } from "@fortawesome/free-solid-svg-icons";

class Home extends Component {
  render() {
    return (
      <div className="home">
        <Fade bottom duration={1000} distance="40px">
          <div className="row ">
            <div className="moto  col-12  col-sm-6 text-center text-sm-left">
              <h1 style={{ color: "#55198b" }} id="heading">
                WE THINK ABOUT YOU AND YOUR FUTURE !
              </h1>
              <hr color="#ff458c"></hr>
              <p className="my-5">
                Running a business can be a difficult job sometimes, but keep
                all your stress aside as we can help your business to prosper.
                We will take care of your business and come up with advanced
                solutions, so it can grow and reach new levels of success. If
                you are still unsure, take a tour of our website and at the end
                you will surely want our help.
              </p>
              <div className="row justify-content-sm-left justify-content-center my-5 ">
                <a className="main-button" href="tel:8696218763">
                  Enquire Now
                  <span>
                    <FontAwesomeIcon
                      style={{ marginLeft: "5px" }}
                      icon={faPhoneSquare}
                    />
                  </span>
                </a>
              </div>
            </div>

            <div
              style={{ paddingLeft: "6rem" }}
              className="col-12 col-sm-6 col-md-6 d-none d-sm-block  "
            >
              <img id="poster" src="images/poster.jpg" />
            </div>
          </div>
        </Fade>

        <div className="iag row py-5 justify-content-center">
          <img
            style={{ width: "70%", height: "600px" }}
            id="iag"
            src="images/front.png"
            alt="Ideal action and Goal"
          />
        </div>
        <div className="services">
          <Container>
            <div className="text-center">
              <h1 style={{ color: "#55198b" }}>OUR SERVICES</h1>
            </div>
            <Fade left duration={1000}>
              <div
                id="servicerow"
                className="row mb-3 mx-0 border bg-white rounded pr-4 "
              >
                <div className="col-12 col-sm-6 col-md-6 text-center">
                  <h2 style={{ color: "#55198b" }}>Switch to Online</h2>
                  <hr color="#ff458c"></hr>
                  <p className="text-sm-left text-center">
                    Looking to take your offline business to online world? Let
                    us help you get there. Let us worry about all the work to
                    take your business online. We will make your personal
                    website with the exact information, requirements and
                    products. By applying safe methods of online financial work
                    through us, you can track your profit without any hurdle.
                  </p>
                  <a href="switch-to-online">
                    <button
                      style={{ backgroundColor: "#55198b" }}
                      className="btn btn-secondary rounded  mb-4"
                    >
                      Go to Service{" "}
                    </button>
                  </a>
                </div>
                <div className="col-12  col-sm-6 col-md-6 text-center pr-5">
                  <img
                    id="sto"
                    src="images/32088970.jpg"
                    alt="switch to online"
                  />
                </div>
              </div>
            </Fade>
            <Fade right duration={1000}>
              <div
                id="servicerow"
                className="row rounded mx-1 bg-white  mb-3 border "
              >
                <div className="col-12 col-sm-6 col-md-6 text-center  order-sm-first">
                  <img
                    id="dm"
                    src="images/8693343.jpg"
                    alt="digital marketing"
                  />
                </div>
                <div className="col-12 col-sm-6 col-md-6 text-center order-first">
                  <h2 style={{ color: "#55198b" }}>Marketing Scheme</h2>
                  <hr color="#ff458c"></hr>
                  <p className="text-sm-left text-center">
                    A great service to introduce your business to those who need
                    them and increase your brand value. It is a method for those
                    businesses which have online exposure but are still unable
                    to attract right customers. Managing your ads on various
                    platforms and SEO are new ways of digital marketing. Here we
                    use various technologies to expand your business name and
                    gain more customers.
                  </p>
                  <a href="marketing-schemes">
                    <button
                      style={{ backgroundColor: "#55198b" }}
                      className="btn btn-secondary rounded shadow"
                    >
                      Go to Service{" "}
                    </button>
                  </a>
                </div>
              </div>
            </Fade>
            <Fade left duration={1000}>
              <div
                id="servicerow"
                className="row rounded bg-white  mx-1 mb-3 border"
              >
                <div className="col-12 col-sm-6 col-md-6 text-center">
                  <h2 style={{ color: "#55198b" }}>Business Analysis</h2>
                  <hr color="#ff458c"></hr>
                  <p className="text-sm-left text-center">
                    To know the type of market you're about to put your business
                    in is very important. So we will, with our sources, research
                    about the market of your business, about your products and
                    goods, compare the prices, information about your possible
                    competitors, demands and needs and most importantly we will
                    help you with the upcoming market strategies and changes.
                  </p>
                  <a href="business-analysis">
                    <button
                      style={{ backgroundColor: "#55198b" }}
                      className="btn btn-secondary rounded shadow"
                    >
                      Go to Service{" "}
                    </button>
                  </a>
                </div>
                <div className="col-12 col-sm-6 col-md-6 text-center">
                  <img
                    id="mr"
                    src="images/21342941.jpg"
                    alt="switch to online"
                  />
                </div>
              </div>
            </Fade>
            <Fade right duration={1000}>
              <div
                id="servicerow"
                className="row rounded mx-1 bg-white  mb-3 border"
              >
                <div className="col-12 col-sm-6 col-md-6 text-center  order-sm-first">
                  <img
                    id="pts"
                    src="images/28135720.jpg"
                    alt="digital marketing"
                  />
                </div>
                <div className="col-12 col-sm-6 col-md-6 text-center order-first">
                  <h2 style={{ color: "#55198b" }}>Path to Start</h2>
                  <hr color="#ff458c"></hr>
                  <p className="text-sm-left text-center">
                    About to begin a startup? No worries, we will design the
                    best plan to make your ideas shine. From introducing you to
                    new services and tools to setting up online services for
                    you, we can do everything you need. Working on details to
                    establish your business, we will make sure to bring the best
                    out of it. Choose us to make your startup different from
                    your competitors.
                  </p>
                  <a href="path-to-start">
                    <button
                      style={{ backgroundColor: "#55198b" }}
                      className="btn btn-secondary rounded shadow"
                    >
                      Go to Service{" "}
                    </button>
                  </a>
                </div>
              </div>
            </Fade>
          </Container>
        </div>
      </div>
    );
  }
}

export default Home;
