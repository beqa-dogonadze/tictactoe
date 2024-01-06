import { useState } from 'react'
import Board from './Board'
const TicTacToe = () => {
  const x = 'X'
  const o = 'O'

  //carieli array otxkutxedebistvis indexis misacemad
  const [square, setSquare] = useState(Array(9).fill(null))
  const [playerTurn, setPlayerTurn] = useState(x)

  // otxkutxedze tavidan dacherit ar sheicvleba otxkutxedis mnishvneloba
  const handleClick = (index) => {
    if (square[index] !== null) {
      return
    }
    // arrrays kopireba a xal array-shi da motamasheebis svlebis logika
    const newSquare = [...square]
    newSquare[index] = playerTurn
    setSquare(newSquare)
    // tu X daachers state O mnishnelobas aigebs da piriqit
    if (playerTurn === x) {
      setPlayerTurn(o)
    } else {
      setPlayerTurn(x)
    }
  }

  return (
    <div>
      <h1>Tic Tac Toe</h1>
      <Board
        playerTurn={playerTurn}
        square={square}
        onPlayerClick={handleClick}
      />
    </div>
  )
}
export default TicTacToe
