import { type God } from './Godlist';
import { usePlayer } from './lib/Store.ts';

import { motion } from 'motion/react';

export default function GodCard({ Gods }: { Gods: God[] }) {
  const playerInfo = usePlayer();

  const { update, incrementScore, addIdToClicked, score } = playerInfo;

  const handleClick = (god: God) => {
    if (playerInfo.isClicked.includes(god.id) === false) {
      incrementScore();
      addIdToClicked(god.id);
    } else {
      update({ ...playerInfo, score: 0, isClicked: [] });
    }
  };

  const GodlistItems = Gods.map((god) => {
    return (
      <div
        onClick={() => handleClick(god)}
        className="standard-card"
        key={god.id}
      >
        <div className="god-img-container">
          <img
            className="god-img"
            src={god.image}
            alt={god.name + ' ' + god.title}
          />
        </div>
        <h3>{god.name}</h3>
        <p>{god.title}</p>
      </div>
    );
  });

  return (
    <motion.div
      key={score}
      className="god-container"
      initial={{ opacity: 0, scale: 0 }}
      animate={{ opacity: 1, scale: 1, rotateY: 360 }}
      transition={{ duration: 0.6 }}
    >
      {GodlistItems}
    </motion.div>
  );
}
