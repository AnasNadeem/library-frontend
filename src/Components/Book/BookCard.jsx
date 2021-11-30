import React from "react";
import Card from "react-bootstrap/Card";
import book_image from "./hpbook.jpg";

function BookCard(){
  return(
    <Card>
    <Card.Img src={book_image} alt="Book image" />
      <Card.Body>
        <Card.Title>Pickle Book</Card.Title>
      </Card.Body>
    </Card>
  );
}

export default BookCard;