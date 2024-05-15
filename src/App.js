import React, { useEffect } from 'react';
import AOS from 'aos'
import 'aos/dist/aos.css'
import './App.css'
import 'boxicons'
import profilePicture from './images/above-tunnel.jpg'
import Navbar from './components/navbar';

function App() {

  useEffect(()=>{
    AOS.init({
      once: false,
      duration: 2000
    });
  })

  return (
   <div className='background-color'>
   <Navbar/>

      {/* Welcome Section */}
      <div id='welcome'></div>
      <div data-aos="fade-left" data-aos-anchor-placement="top-bottom">
      <section>
      <div className='profile-frame'>
      <img src={profilePicture} alt="profile" className="profile-image" />
      </div>
      <h1 id='welcome'>Welcome! I'm <span className='highlight'>Angelo Jay Dela Cruz</span> !</h1>
      <p>I'm a highly motivated Computer Science graduate of California State University, Sacramento!</p>
      </section>
      </div>

      {/* About Section */}
      <div id='about-me'></div>
      <section data-aos="fade-up" data-aos-anchor-placement="center-bottom">
        <h1>About Me</h1>
        <p>I graduate Sacramento State in May 2024, with a bachelors of Science, Computer Science.</p>
        <p>I'm a highly motivated seeking job opportunites.</p>
      </section>

      {/* Projects Section */}
      <div id='projects'></div>
      <section data-aos="fade-up" data-aos-anchor-placement="center-bottom">
      <h1>Projects</h1>
      <h2><span className='highlight'>Dragon Minute's</span></h2>
      <p>Dragon Minute's was my senior project at Sacramento State.</p>
      </section>

      {/* Skills Section */}
      <div id='skills'></div>
      <section data-aos="fade-up" data-aos-anchor-placement="center-bottom">
      <h1>Skills</h1>
      <p>
        <ul>
          <li>Java</li>
          <li>JavaScript</li>
          <li>HTML/CSS</li>
          <li>React</li>
        </ul>
      </p>
      </section>

      {/* Hobbies Section */}
      <div id='hobbies'></div>
      <section data-aos="fade-up" data-aos-anchor-placement="center-bottom">
      <h1>Hobbies and Interests</h1>
      <p></p>
      </section>


      {/* Contact Me */}
      <div id='contact-me'></div>
      <section data-aos="fade-up" data-aos-anchor-placement="center-bottom">
        <h1>Contact Me</h1>
        <p><a href="https://github.com/AngeloJay" target="_blank" rel="noreferrer"><box-icon type='logo' name='github'></box-icon>github.com/AngeloJay</a></p>
        <p><a href="https://linkedin.com/in/angelojaydelacruz" target="_blank" rel="noreferrer"><box-icon name='linkedin-square' type='logo' ></box-icon>linkedin.com/in/angelojaydelacruz</a></p>
        <p><a href='mailto:angelo.jay@outlook.com' target="_blank" rel="noreferrer"><box-icon type='solid' name='envelope'></box-icon>angelo.jay@outlook.com</a></p>
      </section>
      
   </div>
  );
}

export default App;
