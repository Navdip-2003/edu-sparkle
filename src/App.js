import About from "./Components/About/About";
import Campus from "./Components/Campus/Campus";
import Contact from "./Components/Contact/Contact";
import Hero from "./Components/Hero/Hero";
import Navbar from "./Components/Navbar/Navbar";
import Program from "./Components/Program/Program";
import Testimonial from "./Components/Testimonial/Testimonial";
import Title from "./Components/Title/Title";
function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <div className="Container">
        <Title subtitle='Our Program' title='What We Offer' />
        <Program />
        <About />
        <Title subtitle='Gallery' title='Campus Photos' />
        <Campus />
        <Title subtitle='Testimonials' title='What Student Says' />
        <Testimonial />
        <Title subtitle='Contact Us' title='Get In Touch' />
        <Contact />

      </div>
    </>
  );
}

export default App;
