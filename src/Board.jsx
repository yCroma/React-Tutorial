import React, { useState } from "react";
import Square from "./Square";

const Board = () => {
  const [squares, setSquare] = useState(Array(9).fill(null));
  const [xIsNext, setNext] = useState(true);
  const handleClick = (i) => {
    squares[i] = xIsNext ? "X" : "O";
    setSquare([...squares]);
    setNext(!xIsNext);
  };
  const renderSquare = (i) => {
    return <Square value={squares[i]} onClick={() => handleClick(i)} />;
  };
  const status = "Next player: X";

  return (
    <>
      <div className="status">{status}</div>
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
