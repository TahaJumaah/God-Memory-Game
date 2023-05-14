import GodCard from "./GodCard";
import StandardCard from "./StandardCard";
import { useState } from "react";
import Header from "./Header";

export default function App() {
  const [score, setScore] = useState(0);
  const [highScore, setHighScore] = useState(0);
  return (
    <>
      <Header
        changeScore={setScore}
        currentScore={score}
        currentHighScore={highScore}
        changeHighScore={setHighScore}
      ></Header>
      <GodCard
        changeScore={setScore}
        currentScore={score}
        currentHighScore={highScore}
        changeHighScore={setHighScore}
      ></GodCard>
    </>
  );
}
