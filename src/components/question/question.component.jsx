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
  //verifica se há algo no array de perguntas e impede a pessoa de navegar entre as questões.
  return +match.params.questionId > questionsLength ? (
    <Redirect to="/" />
  ) : (
    <div className="question">
      <span className="question-text">{question.question}</span>
      <div className="question-buttons">
        {question.answers
          .sort(() => Math.random() - 0.5)
          .map((answer, key) => (
            <CustomButton
              key={key}
              onClick={() => {
                //verifica se estamos na ultima questão e aloca dinamicamente as rotas nos botões
                if (+currentQuestionId < questionsLength) {
                  answer === question.correctAnswer
                    ? history.push(`/game/${+currentQuestionId + +1}`)
                    : setGameOver(true);
                } else {
                  answer === question.correctAnswer
                    ? history.push(`/end`)
                    : setGameOver(true);
                }
              }}
            >
              {answer}
            </CustomButton>
          ))}
      </div>
    </div>
  );
};

export default withRouter(Question);
