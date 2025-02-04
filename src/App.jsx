import GodCard from './GodCard';
import StandardCard from './StandardCard';
import { useEffect, useState } from 'react';
import Header from './Header';
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
  useEffect(() => {
    if (sessionStorage.getItem('isFirstVisit') === 'false') {
      sessionStorage.setItem('isFirstVisit', 0);
    }
  }, []);
  const [score, setScore] = useState(0);
  const [highScore, setHighScore] = useState(0);

  const [sessionInfo, setSessionInfo] = useState({
    playerName: sessionStorage.getItem('playerName'),
    score: sessionStorage.getItem('playerName'),
    highScore: sessionStorage.getItem('highScore'),
    isFirstVisit: !sessionStorage.getItem('isFirstVisit'),
  });

  useEffect(() => {
    updateSessionInfo(sessionInfo);
    console.log(sessionStorage);
  }, [sessionInfo]);

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
