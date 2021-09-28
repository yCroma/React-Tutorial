import React, { useState } from "react";
import Square from "./Square";

const Board = () => {
  const [winner, setWinner] = useState(null);
  const [squares, setSquare] = useState(Array(9).fill(null));
  const [xIsNext, setNext] = useState(true);
  const handleClick = (i) => {
    squares[i] = xIsNext ? "X" : "O";
    setWinner(calculateWinner(squares));
    if (winner) return;
    setSquare([...squares]);
    setNext(!xIsNext);
  };
  const renderSquare = (i) => {
    return <Square value={squares[i]} onClick={() => handleClick(i)} />;
  };
  const status = `Next player: ${xIsNext ? "X" : "0"}`;

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

function calculateWinner(squares) {
  const lines = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ];
  for (let i = 0; i < lines.length; i++) {
    const [a, b, c] = lines[i];
    if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
      return squares[a];
    }
  }
  return null;
}

export default Board;
