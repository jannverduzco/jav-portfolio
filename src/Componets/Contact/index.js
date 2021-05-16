import React from "react";
import { Container } from "react-bootstrap";
import Form from "react-bootstrap/Form";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";
import "./style.css";

function Contact() {
  return (
    <Container className="container">
      <h2>Contact Me</h2>
      <Form>
        <Form.Row>
          <Form.Group as={Col} md="6" controlId="validationCustom01">
            <h6>First Name</h6>
            <Form.Control required type="text" placeholder="First" />
          </Form.Group>
          <Form.Group as={Col} md="6" controlId="validationCustom02">
            <h6>Last Name</h6>
            <Form.Control required type="text" placeholder="Last" />
          </Form.Group>
        </Form.Row>
        <Form.Group controlId="exampleForm.ControlInput1">
          <h6>Email Address</h6>
          <Form.Control type="email" placeholder="name@example.com" />
        </Form.Group>
        <Form.Group controlId="exampleForm.ControlTextarea1">
          <h6>Message</h6>
          <Form.Control
            as="textarea"
            placeholder="Enter Message Here..."
            rows={3}
          />
        </Form.Group>
        <Button variant="warning" type="submit">
          <h6>Submit</h6>
        </Button>
      </Form>
    </Container>
  );
}

export default Contact;
