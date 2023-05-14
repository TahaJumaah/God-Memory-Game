import { useState } from "react";

export default function Header({
  changeScore,
  currentScore,
  currentHighScore,
  changeHighScore,
}) {
  return (
    <div className="header">
      <p className="score">Your Score :{currentScore}</p>
      <p className="high-score">High Score : {currentHighScore} </p>
    </div>
  );
}
