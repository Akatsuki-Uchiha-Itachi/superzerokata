import logo from './logo.svg';
import './App.css';
import Grid3 from './component/Grid3';
import { useContext, useState ,useEffect} from 'react';
import GameHandler from './context/GameHandler';

function App() {
  const {player, highlightGrid, isPointer, board } = useContext(GameHandler);


  return (
    <div className="game">
      <div className="board">
        <div className="grid-item" style={{ backgroundColor: highlightGrid === 0 ? '#d6d6d6' : 'transparent', pointerEvents: isPointer || highlightGrid === 0 ? 'auto' : 'none' }}>
          {
            board[0] === 1 ?
              <svg xmlns="http://www.w3.org/2000/svg" width="128" height="128" fill="currentColor" className="bi bi-x" viewBox="0 0 16 16">
                <path d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708" />
              </svg> :
              board[0] === 2 ?
                <svg xmlns="http://www.w3.org/2000/svg" width="90" height="90" fill="currentColor" className="bi bi-circle" viewBox="0 0 16 16">
                  <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14m0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16" />
                </svg> :
                <Grid3 gid={0} />
          }
        </div>
        <div className="grid-item" style={{ backgroundColor: highlightGrid === 1 ? '#d6d6d6' : 'transparent', pointerEvents: isPointer || highlightGrid === 1 ? 'auto' : 'none' }}>
          {
            board[1] === 1 ?
              <svg xmlns="http://www.w3.org/2000/svg" width="128" height="128" fill="currentColor" className="bi bi-x" viewBox="0 0 16 16">
                <path d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708" />
              </svg> :
              board[1] === 2 ?
                <svg xmlns="http://www.w3.org/2000/svg" width="90" height="90" fill="currentColor" className="bi bi-circle" viewBox="0 0 16 16">
                  <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14m0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16" />
                </svg> :
                <Grid3 gid={1} />
          }
        </div>
        <div className="grid-item" style={{ backgroundColor: highlightGrid === 2 ? '#d6d6d6' : 'transparent', pointerEvents: isPointer || highlightGrid === 2 ? 'auto' : 'none' }}>
          {
            board[2] === 1 ?
              <svg xmlns="http://www.w3.org/2000/svg" width="128" height="128" fill="currentColor" className="bi bi-x" viewBox="0 0 16 16">
                <path d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708" />
              </svg> :
              board[2] === 2 ?
                <svg xmlns="http://www.w3.org/2000/svg" width="90" height="90" fill="currentColor" className="bi bi-circle" viewBox="0 0 16 16">
                  <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14m0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16" />
                </svg> :
                <Grid3 gid={2} />
          }
        </div>
        <div className="grid-item" style={{ backgroundColor: highlightGrid === 3 ? '#d6d6d6' : 'transparent', pointerEvents: isPointer || highlightGrid === 3 ? 'auto' : 'none' }}>
          {
            board[3] === 1 ?
              <svg xmlns="http://www.w3.org/2000/svg" width="128" height="128" fill="currentColor" className="bi bi-x" viewBox="0 0 16 16">
                <path d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708" />
              </svg> :
              board[3] === 2 ?
                <svg xmlns="http://www.w3.org/2000/svg" width="90" height="90" fill="currentColor" className="bi bi-circle" viewBox="0 0 16 16">
                  <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14m0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16" />
                </svg> :
                <Grid3 gid={3} />
          }
        </div>
        <div className="grid-item" style={{ backgroundColor: highlightGrid === 4 ? '#d6d6d6' : 'transparent', pointerEvents: isPointer || highlightGrid === 4 ? 'auto' : 'none' }}>
          {
            board[4] === 1 ?
              <svg xmlns="http://www.w3.org/2000/svg" width="128" height="128" fill="currentColor" className="bi bi-x" viewBox="0 0 16 16">
                <path d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708" />
              </svg> :
              board[4] === 2 ?
                <svg xmlns="http://www.w3.org/2000/svg" width="90" height="90" fill="currentColor" className="bi bi-circle" viewBox="0 0 16 16">
                  <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14m0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16" />
                </svg> :
                <Grid3 gid={4} />
          }
        </div>
        <div className="grid-item" style={{ backgroundColor: highlightGrid === 5 ? '#d6d6d6' : 'transparent', pointerEvents: isPointer || highlightGrid === 5 ? 'auto' : 'none' }}>
          {
            board[5] === 1 ?
              <svg xmlns="http://www.w3.org/2000/svg" width="128" height="128" fill="currentColor" className="bi bi-x" viewBox="0 0 16 16">
                <path d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708" />
              </svg> :
              board[5] === 2 ?
                <svg xmlns="http://www.w3.org/2000/svg" width="90" height="90" fill="currentColor" className="bi bi-circle" viewBox="0 0 16 16">
                  <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14m0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16" />
                </svg> :
                <Grid3 gid={5} />
          }
        </div>
        <div className="grid-item" style={{ backgroundColor: highlightGrid === 6 ? '#d6d6d6' : 'transparent', pointerEvents: isPointer || highlightGrid === 6 ? 'auto' : 'none' }}>
          {
            board[6] === 1 ?
              <svg xmlns="http://www.w3.org/2000/svg" width="128" height="128" fill="currentColor" className="bi bi-x" viewBox="0 0 16 16">
                <path d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708" />
              </svg> :
              board[6] === 2 ?
                <svg xmlns="http://www.w3.org/2000/svg" width="90" height="90" fill="currentColor" className="bi bi-circle" viewBox="0 0 16 16">
                  <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14m0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16" />
                </svg> :
                <Grid3 gid={6} />
          }
        </div>
        <div className="grid-item" style={{ backgroundColor: highlightGrid === 7 ? '#d6d6d6' : 'transparent', pointerEvents: isPointer || highlightGrid === 7 ? 'auto' : 'none' }}>
          {
            board[7] === 1 ?
              <svg xmlns="http://www.w3.org/2000/svg" width="128" height="128" fill="currentColor" className="bi bi-x" viewBox="0 0 16 16">
                <path d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708" />
              </svg> :
              board[7] === 2 ?
                <svg xmlns="http://www.w3.org/2000/svg" width="90" height="90" fill="currentColor" className="bi bi-circle" viewBox="0 0 16 16">
                  <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14m0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16" />
                </svg> :
                <Grid3 gid={7} />
          }
        </div>
        <div className="grid-item" style={{ backgroundColor: highlightGrid === 8 ? '#d6d6d6' : 'transparent', pointerEvents: isPointer || highlightGrid === 8 ? 'auto' : 'none' }}>
          {
            board[8] === 1 ?
              <svg xmlns="http://www.w3.org/2000/svg" width="128" height="128" fill="currentColor" className="bi bi-x" viewBox="0 0 16 16">
                <path d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708" />
              </svg> :
              board[8] === 2 ?
                <svg xmlns="http://www.w3.org/2000/svg" width="90" height="90" fill="currentColor" className="bi bi-circle" viewBox="0 0 16 16">
                  <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14m0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16" />
                </svg> :
                <Grid3 gid={8} />
          }
        </div>
      </div>
      <div className="jankari">
        Player: {player === 1? 'X': 'O'}
      </div>
    </div>

  );
}

export default App;
