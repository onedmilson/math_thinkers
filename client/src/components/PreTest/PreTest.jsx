import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom'; // Importando useNavigate
import './PreTest.css';

// Importando as imagens locais
import image1 from '../../assets/pre-teste/pre-teste-1.png';
import image2 from '../../assets/pre-teste/pre-teste-2.png';
import image3 from '../../assets/pre-teste/pre-teste-3.png';
import image4 from '../../assets/pre-teste/pre-teste-4.png';
import image5 from '../../assets/pre-teste/pre-teste-5.png';

const PreTest = () => {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [selectedOption, setSelectedOption] = useState(null);
  const [correctAnswers, setCorrectAnswers] = useState(0);
  const [showOverview, setShowOverview] = useState(false);
  const navigate = useNavigate(); // Hook de navegação

  const questions = [
    {
      image: image1,
      text: 'A região hachurada na imagem representa que operação entre dois conjuntos. Qual é essa operação?',
      options: ['União', 'Intersecção', 'Diferença', 'Complementar'],
      correct: 'Intersecção',
    },
    {
      image: image2,
      text: 'Qual é o tipo de gráfico representado na imagem?',
      options: ['Barras', 'Pizza', 'Linha', 'Área'],
      correct: 'Barras',
    },
    {
      image: image3,
      text: 'A função representada no gráfico é de qual tipo?',
      options: ['Linear', 'Quadrática', 'Trigonométrica', 'Exponencial'],
      correct: 'Linear',
    },
    {
      image: image4,
      text: 'Na sequência apresentada, qual número está faltando?',
      options: ['20', '12', '18', '16'],
      correct: '16',
    },
    {
      image: image5,
      text: 'Qual é a probabilidade de sair um 3 ao jogar um dado justo?',
      options: ['1/6', '1/3', '1/2', '5/6'],
      correct: '1/6',
    },
  ];

  const currentQuestion = questions[currentQuestionIndex];

  const checkAnswer = (option) => {
    setSelectedOption(option);
    if (option === currentQuestion.correct) {
      setCorrectAnswers(correctAnswers + 1);
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

  return (
    <div className="pretest__container">
      {/* Botão de voltar */}
      <button
        className="pretest__back-button"
        onClick={() => navigate('/')} // Navegar para a página inicial (localhost/)
      >
        Voltar
      </button>

      {showOverview ? (
        <div className="pretest__overview">
          <h2>Parabéns! Você completou a atividade.</h2>
          <p>Você acertou {correctAnswers} de {questions.length} perguntas.</p>
          <button 
            className="pretest__button" 
            onClick={() => navigate('/auth', { state: { signUp: true } })} // Navegando para o Auth em "Sign Up"
          >
            Registre-se e aproveite mais atividades!
          </button>
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

export default PreTest;
