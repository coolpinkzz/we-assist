import React from "react";
import "../styles/switchtoonline.css";
import { Fade } from "react-reveal";

const Switchtoonline = () => {
  return (
    <div>
      {" "}
      <section className="main">
        <Fade bottom duration={1000} distance="40px">
          <div className="container-fluid">
            <div className="row">
              <div className="moto col-sm-12 col-md-6 col-lg-6">
                <div className="pt-5">
                  <h1 style={{ color: "#55198b" }}>Switch to Online</h1>
                  <hr color="#ff458c"></hr>
                  <h5>
                    Looking to take your offline business to online world? Let
                    us help you get there. Let us worry about all the work to
                    take your business online. We will make your personal
                    website with the exact information, requirements and
                    products. By applying safe methods of online financial work
                    through us, you can track your profit without any hurdle.
                  </h5>
                </div>
              </div>

              <div className="col-12 col-sm-12 col-md-6 col-lg-6">
                <div className="card-img">
                  <img
                    className="main-image img-fluid"
                    src="images/sto.png"
                    alt="Switch-to-online"
                  />
                </div>
              </div>
            </div>
          </div>
        </Fade>
      </section>
      <section className="poten">
        <div className="container">
          <div className="row text">
            <h1 style={{ fontSize: "20px" }}>
              The many benefits of online business include:
            </h1>

            <div className="col-12 col-md-6 col-sm-6">
              <ul>
                <li>global access, 24 hours a day, 7 days a week</li>
                <li>improved client service through greater flexibility</li>
                <li>cost savings</li>
                <li> faster delivery of products</li>
                <li>less paper waste</li>
                <li>increased professionalism</li>
                <li>
                  opportunities to manage your business from anywhere in the
                  world
                </li>
              </ul>
            </div>
            <div className="col-12 col-md-6 col-sm-6">
              <ul>
                <li>run an online shop</li>
                <li>manage your suppliers</li>
                <li>communicate with your customers, and get their feedback</li>
                <li>offer services online</li>
                <li>
                  allow customers to make reservations or appointments online
                </li>
                <li>
                  manage your finances, such as online banking, tax and employee
                </li>
                <li>research competitors.</li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
export default Switchtoonline;
