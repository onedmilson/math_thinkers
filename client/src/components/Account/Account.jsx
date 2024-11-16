import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useCookies } from 'react-cookie';
import Sidebar from '../Sidebar/Sidebar';
import Ex01 from '../Exercises/Ex01';
import Ex02 from '../Exercises/Ex02';
import Ex03 from '../Exercises/Ex03';
import Ex04 from '../Exercises/Ex04';
import './Account.css'

const Account = () => {
  const [userData, setUserData] = useState(null);
  const [cookies, , removeCookie] = useCookies(['AuthToken', 'Email']);
  const { Email, AuthToken } = cookies;
  const navigate = useNavigate();
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [quizFinished, setQuizFinished] = useState(false);

  useEffect(() => {
    if (AuthToken && Email) {
      fetch(`http://localhost:4000/users/${Email}`, {
        method: 'GET',
        headers: { 'Authorization': `Bearer ${AuthToken}` },
      })
        .then((res) => res.json())
        .then((data) => setUserData(data))
        .catch((err) => console.error('Error fetching user data:', err));
    } else {
      console.warn('Auth token or email missing.');
    }
  }, [AuthToken, Email]);

  const handleCategorySelect = (category) => {
    setSelectedCategory(category);
    setQuizFinished(false);
  };

  const handleFinishQuiz = () => {
    setQuizFinished(true);
  };

  const resetPage = () => {
    setSelectedCategory(null);
    setQuizFinished(false);
  };

  return (
    <div style={{ marginLeft: '220px' }}>
      <Sidebar userData={userData} removeCookie={removeCookie} />
      <section>
        <div>Seja Bem-vindo, {userData ? userData.user : 'Aluno'}!</div>

        {!selectedCategory && !quizFinished && (
          <div className="category-buttons">
            <button className="category-button" onClick={() => handleCategorySelect('Conjuntos')}>Conjuntos</button>
            <button className="category-button" onClick={() => handleCategorySelect('Sequências')}>Sequências</button>
            <button className="category-button" onClick={() => handleCategorySelect('Probabilidade')}>Probabilidade</button>
            <button className="category-button" onClick={() => handleCategorySelect('Estatística')}>Estatística</button>
          </div>
        )}

        {selectedCategory && !quizFinished && (
          <div className="quiz-container">
            {selectedCategory === 'Conjuntos' && <Ex01 resetPage={resetPage} />}
            {selectedCategory === 'Sequências' && <Ex02 resetPage={resetPage} />}
            {selectedCategory === 'Probabilidade' && <Ex03 resetPage={resetPage} />}
            {selectedCategory === 'Estatística' && <Ex04 resetPage={resetPage} />}
          </div>
        )}

        {quizFinished && (
          <div className="quiz-summary">
            <h2>Atividade Finalizada!</h2>
            <button onClick={resetPage} className="reset-button">Voltar para a página inicial</button>
          </div>
        )}
      </section>
    </div>
  );
};

export default Account;
