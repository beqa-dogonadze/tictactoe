import Reset from './Reset'
import Square from './Square'
import Winner from './Winner'

const Board = ({ square, onPlayerClick, playerTurn }) => {
  return (
    <div className='board'>
      <Square
        playerTurn={playerTurn}
        onClick={() => onPlayerClick(0)}
        value={square[0]}
        className='right-border bottom-border'
      />
      <Square
        playerTurn={playerTurn}
        onClick={() => onPlayerClick(1)}
        value={square[1]}
        className='right-border bottom-border'
      />
      <Square
        playerTurn={playerTurn}
        onClick={() => onPlayerClick(2)}
        value={square[2]}
        className='bottom-border'
      />
      <Square
        playerTurn={playerTurn}
        onClick={() => onPlayerClick(3)}
        value={square[3]}
        className='right-border bottom-border'
      />
      <Square
        playerTurn={playerTurn}
        onClick={() => onPlayerClick(4)}
        value={square[4]}
        className='right-border bottom-border'
      />
      <Square
        playerTurn={playerTurn}
        onClick={() => onPlayerClick(5)}
        value={square[5]}
        className='bottom-border'
      />
      <Square
        playerTurn={playerTurn}
        onClick={() => onPlayerClick(6)}
        value={square[6]}
        className='right-border'
      />
      <Square
        playerTurn={playerTurn}
        onClick={() => onPlayerClick(7)}
        value={square[7]}
        className='right-border '
      />
      <Square onClick={() => onPlayerClick(8)} value={square[8]} className='' />
      <Winner />
      <Reset />
    </div>
  )
}
export default Board
