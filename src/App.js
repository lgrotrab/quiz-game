import { useState } from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import "./App.css";

import GamePage from "./pages/game-page/game-page.component";
import HomePage from "./pages/homepage/homepage.component";
import EndPage from "./pages/end-page/end-page.component";

function App() {
  const [questions, setQuestions] = useState([]);
  const getData = async (history) => {
    try {
      const data = await fetch("http://localhost:8080/questions");
      const questions = await data.json();
      await setQuestions(questions);
      await history.push("/game/1");
    } catch (err) {
      console.log(err);
    }
  };
  return (
    <div className="app">
      <Switch>
        <Route
          exact
          path="/"
          render={(props) => <HomePage getData={getData} {...props} />}
        />
        <Route
          exact
          path="/game/:questionId"
          render={(props) => (
            <GamePage questions={questions} getData={getData} {...props} />
          )}
        />
        <Route exact path="/end" component={EndPage} />
        <Route render={() => <Redirect to={{ pathname: "/" }} />} />
      </Switch>
    </div>
  );
}

export default App;
