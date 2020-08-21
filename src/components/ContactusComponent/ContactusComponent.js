import React, { Component } from "react";

import { Container } from "reactstrap";
import "./contactus.css";

const Contactus = () => {
  return (
    <div>
      <section id="contact" className="contact-us">
        <div className="container">
          <div className="row">
            <div className="col-md-12 text-center">
              <div className="title-mid-head ">
                <h2>
                  Contact <span>Us</span>
                </h2>
                <p>
                  Digital technology is transforming in every facet of our
                  lives.
                </p>
                <h5
                  id="warn"
                  style={{
                    align: "center",
                    color: "#f48b1d",
                    display: "inline-flex",
                  }}
                ></h5>
              </div>
            </div>
          </div>
          <div className="contact-aling">
            <div className="row">
              <div className="col-12 col-sm-12 col-md-4 col-lg-4 col-xl-4">
                <div className="media">
                  <div className="mr-3">
                    <i className="fas fa-map-marker-alt"></i>
                  </div>
                  <div className="media-body text-white">
                    <h5 className="mt-0">Address</h5>
                    <p>Balotra, Rajasthan</p>
                  </div>
                </div>
                <div className="media">
                  <div className="mr-3">
                    <i className="fas fa-envelope"></i>
                  </div>
                  <div className="media-body text-white">
                    <h5 className="mt-0">Email</h5>
                    <p>www.weassist24@gmail.com</p>
                  </div>
                </div>
                <div className="media">
                  <div className="mr-3">
                    <i className="fas fa-phone-volume"></i>
                  </div>
                  <div className="media-body text-white">
                    <h5 className="mt-0">Phone</h5>
                    <p>9950921360</p>
                  </div>
                </div>
              </div>
              <div className="col-md-1 col-lg-1 col-xl-1"></div>
              <div className="col-12 col-sm-12 col-md-7 col-lg-7 col-xl-7">
                <div className="contact">
                  <form name="enquiry_form" method="POST" align="center">
                    <div className="item name_email">
                      <input
                        type="text"
                        id="name"
                        maxlength="20"
                        className="name"
                        placeholder="Your name"
                      />
                      <input
                        type="text"
                        id="email"
                        className="email"
                        placeholder="Email"
                      />
                    </div>
                    <div className="item subject_phone">
                      <input
                        type="text"
                        id="subject"
                        className="subject"
                        maxlength="20"
                        placeholder="Service"
                      />
                      <input
                        type="text"
                        id="phone"
                        maxlength="10"
                        min="10"
                        className="phone"
                        placeholder="Phone"
                      />
                    </div>
                    <div className="item">
                      <textarea
                        id="message"
                        maxlength="150"
                        className="email"
                        placeholder="Message"
                      ></textarea>
                    </div>
                    <div className="btn">
                      <input
                        type="button"
                        name="enquiry_submit"
                        className="enquiry_submit"
                        value="Submit"
                        style={{
                          background: "#f48b1d",
                          border: "0",
                          padding: "0.5rem 2rem",
                        }}
                      />
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>{" "}
    </div>
  );
};
export default Contactus;
