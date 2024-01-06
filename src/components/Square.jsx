const Square = ({ className, value, onClick, playerTurn, id }) => {
  let colorClass = null
  if (value == null && playerTurn != null) {
    colorClass = `${playerTurn}-color`
  }
  return (
    <div
      onClick={onClick}
      id={id}
      className={`tile ${className} ${colorClass}`}

      //gasasworebelia X da O ferebi
    >
      {value}
    </div>
  )
}
export default Square
