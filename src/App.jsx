import GodCard from './GodCard';
import StandardCard from './StandardCard';
import { useEffect, useState } from 'react';
import Header from './Components/Header/Header';
import FirstVisitModal from './Components/FirstVisitModal/FirstVisitModal';

export function updateSessionInfo({
  playerName,
  score,
  highScore,
  isFirstVisit,
}) {
  const playerInfo = {
    playerName: playerName,
    score: score,
    highScore: highScore,
    isFirstVisit: isFirstVisit,
  };

  for (const [key, value] of Object.entries(playerInfo)) {
    sessionStorage.setItem(key, value);
  }
}
export default function App() {
  const [score, setScore] = useState(0);
  const [highScore, setHighScore] = useState(0);
  console.log(sessionStorage);
  const [sessionInfo, setSessionInfo] = useState({
    playerName: sessionStorage.getItem('playerName') || 'Player',
    score: sessionStorage.getItem('playerName'),
    highScore: sessionStorage.getItem('highScore'),
    isFirstVisit: !sessionStorage.getItem('isFirstVisit'),
  });

  useEffect(() => {
    const prevHighScore = sessionStorage.getItem('highScore');
    if (highScore > prevHighScore) {
      sessionStorage.setItem('highScore', highScore);
    }
  }, [highScore]);

  return (
    <>
      <FirstVisitModal
        sessionInfo={sessionInfo}
        setSessionInfo={setSessionInfo}
      />

      <Header
        changeScore={setScore}
        currentScore={score}
        currentHighScore={highScore}
        changeHighScore={setHighScore}
        sessionInfo={sessionInfo}
      />

      <GodCard
        changeScore={setScore}
        currentScore={score}
        currentHighScore={highScore}
        changeHighScore={setHighScore}
      />
    </>
  );
}
