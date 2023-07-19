import React, { useEffect, useState } from 'react';
import { IconButton, colors, withTheme } from '@mui/material';
import InstagramTcon from '@mui/icons-material/Instagram';
import TwitterIcon from '@mui/icons-material/Twitter';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import FacebookIcon from '@mui/icons-material/Facebook';
import MailOutlineIcon from '@mui/icons-material/MailOutline';

import './Home.css'
// import BackgroungAnimation from '../BackgroundAnimation/BackgroundAnimation'

function Home() {

    const white = {
        color:'grey'
    }

    
    const tagline = '"Catalyzing Reformers"';
    const [animatedText, setAnimatedText] = useState("");
    // const tagline = "Catalyzing Reformers";
    let i = 1;
    console.log(tagline.length);
  
    useEffect(() => {
      const typingInterval = setInterval(() => {
        if (i < tagline.length) {
          setAnimatedText((prevText) => prevText + tagline.charAt(i));
          console.log(tagline.charAt(i));
          i++;
        } else {
          clearInterval(typingInterval);
        }
      }, 100); // Adjust the interval for the typing speed
  
      return () => clearInterval(typingInterval);
    }, []);

  return (  
    
    
    <div className='home'>
        {/* <BackgroungAnimation /> */}
        {/* <GoogleFont href='https://fonts.googleapis.com/css2?family=Montserrat:wght@300&display=swap' /> */}
      
    <div className='MuiIconButton-root' >
        <IconButton component="a" href="YOUR_TWITTER_LINK" target="_blank">
            <MailOutlineIcon style={white}/>
         </IconButton>

        <IconButton component="a" href="YOUR_GITHUB_LINK" target="_blank">
            <InstagramTcon style={white} />
        </IconButton>

        <IconButton component="a" href="YOUR_TWITTER_LINK" target="_blank">
            <TwitterIcon style={white}/>
         </IconButton>

        <IconButton component="a" href="YOUR_LINKEDIN_LINK" target="_blank">
            <LinkedInIcon style={white}/>
        </IconButton>

        <IconButton component="a" href="YOUR_FACEBOOK_LINK" target="_blank">
            <FacebookIcon style={white}/>
        </IconButton>
      </div>
      <div className='parentBoxOfHomepageComponent'>

        <div className='name'>
            <span className='e-cell-name'>Entrepreneurship cell </span>  <span className='college-name'>IIIT Tiruchiraappalli</span>
         </div>

        <div className='tagline-container'>
            <h4 className='tagline'>{animatedText}</h4>
        </div>
        
        <a href="LINK_URL" className="button" target='blank'>Join Us</a>
      </div>
    </div>
      


  )
}

export default Home
