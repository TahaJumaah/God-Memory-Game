import { useState } from 'react';
import { updateSession } from '../../lib/Functions';
import { usePlayer } from '../../lib/Store';
import styles from './modal.module.css';

export default function FirstVisitModal() {
  const playerInfo = usePlayer();

  const [isModalShown, setIsModalShown] = useState(playerInfo.isFirstVisit);

  function handleGameStart(event: SubmitEvent) {
    event.preventDefault();

    playerInfo.update({
      ...playerInfo,
      isFirstVisit: false,
    });

    updateSession({
      playerName: playerInfo.playerName,
      highScore: 0,
      isFirstVisit: false,
    });

    setIsModalShown(false);
  }

  return (
    <div className={isModalShown ? styles.modal_overlay : styles.modal_hidden}>
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
            placeholder="Enter your name or alias"
            maxLength={15}
            value={playerInfo.playerName}
            onChange={(e) =>
              playerInfo.update({ ...playerInfo, playerName: e.target.value })
            }
          />
          <button type="submit" className={styles.play_button}>
            Start Playing
          </button>
        </form>
      </div>
    </div>
  );
}
