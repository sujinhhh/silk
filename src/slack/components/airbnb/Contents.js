import React from "react";
import styled from "styled-components";
import { DeleteForever } from "@material-ui/icons";

function Contents({ items, handleCheck, handleDelete }) {
  return (
    <div>
      {items.length ? (
        <PicSection>
          {items.map((item) => (
            <ImageItem
              key={item.id}
              onDoubleClick={() => handleCheck(item.id)}
              style={
                item.checked ? { boxShadow: "0 2px 10px 5px #d3b8ae" } : null
              }
            >
              <img src={item.img} alt="" />
              <h4> {item.title} </h4>
              <div>
                <input
                  type="checkbox"
                  checked={item.checked}
                  onChange={() => handleCheck(item.id)}
                />
                <label>{item.rate}</label>
                <DeleteForever
                  style={{ color: "#8d6e63", cursor: "pointer" }}
                  role="button"
                  tabIndex="0"
                  onClick={() => handleDelete(item.id)}
                />
              </div>
            </ImageItem>
          ))}
        </PicSection>
      ) : (
        <h1
          style={{
            marginTop: "2rem",
            textAlign: "center",
            backgroundColor: "red",
            color: "white",
          }}
        >
          You can check more on our Website!
        </h1>
      )}
    </div>
  );
}

export default Contents;

const PicSection = styled.div`
  display: flex;
  flex-direction: row-reverse;
  padding: 10px;
  font-size: 13px;
  margin-bottom: 40px;
  > div > img {
    height: 200px;
  }
`;

const ImageItem = styled.div`
  padding: 0.5rem 1rem 0.5rem 0.5rem;
  width: 100%;
  > div {
    display: flex;
    justify-content: flex-start;
    align-items: center;
    width: 100%;
  }

  > div > input {
    width: 28px;
    text-align: center;
    min-height: 28px;
    cursor: pointer;
    margin-right: 10px;
  }
  > div > label {
    font-size: 1.125rem;
    flex-grow: 2;
  }
  > div > svg :hover {
    color: red;
  }
`;
