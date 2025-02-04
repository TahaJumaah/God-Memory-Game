import { useState } from 'react';
import styles from './firstvisitmodal.module.css';

export default function firstVisitModal({ sessionInfo, setSessionInfo }) {
  const [isModalShown, setIsModalShown] = useState(sessionInfo.isFirstVisit);
  const [playerName, setPlayerName] = useState(null);

  function handleGameStart(event) {
    event.preventDefault();
    console.log(event.target[0].value);
    setSessionInfo({ ...sessionInfo, isFirstVisit: 0, playerName: playerName });
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
              setPlayerName(event.target.value);
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
