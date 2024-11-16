import { useState } from 'react';
import Navbar from '../Navbar/Navbar';
import './Auth.css';
import { useCookies } from 'react-cookie';
import { useNavigate } from 'react-router-dom';

const Auth = () => {
  const [isLogIn, setIsLogIn] = useState(true);
  const [error, setError] = useState(null);
  const [user, setUser] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [cookies, setCookie, removeCookie] = useCookies(['AuthToken', 'Email']);
  const navigate = useNavigate();
  const [successMessage, setSuccessMessage] = useState(null);

  const viewLogin = (status) => {
    setError(null);
    setSuccessMessage(null);
    setIsLogIn(status);
  };

  const handleSubmit = async (e, endpoint) => {
    e.preventDefault();
    setError(null);
    setSuccessMessage(null);

    if (!isLogIn) {
      if (!user || !email || !password || password !== confirmPassword) {
        if (!user || !email || !password) {
          setError('Campos obrigatórios não preenchidos!');
        } else if (password !== confirmPassword) {
          setError('As senhas não coincidem!');
        }
        return;
      }
    }

    if (isLogIn) {
      if (!email || !password) {
        setError('Campos obrigatórios não preenchidos!');
        return;
      }
    }

    const body = { user, email, password };

    const response = await fetch(`http://localhost:4000/${endpoint}`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(body)
    });

    const data = await response.json();

    if (data.detail) {
      if (isLogIn) {
        if (data.detail === 'User not found') {
          setError('Usuário não encontrado!');
        } else if (data.detail === 'Incorrect password') {
          setError('Senha incorreta!');
        } else {
          setError(data.detail);
        }
      } else {
        setError(data.detail);
      }
      setSuccessMessage(null);
    } else {
      if (!isLogIn) {
        setSuccessMessage('Usuário criado com sucesso! Realizando login...');
        setUser('');
        setPassword('');
        setConfirmPassword('');
        setEmail('');
        setTimeout(() => {
          viewLogin(true); // Redireciona para a tela de login após cadastro
        }, 2000);
      } else {
        setCookie('Email', data.email);
        setCookie('AuthToken', data.token);
        setEmail('');
        setPassword('');
        navigate('/account');
      }
    }
  };

  return (
    <div>
      <Navbar />
      <div className="auth__container">
        <div className="auth__box">
          <form className="auth__form" onSubmit={(e) => handleSubmit(e, isLogIn ? 'login' : 'signup')}>
            <h2>{isLogIn ? 'Log in' : 'Sign up!'}</h2>
            {!isLogIn && (
              <>
                <input
                  type="text"
                  placeholder="Nome"
                  onChange={(e) => setUser(e.target.value)}
                  value={user}
                />
                <input
                  type="email"
                  placeholder="E-mail"
                  onChange={(e) => setEmail(e.target.value)}
                  value={email}
                />
                <input
                  type="password"
                  placeholder="Senha"
                  onChange={(e) => setPassword(e.target.value)}
                  value={password}
                />
                <input
                  type="password"
                  placeholder="Confirme a senha"
                  onChange={(e) => setConfirmPassword(e.target.value)}
                  value={confirmPassword}
                />
              </>
            )}
            {isLogIn && (
              <>
                <input
                  type="email"
                  placeholder="Your E-mail"
                  onChange={(e) => setEmail(e.target.value)}
                  value={email} 
                />
                <input
                  type="password"
                  placeholder="Your Password"
                  onChange={(e) => setPassword(e.target.value)}
                  value={password} 
                />
              </>
            )}
            <input
              type="submit"
              className="create"
              value="Submit"
            />
            {error && <p className="error">{error}</p>}
            {successMessage && !isLogIn && (  
              <p className="success" style={{ marginTop: '10px', textAlign: 'center', color: 'green' }}>
                {successMessage}
              </p>
            )}
          </form>

          <div className="auth__options">
            <button
              onClick={() => viewLogin(false)}
              className={!isLogIn ? 'active' : ''}
            >
              Sign Up
            </button>
            <button
              onClick={() => viewLogin(true)}
              className={isLogIn ? 'active' : ''}
            >
              Login
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Auth;


