import React from "react";
import { withRouter } from "react-router-dom";

import CustomButton from "../../components/custom-button/custom-button.component";

import "./end-page.component.css";

const EndPage = ({ history }) => {
  return (
    <div className="end-page">
      <h1>Parabéns você terminou o jogo, clique abaixo para jogar novamente</h1>
      <CustomButton onClick={() => history.push("/game/1")} small>
        &#8635;
      </CustomButton>
    </div>
  );
};

export default withRouter(EndPage);
