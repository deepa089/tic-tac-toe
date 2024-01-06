import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import './App.css'
import Square from './Square/Square'
import GameInfo from './Game-Info/GameInfo';

function App() {
  const [xIsNext, setXIsNext] = useState(true);
  const [squares, setSquares] = useState(Array(9).fill(null));
  const [history, setHistory] = useState([]);
  const currentSquares = history[history.length - 1];
  
  function handleClick(i) {
    
    if (squares[i] || calculateWinner(squares)) {
      return;
    }
    // 1 way to set value in a array
    const nextSquares = squares.slice();
    if(xIsNext){
      nextSquares[i] = 'X'
    } else {
      nextSquares[i] = 'O'
    }
    setSquares(nextSquares)
    setXIsNext(!xIsNext);


    const currentState = nextSquares[i];
    setHistory([...history,currentState]);
    console.log(history);

  }

  function calculateWinner(squares) {
    const lines = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6]
    ];
    for (let i = 0; i < lines.length; i++) {
      const [a, b, c] = lines[i];
      if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
        return squares[a];
      }
    }
    return null;
  }

  const winner = calculateWinner(squares);
  let status;
  if (winner) {
    status = "Winner: " + winner;
  } else {
    status = "Next player: " + (xIsNext ? "X" : "O");
  }
  let index = 0;
  // console.log(currentSquares);
  return (
    <>
      <h1>Tic-tac-toe</h1>
      <div className='borad-game'>
        <div className="status">{status}</div>
        <div className="board-row">
          <Square value={squares[0]} onSquareClick={() => handleClick(0)}></Square>
          <Square value={squares[1]} onSquareClick={() => handleClick(1)}></Square>
          <Square value={squares[2]} onSquareClick={() => handleClick(2)}></Square>
        </div>
        <div className="board-row">
          <Square value={squares[3]} onSquareClick={() => handleClick(3)}></Square>
          <Square value={squares[4]} onSquareClick={() => handleClick(4)}></Square>
          <Square value={squares[5]} onSquareClick={() => handleClick(5)}></Square>
        </div>
        <div className="board-row">
          <Square value={squares[6]} onSquareClick={() => handleClick(6)}></Square>
          <Square value={squares[7]} onSquareClick={() => handleClick(7)}></Square>
          <Square value={squares[8]} onSquareClick={() => handleClick(8)}></Square>
        </div>
      </div>
      <div className='game-info'>
        <h3>Game Info</h3>
        {/* {console.log(history)} */}
        <ol>
          {
            
            history.map(h=>
              //  index = index + 1 
               <GameInfo key={index}  currentState={h}></GameInfo>
            )
          }
          
        </ol>
       
      </div>
      
     
    </>
  )
}

export default App
