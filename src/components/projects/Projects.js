import React from 'react'
import './Projects.css';

const Home = () => {
  return (
    <div className = "project-container">
    
        <div className ="section-title-container">
            <h1> My Projects </h1>
            <h6> A portfolio of all the projects I have done in my career </h6>
        </div>
        <br/>
        <br/>
        <br/>
        <br/>
        <div className="left-container">
            <div className ="left-box-container">
                <div className="project-gif-container">
                    <img className="project-gif" src='/gifs/JobAppTrackerDemo.gif' alt="Job App Tracker Gif"/>
                </div>
                <div className = "project-summary-container">
                    <div className="project-title-container">
                        Portfolio Website
                    </div>
                    <div className="project-description-container">
                        <div>
                            An application made using React where I that provides information about who I am as well as the the projects I have completed.
                        </div>
                        <br/>
                        <div>
                            Main Components: React
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
                        Job Application Tracker
                    </div>
                    <div className="project-description-container">
                        <div>
                            This project is a web application connecting to Mongodb Spring Boot backend that simplifies the job application process for users. 
                            More specifically, this application lets users to store and add their job applications in one place using a mongodb database.
                            Each job application component keeps track of company, company info, job position, link to job, and job application.
                        </div>
                        <br/>
                        <div>
                            Main Components: React, SpringBoot, MongoDB, ngrok
                        </div>
                    </div>
                </div>
                <div className="project-gif-container">
                 <img className="project-gif" src='/gifs/JobAppTrackerDemo.gif' alt="Job App Tracker Gif"/>
                </div>
                
            </div>
        </div>
        <br/>

        <div className="left-container">
            <div className ="left-box-container">
                <div className="project-gif-container">
                    <img className="project-gif" src='/gifs/JobAppTrackerDemo.gif' alt="Job App Tracker Gif"/>
                </div>
                <div className = "project-summary-container">
                    <div className="project-title-container">
                        Noko Bot
                    </div>
                    <div className="project-description-container">
                        <div>
                            A Custom Discord bot that sends a series of images and video links into a Discord server after users input a specific sequence of messages into a Discord server channel.
                            Additionally, the Discord bot can notify users how many times it replied to the sequence of messages through a custom command message.
                        </div>
                        <br/>
                        <div>
                            Main Components: Discord API, JavaScript
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
                        LOL Metrics Viewer
                    </div>
                    <div className="project-description-container">
                        <div>
                            This project is a web application that connects to a custom database located on the Google Cloud Platform. 
                            The application allows users to look up metrics about League of Legends Champions in order to determine which Champion best suits them. 
                            The web application also allows the user to lookup their previous match data.
                            Some attributes related to Champions that users are able to view include winrate, champion role, and champion skins.                        </div>
                        <br/>
                        <div>
                            Main Components: HTML, CSS, SQL, Google Cloud Platform
                        </div>
                    </div>
                </div>
                <div className="project-gif-container">
                 <img className="project-gif" src='/gifs/JobAppTrackerDemo.gif' alt="Job App Tracker Gif"/>
                </div>
                
            </div>
        </div>
        <br/>
        <div className="left-container">
            <div className ="left-box-container">
                <div className="project-gif-container">
                    <img className="project-gif" src='/gifs/JobAppTrackerDemo.gif' alt="Job App Tracker Gif"/>
                </div>
                <div className = "project-summary-container">
                    <div className="project-title-container">  
                        PrairieLearn++
                    </div>
                    <div className="project-description-container">
                        <div>
                            Created a program for the website PrairieLearn that displays the most urgent assignment due dates utilizing web scraping
                        </div>
                        <br/>
                        <div>
                            Main Components: HTML, CSS, Python, Web Scraping, Flask
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
                        Task Master
                    </div>
                    <div className="project-description-container">
                        <div>
                            Collaborated to develop an Android app that allows users to add and keep track of personalized tasks using Java code and Firebase’s Firestore Database.
                        </div>
                        <br/>
                        <div>
                            Main Components: Android Studio, Java, Firebase
                        </div>
                    </div>
                </div>
                <div className="project-gif-container">
                 <img className="project-gif" src='/gifs/JobAppTrackerDemo.gif' alt="Job App Tracker Gif"/>
                </div>
                
            </div>
        </div>
        <br/>
           
     
    </div>
  )
}

export default Home