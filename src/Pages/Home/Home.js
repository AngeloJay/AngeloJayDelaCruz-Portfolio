import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import "./Home.css";
import "boxicons";
import profilePicture from "../../images/above-tunnel.jpg";
import contactPicture from "../../images/contactPic.jpg";
import dragonLogo from "../../images/dragonLogo.png";
import Navbar from "../../components/navbar/navbar.js";
import Contactform from "../../components/contactForm/contactForm.js";
import HeaderAnimated from "../../components/headerAnimated/HeaderAnimated.js";

function Home() {
  useEffect(() => {
    AOS.init({
      once: false,
      duration: 2000,
    });
  }, []);

  return (
    <div className="main">
      <Navbar />

      {/* Welcome Section */}
      <div id="welcome"></div>
      <div
        data-aos="zoom-out"
        data-aos-easing="linear"
        data-aos-duration="1000"
      >
        <section>
          <div className="profile-frame">
            <img src={profilePicture} alt="profile" className="profile-image" />
          </div>
          <h1 id="welcome">
            Welcome! I'm{" "}
            <div className="welcome-name">
              <HeaderAnimated text={"Angelo Jay Dela Cruz"} />{" "}
            </div>
            <span> !</span>
          </h1>
          <div className="paragraph">
          <p className="p welcome">
            I'm a highly motivated Computer Science graduate from California
            State University, Sacramento!
          </p>
          </div>
        </section>
      </div>

      {/* About Section */}
      <div id="about-me">
        <br />
        <br />
      </div>
      <section data-aos="fade-up" data-aos-anchor-placement="center-bottom">
        <h1>About Me</h1>
        <div className="paragraph">
        <p>
          I graduated from Sacramento State in May 2024, with a Bachelors in Computer Science.
          Having just graduated I am looking forward to solving real world problems and challenges.
        </p>
        </div>
      </section>

      {/* Projects Section */}
      <div id="projects">
        <br />
        <br />
      </div>

      <section data-aos="fade-up" data-aos-anchor-placement="center-bottom">
        <h1>Projects</h1>
        <h2>
          <a href="/projects/DragonMinutes">
          <HeaderAnimated text={"Dragon Minutes"} />
          </a>
        </h2>
        <a href="/projects/DragonMinutes"><img src={dragonLogo} alt="Dragon Project" className="project-image"/></a>
      </section>

      {/* Skills Section */}
      <div id="skills">
        <br />
        <br />
      </div>
      <section data-aos="fade-up" data-aos-anchor-placement="center-bottom">
        <h1>Skills</h1>
        <div className="skill">
          <h2>
            <HeaderAnimated text={"Languages"} headingLevel="h2" />
          </h2>
          <ul>
            <li>
              <box-icon name="java" type="logo"></box-icon>Java
            </li>
            <li>
              <box-icon type="logo" name="javascript"></box-icon>JavaScript
            </li>
            <li>
              <box-icon name="file-css" type="solid"></box-icon>CSS
            </li>
            <li>
              <box-icon name="file-html" type="solid"></box-icon>HTML
            </li>
            <li>
              <box-icon name="react" type="logo"></box-icon>React
            </li>
          </ul>
        </div>

        <div className="skill tools">
          <h2 className="h2-tools">
            <HeaderAnimated text={"Tools"} headingLevel="h2" />
          </h2>
          <ul className="ul-tools">
            <li>
              <box-icon name="github" type="logo"></box-icon>Git
            </li>
            <li>
              <li>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="1em"
                  height="1em"
                  viewBox="0 0 24 24"
                >
                  <path
                    fill="black"
                    d="M2.95 0C1.33 0 0 1.32 0 2.95v18.1C0 22.68 1.32 24 2.95 24h18.1c1.62 0 2.95-1.32 2.95-2.95V2.95A2.95 2.95 0 0 0 21.05 0zm0 1.09h18.1c1.04 0 1.85.818 1.85 1.86v14h-5.27c-.335-.796-2.57-6.47.283-10.9a.516.517 0 0 0-.443-.794c-5.24.083-8.2 3.19-9.74 6.21c-1.35 2.64-1.63 4.91-1.69 5.53H1.09v-14c0-1.04.817-1.86 1.85-1.86zm13.6 5.24c-2.62 5.24.248 11.4.248 11.4a.516.517 0 0 0 .469.301h5.62v3.05a1.84 1.84 0 0 1-1.85 1.86h-18.1c-1.04 0-1.85-.818-1.85-1.86v-3.05h5.39a.516.517 0 0 0 .514-.477s.226-2.8 1.66-5.62c1.34-2.62 3.67-5.17 7.91-5.57z"
                  />
                </svg>{" "}
                Wireshark
              </li>
              <svg
                className="jira-svg"
                xmlns="http://www.w3.org/2000/svg"
                x="0px"
                y="0px"
                width="100"
                height="100"
                viewBox="0 0 22 21.902"
              >
                <path d="M 9.691,14.26 6.411,10.948 9.6,7.764 C 9.336,7.49 9.066,7.204 8.8,6.904 A 5.857,5.857 0 0 1 7.263,3.267 l -6.97,6.97 a 1,1 0 0 0 0,1.414 l 9.956,9.956 a 1,1 0 0 0 1.553,-0.171 C 12.571,20.203 13.447,18.05 11.709,16.312 10.692,15.3 9.7,14.267 9.691,14.26 Z m 2.617,-6.631 3.281,3.311 -3.184,3.185 c 0.264,0.273 0.534,0.56 0.8,0.859 a 5.864,5.864 0 0 1 1.531,3.638 l 6.971,-6.971 a 1,1 0 0 0 0,-1.414 L 11.765,0.3 A 1,1 0 0 0 10.2,0.478 c -0.753,1.248 -1.6,3.408 0.087,5.1 1.021,1.016 2.013,2.044 2.021,2.051 z"></path>
              </svg>
              Jira
            </li>
          </ul>
        </div>

        <div className="skill">
          <h2>
            <HeaderAnimated text={"Databases"} headingLevel="h2" />
          </h2>
          <ul>
            <li>
              <svg
                className="mysql-svg"
                xmlns="http://www.w3.org/2000/svg"
                x="0px"
                y="0px"
                width="100"
                height="100"
                viewBox="0 0 24 24"
              >
                <path d="M 3.125 1 C 2.219 1 1.5030625 1.4805 1.1640625 2.3125 C 1.0570625 2.5695 1.0029531 2.8420469 1.0019531 3.1230469 C 1.0009531 4.0540469 1.6009375 4.8097188 1.9609375 5.2617188 C 2.0239375 5.3407187 2.080625 5.4110938 2.140625 5.4960938 L 2.3027344 5.7109375 C 2.4637344 5.9219375 2.6470781 6.16125 2.7050781 6.28125 C 2.7240781 6.33625 2.7492031 6.4326875 2.7832031 6.5546875 C 2.9402031 7.1196875 3.2332187 8.16975 3.6992188 8.96875 C 3.8872187 9.29075 4.1517969 9.6954687 4.3417969 9.9804688 C 4.2147969 10.616469 4 11.788 4 12.5 C 4 13.75 4.2592188 14.753875 4.8242188 15.671875 C 5.0332187 15.999875 5.671 17 6.75 17 C 7.133 17 7.7694062 16.850391 7.9414062 15.900391 C 8.7064063 16.887391 10 18.125 12 19 C 12 19 8.2507969 14.625438 7.5917969 11.898438 C 7.5917969 11.898437 6.874625 12.625375 6.265625 14.109375 C 6.083625 13.651375 6 13.135 6 12.5 C 6 11.873 6.2758125 10.471375 6.3828125 9.984375 L 6.4765625 9.5605469 L 6.2304688 9.203125 C 6.2264687 9.196125 5.7227344 8.4688906 5.4277344 7.9628906 C 5.0917344 7.3868906 4.8439375 6.4955781 4.7109375 6.0175781 C 4.6459375 5.7845781 4.594875 5.6159531 4.546875 5.5019531 C 4.371875 5.1229531 4.115625 4.7900937 3.890625 4.4960938 L 3.765625 4.3300781 C 3.702625 4.2390781 3.6193906 4.133625 3.5253906 4.015625 C 3.3423906 3.785625 3.0017188 3.3570312 3.0117188 3.0820312 L 3.1230469 3.0039062 L 3.125 3 C 3.92 3 4.9440781 3.5643437 5.3300781 3.7773438 C 5.4560781 3.8463438 5.5486563 3.8940156 5.5976562 3.9160156 L 5.7714844 3.9921875 L 6.1132812 4.0039062 C 6.5602813 4.0139062 7.9189063 4.0456875 8.8789062 4.4296875 C 10.629906 5.1296875 11.598031 5.830375 12.582031 7.109375 C 14.906031 10.131375 15.763484 14.044984 15.771484 14.083984 L 15.896484 14.648438 L 16.443359 14.826172 C 16.462359 14.833172 17.992922 15.344641 19.419922 16.681641 C 17.624922 17.125641 17 18 17 18 C 17 18 17.476 18.928 19.75 20.375 C 21.125 21.25 21.875 21.875 23 23 C 23 23 21.875688 20.499813 20.304688 18.507812 C 21.500687 18.124813 22.970703 17.925781 22.970703 17.925781 L 22.060547 16.664062 C 20.562547 14.587063 18.553656 13.538859 17.597656 13.130859 C 17.265656 11.864859 16.262969 8.614625 14.167969 5.890625 C 12.968969 4.331625 11.693094 3.3993125 9.6210938 2.5703125 C 8.3940937 2.0803125 6.9187188 2.0218594 6.2617188 2.0058594 C 5.6867187 1.6898594 4.409 1 3.125 1 z M 7.1875 5 C 7.1875 5 6.75 5 6.25 5.125 L 7.625 6.9980469 C 8 6.5000469 8 5.9179688 8 5.9179688 C 8 5.9179688 7.7505 5.25 7.1875 5 z"></path>
              </svg>
              MySql
            </li>
            <li>
              <img
                width="28"
                height="28"
                src="https://img.icons8.com/external-bearicons-detailed-outline-bearicons/64/external-SQL-file-extension-bearicons-detailed-outline-bearicons.png"
                alt="external-SQL-file-extension-bearicons-detailed-outline-bearicons"
              />
              SQL
            </li>
          </ul>
        </div>
      </section>

      {/* Hobbies Section */}
      <div id="hobbies">
        <br />
        <br />
      </div>
      <section data-aos="fade-up" data-aos-anchor-placement="center-bottom">
        <h1 className="paragraph">Hobbies and Interests</h1>


        <h2>Music</h2>
        <div className="paragraph">
        <p>
          Being introduced to Hip-Hop in my early stages of life allowed me{" "}
          to create a sort of passion for the genre. My favorite artists include
          IDK, Nas, Kendrick Lamar, and 50 Cent. If I have the chance you'll
          always find me listening to music!
        </p>
        </div>

        <h2>Video Games</h2>
        <div className="paragraph">
        <p>
          During my pass time I like to play video games! Some of my favorites series
          are the Fallout, Tekken, and Counter-Strike.
        </p>
        </div>

        <h2>Fitness</h2>
        <div className="paragraph">
        <p>
          One of the biggest accomplishments I think I have done is losing 55
          pounds. It was one of the hardest things I had to do but through determination
          and discpline I was able to restrain my self from eating so much and get
          myself to very consistently go to the gym.
        </p>
        </div>
      </section>

      {/* Contact Me */}
      <div id="contact-me">
        <br />
        <br />
      </div>
      <section data-aos="fade-up" data-aos-anchor-placement="center-bottom">
        <h1>Contact Me</h1>
        <div className="profile-frame contactprofile-frame contact">
          <img
            src={contactPicture}
            alt="profile"
            className="profile-image contact"
          />
        </div>
        <Contactform />
        <p className="contact-links">
          <a
            href="https://linkedin.com/in/angelojaydelacruz"
            target="_blank"
            rel="noreferrer"
          >
            <box-icon name="linkedin-square" type="logo"></box-icon>
            AngeloJayDelaCruz
          </a>
        </p>
        <p className="contact-links">
          <a
            href="https://github.com/AngeloJay"
            target="_blank"
            rel="noreferrer"
          >
            <box-icon type="logo" name="github"></box-icon>AngeloJay
          </a>
        </p>
        <p className="contact-links">
          <a
            href="mailto:angelo.jay@outlook.com"
            target="_blank"
            rel="noreferrer"
          >
            <box-icon type="solid" name="envelope"></box-icon>
            angelo.jay@outlook.com
          </a>
        </p>

        <p>
          <a
            href="/AngeloJayDelaCruz-Resume.pdf"
            download="AngeloJayDelaCruz-Resume.pdf"
          >
            <box-icon name="download"></box-icon>Resume
          </a>
        </p>
      </section>
      <div className="page-bottom"></div>
    </div>
  );
}

export default Home;
