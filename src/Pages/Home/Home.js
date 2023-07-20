import React from 'react';
import './Home.css'
import SocialMedia from '../../Components/SocialMedia/SocialMedia';
import NameAndTagline from '../../Components/NameAndTagline/NameAndTagline';
import Navbar from '../../Components/Navbar/Navbar';
import Footer from '../../Components/Footer/Footer';

function Home() {

  return (   
    <div className='home'>
      <Navbar/>
      <SocialMedia className='social-media'/>
      <NameAndTagline className="name-and-tagline"/>
      <Footer className='footer'/>
    </div>
  )
}

export default Home
