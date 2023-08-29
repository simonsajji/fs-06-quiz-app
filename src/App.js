import React, { useState, useEffect } from 'react';
import './App.css';
import Question from './Question';

const questionsData = [
  {
    question: 'What is the capital of France?',
    options: ['Paris', 'London', 'Berlin', 'Madrid'],
    correctAnswer: 'Paris'
  },
  {
    question: 'The International Literacy Day is observed on?',
    options: ['Sep 8', 'Nov 28', 'Jan 28', 'Sep 22'],
    correctAnswer: 'Sep 8'
  },
  {
    question: 'Which of the following is not a dance from Kerala?',
    options: ['Kathakali', 'Mohiniattam', 'Ottan Thullal', 'Yaksha Gana'],
    correctAnswer: 'Yaksha Gana'
  },
];

function App() {
  const [questions, setQuestions] = useState([]);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [score, setScore] = useState(0);
  const [showAnswer, setShowAnswer] = useState(false);
  const [wrongAnswers, setWrongAnswers] = useState([]);
  const [wrongOption,setWrongOption] = useState(' ');

  useEffect(() => {
    setQuestions([...questionsData]);
  }, []);

  const scrambleQuestions = () => {
    setQuestions([...questions].sort(() => Math.random() - 0.5));
  };

  const handleOptionClick = (selectedOption) => {
    if (!showAnswer) {
      const correctAnswer = questions[currentQuestionIndex].correctAnswer;
      if (selectedOption === correctAnswer) {
        setScore(score + 1);
      } else {
        setWrongAnswers([...wrongAnswers, questions[currentQuestionIndex]]);
        console.log(wrongAnswers);
        setWrongOption(selectedOption);
      }
      setShowAnswer(true);
      setTimeout(() => {
        
        // const correctAnswer = questions[currentQuestionIndex].correctAnswer;
        // if (selectedOption === correctAnswer) {
        //   setScore(score + 1);
        // } else {
        //   setWrongAnswers([...wrongAnswers, questions[currentQuestionIndex]]);
        //   console.log(wrongAnswers)
        // }
        setShowAnswer(false);
        if (currentQuestionIndex <= questions.length - 1) {
          setCurrentQuestionIndex(currentQuestionIndex + 1);
        }
      }, 1500);
    }
  };

  const resetGame = () => {
    setScore(0);
    setWrongAnswers([]);
    setCurrentQuestionIndex(0);
    scrambleQuestions();
  };

  return (
    <div className="App">
      {currentQuestionIndex < questions.length ? (
        <>
        <p className='question-num f-sans'>Question {currentQuestionIndex + 1} of {questions.length}</p>
        <p className='t-a-right score'>Score : {score}</p>
         <Question
          question={questions[currentQuestionIndex]} 
          showAnswer={showAnswer} correctAnswer = {questions[currentQuestionIndex].correctAnswer}
          wrongAnswers = {wrongAnswers}
          currentQuestionIndex = {currentQuestionIndex}
          wrongOption = {wrongOption}
          handleOptionClick={handleOptionClick}
        />
        </>
      ) : (
        <div>
          <h2 className='question-num f-sans'>Quiz Finished!</h2>
          <p className='t-a-right score'>Total Score : {score}</p>
          <button onClick={resetGame} className='reset-btn f-poppins'>Reset Game</button>
          {wrongAnswers?.length===0 ? <p>You won the Quiz</p> : (<div>
            <h3 className=''>Wrong Answers ({wrongAnswers?.length})</h3>
            <ul>
              {wrongAnswers.map((wrongAnswer, index) => (
                <li key={index}>
                  <strong>Q: {wrongAnswer.question}</strong>
                  <br />
                  <p className='c-answer'>Correct Answer: {wrongAnswer.correctAnswer}</p>
                </li>
              ))}
            </ul>
          </div>)}
        </div>
      )}
    </div>
  );
}

export default App;
