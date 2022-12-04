import React from "react";
import { Form, Button } from "react-bootstrap";

const NewsLetter = () => {
  return (
    <section className="containerNewsletter">
      <Form className="formContainer">
        <Form.Group className="mb-1" controlId="formBasicEmail">
          <Form.Label>Newsletter</Form.Label>
          <Form.Control
            className="inputForm"
            type="email"
            placeholder="Enter email"
          />
        </Form.Group>

        <Form.Group className="mb-1" controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control
            className="inputForm"
            type="password"
            placeholder="Password"
          />
        </Form.Group>
        <Button variant="primary" type="submit">
          Submit
        </Button>
      </Form>
    </section>
  );
};

export default NewsLetter;
