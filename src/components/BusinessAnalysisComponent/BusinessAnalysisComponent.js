import React from "react";
import "./businessanalysis.css";
import { Container } from "reactstrap";
import { Fade } from "react-reveal";
import {
  Row,
  Col,
  Card,
  CardImg,
  CardText,
  CardBody,
  CardTitle,
  CardSubtitle,
  Button,
} from "reactstrap";

const BusinessAnalysis = () => {
  return (
    <div>
      <div className="jumbo">
        <Container>
          {" "}
          <div className="row ">
            <div className="col-12 col-sm-8 col-md-8 p-5">
              <h1>Business Analytics</h1>
              <hr />
              <p>
                As the name suggest, it's all about analysis of data but it is
                not a one-step process. Business analysis involves collecting,
                sorting, processing, and inspecting the raw data using many ways
                and tools to convert the data into information and further using
                that information to understand the demand of consumers. This
                will eventually help us to introduce new ideas in your business.
                <br />
                <br />
              </p>
            </div>
            <div className="col-12 col-sm-4 col-md-4">
              <img src="images/BA.png" />
            </div>
          </div>
        </Container>
      </div>
      <div className="ba-poten">
        <Container>
          <div className="row p-4">
            <h1>Our Potential</h1>
            <hr />
            <p>
              Team of “WE ASSIST” will put all our ideas, knowledge and
              information to identify the needs of your business and provide you
              with its solutions.
            </p>
          </div>
        </Container>
      </div>
      <Container>
        <Row className="p-4">
          <Col md="4">
            {" "}
            <Card className="text-center align-items-center cardstyleba">
              <CardImg
                style={{ alignItems: "center", width: "50%" }}
                src="images/swot.png"
                alt="SWOT"
              />
              <CardTitle>
                <h3>S.W.O.T. ANALYSIS</h3>
              </CardTitle>

              <CardText>
                Analyzing your business with different perspectives, we’ll do
                S.W.O.T. Analysis to list all points and make positive changes
                in your business.
              </CardText>
              <a style={{ padding: "1rem" }} href="#swot">
                <Button>Read More</Button>
              </a>
            </Card>
          </Col>
          <Col md="4">
            <Card className="text-center  align-items-center cardstyleba">
              <CardImg
                style={{ alignItems: "center", width: "50%" }}
                src="images/most.png"
                alt="SWOT"
              />
              <CardTitle>
                <h3>M.O.S.T. ANALYSIS</h3>
              </CardTitle>

              <CardText>
                By viewing your brand’s capabilities, we’ll design strategic
                plans to develop it. M.O.S.T. It stands Mission, Objective,
                Strategy, Tactics
              </CardText>
              <a style={{ padding: "1rem" }} href="#most">
                <Button>Read More</Button>
              </a>
            </Card>
          </Col>
          <Col md="4">
            {" "}
            <Card className="text-center  align-items-center cardstyleba">
              <CardImg
                style={{ alignItems: "center", width: "50%" }}
                src="images/Pestel Analysis.png"
                alt="SWOT"
              />
              <CardTitle>
                <h3>P.E.S.T.L.E. ANALYSIS</h3>
              </CardTitle>

              <CardText>
                Using this, we’ll turn the threats for your brand into
                opportunities. It consists of Political, Economic , Social,
                Technological, Legal and Environmental factor
              </CardText>
              <a style={{ padding: "1rem" }} href="#pestle">
                <Button>Read More</Button>
              </a>
            </Card>
          </Col>

          <Col md="4">
            {" "}
            <Card className="text-center  align-items-center cardstyleba">
              <CardImg
                style={{ alignItems: "center", width: "50%" }}
                src="images/system-analysis.png"
                alt="SWOT"
              />
              <CardTitle>
                <h3>SYSTEM ANALYSIS</h3>
              </CardTitle>

              <CardText>
                It is systematic method to solve all the problems of your
                business. System analysis is a way to create the right working
                system by analyzing the main idea behind your business,
                identifying its goals to achieve the desired value.
              </CardText>
              <a style={{ padding: "1rem" }} href="#system">
                <Button>Read More</Button>
              </a>
            </Card>
          </Col>
          <Col md="4">
            {" "}
            <Card className="text-center  align-items-center cardstyleba">
              <CardImg
                style={{ alignItems: "center", width: "50%" }}
                src="images/business-analysis.png"
                alt="SWOT"
              />
              <CardTitle>
                <h4>BUSINESS MODEL ANALYSIS</h4>
              </CardTitle>

              <CardText>
                By different stages of analysis, our team will understand your
                business techniques, policies and market approaches. Business
                model analysis will figure out the scope of improvements in your
                business.
              </CardText>
              <a style={{ padding: "1rem" }} href="#businessmodel">
                <Button>Read More</Button>
              </a>
            </Card>
          </Col>
        </Row>
        <div className="desciption m-3">
          {" "}
          <h1 id="swot"> S.W.O.T. ANALYSIS</h1>
          <p> S.W.O.T. Analysis description----</p>{" "}
          <ul>
            <li id="bdescrip">
              Strength are those things which are extremely good in your brand
              and makes you better than your competitors.
            </li>
            <li id="bdescrip">
              Under Weaknesses we need to be realistic and list down all aspects
              which result in decline of your business, and fix them.
            </li>
            <li id="bdescrip">
              Grabbing right Opportunities is really important, we will list
              down all the chances that your company can take and we will help
              you to choose right ones among them.
            </li>
            <li id="bdescrip">
              Threats are all the negative external factors. Changing them is
              not possible much but we will help you to fight them.
            </li>
          </ul>
          <h1 id="most"> M.O.S.T. ANALYSIS</h1>
          <p> M.O.S.T. ANALYSIS description----</p>{" "}
          <ul>
            <li id="bdescrip">
              Through Mission we will declare the field of your brand and things
              which your brand wants to achieve in short-term or long-term run.
            </li>
            <li id="bdescrip">
              Objectives are the small goals which your business need to achieve
              in order fulfill your final aim or motive as a company.
            </li>
            <li id="bdescrip">
              Strategy consists of all those long-term methods which will help
              your business to reach your objectives.
            </li>
            <li id="bdescrip">
              Tactics are the short-term methods which we will implement for
              your company to make the first step for your strategies.
            </li>
          </ul>
          <h1 id="pestle"> P.E.S.T.L.E. ANALYSIS</h1>
          <p> P.E.S.T.L.E. ANALYSIS description----</p>{" "}
          <ul>
            <li id="bdescrip">
              Political factors mean the amount of government intervention in
              your brand. Our team will help you to act ideally in such cases
              and change your policies.
            </li>
            <li id="bdescrip">
              Economic factors impact your profit due to market problems but we
              won’t let your business suffer.
            </li>
            <li id="bdescrip">
              Social factors identify beliefs and culture of your customers and
              make better relations with them.
            </li>
            <li id="bdescrip">
              Under Technological factors, we will bring new techniques to keep
              you up to date.
            </li>
            <li id="bdescrip">
              Through Legal factors, we will make sure to keep all your services
              legal.
            </li>
            <li id="bdescrip">
              Environmental factors will help you to know and use most
              environment friendly and ethical.
            </li>
          </ul>
          <h1 id="system">System Analysis</h1>
          <p id="bdescrip">
            {" "}
            It is systematic method to solve all the problems of your business.
            System analysis is a way to create the right working system by
            analyzing the main idea behind your business, identifying its goals
            to achieve the desired value. After analyzing your business, our
            team will make you understand the problems behind your current
            status and form a layout to avoid new problems and solve the older
            problems of your business.
          </p>
          <h1 id="businessmodel">BUSINESS MODEL ANALYSIS</h1>
          <p id="bdescrip">
            {" "}
            By different stages of analysis, our team will understand your
            business techniques, policies and market approaches. Business model
            analysis will figure out the scope of improvements in your business,
            which were hidden before analyzing. It can help you to improve
            different aspects of your business like increasing customer value,
            enhancing product review, handling competition. And through this,
            our team will help you to anticipate your revenue and cost as well.
          </p>
        </div>
      </Container>
    </div>
  );
};
export default BusinessAnalysis;
