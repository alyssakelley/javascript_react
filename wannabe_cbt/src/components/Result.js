import React from "react";

const Result = ({output, score, playAgain}) => (
  <div className="score-board">
  <div className="score">{output}</div>
    <button className="playBtn" onClick={playAgain}>
      Attempt question again!
    </button>
  </div>
);

export default Result;
