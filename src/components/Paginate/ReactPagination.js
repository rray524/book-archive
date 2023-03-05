import "./Pagination.css";

const ReactPagination = ({ pageNumbers, handlePageClick, currentPage }) => {
  return (
    <ul className="pagination">
      {pageNumbers.map((number) => {
        return (
          <li key={number} id={number} onClick={handlePageClick}>
            {number}
          </li>
        );
      })}
    </ul>
  );
};

export default ReactPagination;
