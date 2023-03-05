import React from "react";
import { Form } from "react-bootstrap";

const Filter = ({ filterText, handleFilterTextChange, setFilterText }) => {
  return (
    <div style={{ position: "relative", width: "40%", marginBottom: "10px" }}>
      <Form.Group>
        <Form.Control
          id="filter"
          value={filterText}
          onChange={handleFilterTextChange}
          placeholder="Search by title || Subtitle"
        />
        <div className="close-icon" onClick={() => setFilterText("")}>
          <i class="fa fa-times" />
        </div>
      </Form.Group>
    </div>
  );
};

export default Filter;
