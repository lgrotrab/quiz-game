import React from "react";
import { withRouter } from "react-router-dom";

import CustomButton from "../../components/custom-button/custom-button.component";

import "./homepage.styles.css";

const HomePage = ({ history }) => {
  return (
    <div className="homepage">
      <h1>Bem vindo ao Quiz Game</h1>
      <CustomButton onClick={() => history.push("/game/1")}>
        Começar o jogo
      </CustomButton>
    </div>
  );
};

export default withRouter(HomePage);
