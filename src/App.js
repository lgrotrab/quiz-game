import { useState } from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import "./App.css";

import GamePage from "./pages/game-page/game-page.component";
import HomePage from "./pages/homepage/homepage.component";
import EndPage from "./pages/end-page/end-page.component";

function App() {
  const array = [
    {
      id: 1,
      question:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum at egestas velit. Integer dictum commodo odio, consectetur vulputate orci blandit vel. Sed vitae eros vitae lectus interdum feugiat.",
      answers: [
        {
          id: 1,
          text:
            "Nullam auctor ornare consectetur. Etiam vitae dapibus ante. Pellentesque tincidunt felis leo, ac facilisis enim laoreet nec.",
          correctAnswer: true,
        },
        {
          id: 2,
          text:
            "Nullam auctor ornare consectetur. Etiam vitae dapibus ante. Pellentesque tincidunt felis leo, ac facilisis enim laoreet nec.",
          correctAnswer: false,
        },
        {
          id: 3,
          text:
            "Nullam auctor ornare consectetur. Etiam vitae dapibus ante. Pellentesque tincidunt felis leo, ac facilisis enim laoreet nec.",
          correctAnswer: false,
        },
      ],
    },

    {
      id: 2,
      question: "pergunta 2",
      answers: [
        {
          id: 1,
          text: "resposta1",
          correctAnswer: false,
        },
        {
          id: 2,
          text: "resposta2",
          correctAnswer: true,
        },
      ],
    },

    {
      id: 3,
      question: "pergunta 3",
      answers: [
        {
          id: 1,
          text: "resposta1",
          correctAnswer: false,
        },
        {
          id: 2,
          text: "resposta2",
          correctAnswer: false,
        },
        {
          id: 3,
          text: "resposta3",
          correctAnswer: false,
        },
        {
          id: 4,
          text: "resposta4",
          correctAnswer: true,
        },
      ],
    },
  ];
  const [questions] = useState(array.sort(() => Math.random() - 0.5));
  return (
    <div className="app">
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route
          exact
          path="/game/:questionId"
          render={(props) => <GamePage questions={questions} {...props} />}
        />
        <Route exact path="/end" component={EndPage} />
        <Route render={() => <Redirect to={{ pathname: "/" }} />} />
      </Switch>
    </div>
  );
}

export default App;
