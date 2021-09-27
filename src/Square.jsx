import React, { useState } from "react";

const Square = ({ index }) => {
  const [value, setValue] = useState(null);
  return (
    <button
      className="square"
      onClick={() => {
        setValue("x");
      }}
    >
      {value}
    </button>
  );
};

export default Square;
