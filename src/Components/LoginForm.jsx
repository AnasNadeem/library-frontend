import React from "react";
import Container from "react-bootstrap/Container";
import Card from "react-bootstrap/Card";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";

const LoginForm = () => {
  return(
    <Container>
      <Row className="justify-content-center mt-2">
        <Col lg={6} xs={10}>
          <Card>
            <Card.Body>
              <Card.Title>Login</Card.Title>
                <Form>
                  <Form.Group className="mb-3" controlId="emailorusername">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control type="email" placeholder="Enter username" />
                  </Form.Group>
                  <Form.Group className="mb-3" controlId="password">
                    <Form.Label>Password</Form.Label>
                    <Form.Control type="password" placeholder="Password" />
                  </Form.Group>
                  <Button className="fullButton">Login</Button>
                </Form>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
} 

export default LoginForm;