/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react'
import Particles from './Particles'
import Typed from 'react-typed'
import './header.css'

const Header = () => {
  return (
    <section id='home' className='header-wrapper'>
      <Particles />
      <div className='main-info'>
        <h1>Sedat BAGIRGAN</h1>
        <Typed
          className='typed-text'
          strings={[
            'Web Designer',
            'Web Developer',
            'React Developer',
            ]}
          typeSpeed={40}
          backSpeed={60}
          loop
        />
        <a  href='#' className='btn-main-offer'>
            contact me
        </a>
      </div>
    </section>
  )
}

export default Header
