import React from "react";

function FetchList({ list }) {
  return (
    <div>
      <ul>
        {list.map((item) => {
          return <li key={item.id}>{item.item}</li>;
        })}
      </ul>
    </div>
  );
}

export default FetchList;
