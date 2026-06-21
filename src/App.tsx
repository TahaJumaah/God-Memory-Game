import { useEffect, useState } from 'react';
import FirstVisitModal from './Components/FirstVisitModal/FirstVisitModal';
import Header from './Components/Header/Header';
import GodCard from './GodCard';
import Godlist from './Godlist';
import { getSession, shuffleArray, updateSession } from './lib/Functions';
import { usePlayer } from './lib/Store';

export default function App() {
  const [gods, setGods] = useState(Godlist);

  const playerInfo = usePlayer();
  const { score, highScore, update } = playerInfo;

  useEffect(() => {
    if (score > highScore) {
      update({ ...playerInfo, highScore: score });
      updateSession({ ...getSession(), highScore: highScore + 1 });
    }

    setGods(shuffleArray(gods));
  }, [score]);

  return (
    <>
      <FirstVisitModal />

      <Header />

      <GodCard Gods={gods} />
    </>
  );
}
