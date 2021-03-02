import { useState } from "react";

import Question from "../../components/question/question.component";
import GameOver from "../../components/game-over/game-over.component";

const GamePage = ({ questions, match }) => {
  const [gameOver, setGameOver] = useState(false);
  return (
    <div className="game-page">
      {gameOver ? <GameOver setGameOver={setGameOver} /> : ""}
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
