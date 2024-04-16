import React, { createContext, useState } from 'react';

// Create the context
const GameHandler = createContext();

// Custom Provider component
export const GameHandlerProvider = ({ children }) => {
  // Initial state: a 9x9 array filled with zeros
  const initialGrid = Array.from({ length: 9 }, () => Array.from({ length: 9 }, () => 0));
  const initialBoard = Array.from({length:9}, () => 0);
  const [board,setBoard] = useState(initialBoard);
  const [grid, setGrid] = useState(initialGrid);
  const [player, setPlayer] = useState(1);
  const [highlightGrid,setHighlightGrid] = useState(null);
  const [isPointer, setIsPointer] = useState(true);
  const [chotiJeet,setChotiJeet] = useState(null);
  const initialPosition = 
  {
    boardPosition: null,
    gridPosition: null
  }
  const [currentPosition,setCurrentPosition] = useState(initialPosition);


  // Function to update the value of the mini-board
  const updateGridValue = (row, col, value) => {
    const newGrid = [...grid];
    newGrid[row][col] = value;
    setGrid(newGrid);
  };
  //Function to update the value of board
  const updateBoardValue = (position, value)=>{
    const newBoard = {...board};
    newBoard[position] = value;
    setBoard(newBoard);
  }
  const updatePosition = (boardPosition,gridPosition) =>{
    const newPosition = {...currentPosition};
    newPosition.boardPosition = boardPosition;
    newPosition.gridPosition = gridPosition;
    setCurrentPosition(newPosition);
  } 

  const checkRules = () =>{
    for(let i = 0; i < 9; i++){
        for(let j = 0; j < 9; j++){
            if(grid[i][0] === player && grid[i][1] === player && grid[i][2] === player){
                updateGridValue(i,0,0);
                updateGridValue(i,1,0);
                updateGridValue(i,2,0);
                updateBoardValue(i,player);
                setChotiJeet(i);
                console.log("Player ",player," wins")
                break;
            }
            else if(grid[i][0] === player && grid[i][3] === player && grid[i][6] === player){
                updateGridValue(i,0,0);
                updateGridValue(i,3,0);
                updateGridValue(i,6,0);
                updateBoardValue(i,player);
                setChotiJeet(i);
                console.log("Player ",player," wins")
                break;
            }
            else if(grid[i][2] === player && grid[i][5] === player && grid[i][8] === player){
                updateGridValue(i,2,0);
                updateGridValue(i,5,0);
                updateGridValue(i,8,0);
                updateBoardValue(i,player);
                setChotiJeet(i);
                console.log("Player ",player," wins")
                break;
            }
            else if(grid[i][6] === player && grid[i][7] === player && grid[i][8] === player){
                updateGridValue(i,6,0);
                updateGridValue(i,7,0);
                updateGridValue(i,8,0);
                updateBoardValue(i,player);
                setChotiJeet(i);
                console.log("Player ",player," wins")
                break;
            }
            else if(grid[i][0] === player && grid[i][4] === player && grid[i][8] === player){
                updateGridValue(i,0,0);
                updateGridValue(i,4,0);
                updateGridValue(i,8,0);
                updateBoardValue(i,player);
                setChotiJeet(i);
                console.log("Player ",player," wins")
                break;
            }
            else if(grid[i][2] === player && grid[i][4] === player && grid[i][6] === player){
                updateGridValue(i,0,0);
                updateGridValue(i,4,0);
                updateGridValue(i,6,0);
                updateBoardValue(i,player);
                setChotiJeet(i);
                console.log("Player ",player," wins")
                break;
            }
            else if(grid[i][1] === player && grid[i][4] === player && grid[i][7] === player){
                updateGridValue(i,1,0);
                updateGridValue(i,4,0);
                updateGridValue(i,7,0);
                updateBoardValue(i,player);
                setChotiJeet(i);
                console.log("Player ",player," wins")
                break;
            }
            else if(grid[i][3] === player && grid[i][4] === player && grid[i][5] === player){
                updateGridValue(i,3,0);
                updateGridValue(i,4,0);
                updateGridValue(i,5,0);
                updateBoardValue(i,player);
                setChotiJeet(i);
                console.log("Player ",player," wins")
                break;
            }

            


        }
    }
  }

  return (
    <GameHandler.Provider value={{ grid, updateGridValue, player, setPlayer,checkRules,highlightGrid, setHighlightGrid,isPointer,setIsPointer ,board, currentPosition,updatePosition,chotiJeet,setChotiJeet}}>
      {children}
    </GameHandler.Provider>
  );
};

export default GameHandler;
