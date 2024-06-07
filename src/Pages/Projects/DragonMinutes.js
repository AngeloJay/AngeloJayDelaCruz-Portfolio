import React, { useEffect } from "react";
import './DragonMinutes.css'
import "aos/dist/aos.css";
import AOS from "aos";
import HeaderAnimated from "../../components/headerAnimated/HeaderAnimated.js";
import CardSlide from "../../components/cardSlider/CardSlide"; 
import dragonLogo from "../../images/dragonLogo.png";
import jiraScreen from "../../images/jiraSS.png";
import figmaScreen from "../../images/figmaScreen.png";

function DragonMinutes() {
    useEffect(() => {
      AOS.init({
        once: false,
        duration: 2000,
      });
    }, []);

  return (
    <div>
        <div className='button-container'>
        <a href='/#projects'><button className='back-button'><box-icon name='arrow-back'></box-icon></button></a>
        </div>

        <section data-aos="fade-right">
        <div className='dragon-div'>
        <HeaderAnimated text={"Dragon Minutes"}/>
        <img src={dragonLogo} alt='dragon' className="project-image"/>
        <h1>Description</h1>
        <p className='content-p'>
            Dragon Minutes was my senior project at Sacramento State, we were tasked to find our own <br/>
            clients and provide them with a service that would solve a problem they were having.<br/>
            Dragon Minutes was created for the Parent Teacher Assosciation of Oak Chan Elementary School.<br/>
            It was designed to track the math and reading minutes of the school's student body.<br/>
            Providing a solution to their tracking of minutes via paper, as to lessen the hassle.
            </p>
        </div>
        <CardSlide image1={jiraScreen} image2={figmaScreen} />
        <div>
            <h1>Demo</h1>
        </div>

        <div>
            <h1>Tools</h1>
            <ul>
            </ul>
        </div>
        </section>
        
    </div>
  )
}

export default DragonMinutes;
