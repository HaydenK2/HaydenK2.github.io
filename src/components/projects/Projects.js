import React from 'react'
import './Projects.css';

const Home = () => {
  return (
    <div className = "project-container">
    
        <div className ="section-title-container">
            <h1> My Projects </h1>
        </div>
        <br/>
        <div className="left-container">
            <div className ="left-box-container">
                <div className="project-gif-container">
                    dsafdsf
                </div>
                <div className = "project-summary-container">
                    <div className="project-title-container">
                        Project 1
                    </div>
                    <div className="project-description-container">
                        <div>
                            This project does the following and I am pretty happy about it!
                        </div>
                        <div>
                            Main Components: React, SpringBoot, MongoDB, ngrok
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <br/>
        <div className="right-container">
            <div className ="right-box-container">
                <div className = "project-summary-container">
                    <div className="project-title-container">
                        Project 2
                    </div>
                    <div className="project-description-container">
                        <div>
                            This project does the following and I am pretty happy about it!
                        </div>
                        <div>
                            Main Components: React, SpringBoot, MongoDB, ngrok
                        </div>
                    </div>
                </div>
                <div className="project-gif-container">
                    dsafdsf
                </div>
                
            </div>
        </div>
  

            
            
     
    </div>
  )
}

export default Home