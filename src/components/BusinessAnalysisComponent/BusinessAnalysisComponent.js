import React from "react";
import "./businessanalysis.css";
import { Container } from "reactstrap";
import { Fade } from "react-reveal";

const BusinessAnalysis = () => {
  return (
    <div>
      <div className="row  jumbo">
        <div className="col-12 col-sm-6 col-md-6 p-5">
          <h1>Business Analytics</h1>
          <hr />
          <p>
            As the name suggest, it's all about analysis of data but it is not a
            one-step process. Business analysis involves collecting, sorting,
            processing, and inspecting the raw data using many ways and tools to
            convert the data into information and further using that information
            to understand the demand of consumers. This will eventually help us
            to introduce new ideas in your business.
            <br />
            <br /> Team of “WE ASSIST” will put all our ideas, knowledge and
            information to identify the needs of your business and provide you
            with its solutions.
          </p>
        </div>
        <div className="col-12 col-sm-6 col-md-6 text-center">
          <img src="images/BA.png" />
        </div>
      </div>
    </div>
  );
};
export default BusinessAnalysis;
