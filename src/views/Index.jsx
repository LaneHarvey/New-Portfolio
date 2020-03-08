import React from "react";

import "../assets/css/argon-design-system-react.css"

// reactstrap components
import {
  Badge,
  Button,
  Card,
  CardBody,
  CardImg,
  FormGroup,
  Input,
  InputGroupAddon,
  InputGroupText,
  InputGroup,
  Container,
  Row,
  Col
} from "reactstrap";

// core components
import DemoNavbar from "components/Navbars/DemoNavbar.jsx";

import ContactFooter from "components/Footers/ContactFooter.jsx";


// index page sections
import Hero from "./IndexSections/Hero.jsx";
import Icons from './IndexSections/Icons.jsx';

class Index extends React.Component {
  componentDidMount() {
    document.documentElement.scrollTop = 0;
    document.scrollingElement.scrollTop = 0;
    this.refs.main.scrollTop = 0;
  }
  render() {
    return (
      <>
        <DemoNavbar />
        <main ref="main">
          <Hero />
          <Icons />
          <section className="section">
            <Container>
            <h1 className="text-primary text-uppercase">Recent Projects</h1>
              <Row className="justify-content-center">
                <Col lg="12">
                  <Row className="row-grid">
                    <Col lg="4">
                      <a href="https://snakesonalane.netlify.com/"
                            target="_blank">
                      <Card className="card-lift--hover shadow border-0">
                        <CardBody className="py-5">
                          <div className="icon icon-shape icon-shape-primary rounded-circle mb-4">
                            <img className="image-size" src="https://snakesonalane.netlify.com/snake-01.png" alt=" " />
                          </div>
                          <h6 className="text-primary text-uppercase">Snake</h6>
                          <p className="description mt-3">A game of Snake.</p>
                          <br/>
                          <div>
                            <Badge color="primary" pill className="mr-1">
                              HTML
                            </Badge>
                            <Badge color="primary" pill className="mr-1">
                              CSS
                            </Badge>
                            <Badge color="primary" pill className="mr-1">
                              Canvas
                            </Badge>
                            <Badge color="primary" pill className="mr-1">
                              P5.js
                            </Badge>
                            <Badge color="primary" pill className="mr-1">
                              Firebase
                            </Badge>
                          </div>
                          <Button
                            className="mt-4"
                            color="primary"
                            href="https://snakesonalane.netlify.com/"
                            target="_blank"
                            // onClick={e => e.preventDefault()}
                          >
                            Learn More
                          </Button>
                        </CardBody>
                      </Card>
                      </a>

                    </Col>
                    <Col lg="4">
                      <Card className="card-lift--hover shadow border-0">
                        <CardBody className="py-5">
                          <div className="icon icon-shape icon-shape-success rounded-circle mb-4" href="https://page-animations.netlify.com/">
                            <i className="fa fa-dribbble"/>
                          </div>
                          <h6 className="text-success text-uppercase">
                            Page Animations
                          </h6>
                          <p className="description mt-3">
                            Using the JS framework Tweenmax I made this really cool page loading animation.
                          </p>
                          <div>
                            <Badge color="success" pill className="mr-1">
                              JS
                            </Badge>
                            <Badge color="success" pill className="mr-1">
                              TweenMax
                            </Badge>
                            <Badge color="success" pill className="mr-1">
                              CSS
                            </Badge>
                            <Badge color="success" pill className="mr-1">
                              HTML
                            </Badge>
                          </div>
                          <Button
                            className="mt-4"
                            color="success"
                            href="https://page-animations.netlify.com/"
                            target="_blank"
                          >
                            Learn more
                          </Button>
                        </CardBody>
                      </Card>
                    </Col>
                    <Col lg="4">
                      <Card className="card-lift--hover shadow border-0">
                        <CardBody className="py-5">
                          <div className="icon icon-shape icon-shape-warning rounded-circle mb-4">
                            <i className="fa fa-film" />
                          </div>
                          <h6 className="text-warning text-uppercase">
                            Netlfix landing page clone.
                          </h6>
                          <p className="description mt-3">
                            I recreated the netflix landing page to challenge myself as a front end developer.
                          </p>
                          <div>
                            <Badge color="warning" pill className="mr-1">
                              HTML/CSS
                            </Badge>
                            <Badge color="warning" pill className="mr-1">
                              JS
                            </Badge>
                            <Badge color="warning" pill className="mr-1">
                              Netlify
                            </Badge>
                            <Badge color="warning" pill className="mr-1">
                              Github
                            </Badge>
                          </div>
                          <Button
                            className="mt-4"
                            color="warning"
                            href="https://netflixify.netlify.com/"
                            target="_blank"
                          >
                            Learn more
                          </Button>
                        </CardBody>
                      </Card>
                    </Col>
{/*                     
                    <Col lg="4">
                      <Card className="card-lift--hover shadow border-0">
                        <CardBody className="py-5">
                          <div className="icon icon-shape icon-shape-warning rounded-circle mb-4">
                            <i className="fa fa-film" />
                          </div>
                          <h6 className="text-warning text-uppercase">
                            Project A.
                          </h6>
                          <p className="description mt-3">
                            I recreated the netflix landing page to challenge myself as a front end developer.
                          </p>
                          <div>
                          <Badge color="warning" pill className="mr-1">
                              HTML
                            </Badge>
                            <Badge color="warning" pill className="mr-1">
                              CSS
                            </Badge>
                            <Badge color="warning" pill className="mr-1">
                              JS
                            </Badge>
                            <Badge color="warning" pill className="mr-1">
                              Netlify
                            </Badge>
                            <Badge color="warning" pill className="mr-1">
                              Github
                            </Badge>
                          </div>
                          <Button
                            className="mt-4"
                            color="warning"
                            href="https://netflixify.netlify.com/"
                            target="_blank"
                          >
                            Learn more
                          </Button>
                        </CardBody>
                      </Card>
                    </Col>
                    <Col lg="4">
                      <Card className="card-lift--hover shadow border-0">
                        <CardBody className="py-5">
                          <div className="icon icon-shape icon-shape-warning rounded-circle mb-4">
                            <i className="fa fa-film" />
                          </div>
                          <h6 className="text-warning text-uppercase">
                            Project B.
                          </h6>
                          <p className="description mt-3">
                            I recreated the netflix landing page to challenge myself as a front end developer.
                          </p>
                          <div>
                          <Badge color="warning" pill className="mr-1">
                              HTML
                            </Badge>
                            <Badge color="warning" pill className="mr-1">
                              CSS
                            </Badge>
                            <Badge color="warning" pill className="mr-1">
                              JS
                            </Badge>
                            <Badge color="warning" pill className="mr-1">
                              Netlify
                            </Badge>
                            <Badge color="warning" pill className="mr-1">
                              Github
                            </Badge>
                          </div>
                          <Button
                            className="mt-4"
                            color="warning"
                            href="https://netflixify.netlify.com/"
                            target="_blank"
                          >
                            Learn more
                          </Button>
                        </CardBody>
                      </Card>
                    </Col>
                    <Col lg="4">
                      <Card className="card-lift--hover shadow border-0">
                        <CardBody className="py-5">
                          <div className="icon icon-shape icon-shape-warning rounded-circle mb-4">
                            <i className="fa fa-film" />
                          </div>
                          <h6 className="text-warning text-uppercase">
                            Project Wii.
                          </h6>
                          <p className="description mt-3">
                            I recreated the netflix landing page to challenge myself as a front end developer.
                          </p>
                          <div>
                          <Badge color="warning" pill className="mr-1">
                              HTML
                            </Badge>
                            <Badge color="warning" pill className="mr-1">
                              CSS
                            </Badge>
                            <Badge color="warning" pill className="mr-1">
                              JS
                            </Badge>
                            <Badge color="warning" pill className="mr-1">
                              Netlify
                            </Badge>
                            <Badge color="warning" pill className="mr-1">
                              Github
                            </Badge>
                          </div>
                          <Button
                            className="mt-4"
                            color="warning"
                            href="https://netflixify.netlify.com/"
                            target="_blank"
                          >
                            Learn more
                          </Button>
                        </CardBody>
                      </Card>
                    </Col> */}
                  </Row>
                </Col>
              </Row>
            </Container>
          </section>

          
          <ContactFooter />
        </main>
      </>
    );
  }
}

export default Index;
