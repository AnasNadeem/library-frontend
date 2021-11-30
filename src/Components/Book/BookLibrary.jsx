import React from "react";
import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import BookCard from './BookCard';

function BookLibrary(){
  return(
    <Container>
    <h2>Fiction</h2>
      <Row>
        <Col lg={2} md={3} sm={6}>
          <BookCard />
        </Col>
        <Col lg={2} md={3} sm={6}>
          <BookCard />
        </Col>
        <Col lg={2} md={3} sm={6}>
          <BookCard />
        </Col>
      </Row>
      <h2>Non-Fiction</h2>
      <Row>
        <Col lg={2} md={3} sm={6}>
          <BookCard />
        </Col>
        <Col lg={2} md={3} sm={6}>
          <BookCard />
        </Col>
      </Row>
    </Container>
  );
}

export default BookLibrary;