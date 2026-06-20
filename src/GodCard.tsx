import Godlist, { type God } from './Godlist';
import { shuffleArray } from './lib/Functions.ts';
import { usePlayer } from './lib/Store.ts';

export default function GodCard() {
  const playerInfo = usePlayer();

  const handleClick = (god: God) => {
    if (playerInfo.isClicked.includes(god.id) === false) {
      playerInfo.incrementScore();
      playerInfo.addIdToClicked(god.id);
    } else {
      playerInfo.update({ ...playerInfo, score: 0, isClicked: [] });
    }
  };

  const Gods = shuffleArray(Godlist);

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

  return <div className="god-container">{GodlistItems}</div>;
}
