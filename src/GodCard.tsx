import { type God } from './Godlist';
import { usePlayer } from './lib/Store.ts';

import { AnimatePresence, motion } from 'motion/react';

export default function GodCard({ Gods }: { Gods: God[] }) {
  const playerInfo = usePlayer();

  const handleClick = (god: God) => {
    if (playerInfo.isClicked.includes(god.id) === false) {
      playerInfo.incrementScore();
      playerInfo.addIdToClicked(god.id);
    } else {
      playerInfo.update({ ...playerInfo, score: 0, isClicked: [] });
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
    <AnimatePresence>
      <motion.div
        key={playerInfo.score}
        className="god-container"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
      >
        {GodlistItems}
      </motion.div>
    </AnimatePresence>
  );
}
