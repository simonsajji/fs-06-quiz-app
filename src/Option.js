import React from 'react';
import './Option.css'
function Option({ option, showAnswer,correctAnswer,wrongAnswers,currentQuestionIndex,wrongOption, handleClick }) {
  return (
    <div
      className={`option ${showAnswer && option === correctAnswer ? 'correct' : ''}  ${  wrongOption === option ? 'incorrect': ''}`}
      onClick={handleClick}
    >
      {option}
    </div>
  );
}

export default Option;
