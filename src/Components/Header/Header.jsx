import styles from './Header.module.css';

export default function Header({
  currentScore,
  currentHighScore,
  sessionInfo,
}) {
  const { playerName } = sessionInfo;
  return (
    <div className={styles.header}>
      <p className="score">
        Your Score <br />
        {currentScore}
      </p>
      <p className={styles.player_name}>{playerName}</p>
      <p className={styles.high_score}>
        High Score <br /> {currentHighScore}
      </p>
    </div>
  );
}
