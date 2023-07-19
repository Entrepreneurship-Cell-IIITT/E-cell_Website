import React from 'react'
import './About.css'
import { useState } from 'react';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';

const images = [
    ''
  ];


function About() {
  return (
    <div className='about'>
      <div className='container'>
        <div className='carousel-part'>
          <h2>Gallery</h2>
            <Carousel showThumbs={false} >
              {images.map((imageUrl, index) => (
                <div key={index}>
                  <img src={imageUrl} alt={`Image ${index + 1}`} />
                </div>
              ))}
            </Carousel>
        </div>

        <div className='paragraph-part'>
          <h2>About US</h2>
          
        </div>
      </div>     
    </div>
  )
}

export default About
