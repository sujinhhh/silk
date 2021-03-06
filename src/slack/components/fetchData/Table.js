import React from "react";
import Row from "./Row";
import "./fetch-data.css";

function Table({ items }) {
  return (
    <div className="table-container">
      <table>
        <tbody>
          {items.map((item) => (
            <Row key={item.key} item={item} />
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default Table;
