import React from 'react';
import {useEffect, useRef} from 'react';
import {Image} from 'react-bootstrap';
import {Link} from 'react-router-dom';
import './Home.css';
import Pdf from '../../personal_files/Hayden_Kim_Resume.pdf';
import aboutMePhoto from'../../personal_files/my_photos/about-me.jpg';
import profilePhoto from'../../personal_files/my_photos/profile-picture.jpg';
import LogoPhoto from'../../personal_files/my_photos/MyLogo.png';
const Home = () => {


      //  will store the classes that use ref
      const elementsRef = useRef([]);

      useEffect(() => {
  
          // handles intersection events
          const handleIntersection = (entries) => {
              console.log(entries)
              entries.forEach(entry => {
                  if (entry.isIntersecting) {
                      // console.log("add the view!");
                      entry.target.classList.add('in-view');
                  } 
  
                  //  use this if we want to play the animation again (no. I don't want to)
                  // else {
                  //     entry.target.classList.remove('in-view');
                  // }
              });
          };
      
          // Create an IntersectionObserver instance
          const observer = new IntersectionObserver(handleIntersection, {
              threshold: 0.1 // Example threshold: 10% of the element must be visible
          });
      
          // Observe each element in the ref array
          elementsRef.current.forEach(element => {
              if (element) {
              observer.observe(element);
              }
          });
      
          // Cleanup function to unobserve elements when the component unmounts
          return () => {
            elementsRef.current.forEach(element => {
              if (element) observer.unobserve(element);
            });
          };
        }, []); // Empty dependency array means this runs once on mount and cleanup on unmount
  
      // Function to add refs to elements dynamically
      const addToElesRef = (element) => {
          if (element && !elementsRef.current.includes(element)) {
              console.log("add this one!");
              elementsRef.current.push(element);
          }
      };

    
  return (
    <div>
        <div className = "welcome-container">
            {/* <h1> Welcome To My Website!</h1> */}
            <div className = "title-container">
              <div className ="title-text-container">
                <div className="title-text"> Hello! 안녕하세요!</div>
                <div className="name-container">
                  <span className="im-text"> I'm </span>
                  <span className="name-text"> Hayden Kim </span>  
                </div>
                <div className="welcome-text"> Welcome to my Website! </div>
                
              </div>
              
            </div>
            <div className = "profile-pic-container">
                <div className="profile-pic-frame">
                  <img className="profile-pic" src={profilePhoto} alt="profile picture"></img>
                </div>
                
            </div>
        </div>
        <br/>
        <br/>
        <br/>


        <div className = "project-container">
          
          <div className="about-me-container">
  
              <div className="about-me-summary-container">
                <div className ="section-title-container">
                    <h1> About Me </h1>
                    <h6> Who art thou Hayden Kim? </h6>
                </div>
                <br/>
                <br/>
                <div className="summary-text">
                  Hi there! My name is Hayden Kim! I'm a senior at UIUC studying Mathematics and Computer Science. 
                  I'm aiming to be a software engineer that can create software to help improve the lives of others! Along with my strong math background, I also have worked in various computer sciences including
                  full-stack development, artificial intelligence, database systems, and systems programing!
                </div>
                <br/>
                <div className="summary-text">
                  In addition to academics and projects, I have involved in various organizations and companies. 
                  Notable involvements include ACM SIGPWY member, working in the strategy/telemtry team of the Illini Solar Car Club, Course Assistant for UIUC's Stat 400 course,
                  UIUC's Asian American Cultural Center, Outreach Chair for the Society of Asian Scientists and Engineers at UIUC, and a two time Technology Development Intern for UnitedHealth Group/Optum.
                </div>
                <br/>
                <div className="summary-text">
                  Whenever I have the time, I love making music (covers, remixes, original pieces)!
                </div>

              </div>
              <div className="about-me-photo-container">
                <div ref={addToElesRef} className="about-me-photo-frame">
                  <img className="about-me-photo" src={aboutMePhoto} alt="profile picture"></img>
                </div>
              </div>

          </div>

        </div>
        <br/>
        <div className = "project-container">
            <div className ="section-title-container">
                <h1> Lets Get in Touch! </h1>
                <h6> Here's how you can reach out to me! </h6>
            </div>
            
            <div className="contact-info-container">
                <div className="contact-item">
                  <Link to="https://www.linkedin.com/in/hayden-kim-az/">
                    <Image src="/company_images/LI-In-Bug.png" className="image-linkedin-contact" alt="LinkedIn"/>
                  </Link>
                  <div className="contact-name-container">
                    LinkedIn
                  </div>
                </div>
                
                <div className="contact-item">
                  <Link to="https://www.linkedin.com/in/hayden-kim-az/">
                    <Image src="/company_images/github-mark-white.png" className="image-contact" alt="LinkedIn"/>
                  </Link>
                  <div className="contact-name-container">
                    GitHub
                  </div>
                </div>

                <div className="contact-item">
                  <a href={Pdf}>
                    <Image src={LogoPhoto} href={Pdf} className="image-contact" alt="LinkedIn"/>
                  </a>
                  <div className="contact-name-container">
                    Resume
                  </div>
                </div>
            </div>

        </div>
    </div>

    
  )
}

export default Home