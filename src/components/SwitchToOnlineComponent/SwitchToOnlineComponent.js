import React from "react";
import "./switchtoonline.css";
import { Fade } from "react-reveal";

const Switchtoonline = () => {
  return (
    <div>
      <div className="sto-1">
        <div className="row ">
          <Fade left duration={1000} distance="40px">
            <div className="moto col-sm-12 col-md-6 col-lg-6">
              <div className="pt-5">
                <h1 style={{ color: "#55198b" }}>Switch to Online</h1>
                <hr color="#ff458c"></hr>
                <p>
                  Looking to take your offline business to online world? Let us
                  help you get there. Let us worry about all the work to take
                  your business online. We will make your personal website with
                  the exact information, requirements and products. By applying
                  safe methods of online financial work through us, you can
                  track your profit without any hurdle.
                </p>
              </div>
            </div>
          </Fade>
          <Fade right duration={1000} distance="40px">
            <div className="col-12 col-sm-12 col-md-6 col-lg-6">
              <div className="card-img">
                <img
                  className="main-image img-fluid"
                  src="images/sto.png"
                  alt="Switch-to-online"
                />
              </div>
            </div>
          </Fade>
        </div>
      </div>
      <div className="sto-2">
        <div className="overlay">
          <div className=" container ">
            <div className="sto-2-inside row p-5">
              <h2 style={{ fontSize: "30px" }}>
                The many benefits of online business include:
              </h2>

              <div className="col-12 col-md-6 col-sm-6">
                <ul>
                  <li id="stoli">
                    <p>global access, 24 hours a day, 7 days a week</p>
                  </li>
                  <li id="stoli">
                    <p>improved client service through greater flexibility</p>
                  </li>
                  <li id="stoli">
                    <p>
                      improved client service through greater flexibilitycost
                      savings
                    </p>
                  </li>
                  <li id="stoli">
                    <p>faster delivery of products</p>
                  </li>
                  <li id="stoli">
                    <p>less paper waste</p>
                  </li>
                  <li id="stoli">
                    <p>increased professionalism</p>
                  </li>
                  <li id="stoli">
                    <p>
                      opportunities to manage your business from anywhere in the
                      world
                    </p>
                  </li>
                </ul>
              </div>
              <div className="col-12 col-md-6 col-sm-6">
                <ul>
                  <li id="stoli">
                    <p>manage your suppliers</p>
                  </li>
                  <li id="stoli">
                    <p>
                      communicate with your customers, and get their feedback
                    </p>
                  </li>
                  <li id="stoli">
                    <p>offer services online</p>
                  </li>
                  <li id="stoli">
                    <p>
                      allow customers to make reservations or appointments
                      online
                    </p>
                  </li>
                  <li id="stoli">
                    <p>
                      {" "}
                      manage your finances, such as online banking, tax and
                      employee
                    </p>
                  </li>
                  <li id="stoli">
                    <p>research competitors.</p>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Switchtoonline;
