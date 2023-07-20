import React from 'react';
import './Home.css'
import SocialMedia from '../../Components/SocialMedia/SocialMedia';
import NameAndTagline from '../../Components/NameAndTagline/NameAndTagline';
import Navbar from '../../Components/Navbar/Navbar';
import Footer from '../../Components/Footer/Footer';
import Animation1 from '../../Components/Animation1/Animation'

function Home() {

  return (   
    <>
    <div className='home'>
      {/* <Navbar/> */}
      
      <SocialMedia className='social-media'/>
      <NameAndTagline className="name-and-tagline"/>
      {/* <Footer className='footer'/> */}
    </div>
    <div>
    <Animation1 className="animation1"/>
    </div>
    </>
  )
}

export default Home
