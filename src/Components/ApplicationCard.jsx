import React from "react";
import Container from "react-bootstrap/Container";
import Card from "react-bootstrap/Card";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import ApplicationForm from "./ApplicationForm";

const Application = () => {
  return(
    <Container>
      <Row className="justify-content-center mt-2">
        <Col lg={6} xs={10}>
          <Card>
            <Card.Body>
              <Card.Title>Application Card</Card.Title>
              <ApplicationForm />
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
} 

export default Application;