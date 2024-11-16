import React from 'react';
import { useNavigate } from 'react-router-dom';
import logo from '../../assets/logo.png';
import './Sidebar.css';
import { BsFillPersonFill } from "react-icons/bs";
import { CiLogout } from "react-icons/ci";

const Sidebar = ({ removeCookie }) => {
  const navigate = useNavigate();

  const handleLogout = () => {
    removeCookie('AuthToken');
    removeCookie('Email');
    navigate('/auth'); // Leva para login ao sair
  };

  const handleProfileClick = () => {
    navigate('/profile'); // Redireciona para a página do perfil
  };

  const handleLogoClick = () => {
    navigate('/account'); // Redireciona para a página da conta
  };

  return (
    <div className="sidebar">
      <div className="sidebar-logo" onClick={handleLogoClick}>
        <img src={logo} alt="Logo" className="logo__sidebar" />
      </div>

      <ul className="ul__sidebar">
        <li className="menu-item" onClick={handleProfileClick}>
          <BsFillPersonFill className="icon" size={20} /> <span>Perfil</span>
        </li>
      </ul>

      <div className="logout" onClick={handleLogout}>
        <CiLogout className="icon" size={20} /> <span>Sair</span>
      </div>
    </div>
  );
};

export default Sidebar;








