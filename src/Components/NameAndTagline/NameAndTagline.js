import React, { useEffect, useState } from 'react'
import './NameAndTagline.css'

function NameAndTagline() {
  const tagline = "Catalyzing Reformers";
  const [animatedText, setAnimatedText] = useState("");
  console.log(animatedText);

  let i = 0;
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
          <span className='e-cell-name'>Entrepreneurship Cell</span>
          <span className='college-name'>IIIT Tiruchirappalli</span>
        </div>

        <div className='tagline-container'>
          <h4 className='tagline'>"{animatedText}"</h4>
        </div>

        <a href="LINK_URL" className="button" target='blank'>Join Us</a>
      </div>
    </div>
  )
}

export default NameAndTagline
