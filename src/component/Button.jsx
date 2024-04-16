import React, { useContext, useState,useEffect } from 'react'
import './Component.css'
import GameHandler from '../context/GameHandler';

const Button = (props) => {
  const {chotiJeet,setChotiJeet,highlightGrid,board,currentPosition,updatePosition,setIsPointer,setHighlightGrid,updateGridValue, player,setPlayer,checkRules} = useContext(GameHandler);
  const [isButtonDisabled, setIsButtonDisabled] = useState(false);
  const [turn,setTurn] = useState(null);
  const [flag, setFlag] = useState(true);

  const handleClick = ()=>{
    if(flag){
    setIsPointer(false);
    setFlag(false);
    }

    if(turn === null && player === 1){
      setTurn('X');
      setPlayer(2);
      updateGridValue(props.gid, props.id, player);
      updatePosition(props.gid,props.id)
      checkRules();
      setHighlightGrid(props.id);
    }
    else if(turn === null && player === 2){
      setTurn('O');
      setPlayer(1);
      updateGridValue(props.gid, props.id, player);
      updatePosition(props.gid,props.id)
      checkRules();
      setHighlightGrid(props.id);
      }
    setIsButtonDisabled(true);
    
  }
  useEffect(() => {
    console.log("gid: ",props.gid)
    console.log("board[0]: ",board[0])
    console.log("highlight: ",highlightGrid)
    if((board[highlightGrid] === 1 || board[highlightGrid] === 2 ) || ((board[chotiJeet] === 1 || board[chotiJeet] === 2) && chotiJeet === highlightGrid  ) ){
      console.log("i runned")
        setIsPointer(true)
        setHighlightGrid(null)
        setFlag(true)
        setChotiJeet(null)
    }
  }, [highlightGrid,chotiJeet])
  
  return (
        <button className="box" onClick={handleClick} disabled={isButtonDisabled}>
           {turn}
        </button>
  )
  
}

export default Button