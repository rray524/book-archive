import axios from "axios";
import React, { useState, useEffect } from "react";
import { Container, Row } from "react-bootstrap";
import Book from "../components/Book/Book";
import Filter from "../components/Filter/Filter";
import ReactPagination from "../components/Paginate/ReactPagination";

const BookList = () => {
  const [books, setBooks] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [booksPerPage, setBooksPerPage] = useState(9);
  const [sortOrder, setSortOrder] = useState("asc");
  const [filterText, setFilterText] = useState("");

  console.log(filterText);

  const API = "https://api.npoint.io/da56bac9a57eb8be8f83";

  const getBooks = async (url) => {
    const res = await axios.get(url);
    setBooks(res.data);
  };

  const indexOfLastBook = currentPage * booksPerPage;
  const indexOfFirstBook = indexOfLastBook - booksPerPage;
  const currentBooks = books
    .filter((book) => {
      const titleMatch = book.title
        .toLowerCase()
        .includes(filterText.toLowerCase());
      const subtitleMatch = book.subtitle
        .toLowerCase()
        .includes(filterText.toLowerCase());
      return titleMatch || subtitleMatch;
    })
    .slice(indexOfFirstBook, indexOfLastBook);

  const totalPages = Math.ceil(books.length / booksPerPage);
  const pageNumbers = [];

  for (let i = 1; i <= totalPages; i++) {
    pageNumbers.push(i);
  }

  const handlePageClick = (event) => {
    setCurrentPage(Number(event.target.id));
  };

  const handleSortOrderChange = (event) => {
    setSortOrder(event.target.value);
  };

  const handleFilterTextChange = (event) => {
    setFilterText(event.target.value);
  };

  const sortedBooks = currentBooks.sort((a, b) => {
    if (sortOrder === "asc") {
      return a.title.localeCompare(b.title);
    } else {
      return b.title.localeCompare(a.title);
    }
  });
  // console.log(books);

  useEffect(() => {
    getBooks(API);
  }, []);

  return (
    <div className="book-list">
      <Container
        style={{ display: "flex", flexDirection: "column", padding: "40px 0" }}
      >
        <Row>
          <div style={{ display: "flex", justifyContent: "space-between" }}>
            <div className="sort-order">
              <label htmlFor="sort-order">Sort by title:</label>
              <select id="sort-order" onChange={handleSortOrderChange}>
                <option value="asc">A-Z</option>
                <option value="desc">Z-A</option>
              </select>
            </div>
            <Filter
              filterText={filterText}
              handleFilterTextChange={handleFilterTextChange}
              setFilterText={setFilterText}
            />
          </div>
        </Row>
        <Row>
          {currentBooks.map((book, i) => (
            <Book key={i} book={book} />
          ))}
        </Row>
        <br />
        <br />
        <br />
        {!filterText && (
          <Row style={{ width: "70%", margin: "auto" }}>
            <ReactPagination
              books={books}
              handlePageClick={handlePageClick}
              pageNumbers={pageNumbers}
              currentPage={currentPage}
            />
          </Row>
        )}

        <br />
        <br />
        <br />
      </Container>
    </div>
  );
};

export default BookList;
