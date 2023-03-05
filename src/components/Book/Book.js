import React from "react";
import { Button, Col } from "react-bootstrap";
import "./Book.css";

const Book = ({ book }) => {
  return (
    <Col className="book">
      <img src={book.image} alt="" />
      <h2>{book?.title}</h2>
      <p>
        <strong>Sub Title:</strong> {book?.subtitle}
      </p>
      <p>
        <strong>Price:</strong> {book?.price}
      </p>
      <Button
        variant="dark"
        target="_blank"
        type="button"
        href={book.url}
        className="btn"
      >
        Buy Now
      </Button>
      <br />
      <br />
    </Col>
  );
};

export default Book;
