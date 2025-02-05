import { useState } from 'react';
import styles from './modal.module.css';
import { updateSessionInfo } from '../../App';

export default function firstVisitModal({ sessionInfo, setSessionInfo }) {
  const [isModalShown, setIsModalShown] = useState(sessionInfo.isFirstVisit);
  const [playerName, setPlayerName] = useState(null);

  function handleGameStart(event) {
    event.preventDefault();
    setSessionInfo({
      ...sessionInfo,
      isFirstVisit: false,
      playerName: playerName,
    });
    sessionStorage.setItem('isFirstVisit', 0);
    sessionStorage.setItem('playerName', playerName);
    setIsModalShown(false);
  }
  return (
    <div className={isModalShown ? styles.modal_overlay : styles.modal_hidden}>
      <div className={isModalShown ? styles.modal_container : null}>
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
            name="text"
            placeholder="Enter your name or alias"
            onChange={(event) => {
              setPlayerName(event.target.value || 'Player');
            }}
          />
          <button type="submit" className={styles.play_button}>
            Start Playing
          </button>
        </form>
      </div>
    </div>
  );
}
