import React from "react";

import classnames from "classnames";

// reactstrap components
import {
  Button,
  Card,
  CardBody,
  FormGroup,
  Input,
  InputGroupAddon,
  InputGroupText,
  InputGroup,
  Container,
  Row,
  Col
} from "reactstrap";

class ContactFooter extends React.Component {
  state = {};

  render() {
    return (
      <>
        <footer className=" footer">
          <Container>
            <Row className="justify-content-center ">
              <Col lg="8">
                <Card className="bg-gradient-secondary shadow">
                  <CardBody className="p-lg-5">
                    <h4 className="mb-1">Contact</h4>
                    <FormGroup
                      className={classnames("mt-5", {
                        focused: this.state.nameFocused
                      })}
                    >
                      <InputGroup className="input-group-alternative">
                        <InputGroupAddon addonType="prepend">
                          <InputGroupText>
                            <i className="ni ni-user-run" />
                          </InputGroupText>
                        </InputGroupAddon>
                        <Input
                          placeholder="Your name"
                          type="text"
                          onFocus={e => this.setState({ nameFocused: true })}
                          onBlur={e => this.setState({ nameFocused: false })}
                        />
                      </InputGroup>
                    </FormGroup>
                    <FormGroup
                      className={classnames({
                        focused: this.state.emailFocused
                      })}
                    >
                      <InputGroup className="input-group-alternative">
                        <InputGroupAddon addonType="prepend">
                          <InputGroupText>
                            <i className="ni ni-email-83" />
                          </InputGroupText>
                        </InputGroupAddon>
                        <Input
                          placeholder="Email address"
                          type="email"
                          onFocus={e => this.setState({ emailFocused: true })}
                          onBlur={e => this.setState({ emailFocused: false })}
                        />
                      </InputGroup>
                    </FormGroup>
                    <FormGroup className="mb-4">
                      <Input
                        className="form-control-alternative"
                        cols="80"
                        name="name"
                        placeholder="Type a message..."
                        rows="4"
                        type="textarea"
                      />
                    </FormGroup>
                    <div>
                      <Button
                        block
                        className="btn-round"
                        color="default"
                        size="lg"
                        type="button"
                      >
                        Send Message
                      </Button>
                    </div>
                  </CardBody>
                </Card>
              </Col>
            </Row>
          </Container>
        </footer>
      </>
    )
  }
}

export default ContactFooter;
