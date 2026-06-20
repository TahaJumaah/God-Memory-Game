import { usePlayer } from '../../lib/Store';
import styles from './Header.module.css';

export default function Header() {
  const playerInfo = usePlayer();

  return (
    <div className={styles.header}>
      <p className="score">
        Your Score <br />
        {playerInfo.score}
      </p>
      <p className={styles.player_name}>{playerInfo.playerName}</p>
      <p className={styles.high_score}>
        High Score <br /> {playerInfo.highScore}
      </p>
    </div>
  );
}
