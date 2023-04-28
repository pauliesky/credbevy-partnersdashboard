<<<<<<< HEAD
import React from "react";
import "./CreditScore.css";

const CreditScore = () => {
  return (
    <div className="p">
      <div className="arc1"></div>
    </div>
  );
};
=======
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
>>>>>>> 5c137b02d7dd00e0bf4264860ed9d193763ed965

export default CreditScore;
