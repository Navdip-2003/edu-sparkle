import React from 'react'
import './Hero.css'
import darkArrow from '../../assets/dark-arrow.png'

function Hero() {
  return (
    <div className='hero Container'>
      <div className='hero-text'>
        <h1>We Ensure Better Education for a Better World</h1>
        <p>Our cutting-edge curriculam is design to empower students with the knowledge , skills and experiences needed to excel in the dynamic filed of education</p>
        <button className='btn'>Explore More < img src={darkArrow} alt='' /> </button>

      </div>
    </div>
  )
}

export default Hero
