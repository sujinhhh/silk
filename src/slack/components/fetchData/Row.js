import React from "react";
import Cell from "./Cell";
import "./fetch-data.css";

function Row({ item }) {
  return (
    <tr className="row-tr">
      {Object.entries(item).map(([key, value]) => {
        return <Cell key={key} cellData={JSON.stringify(value)} />;
      })}
    </tr>
  );
}

export default Row;
