
import React from "react";

// reactstrap components
import { Button, Container, Row, Col, UncontrolledTooltip } from "reactstrap";

class Icons extends React.Component {
  render() {
    return (
      <>
        <section className="section section-lg section-nucleo-icons pb-250">
          <Container>
            <Row className="justify-content-center">
              <Col className="text-center" lg="8">
                <h2 className="display-3">Tech i've worked with.</h2>
                <p className="lead">
                  Here are some of the techonolgies i have used and worked with professionally.
                </p>


              </Col>
            </Row>

            <div className="icons-container blur-item mt-5 on-screen">
                  <i className="icon "
                    id="tooltip24601"
                    >
                    <span className="iconify" data-icon="fa-brands:js" data-inline="false"></span>
                    <UncontrolledTooltip delay={0} target="tooltip24601">
                      Javascript
                    </UncontrolledTooltip>
                  </i>
                  <i className="icon icon-sm"
                    id="tooltip24602"
                  >
                      <span className="iconify" data-icon="mdi:dot-net" data-inline="false"></span>
                       <UncontrolledTooltip delay={0} target="tooltip24602">
                      .Net
                    </UncontrolledTooltip>
                  </i>

                  <i className="icon icon-sm ni "
                    id="tooltip24603"
                  >
                    <span className="iconify" data-icon="logos:mysql" data-inline="false"></span>
                     <UncontrolledTooltip delay={0} target="tooltip24603">
                      My SQL
                    </UncontrolledTooltip>
                  </i>

                  <i className="icon icon-sm ni "
                    id="tooltip24604"
                  >
                  <span className="iconify" data-icon="ion:logo-firebase" data-inline="false"></span>
                   <UncontrolledTooltip delay={0} target="tooltip24604">
                      Google Firebase
                    </UncontrolledTooltip>
                  </i>

                  <i className="icon icon-sm "
                    id="tooltip24605"
                  >
                    <span className="icon icon-sm iconify" data-icon="raphael:db" data-inline="false"></span>
                     <UncontrolledTooltip delay={0} target="tooltip24605">
                      SQL
                    </UncontrolledTooltip>
                  </i>

                  <i className="icon ni "
                    id="tooltip24606"
                  >
                    <span className="iconify" data-icon="simple-icons:netlify" data-inline="false"></span>
                     <UncontrolledTooltip delay={0} target="tooltip24606">
                      Netfliy
                    </UncontrolledTooltip>
                  </i>
                  <i className="icon ni "
                    id="tooltip24607"
                  >
                    <span className="iconify" data-icon="bx:bxl-react" data-inline="false"></span>
                     <UncontrolledTooltip delay={0} target="tooltip24607">
                      React
                    </UncontrolledTooltip>
                  </i>
                  <i className="icon ni"
                    id="tooltip24608"
                  >
                  <span className="iconify" data-icon="fa-brands:css3-alt" data-inline="false"></span>
                   <UncontrolledTooltip delay={0} target="tooltip24608">
                      CSS
                    </UncontrolledTooltip>
                  </i>
                  <i className="icon ni "
                    id="tooltip24609"
                  >
                 <span className="iconify" data-icon="mdi:visual-studio" data-inline="false"></span>
                     <UncontrolledTooltip delay={0} target="tooltip24609">
                      Visual Studio
                    </UncontrolledTooltip>
                  </i>


                  <i className="icon "
                    id="tooltip246010"
                  >
                    <span className="iconify" data-icon="fa-brands:php" data-inline="false"></span>
                     <UncontrolledTooltip delay={0} target="tooltip246010">
                      PHP
                    </UncontrolledTooltip>
                  </i>
                  <i className="icon "
                    id="tooltip246011"
                  >
                   <span className="iconify" data-icon="simple-icons:angular" data-inline="false"></span>
                     <UncontrolledTooltip delay={0} target="tooltip246011">
                      Angular
                    </UncontrolledTooltip>
                  </i>
                  <i className="icon ni "
                    id="tooltip246012"
                  >
                    <span className="iconify" data-icon="ant-design:github-filled" data-inline="false"></span>
                     <UncontrolledTooltip delay={0} target="tooltip246012">
                      Github
                    </UncontrolledTooltip>
                  </i>
                  <i className="icon ni"
                    id="tooltip246013"
                  >
                     <span className="iconify" data-icon="bx:bxl-jquery" data-inline="false"></span>
                      <UncontrolledTooltip delay={0} target="tooltip246013">
                      jQuery
                    </UncontrolledTooltip>
                  </i>
                  <i className="icon fa fa-html5"
                    id="tooltip246014"
                  >
                     <UncontrolledTooltip delay={0} target="tooltip246014">
                      HTML5
                    </UncontrolledTooltip>

                  </i>
                </div>



          </Container>
        </section>
      </>
    );
  }
}

export default Icons;
