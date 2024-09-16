import React from 'react'
import {Image} from 'react-bootstrap';
import {Link} from 'react-router-dom';
import "./Footer.css"
const Footer = () => {
  return (
    <div className="footer">
        <div className="social-link-container">
          <div className="social-image-container">
            <Link to="https://www.linkedin.com/in/hayden-kim-az/">
              <Image src="/company_images/LI-In-Bug.png" className="linkedInIcon" alt="LinkedIn"/>
            </Link>
          </div>

        </div>
        <div className="social-link-container">
          <div className="social-image-container">
            <Link to="https://github.com/HaydenK2">
              <Image src="/company_images/github-mark-white.png" className="gitHubIcon" alt="GitHub"/>
            </Link>
          </div>
        </div>
        <div className="social-link-container">
          <div className="social-image-container">
            <Link to="http://www.youtube.com/@AzurelenZ">
              <Image src="/company_images/yt_logo_rgb_dark.png" className="youtubeIcon" alt="Youtube"/>
            </Link>
          </div>
        </div>
        <div className="long-container">

        </div>
        <div className="rights-container">
          <div className="text-rights">
            © 2024 Hayden Kim. All Rights Reserved.
          </div>
          
          <div>
            Website made using React and CSS
          </div>
        </div>

        
        
    </div>
  )
}

export default Footer