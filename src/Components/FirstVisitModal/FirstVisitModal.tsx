import { motion } from 'motion/react';
import { useRef, useState } from 'react';
import { updateSession } from '../../lib/Functions';
import { usePlayer } from '../../lib/Store';
import styles from './modal.module.css';

export default function FirstVisitModal() {
  const playerName = useRef<HTMLInputElement | null>(null);
  const playerInfo = usePlayer();

  const [isModalShown, setIsModalShown] = useState(playerInfo.isFirstVisit);

  function handleGameStart(event) {
    event.preventDefault();

    const name = playerName.current?.value || 'Player';

    playerInfo.update({
      ...playerInfo,
      playerName: name,
      isFirstVisit: false,
    });

    updateSession({
      playerName: name,
      highScore: 0,
      isFirstVisit: false,
    });

    setIsModalShown(false);
  }

  return (
    <motion.div
      initial={{
        opacity: 0,
      }}
      animate={{
        opacity: 1,
        translateY: '10%',
      }}
      className={isModalShown ? styles.modal_overlay : styles.modal_hidden}
    >
      <div className={isModalShown ? styles.modal_container : undefined}>
        <div className={styles.game_info}>
          <h2>How to play</h2>
          <ul>
            <li>Click on a God image</li>
            <li>Your score will increase by one</li>
            <li>The Gods will shuffle their position</li>
            <li>Your goal is to not click on the same God more than once</li>
          </ul>
        </div>
        <form onSubmit={handleGameStart}>
          <input
            type="text"
            name="playerName"
            id="playerName"
            ref={playerName}
            placeholder="Enter your name or alias"
            maxLength={15}
          />
          <button type="submit" className={styles.play_button}>
            Start Playing
          </button>
        </form>
      </div>
    </motion.div>
  );
}
