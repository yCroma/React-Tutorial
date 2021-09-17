import React from "react";
import Square from "./Square";

const Board = ({ squares }) => {
  const renderSquare = (i) => {
    return <Square value={squares[i]} />;
  };

  return (
    <>
      <div className="board-now">
        {renderSquare(0)}
        {renderSquare(1)}
        {renderSquare(2)}
      </div>
      <div className="board-now">
        {renderSquare(3)}
        {renderSquare(4)}
        {renderSquare(5)}
      </div>
      <div className="board-now">
        {renderSquare(6)}
        {renderSquare(7)}
        {renderSquare(8)}
      </div>
    </>
  );
};

export default Board;
