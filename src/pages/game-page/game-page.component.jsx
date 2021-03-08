import { useState } from "react";

import Question from "../../components/question/question.component";
import GameOver from "../../components/game-over/game-over.component";

const GamePage = ({ questions, match, getData }) => {
  const [gameOver, setGameOver] = useState(false);
  return (
    <div className="game-page">
      {gameOver ? <GameOver setGameOver={setGameOver} getData={getData} /> : ""}
      <Question
        question={questions[match.params.questionId - 1]}
        currentQuestionId={match.params.questionId}
        questionsLength={questions.length}
        setGameOver={setGameOver}
      />
    </div>
  );
};

export default GamePage;
