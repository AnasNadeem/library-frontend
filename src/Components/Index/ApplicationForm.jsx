import React from "react";
import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

function ApplicationForm(){
  return(
    <Form>
      <Row>
        <Col lg={6} xs={10}>
          <Form.Group className="mb-3" controlId="firstName">
            <Form.Label>First Name</Form.Label>
            <Form.Control type="text" placeholder="First Name" />
          </Form.Group>
        </Col>
        <Col lg={6} xs={10}>
          <Form.Group className="mb-3" controlId="lastName">
            <Form.Label>Last Name</Form.Label>
            <Form.Control type="text" placeholder="Last Name" />
          </Form.Group>
        </Col>
      </Row>

      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Email address</Form.Label>
        <Form.Control type="email" placeholder="Enter email" />
      </Form.Group>

      <Form.Group className="mb-3" controlId="enrollNum">
        <Form.Label>Enrollment Number</Form.Label>
        <Form.Control type="text" placeholder="Enrollment Number" />
      </Form.Group>

      <Row>
        <Col lg={6} xs={10}>
          <Form.Group className="mb-3" controlId="courseName">
            <Form.Label>Course Name</Form.Label>
            <Form.Control type="text" placeholder="Course Name" />
          </Form.Group>
        </Col>
        <Col lg={6} xs={10}>
          <Form.Group className="mb-3" controlId="branchName">
            <Form.Label>Branch Name</Form.Label>
            <Form.Control type="text" placeholder="Branch Name" />
          </Form.Group>
        </Col>
      </Row>
      
      <Form.Group className="mb-3" controlId="dob">
        <Form.Label>Date Of Birth</Form.Label>
        <Form.Control type="date" />
      </Form.Group>
    </Form>
  );
}

export default ApplicationForm;