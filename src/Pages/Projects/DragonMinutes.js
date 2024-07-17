import React, { useEffect } from "react";
import './DragonMinutes.css'
import "aos/dist/aos.css";
import AOS from "aos";
import HeaderAnimated from "../../components/headerAnimated/HeaderAnimated.js";
import CardSlide from "../../components/cardSlider/CardSlide"; 
import dragonLogo from "../../images/dragonLogo.png";
import Main from "../../images/dragonMinMain.png";
import Profile from "../../images/dragonMinProfile.png";
import Admin from "../../images/dragonMinAdmin.png";

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

        <div className="sectionD" data-aos="fade-right">
        <div className='dragon-div'>
        <HeaderAnimated text={"Dragon Minutes"}/>
        <img src={dragonLogo} alt='dragon' className="page-project-image"/>
        <h1>Description</h1>
        <div className="paragraph-drag">
            <p className='content-p'>
              Dragon Minutes was my senior project at Sacramento State, we were tasked to find our own 
              clients and provide them with a service that would solve a problem they were having.
              Dragon Minutes was created for the Parent Teacher Assosciation of Oak Chan Elementary School.
              It was designed to track the math and reading minutes of the school's student body.
              Providing a solution to their tracking of minutes via paper, as to lessen the hassle.
            </p>
        </div>
        </div>
        <CardSlide image1={Main} image2={Profile} image3={Admin}/>

        <div>
            <h1>Demo</h1>
        </div>
        <iframe width="832" height="432" src="https://www.youtube.com/embed/zxoo3ZMxPUw?si=VwNsev4OOvGZsgbP" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>

        <div className='dragon-div2'>
            <h1>Tools</h1>
            <ul>
            <li className="dragtools">React.JS</li>
            <li className="dragtools">MySQL</li>
            <li className="dragtools">Google Cloud</li>
            <li className="dragtools">JIRA</li>
            <li className="dragtools">Github</li>
            <li className="dragtools">Figma</li>
            </ul>
        </div>
        </div>
        
    </div>
  )
}

export default DragonMinutes;
