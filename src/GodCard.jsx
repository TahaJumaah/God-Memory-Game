import Godlist from "./Godlist";
import { useState } from "react";
import StandardCard from "./StandardCard";
import shuffle from "./Shuffle";

export default function GodCard({
  changeScore,
  currentScore,
  currentHighScore,
  changeHighScore,
}) {
  const GodlistItems = Godlist.map((God) => {
    return (
      <StandardCard
        img={God.image}
        name={God.name}
        title={God.title}
        key={God.id}
        changeScore={changeScore}
        currentScore={currentScore}
        currentHighScore={currentHighScore}
        changeHighScore={changeHighScore}
      ></StandardCard>
    );
  });

  return <div className="god-container">{GodlistItems}</div>;
}
