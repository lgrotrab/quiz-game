import React from "react";
import { withRouter, Redirect } from "react-router-dom";

import CustomButton from "../custom-button/custom-button.component";
import "./question.styles.css";

const Question = ({
  question,
  currentQuestionId,
  history,
  questionsLength,
  match,
  setGameOver,
}) => {
  return +match.params.questionId > questionsLength ? (
    <Redirect to="/" />
  ) : (
    <div className="question">
      <span className="question-text">{question.question}</span>
      <div className="question-buttons">
        {question.answers.map((answer) => (
          <CustomButton
            key={answer.id}
            onClick={() => {
              if (+currentQuestionId < questionsLength) {
                answer.correctAnswer
                  ? history.push(`/game/${+currentQuestionId + +1}`)
                  : setGameOver(true);
              } else {
                answer.correctAnswer ? history.push(`/end`) : setGameOver(true);
              }
            }}
          >
            {answer.text}
          </CustomButton>
        ))}
      </div>
    </div>
  );
};

export default withRouter(Question);
