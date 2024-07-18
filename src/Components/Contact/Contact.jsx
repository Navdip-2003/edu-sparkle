import React from 'react'
import './Contact.css'
import message_icon from '../../assets/msg-icon.png';
import locationicon from '../../assets/location-icon.png';
import mailicon from '../../assets/mail-icon.png';
import phoneicon from '../../assets/phone-icon.png';
import whiteArrow from '../../assets/white-arrow.png';

function Contact() {
  const [result, setResult] = React.useState("");

  const onSubmit = async (event) => {
    event.preventDefault();
    setResult("Sending....");
    const formData = new FormData(event.target);

    formData.append("access_key", "8f84cc06-43d8-4abc-8c95-ebbb0798b05f");

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData
    });

    const data = await response.json();

    if (data.success) {
      setResult("Form Submitted Successfully");
      event.target.reset();
    } else {
      console.log("Error", data);
      setResult(data.message);
    }
  };
  return (
    <div className='contact'>
        <div className="contact-col">
            <h3>Send us a Message <img src={message_icon} alt="" /> </h3>
            <p>Get in touch with us! At LJ Institute, we're always eager to hear from you. Whether you're a prospective student, a parent, or an industry partner, we're committed to providing you with the information and support you need. Our dedicated team is here to answer your questions, provide guidance, and help you achieve your goals. Fill out the form below to get in touch with us, and we'll respond promptly to your inquiry.</p>
            <ul>
              <li> <img src={mailicon} alt="" />contactlj@edu.in</li>
              <li><img src={phoneicon} alt="" />+91 78565 98899</li>
              <li><img src={locationicon} alt="" />LJ Campus, LJ College Rd, near Sanand - Sarkhej Road, Makarba, Sarkhej-Okaf, Gujarat 382210</li>
            </ul>
        </div>
        
        <div className="contact-col">
          <form onSubmit={onSubmit}>
              <label htmlFor="">Your name</label>
              <input type="text" name="name" id="" placeholder='Enter Your Name' required />
              <label htmlFor="">Phone Number</label>
              <input type="tel" name="phone" id="" placeholder='Enter Your Mobile Number' required />
              <label htmlFor="">Write your messages here</label>
              <textarea name="message" id="" rows="6" placeholder='Enter Your Message' required></textarea>
              <button type='submit' className='btn dark-btn'>Submit now <img src={whiteArrow} alt="" /> </button>
          </form>
          <span>{result}</span>
        </div>
      
    </div>
  )
}
export default Contact
