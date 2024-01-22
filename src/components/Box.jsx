import React, { useState } from "react";

const Box = ({ question, variantsClick, questions, step }) => {
  const prosent = Math.round((step / questions.length) * 100);
  return (
    <div className="box">
      <div className="container">
        <div className="box">
          <div className="box-nav">
          <div className="shkala-nav">
          <div className="shkala" style={{ width: `${prosent}%` }}></div>
          </div>
            <h2>{question.title}</h2>
            <ul>
              {question.variants.map((text, index) => (
                <li onClick={() => variantsClick(index)} key={index}>
                  {text}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Box;
