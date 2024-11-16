import React, { useState } from 'react';
import '../PreTest/PreTest.css';

import image21 from '../../assets/estatistica/estatistica-1.png';
import image22 from '../../assets/estatistica/estatistica-2.png';
import image23 from '../../assets/estatistica/estatistica-3.png';
import image24 from '../../assets/estatistica/estatistica-4.png';
import image25 from '../../assets/estatistica/estatistica-5.png';

const Ex04 = ({ resetPage }) => {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [selectedOption, setSelectedOption] = useState(null);
  const [correctAnswers, setCorrectAnswers] = useState(0);
  const [showOverview, setShowOverview] = useState(false);

  const questions = [
    {
      image: image21,
      text: 'Qual a moda dos números da imagem?',
      options: ['10', '9', '8', '7'],
      correct: '8',
    },
    {
      image: image22,
      text: 'De acordo com o gráfico, o ano com o maior faturamento foi?',
      options: ['2022', '2018', '2023', '2019'],
      correct: '2022',
    },
    {
      image: image23,
      text: 'Qual a mediana?',
      options: ['5', '6', '8', '9'],
      correct: '5',
    },
    {
      image: image24,
      text: 'De acordo com a distribuição normal destacada na imagem, a média é?',
      options: ['85', '115', '100', '145'],
      correct: '100',
    },
    {
      image: image25,
      text: 'Qual a média aritmética?',
      options: ['3', '2', '5', '10'],
      correct: '5',
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

export default Ex04;