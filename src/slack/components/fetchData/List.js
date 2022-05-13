import React from "react";
import ListItem from "./ListItem";
import "./fetch-data.css";

function List({ items }) {
  return (
    <ul className="fetch-ul">
      {items.map((item) => (
        <ListItem key={item.id} item={item} />
      ))}
    </ul>
  );
}

export default List;
