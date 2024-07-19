import React, { useEffect, useState } from 'react'
import './Navbar.css'
import logo from '../../assets/EduSparkle__1.png';
import menu from '../../assets/menu-icon.png'
import { Link } from 'react-scroll';
function Navbar() {

  const [sticky , setSticky] = useState(false);

  useEffect(()=>{
    window.addEventListener('scroll',()=>{
      window.scrollY > 100 ? setSticky(true) : setSticky(false)
    })
  } , [])

  const [mobileMenu , setMobileMenu] = useState(false)
  const toggleMenu = () =>{
    mobileMenu ? setMobileMenu(false) : setMobileMenu(true)
  }

  return (
    <nav className={` Container ${sticky ? 'dark-nav' : ''} `}>
      <img src={logo} alt='' loading='lazy' className='logo' />
      <ul className={mobileMenu ? '' : 'hide-mobile-menu'}>
        <li><Link to='hero' smooth={true} offset={-220} duration={500}> Home</Link></li>
        <li><Link to='programs' smooth={true} offset={-250} duration={500}>Program</Link></li>
        <li><Link to='about' smooth={true} offset={-150} duration={500}>About us</Link></li>
        <li><Link to='campus' smooth={true} offset={-240} duration={500}>Campus</Link></li>
        <li><Link to='testimonial' smooth={true} offset={-270} duration={500}>Testimonials</Link></li>
        <li><Link  to='contact' smooth={true} offset={-240} duration={500} className='btn'>Contact us</Link></li>
      </ul>
      <img src={menu} alt="" className='menu-icon' onClick={toggleMenu}/>
    </nav>
  )
}

export default Navbar
