import { useState } from "react";
import "./App.css";
// import Result from "./components/Result";
import Box from "./components/Box";
import Result from "./components/Result";
const questions = [
  {
    title: "React - это ... ?",
    variants: ["библиотека", "фреймворк", "приложение"],
    correct: 0,
  },
  {
    title: "Компонент - это ... ",
    variants: [
      "приложение",
      "часть приложения или страницы",
      "то, что я не знаю что такое",
    ],
    correct: 1,
  },
  {
    title: "Что такое JSX?",
    variants: [
      "Это простой HTML",
      "Это функция",
      "Это тот же HTML, но с возможностью выполнять JS-код",
    ],
    correct: 2,
  },
];
function App() {
  const [step, setStep] = useState(0);
  let question = questions[step];

  const [corrects, setCorects] = useState(0);

  function variantsClick(index) {
    setStep(step + 1);

    if (index === question.correct){
      setCorects(corrects + 1)
    }
  }
  return (
    <div className="App">
      {
        step !== questions.length? <Box step={step} questions={questions} question={question} variantsClick={variantsClick} /> : <Result correct={corrects} questions={questions}/>
      }
    </div>
  );
}

export default App;
