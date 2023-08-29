import React from 'react';
import Option from './Option';
import './Question.css'

function Question({ question, showAnswer,correctAnswer,wrongAnswers,currentQuestionIndex,wrongOption, handleOptionClick }) {
  const { question: questionText, options } = question;
  console.log(wrongAnswers)
  return (
    <div className="question">
      <h3>{questionText}</h3>
      <div className="options">
        {options.map((option, index) => (
          <Option
            key={index}
            option={option}
            showAnswer={showAnswer}
            correctAnswer = {correctAnswer}
            wrongAnswers = {wrongAnswers}
            currentQuestionIndex = {currentQuestionIndex}
            wrongOption = {wrongOption}
            handleClick={() => handleOptionClick(option)}
          />
        ))}
      </div>
    </div>
  );
}

export default Question;
