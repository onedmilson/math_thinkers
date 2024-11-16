import React, { useState } from 'react';
import '../PreTest/PreTest.css';

import image6 from '../../assets/conjuntos/conjuntos-1.png';
import image7 from '../../assets/conjuntos/conjuntos-2.png';
import image8 from '../../assets/conjuntos/conjuntos-3.png';
import image9 from '../../assets/conjuntos/conjuntos-4.png';
import image10 from '../../assets/conjuntos/conjuntos-5.png';

const Ex01 = ({ resetPage }) => {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [selectedOption, setSelectedOption] = useState(null);
  const [correctAnswers, setCorrectAnswers] = useState(0);
  const [showOverview, setShowOverview] = useState(false);

  const questions = [
    {
      image: image6,
      text: 'Mais uma questão de hachura de conjuntos só que agora é a diferença de dois conjuntos. Qual a alternativa correta?',
      options: ['A - B', 'B - A', 'A 	U B', 'A ∩ B'],
      correct: 'A - B',
    },
    {
      image: image7,
      text: '(A U B) - C é representado por qual conjunto?',
      options: ['{1, 2}', '{4, 5, 6}', '{1, 2, 3, 4, 5}', '{1, 2, 3}'],
      correct: '{1, 2, 3}',
    },
    {
      image: image8,
      text: 'Qual conjunto representa {x | x é divisor de 6}?',
      options: ['{1, 2}', '{1, 2, 3}', '{1, 2, 3, 6}', '{1, 2, 3, 4}'],
      correct: '{1, 2, 3, 6}',
    },
    {
      image: image9,
      text: 'A imagem apresenta dois conjuntos com uma região comum, a intersecção. Como são chamados os conjuntos sem elementos comuns?',
      options: ['Infinitos', 'Complementares', 'Vazios', 'Disjuntos'],
      correct: 'Disjuntos',
    },
    {
      image: image10,
      text: 'A imagem representa que relação entre os três conjuntos?',
      options: ['A U B U C', 'A U B ∩ C', '(A U B) ∩ C', 'A ∩ B U C'],
      correct: 'A U B U C',
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

export default Ex01;
