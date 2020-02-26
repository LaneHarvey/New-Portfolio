import React from "react";
// reactstrap components
import {
  Button,
  NavItem,
  NavLink,
  Nav,
  Container,
  Row,
  Col,
  UncontrolledTooltip
} from "reactstrap";

class SimpleFooter extends React.Component {
  render() {
    return (
      <>
        <footer className=" footer">
          <Container>
            <Row className=" row-grid align-items-center mb-5">
              <Col lg="6">
                <h3 className=" text-primary font-weight-light mb-2">
                  If you would like to contact me!
                </h3>
                <h4 className=" mb-0 font-weight-light">
                  Let's get in touch on any of these platforms.
                </h4>
              </Col>
              <Col className=" text-lg-center btn-wrapper" lg="6">
                <Button
                  className=" btn-neutral btn-icon-only btn-round"
                  color="twitter"
                  href="https://www.linkedin.com/in/laneharvey/"
                  id="tooltip126536702"
                  size="lg"
                  target="_blank"
                >
                  <i className=" fa fa-linkedin" />
                </Button>
                <UncontrolledTooltip delay={0} target="tooltip126536702">
                  Connect with me
                </UncontrolledTooltip>

                <Button
                  className=" btn-neutral btn-icon-only btn-round ml-1"
                  color="github"
                  href="https://github.com/LaneHarvey"
                  id="tooltip626177562"
                  size="lg"
                  target="_blank"
                >
                  <i className=" fa fa-github" />
                </Button>
                <UncontrolledTooltip delay={0} target="tooltip626177562">
                   Checkout my github
                </UncontrolledTooltip>
              </Col>
            </Row>
            <hr />
            {/* <Row className=" align-items-center justify-content-md-between">
              <Col md="6">
                <div className=" copyright">
                  © {new Date().getFullYear()}{" "}
                  <a
                    href="https://www.creative-tim.com?ref=adsr-footer"
                    target="_blank"
                  >
                   Lane Harvey
                  </a>
                  .
                </div>
              </Col>

              <Col md="6">
                <Nav className=" nav-footer justify-content-end">
                  <NavItem>
                    <NavLink
                      href="https://getbootstrap.com/docs/4.0/getting-started/introduction/"
                      target="_blank"
                    >
                      Designed with Bootstrap
                    </NavLink>
                  </NavItem>

                </Nav>
              </Col>

            </Row> */}
          </Container>
        </footer>
      </>
    );
  }
}

export default SimpleFooter;
