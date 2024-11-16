import React, { useState } from 'react';
import '../PreTest/PreTest.css';

import image16 from '../../assets/probabilidade/probabilidade-1.png';
import image17 from '../../assets/probabilidade/probabilidade-2.png';
import image18 from '../../assets/probabilidade/probabilidade-3.png';
import image19 from '../../assets/probabilidade/probabilidade-4.png';
import image20 from '../../assets/probabilidade/probabilidade-5.png';

const Ex03 = ({ resetPage }) => {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [selectedOption, setSelectedOption] = useState(null);
  const [correctAnswers, setCorrectAnswers] = useState(0);
  const [showOverview, setShowOverview] = useState(false);

  const questions = [
    {
      image: image16,
      text: 'Qual a probabilidade de retirar um Ás do baralho?',
      options: ['4/62', '4/13', '1/56', '1/13'],
      correct: '1/13',
    },
    {
      image: image17,
      text: 'Numa cesta há 5 maçãs e 4 laranjas. Qual a probabilidade de retirar uma maçã da cesta?',
      options: ['4/5', '4/9', '1', '5/9'],
      correct: '5/9',
    },
    {
      image: image18,
      text: '50% dos alunos gostam de Matemática, 30% de Física, 10% de ambas, quantos % não gostam de nenhuma das duas?',
      options: ['5%', '10%', '30%', '20%'],
      correct: '30%',
    },
    {
      image: image19,
      text: 'Numa caixa há 3 bolas vermelhas e 5 azuis, qual a probabilidade de retirar uma azul e logo em seguida retirar uma vermelha?',
      options: ['15/56', '12/25', '5/8', '8/15'],
      correct: '15/56',
    },
    {
      image: image20,
      text: 'A imagem apresenta a fórmula do Teorema de?',
      options: ['Markov', 'Kolmogorov', 'Chebyshev', 'Bayes'],
      correct: 'Bayes',
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

export default Ex03;