import { useState } from "react";
import About from "./Components/About/About";
import Campus from "./Components/Campus/Campus";
import Contact from "./Components/Contact/Contact";
import Footer from "./Components/Footer/Footer";
import Hero from "./Components/Hero/Hero";
import Navbar from "./Components/Navbar/Navbar";
import Program from "./Components/Program/Program";
import Testimonial from "./Components/Testimonial/Testimonial";
import Title from "./Components/Title/Title";
import Videoplayer from "./Components/VideoPlayer/Videoplayer";
function App() {

  const [playState , setPlayState] = useState(false);

  return (
    <>
      <Navbar />
      <Hero />
      <div className="Container">
        <Title subtitle='Our Program' title='What We Offer' />
        <Program />
        <About setPlayState={setPlayState} />
        <Title subtitle='Gallery' title='Campus Photos' />
        <Campus />
        <Title subtitle='Testimonials' title='What Student Says' />
        <Testimonial />
        <Title subtitle='Contact Us' title='Get In Touch' />
        <Contact />
        <Footer />
        <Videoplayer playState={playState} setPlayState={setPlayState}/>
      </div>
    </>
  );
}

export default App;
