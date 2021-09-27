import React from "react";

const Square = ({ index }) => {
  return (
    <button
      className="square"
      onClick={() => {
        alert("click");
      }}
    >
      {index}
    </button>
  );
};

export default Square;
