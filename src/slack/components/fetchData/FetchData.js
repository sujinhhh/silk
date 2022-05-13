import React from "react";
import { useState, useEffect } from "react";
import Form from "./Form";
import "./fetch-data.css";
import List from "./List";
import Table from "./Table";

function FetchData() {
  const API_URL = "https://jsonplaceholder.typicode.com/";
  const [reqType, setReqType] = useState("posts");
  const [items, setItems] = useState([]);

  useEffect(() => {
    const fetchItems = async () => {
      try {
        const response = await fetch(`${API_URL}${reqType}`);
        const data = await response.json();
        setItems(data);
      } catch (err) {
        console.log(err.message);
      }
    };
    fetchItems();
  }, [reqType]);

  return (
    <div className="fetch-data_conainer">
      <Form reqType={reqType} setReqType={setReqType}></Form>
      <Table items={items} />
    </div>
  );
}

export default FetchData;
