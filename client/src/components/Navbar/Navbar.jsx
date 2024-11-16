import React from 'react'
import { Link } from 'react-router-dom'
import logo from '../../assets/logo.png'
import './Navbar.css'

const Navbar = () => {
  return (
    <nav className='nav'>
    <Link to="/" className='site__title'><img src={logo} alt="" className='logo' />Math Thinkers</Link>
    <Link to="/pre-test" className='site__title test'>Teste seus conhecimentos</Link>
    <ul>
      <li><Link to="/">Home</Link></li>
      <li><Link to="/about">Sobre</Link></li>
      <li className='login__nav'><Link to="/auth">Login</Link></li>
    </ul>
  </nav>
  )
}

export default Navbar