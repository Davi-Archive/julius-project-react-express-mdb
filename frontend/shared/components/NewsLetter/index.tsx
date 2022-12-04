import React from "react";
import { Form, Button } from "react-bootstrap";

const NewsLetter = () => {
  return (
    <section className="containerNewsletter">
      <Form className="formContainer">
        <Form.Group className="mb-1 inputContainer" controlId="formBasicEmail">
          <Form.Label className="formLabel">Newsletter</Form.Label>
          <Form.Control
            className="inputForm"
            type="email"
            placeholder="Enter email"
          />
        </Form.Group>

        <Form.Group
          className="mb-1 inputContainer"
          controlId="formBasicPassword"
        >
          <Form.Control
            className="inputForm"
            type="password"
            placeholder="Password"
          />
        </Form.Group>
        <Button className="buttonForm" variant="primary" type="submit">
          Submit
        </Button>
      </Form>
    </section>
  );
};

export default NewsLetter;
