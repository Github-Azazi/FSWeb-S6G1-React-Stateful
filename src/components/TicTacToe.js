import React, { useState, useEffect } from 'react';


const TicTacToe = () => {
  const [board, setBoard] = useState(Array(9).fill(''));
  const [humanPlayer, setHumanPlayer] = useState('X');
  const [computerPlayer, setComputerPlayer] = useState('O');
  const [winner, setWinner] = useState(null);

  useEffect(() => {
    if (winner) {
      alert(`Kazanan: ${winner}`);
    }
  }, [winner]);

  const isBoardFull = () => {
    return board.every(cell => cell !== '');
  };

  const checkWinner = (currentBoard, player) => {
    for (let i = 0; i < WINNING_COMBINATIONS.length; i++) {
      const [a, b, c] = WINNING_COMBINATIONS[i];
      if (currentBoard[a] === player && currentBoard[b] === player && currentBoard[c] === player) {
        return true;
      }
    }
    return false;
  };

  const handleCellClick = (index) => {
    if (board[index] === '' && !winner) {
      const newBoard = [...board];
      newBoard[index] = humanPlayer;
      setBoard(newBoard);
      if (checkWinner(newBoard, humanPlayer)) {
        setWinner(humanPlayer);
      } else if (!isBoardFull()) {
        setTimeout(() => computerMove(newBoard), 300);
      }
    }
  };

  const computerMove = (currentBoard) => {
    const availableCells = currentBoard.reduce((acc, cell, index) => {
      if (cell === '') return [...acc, index];
      return acc;
    }, []);

    for (let i = 0; i < availableCells.length; i++) {
      const newBoard = [...currentBoard];
      newBoard[availableCells[i]] = computerPlayer;
      if (checkWinner(newBoard, computerPlayer)) {
        setBoard(newBoard);
        setWinner(computerPlayer);
        return;
      }
    }

    for (let i = 0; i < availableCells.length; i++) {
      const newBoard = [...currentBoard];
      newBoard[availableCells[i]] = humanPlayer;
      if (checkWinner(newBoard, humanPlayer)) {
        newBoard[availableCells[i]] = computerPlayer;
        setBoard(newBoard);
        return;
      }
    }

    const randomIndex = availableCells[Math.floor(Math.random() * availableCells.length)];
    const newBoard = [...currentBoard];
    newBoard[randomIndex] = computerPlayer;
    setBoard(newBoard);
    if (checkWinner(newBoard, computerPlayer)) {
      setWinner(computerPlayer);
    } else if (isBoardFull()) {
      setWinner('Berabere');
    }
  };

  const WINNING_COMBINATIONS = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ];

  return (
    <div className='tic-tac-toe'>
      <h2>Tic Tac Toe Oyunu</h2>
      <div className='table'>
        {board.map((cell, index) => (
          <div key={index} className='cell' onClick={() => handleCellClick(index)}>
            {cell}
          </div>
        ))}
      </div>
    </div>
  );
};

export default TicTacToe;
