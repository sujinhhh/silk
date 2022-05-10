import React from "react";
import { useState } from "react";
import AddItem from "./AddItem";
import "./AirBnb.css";

function AirImg({ title = "hahah", handleSubmit, newItem, setNewItem }) {
  return (
    <div>
      <div className="air-travel">
        <h1>{title}</h1>
        <AddItem
          handleSubmit={handleSubmit}
          newItem={newItem}
          setNewItem={setNewItem}
        />

        <img
          className="house"
          src="./ca756f4e-5f20-4f90-80f2-bf30542bf8bf.webp"
          alt=""
        />
      </div>
    </div>
  );
}

export default AirImg;
