import React, { useState } from "react";
import "./TicTacToe.css";
import circle_icon from "../Assets/circle.png";
import cross_icon from "../Assets/cross.png";

const TicTacToe = () => {
  const initialBoard = Array(9).fill("");
  const [board, setBoard] = useState(initialBoard);
  const [currentPlayer, setCurrentPlayer] = useState("x");
  const [winner, setWinner] = useState(null);

  const icons = {
    x: cross_icon,
    o: circle_icon,
  };

  const handleClick = (index) => {
    if (board[index] !== "" || winner) return;

    const updatedBoard = [...board];
    updatedBoard[index] = currentPlayer;
    setBoard(updatedBoard);

    const gameResult = checkWin(updatedBoard);
    if (gameResult) {
      setWinner(gameResult);
    } else if (!updatedBoard.includes("")) {
      setWinner("draw");
    } else {
      setCurrentPlayer(currentPlayer === "x" ? "o" : "x");
    }
  };

  const checkWin = (board) => {
    const winPatterns = [
      [0, 1, 2], [3, 4, 5], [6, 7, 8], 
      [0, 3, 6], [1, 4, 7], [2, 5, 8], 
      [0, 4, 8], [2, 4, 6],          
    ];

    for (let pattern of winPatterns) {
      const [a, b, c] = pattern;
      if (board[a] && board[a] === board[b] && board[a] === board[c]) {
        return board[a];
      }
    }
    return null;
  };

  const resetGame = () => {
    setBoard(initialBoard);
    setCurrentPlayer("x");
    setWinner(null);
  };

  const renderStatus = () => {
    if (winner === "draw") return "It's a Draw!";
    if (winner) return (
      <>
        Congratulations: <img src={icons[winner]} alt={winner} />
      </>
    );
    return `Current Turn: ${currentPlayer.toUpperCase()}`;
  };

  return (
    <div className="container">
      <h1 className="title">Tic Tac Toe Game In <span>React</span></h1>
      <h2 className="status">{renderStatus()}</h2>
      <div className="board">
        {board.map((cell, index) => (
          <div
            key={index}
            className="boxes"
            onClick={() => handleClick(index)}
          >
            {cell && <img src={icons[cell]} alt={cell} />}
          </div>
        ))}
      </div>
      <button className="reset" onClick={resetGame}>Reset</button>
    </div>
  );
};

export default TicTacToe;
