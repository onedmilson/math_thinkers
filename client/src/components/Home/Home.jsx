import React from 'react';
import { Typewriter } from 'react-simple-typewriter'; // Ajuste na importação
import './Home.css';
import Navbar from '../Navbar/Navbar'

const Home = () => {
  return (
    <div className="home__container">
      <Navbar />
      <div className="home__content">
        <h1 className="home__title">Bem-vindo ao Math Thinkers!</h1>
        <h2 className="home__subtitle">
          <Typewriter
            words={[
              'Desafie-se com nossos testes matemáticos.',
              'Aprimore suas habilidades lógicas.',
              'Desenvolva sua interpretação matemática com atividades e desafios!',
            ]}
            loop={true}
            cursor
            cursorStyle="_"
            typeSpeed={70}
            deleteSpeed={50}
            delaySpeed={1000}
          />
        </h2>
        <p className="home__description">
          Prepare-se para um ambiente cheio de desafios matemáticos que estimulam o raciocínio lógico e desenvolvem suas habilidades.
        </p>
        <button className="home__button">Comece Agora</button>
      </div>
    </div>
  );
}

export default Home;