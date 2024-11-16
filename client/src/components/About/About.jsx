import React from 'react'
import Navbar from '../Navbar/Navbar'
import './About.css'

const About = () => {
  return (
    <div className='about__container'>
      <Navbar />
      <div className='content__about'>
        <h1>Grupo do Projeto Integrador II</h1>
        <section className="about__section">
          <p>CARLOS ALBERTO PEREIRA, RA 1805701</p>
          <p>LARISSA BORGES, RA 2102696</p>
          <p>CLAUDIO BRAULIO DOS SANTOS, RA 2215806</p>
          <p>JOSEPH JUCELIO DE OLIVEIRA SANTOS, RA 2224541</p>
          <p>LUANA MOLENA, RA 2103103</p>
          <p>VICENTE NUNES DA CONCEICAO DE FARIAS, RA 2215886</p>
          <p>EDMILSON OLIVEIRA, RA 2224064</p>
          <p>PEDRO PAULO SOARES SOUZA, RA 2200598</p>
        </section>
      </div>
    </div>
  )
}

export default About;