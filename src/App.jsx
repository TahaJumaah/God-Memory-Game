import GodCard from './GodCard';
import StandardCard from './StandardCard';
import { useState } from 'react';
import Header from './Header';
import FirstVisitModal from './Components/FirstVisitModal/FirstVisitModal';

export default function App() {
  const [score, setScore] = useState(0);
  const [highScore, setHighScore] = useState(0);

  const [sessionInfo, setSessionInfo] = useState({
    playerName: '',
    score: 0,
    highScore: 0,
    isFirstVisit: true,
  });

  return (
    <>
      {sessionInfo.isFirstVisit && (
        <FirstVisitModal isFirstVisit={sessionInfo.isFirstVisit} />
      )}

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
