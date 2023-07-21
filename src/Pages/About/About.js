import React from 'react'
import './About.css'
import Carousel from '../../Components/Carousel/Carousel'
import Navbar from '../../Components/Navbar/Navbar'
import Footer from '../../Components/Footer/Footer'

function About() {
  return (
    <div className='about'>
      {/* <Navbar/> */}
      <Carousel className='carousel' />

       <div className='about-paragaraph'>
        <h2>About Us</h2>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          Nunc blandit tellus nec mauris dignissim, eu placerat arcu laoreet.
          Integer et tortor et magna laoreet dignissim.
          Nullam consequat in est non maximus.
          Phasellus interdum laoreet dolor, eu bibendum est feugiat eu.
          Nullam bibendum massa vel ex feugiat, at hendrerit mauris ullamcorper.
          Vivamus dapibus lectus eu eros accumsan, ac blandit enim rhoncus.
          Praesent vel felis vel arcu efficitur pellentesque vel id tellus.
          Vivamus tincidunt bibendum augue. Proin vitae neque in orci pharetra eleifend.
        </p>

      </div> 
      {/* <Footer/> */}
    </div>
  )
}

export default About
