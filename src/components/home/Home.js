import React from 'react';
import {useEffect, useRef} from 'react';
import './Home.css';

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
  
                  //  use this if we want to play the animation again (yes. we I want to)
                  else {
                      entry.target.classList.remove('in-view');
                  }
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
                  <img className="profile-pic" src="/my-photos/profile-picture.jpg" alt="profile picture"></img>
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
                  I'm aiming to be a software engineer and focused a lot on full-stack development, artificial intelligence, systems programing, and more!
                </div>

              </div>
              <div className="about-me-photo-container">
                <div ref={addToElesRef} className="about-me-photo-frame">
                  <img className="about-me-photo" src="/my-photos/about-me.jpg" alt="profile picture"></img>
                </div>
               
              </div>

          </div>
          

        </div>
    </div>

    
  )
}

export default Home