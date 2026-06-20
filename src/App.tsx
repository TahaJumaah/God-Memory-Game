import { useEffect } from 'react';
import FirstVisitModal from './Components/FirstVisitModal/FirstVisitModal';
import Header from './Components/Header/Header';
import GodCard from './GodCard';
import { getSession, updateSession } from './lib/Functions';
import { usePlayer } from './lib/Store';

export default function App() {
  const playerInfo = usePlayer();

  useEffect(() => {
    if (playerInfo.score > playerInfo.highScore) {
      playerInfo.update({ ...playerInfo, highScore: playerInfo.score });
      updateSession({ ...getSession(), highScore: playerInfo.highScore + 1 });
    }
  }, [playerInfo.score]);

  return (
    <>
      <FirstVisitModal />

      <Header />

      <GodCard />
    </>
  );
}
