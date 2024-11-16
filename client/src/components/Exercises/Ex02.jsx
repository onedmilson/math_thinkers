import React, { useState } from 'react';
import '../PreTest/PreTest.css';

import image11 from '../../assets/sequencias/sequencias-1.png';
import image12 from '../../assets/sequencias/sequencias-2.png';
import image13 from '../../assets/sequencias/sequencias-3.png';
import image14 from '../../assets/sequencias/sequencias-4.png';
import image15 from '../../assets/sequencias/sequencias-5.png';


const Ex02 = ({ resetPage }) => {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [selectedOption, setSelectedOption] = useState(null);
  const [correctAnswers, setCorrectAnswers] = useState(0);
  const [showOverview, setShowOverview] = useState(false);

  const questions = [
    {
      image: image11,
      text: 'A próxima figura tem quantos lados?',
      options: ['8', '9', '7', '6'],
      correct: '6',
    },
    {
      image: image12,
      text: 'x e y são respectivamente?',
      options: ['8 e 20', '8 e 21', '9 e 21', '9 e 22'],
      correct: '9 e 21',
    },
    {
      image: image13,
      text: 'O número que falta na sequência é?',
      options: ['125', '65', '185', '95'],
      correct: '125',
    },
    {
      image: image14,
      text: 'De acordo com as informações da imagem (oi + eu) é igual a?',
      options: ['22', '37', '18', '20'],
      correct: '22',
    },
    {
      image: image15,
      text: '"z" na sequência é igual a?',
      options: ['-37', '-32', '-30', '-35'],
      correct: '-35',
    },
  ];
  

  const currentQuestion = questions[currentQuestionIndex];

  const checkAnswer = (option) => {
    setSelectedOption(option);
    if (option === currentQuestion.correct) {
      // Atualizando corretamente o estado de "correctAnswers"
      setCorrectAnswers(prevCorrectAnswers => prevCorrectAnswers + 1);
    }
  };

  const nextQuestion = () => {
    if (currentQuestionIndex < questions.length - 1) {
      setCurrentQuestionIndex(currentQuestionIndex + 1);
      setSelectedOption(null);
    } else {
      setShowOverview(true);
    }
  };

  const prevQuestion = () => {
    if (currentQuestionIndex > 0) {
      setCurrentQuestionIndex(currentQuestionIndex - 1);
      setSelectedOption(null);
    }
  };

  let feedbackMessage;
  if (correctAnswers <= 2) {
    feedbackMessage = <h2>Precisa melhorar! Você acertou {correctAnswers} de {questions.length} perguntas.</h2>;
  } else if (correctAnswers <= 4) {
    feedbackMessage = <h2>Ok, você acertou {correctAnswers} de {questions.length} perguntas.</h2>;
  } else {
    feedbackMessage = <h2>Parabéns! Você acertou {correctAnswers} de {questions.length} perguntas!</h2>;
  }

  return (
    <div className="pretest__container">
      {showOverview ? (
        <div className="pretest__overview">
          {feedbackMessage}
          <button className="pretest__button" onClick={resetPage}>Voltar para a página inicial</button>
        </div>
      ) : (
        <>
          <img src={currentQuestion.image} alt="Quiz" className="pretest__image" />
          <h2 className="pretest__question">{currentQuestion.text}</h2>
          <div className="pretest__options">
            {currentQuestion.options.map((option, index) => (
              <button
                key={index}
                className={`pretest__option ${selectedOption === option ? (option === currentQuestion.correct ? 'correct' : 'wrong') : ''}`}
                onClick={() => checkAnswer(option)}
                disabled={selectedOption !== null}
              >
                {option}
              </button>
            ))}
          </div>
          <div className="pretest__navigation">
            <button className="pretest__nav-button" onClick={prevQuestion} disabled={currentQuestionIndex === 0}>
              Anterior
            </button>
            <button className="pretest__nav-button" onClick={nextQuestion} disabled={selectedOption === null}>
              Próxima
            </button>
          </div>
        </>
      )}
    </div>
  );
};

export default Ex02;