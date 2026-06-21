import { motion } from 'motion/react';
import { usePlayer } from '../../lib/Store';
import styles from './Header.module.css';

export default function Header() {
  const playerInfo = usePlayer();

  const { playerName, score, highScore } = playerInfo;

  return (
    <div className={styles.header}>
      <div>
        Your Score <br />
        <motion.p
          key={score}
          animate={{
            scale: [0, 3, 1],
            translateX: ['30px', '-30px', '0px'],
            color: ['green', 'red', 'black'],
            transition: { duration: 1 },
          }}
        >
          {score}
        </motion.p>
      </div>
      <p className={styles.player_name}>{playerName}</p>
      <div className={styles.high_score}>
        High Score <br />
        <motion.p
          key={highScore}
          animate={{
            scale: [0, 3, 1],
            translateX: ['-30px', '30px', '0px'],
            color: ['green', 'red', 'black'],
            transition: { duration: 1 },
          }}
        >
          {highScore}
        </motion.p>
      </div>
    </div>
  );
}
