import React from 'react'
import './Carousel.css'
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css'

// import Logo1 from "../../Assets/images/logo.png"
// import Logo2 from "../../Assets/images/logo1.png"

const imageUrls = [
    '../../Assets/images/logo.png',
    '../../Assets/images/logo1.png',
  ];

function AboutCarousel() {
  return (
    <div>
      <div className='carousel-part'>
          <h2>Gallery</h2>
            <Carousel className="hide-count" showThumbs={false} autoPlay={true} interval={3000} infiniteLoop={true}>
              {imageUrls.map((imageUrl, index) => (
                <div key={index}>
                  <img src={imageUrl} alt={`Image ${index + 1}`} />
                </div>
              ))}

              {/* <div>
                <img src={Logo1} alt="image 1"/>
              </div>

              <div>
                <img src={Logo2} alt="image 2"/>
              </div> */}
            </Carousel>
        </div>
    </div>
  )
}

export default AboutCarousel
