import React from "react";
import { withRouter } from "react-router-dom";

import CustomButton from "../../components/custom-button/custom-button.component";

import "./homepage.styles.css";

const HomePage = ({ history, getData }) => {
  return (
    <div className="homepage">
      <h1>Bem vindo ao Quiz Game</h1>
      <h1>Regras:</h1>
      <h2>-Clique na resposta Correta para avançar</h2>
      <h2>
        -Em caso de um erro você terá que começar tudo de novo, então atenção
      </h2>
      <h1>Boa Sorte !!!</h1>
      <CustomButton onClick={() => getData(history)} small>
        Começar o jogo
      </CustomButton>
    </div>
  );
};

export default withRouter(HomePage);
