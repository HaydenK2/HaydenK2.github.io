import React from 'react'

import './Home.css';
const Home = () => {
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
                <img className="profile-pic" src="/profile-picture.jpg" alt="profile picture"></img>
            </div>
        </div>


        <div className = "project-container">
          <div className ="section-title-container">
              <h1> About Me </h1>
              <h6> Who is Hayden Kim? </h6>
          </div>
          <div className="about-me-container">
              <div className="about-me-summary">
                  Hayden is a guy and me
              </div>
          </div>

        </div>
    </div>

    
  )
}

export default Home