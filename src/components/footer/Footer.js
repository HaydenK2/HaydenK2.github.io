import React from 'react'
import {Image} from 'react-bootstrap';
import {Link} from 'react-router-dom';
import "./Footer.css"
const Footer = () => {
  return (
    <div className="footer">
        <div className="social-link-container">
          <Link to="https://www.linkedin.com/in/hayden-kim-az/">
            <Image src="linkedIn" className="linkedInIcon" alt="LinkedIn"/>
          </Link>
        </div>
        <div className="social-link-container">
          <Link to="https://www.linkedin.com/in/hayden-kim-az/">
            <Image src="gitHub" className="gitHubIcon" alt="GitHub"/>
          </Link>
        </div>
        <div className="social-link-container">
          <Link to="http://www.youtube.com/@AzurelenZ">
            <Image src="youtube" className="youtubeIcon" alt="Youtube"/>
          </Link>
        </div>
        <div className="long-container">

        </div>
        <div className="rights-container">
          <div>
            © 2024 Hayden Kim. All Rights Reserved.
          </div>
          
          <div>
            Made with React and CSS
          </div>
        </div>

        
        
    </div>
  )
}

export default Footer