import React from 'react'
import './About.css'
import about from '../../assets/about.png'
import play_icon from '../../assets/play-icon.png'
function About({setPlayState}) {
  return (
    <div className='about'>
        <div className='about-left'>
            <img src={about} alt="" className="about-image" />
            <img src={play_icon} alt="" className="play-icon" onClick={()=>{setPlayState(true)}} />
        </div>
        <div className="about-right">
            <h3>About University</h3>
            <h2>Nurturing Tommorow's Leaders Today</h2>
            <p>Welcome to LJ University, a premier institution dedicated to fostering academic excellence and holistic development. Established in 1999, our college has a rich legacy of nurturing minds and shaping futures. With a diverse range of undergraduate and postgraduate programs, we are committed to providing a dynamic and supportive learning environment.</p>
            <p>Our esteemed faculty, cutting-edge facilities, and vibrant campus life ensure that students receive a comprehensive education that prepares them for success in a globalized world. At LJ institute, we believe in the power of knowledge, innovation, and community, striving to empower our students to become leaders and change-makers in their chosen fields.</p>
        </div>
      
    </div>
  )
}

export default About
