import React, { useEffect, useState } from 'react'
import './Navbar.css'
import logo from '../../assets/EduSparkle__1.png'
function Navbar() {

  const [sticky , setSticky] = useState(false);

  useEffect(()=>{
    window.addEventListener('scroll',()=>{
      window.scrollY > 100 ? setSticky(true) : setSticky(false)
    })
  } , [])

  return (
    <nav className={` Container ${sticky ? 'dark-nav' : ''} `}>
      <img src={logo} alt='' loading='lazy' className='logo' />
      <ul>
        <li>Home</li>
        <li>Program</li>
        <li>About us</li>
        <li>Campus</li>
        <li>Testimonials</li>
        <li><button className='btn'>Contact us</button></li>
      </ul>
    </nav>
  )
}

export default Navbar
