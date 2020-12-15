import React from "react";

const List = (props) => {
  return (
    <ul>
      {props.list.map((num, idx) => {
        return <li>{num}</li>;
      })}
    </ul>
  );
};

export default List;
