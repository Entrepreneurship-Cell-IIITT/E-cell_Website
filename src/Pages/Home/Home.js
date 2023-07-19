import React from 'react';
// import { IconButton, colors, withTheme } from '@mui/material';
// import InstagramTcon from '@mui/icons-material/Instagram';
// import TwitterIcon from '@mui/icons-material/Twitter';
// import LinkedInIcon from '@mui/icons-material/LinkedIn';
// import FacebookIcon from '@mui/icons-material/Facebook';
// import MailOutlineIcon from '@mui/icons-material/MailOutline';

import './Home.css'
import SocialMedia from '../../Components/SocialMedia/SocialMedia';
import NameAndTagline from '../../Components/NameAndTagline/NameAndTagline';
// import BackgroungAnimation from '../BackgroundAnimation/BackgroundAnimation'

function Home() {

//   const white = {
//     color:'grey'
// }

    
    // const tagline = '"Catalyzing Reformers"';
    // const [animatedText, setAnimatedText] = useState("");
    // // const tagline = "Catalyzing Reformers";
    // let i = 1;
    // console.log(tagline.length);
  
    // useEffect(() => {
    //   const typingInterval = setInterval(() => {
    //     if (i < tagline.length) {
    //       setAnimatedText((prevText) => prevText + tagline.charAt(i));
    //       console.log(tagline.charAt(i));
    //       i++;
    //     } else {
    //       clearInterval(typingInterval);
    //     }
    //   }, 100); // Adjust the interval for the typing speed
  
    //   return () => clearInterval(typingInterval);
    // }, []);

  return (   
    <div className='home'>
      <SocialMedia className='social-media'/>
      <NameAndTagline className="name-and-tagline"/>
    </div>
  )
}

export default Home
