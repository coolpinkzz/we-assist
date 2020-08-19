import React from "react";
import {
  Card,
  Button,
  CardHeader,
  CardFooter,
  CardBody,
  CardTitle,
  CardText,
  Row,
  Col,
} from "reactstrap";
import "./pathtostart.css";
import { Container } from "reactstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faUser,
  faUserMd,
  faCog,
  faCogs,
  faFilter,
  faSearch,
  faBullhorn,
  faEnvelope,
} from "@fortawesome/free-solid-svg-icons";

const pathtostart = () => {
  return (
    <div>
      <div className="pts row">
        <div className="moto col-sm-12 col-md-6 col-lg-6 my-auto">
          <h1>Path to start (Startup) </h1>
          <p>
            Being a part of a startup team is uniquely exciting – it provides
            opportunities and experiences that established corporations simply
            can't match. It's a rush, and with the right people, it can be the
            time of your life. There's a dark side to startups, though – because
            no one knows what the future holds, working for one can be somewhat
            frightening. We're not your leaders, we will do absolutely anything
            to keep you motivated and help you fight through feelings of
            apprehension.
          </p>
        </div>
        <div className="col-12 col-sm-12 col-md-6 col-lg-6">
          <div className="card-img">
            <img
              className="main-image img-fluid"
              src="images/startup2.png"
              alt=""
            />
          </div>
        </div>
      </div>
      <div>
        <div className="pts-poten">
          <Container>
            <div className="pts-poten-inside p-4">
              <h1>Our Potential</h1>
              <p>
                Here at "WE ASSIST", we use the best and highly reliable digital
                marketing techniques according to the market requirements. And
                most importantly, these digital marketing techniques will
                benefit ypu brand at a minimal input.
                <br />
                <br />
                <h2>What we will do to help you :</h2>
                <ul>
                  <li>Give you a platform.</li>
                  <li>
                    {" "}
                    Support your ideas and if needed, improvise them also.
                  </li>
                  <li>Learning and development programmes.</li>
                  <li> Startup policies.</li>
                  <li> Tools and templates.</li>
                  <li>Networking and discussion</li>
                </ul>
              </p>
            </div>
          </Container>
        </div>
      </div>

      <div className="row pts-card p-5 justify-content-center">
        <div className="">
          <h1>OUR STRATEGY</h1>
        </div>

        <Row>
          <Col md="3" className="p-2 py-md-5 ">
            <Card className="text-center cardstyle ">
              <CardBody>
                <FontAwesomeIcon
                  style={{ color: "#ffaa00", fontSize: "4rem" }}
                  icon={faFilter}
                />
                <CardTitle>
                  <h3>Sales Funnel</h3>
                </CardTitle>

                <CardText>
                  A sales funnel is a step-by-step process that allows you to
                  bring your potential customer one step closer to your offer
                  and a buying decision through a series of marketing actions
                  like automated emails, videos, articles and landing pages that
                  will do the selling for you.
                </CardText>
              </CardBody>
              <a style={{ padding: "1rem" }} href="#sales">
                <Button>Read More</Button>
              </a>
            </Card>
          </Col>
          <Col md="3" className="p-2 py-md-5 ">
            <Card className="text-center cardstyle">
              <CardBody>
                <FontAwesomeIcon
                  style={{ color: "#121212", fontSize: "4rem" }}
                  icon={faSearch}
                />
                <CardTitle>
                  <h3>Research your competition</h3>
                </CardTitle>

                <CardText>
                  Competitive research is a crucial part of any good marketing
                  plan. This term may elicit some negative images but
                  competitive research has nothing to do with spying.It has
                  everything to do with paying attention to your competition.
                </CardText>
              </CardBody>
              <a style={{ padding: "1rem" }} href="#research">
                <Button>Read More</Button>
              </a>
            </Card>
          </Col>
          <Col md="3" className="p-2 py-md-5 ">
            <Card className="text-center cardstyle">
              <CardBody>
                <FontAwesomeIcon
                  style={{ color: "#e62776", fontSize: "4rem" }}
                  icon={faBullhorn}
                />
                <CardTitle>
                  <h3>Identify new opportunities</h3>
                </CardTitle>

                <CardText>
                  Analyze new opportunities in your business by understanding
                  your demographic better. Understand everything from
                  distribution channels to your direct competitors, and even an
                  analysis of foreign markets and other potential industries.
                </CardText>
              </CardBody>
              <a style={{ padding: "1rem" }} href="#ino">
                <Button>Read More</Button>
              </a>
            </Card>
          </Col>
          <Col md="3" className="p-2 py-md-5 ">
            <Card className="text-center cardstyle">
              <CardBody>
                <FontAwesomeIcon
                  style={{ color: "#bf4547", fontSize: "4rem" }}
                  icon={faEnvelope}
                />
                <CardTitle>
                  <h3>Build an email list</h3>
                </CardTitle>

                <CardText>
                  An electronic mailing list or email list is a special use of
                  email that allows for widespread distribution of information
                  to many Internet users. It is similar to a traditional mailing
                  list – a list of names and addresses – as might be kept by an
                  organization for sending publications to its members or
                  customers.
                </CardText>
              </CardBody>
              <a style={{ padding: "1rem" }} href="#buildemail">
                <Button>Read More</Button>
              </a>
            </Card>
          </Col>
        </Row>
      </div>
      <div className="row px-2">
        <Container>
          <h1 id="sales">Sales Funnel</h1>
          <hr />
          <p>
            1. A sales funnel is a step-by-step process that allows you to bring
            your potential customer one step closer to your offer and a buying
            decision through a series of marketing actions like automated
            emails, videos, articles and landing pages that will do the selling
            for you.
          </p>
          <p>
            2. Your sales funnel illustrates the path prospects take.
            Understanding your funnel can helps you find the holes in the funnel
            — the places where prospects drop out and never convert. If you
            don’t understand your sales funnel, you can’t optimize it.
          </p>

          <p> 3. Your sales funnel could exist as: </p>

          <ul className="">
            <li>Retail store</li>
            <li>Sales team</li>
            <li>Website</li>
            <li>Email</li>
            <li>Personal consultation</li>
          </ul>

          <div className="row px-3">
            <h1 id="research">Research your competition</h1>
            <hr />
            <p>
              1. Competitive research is a crucial part of any good marketing
              plan. This term may elicit some negative images but competitive
              research has nothing to do with spying. It has everything to do
              with paying attention to your competition and what they are doing.
              Understanding what your competition is doing will help you
              position yourself, and your product or service, within the market.
            </p>
            <p>
              2. Competitive research involves identifying your competitors,
              evaluating their strengths and weaknesses and evaluating the
              strengths and weaknesses of their products and services.
            </p>
            <p>
              <ul>
                3. Here are the steps to getting started on comepetitive
                research :<li>Identify main competitors.</li>
                <li>Analyze competitors' online presence.</li>
                <li>Gather information.</li>
                <li>Track your findings.</li>
                <li>Check online reviews.</li>
                <li>Identify areas for improvement.</li>
              </ul>
            </p>
          </div>
          <div className="row px-3">
            <h1 id="ino">Identify new opportunities</h1>
            <p>
              1. Analyze new opportunities in your business by understanding
              your demographic better. Understand everything from distribution
              channels to your direct competitors, and even an analysis of
              foreign markets and other potential industries. There are likely
              dozens of new opportunities you could pursue immediately with the
              proper amount of analysis.
            </p>
            <p>
              2. Spotting market opportunities is essential for business growth
              and survival. Opportunities are factors that contribute to your
              growing success.
              <ul>
                These are typically external and include things like:
                <li>economic trends</li>
                <li>market trends</li>
                <li>shifting or expanding customer base</li>
                <li>changes in government or industry regulations</li>
                <li>
                  changes in partnerships or relationship with suppliers,
                  competitors, etc
                </li>
                <li>
                  new or changing funding prospects (eg increase in grant
                  funding)
                </li>
              </ul>
            </p>
          </div>
          <div className="row px-3">
            <h1 id="buildemail">Build an email list</h1>
            <p>
              1. An electronic mailing list or email list is a special use of
              email that allows for widespread distribution of information to
              many Internet users. It is similar to a traditional mailing list –
              a list of names and addresses – as might be kept by an
              organization for sending publications to its members or customers.
            </p>
            <p>
              <ul>
                2. How to build an email list?
                <li>
                  Quality – You want to make sure that your emails go to real
                  people, who regularly check their emails.
                </li>
                <li>
                  Relevance – Your subscribers should belong in your niche and
                  show an interest in your industry.
                </li>
                <li>
                  Volume – All throughout the process of building your list,
                  keep in mind that the frequency of your email campaigns has to
                  remain the same. Changing the volume as your email list grows
                  can have a negative effect on your key metrics.
                </li>
              </ul>
            </p>
          </div>

          <div className="row justify-content-center">
            <h2>Our Expert Support</h2>
          </div>
        </Container>

        <Row className="lastbg p-3">
          <Col md="4" className="p-2 py-md-5 ">
            <Card className="text-center h-auto expertcard">
              <CardBody>
                <FontAwesomeIcon
                  style={{ color: "#d6ff30", fontSize: "4rem" }}
                  icon={faUser}
                />
                <CardTitle>
                  <h3>Expertise Solution</h3>
                </CardTitle>

                <CardText>
                  We make it easy! From a dedicated project manager throughout
                  the process to sample sites to allow you to test concepts
                  before they are finalized. We are here to make the whole
                  process painless!
                </CardText>
              </CardBody>
            </Card>
          </Col>
          <Col md="4" className="p-2 py-md-5">
            <Card className="text-center h-auto expertcard">
              <CardBody>
                <FontAwesomeIcon
                  style={{ color: "#ff365e", fontSize: "4rem" }}
                  icon={faUserMd}
                />
                <CardTitle>
                  <h3>Highest quality expertise</h3>
                </CardTitle>

                <CardText>
                  A deep understanding of the latest technologies, together with
                  a comprehensive in-house skill set ensures all clients receive
                  the best service. No question is too big, or too small.
                </CardText>
              </CardBody>
            </Card>
          </Col>
          <Col md="4" className="p-2 py-md-5">
            <Card className="text-center h-auto expertcard">
              <CardBody>
                <FontAwesomeIcon
                  style={{ color: "#0073ff", fontSize: "4rem" }}
                  icon={faCogs}
                />
                <CardTitle>
                  <h3>Support & Maintenance</h3>
                </CardTitle>

                <CardText>
                  Our application support & maintenance services ensure that
                  your applications are always secure, bug-free and high on
                  performance paired with ongoing enhancements.
                </CardText>
              </CardBody>
            </Card>
          </Col>
        </Row>
      </div>
    </div>
  );
};

export default pathtostart;
