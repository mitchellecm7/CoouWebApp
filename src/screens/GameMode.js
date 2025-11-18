import React, { useState, useEffect } from 'react';
import '../screens/UploadScreens/styles/GameMode.css';

// Import images - you'll need to adjust these paths
import rockEmoji from '../assets/Images/rock-emoji.jpg';
import paperEmoji from '../assets/Images/Paper-emoji.jpg';
import scissorsEmoji from '../assets/Images/scissors-emoji.jpg';

const GameMode = () => {
  const [score, setScore] = useState({ wins: 0, losses: 0, ties: 0 });
  const [result, setResult] = useState('');
  const [moves, setMoves] = useState('');
  const [isAutoPlaying, setIsAutoPlaying] = useState(false);
  let intervalId;

  useEffect(() => {
    const getStoredScore = async () => {
      const storedScore = localStorage.getItem('score');
      if (storedScore) {
        setScore(JSON.parse(storedScore));
      }
    };

    getStoredScore();
  }, []);

  const storeScore = (newScore) => {
    localStorage.setItem('score', JSON.stringify(newScore));
  };

  const playGame = (playerMove) => {
    const computerMove = pickComputerMove();
    let gameResult = '';

    if (playerMove === 'scissors') {
      gameResult = computerMove === 'rock' ? 'You lose.' : computerMove === 'paper' ? 'You win.' : 'Tie.';
    } else if (playerMove === 'paper') {
      gameResult = computerMove === 'rock' ? 'You win.' : computerMove === 'paper' ? 'Tie.' : 'You lose.';
    } else if (playerMove === 'rock') {
      gameResult = computerMove === 'rock' ? 'Tie.' : computerMove === 'paper' ? 'You lose.' : 'You win.';
    }

    const newScore = {
      ...score,
      wins: gameResult === 'You win.' ? score.wins + 1 : score.wins,
      losses: gameResult === 'You lose.' ? score.losses + 1 : score.losses,
      ties: gameResult === 'Tie.' ? score.ties + 1 : score.ties,
    };

    setScore(newScore);
    storeScore(newScore);
    setResult(gameResult);
    setMoves(`You: ${playerMove} - Computer: ${computerMove}`);
  };

  const pickComputerMove = () => {
    const randomNumber = Math.random();
    if (randomNumber < 1 / 3) {
      return 'rock';
    } else if (randomNumber < 2 / 3) {
      return 'paper';
    } else {
      return 'scissors';
    }
  };

  const autoPlay = () => {
    if (!isAutoPlaying) {
      intervalId = setInterval(() => {
        const playerMove = pickComputerMove();
        playGame(playerMove);
      }, 1000);
      setIsAutoPlaying(true);
    } else {
      clearInterval(intervalId);
      setIsAutoPlaying(false);
    }
  };

  const resetScore = () => {
    const newScore = { wins: 0, losses: 0, ties: 0 };
    setScore(newScore);
    storeScore(newScore);
  };

  return (
    <div className="game-container">
      <h1 className="game-title">Rock-Paper-Scissors Game 🎮</h1>
      <div className="button-container">
        <button onClick={() => playGame('rock')} className="move-button">
          <span className="move-emoji">
            
            <img src={rockEmoji} />
            </span>
        </button>
        <button onClick={() => playGame('paper')} className="move-button">
          <span className="move-emoji">
            <img src={paperEmoji} />
            </span>
        </button>
        <button onClick={() => playGame('scissors')} className="move-button">
          <span className="move-emoji">
            
            <img src={scissorsEmoji}/>
            </span>
        </button>
      </div>
      <p className="result">{result}</p>
      <p className="result">{moves}</p>
      <p className="score">Wins: {score.wins}, Losses: {score.losses}, Ties: {score.ties}</p>
      <button className="reset-button" onClick={resetScore}>Reset Score</button>
    </div>
  );
};

export default GameMode;