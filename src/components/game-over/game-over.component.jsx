import React from "react";
import { withRouter } from "react-router-dom";

import CustomButton from "../custom-button/custom-button.component";

import "./game-over.styles.css";

const GameOver = ({ history, setGameOver, getData }) => {
  return (
    <div className="game-over">
      <div className="game-over-content">
        <h1>Você perdeu, clique para reiniciar</h1>
        <CustomButton
          small
          onClick={() => {
            setGameOver(false);
            getData(history);
          }}
        >
          &#8635;
        </CustomButton>
      </div>
    </div>
  );
};

export default withRouter(GameOver);
