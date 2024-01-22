import React from "react";
import images from "../image/2278992.png";

const Result = ({ questions, correct }) => {
  return (
    <div className="result">
      <div className="container">
        <div className="result">
          <div className="result-nav">
            <img src={images} alt="" />
            <h2>
              Вы ответили на {correct} вопроса из {questions.length}
            </h2>
            <a href="/">
              <button>Сначала</button>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Result;
