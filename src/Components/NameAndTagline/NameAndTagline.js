import React,{ useEffect, useState } from 'react'
import './NameAndTagline.css'

function NameAndTagline() {


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
        <div>
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

export default NameAndTagline
