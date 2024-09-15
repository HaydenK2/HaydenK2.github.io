import React from 'react';
import './Projects.css';
import {useEffect, useRef} from 'react';

const Home = () => {
    //  will store the classes that use ref
    const elementsRef = useRef([]);

    useEffect(() => {

        // handles intersection events
        const handleIntersection = (entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    // console.log("add the view!");
                    entry.target.classList.add('in-view');
                } 

                //  use this if we want to play the animation again (no. we don't want to)
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
        
        <div className = "project-container">
        
            <div className ="section-title-container">
                <h1> My Projects </h1>
                <h6> A portfolio of all the projects I have done in my career </h6>
            </div>
            <br/>
            <br/>
            <br/>
            <br/>

            <div className="left-container animate">
                <div ref={addToElesRef} className ="left-box-container ">
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
                    <div className="project-gif-container">
                        <img className="project-gif" src='/gifs/JobAppTrackerDemo.gif' alt="Job App Tracker Gif"/>
                    </div>

                </div>
            </div>
      

            <br/>
            <div className="right-container">
                <div ref={addToElesRef} className ="right-box-container animate">
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
                <div ref={addToElesRef} className ="left-box-container">
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
                <div ref={addToElesRef} className ="right-box-container">
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
                <div ref={addToElesRef} className ="left-box-container">
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
                <div ref={addToElesRef} className ="right-box-container">
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