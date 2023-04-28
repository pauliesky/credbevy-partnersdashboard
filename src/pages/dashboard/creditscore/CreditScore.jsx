import React, { useState } from "react";
import "./CreditScore.css";

function CreditScore() {
  const [score, setScore] = useState(750);

  const handleScoreChange = (event) => {
    setScore(event.target.value);
  };

  return (
    <div>
      <input
        type="range"
        min="0"
        max="100"
        value={score}
        onChange={handleScoreChange}
        className=""
      />
      <h2>Credit Score: {score}</h2>
    </div>
  );
}

export default CreditScore;
