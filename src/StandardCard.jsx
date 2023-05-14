import { useState } from "react";
import Godlist from "./Godlist";
import shuffle from "./Shuffle";

function StandardCard({
  name,
  title,
  img,
  changeScore,
  currentScore,
  currentHighScore,
  changeHighScore,
}) {
  const [wasClicked, setWasClicked] = useState(0);
  function handleClick() {
    if (wasClicked === 0) {
      shuffle(Godlist);
      setWasClicked(1);
      changeScore(currentScore + 1);
      if (currentScore >= currentHighScore) {
        changeHighScore(currentScore);
      }
    } else {
      changeScore(0);
      setWasClicked(0);
    }
  }
  return (
    <>
      <div onClick={handleClick} className="standard-card">
        <div className="god-img-container">
          <img className="god-img" src={img} alt="" />
        </div>
        <p>
          <em>{name}</em>
        </p>
        <p>{title}</p>
        {/* <p>{wasClicked}</p> */}
        {/* <p>{score}</p> */}
      </div>
    </>
  );
}

export default StandardCard;
