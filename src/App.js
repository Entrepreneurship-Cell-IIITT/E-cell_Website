// import './App.css';
// import './WaterDroplet.css';
// import React, { useState, useEffect } from 'react';
import { useContext } from 'react';
import { Route, Routes } from "react-router-dom";
import Home from './Pages/Home/Home';
import About from './Pages/About/About';
import Navbar from './Components/Navbar/Navbar';
import Contact from './Pages/Contact/Contact';
import Events from './Pages/Events/Events';
import Gallery from './Pages/Gallery/Gallery';
import Associates from './Pages/Associates/Associates';
import Team from './Pages/Team/Team';


function App() {

  // const aboutSection = useRef(null);
  // const organizerSection = useRef(null);

  // const gotoAbout = () =>
  //   window.scrollTo({ top: aboutSection.current.offsetTop });
  // const gotoOrganizer = () =>
  //   window.scrollTo({ top: organizerSection.current.offsetTop });

  return (
    <div className="App">

      {/* <Home>

      <Routes>
        <Route path="/"
          element={
            <Home
            />
          }
        />
        <Route
          path="/about"
          element={<About />}
        />
        <Route
          path="/events"
          element={<Events />}
        />
        <Route
          path="/contacts"
          element={
            <Contact />
          }
        />
        <Route
          path="/gallery"
          element={
            <Gallery />
          }
        />
        <Route path="/team"
          element={<Team />} />

        <Route
          path="/associates"
          element={<Associates />}
        />
      </Routes>

      </Home> */}

      {/* <Navbar/>  */}
      {/* <About /> */}
      <Home />
      {/* <Contact/> */}
      {/* <Events/> */}

    </div>
  );
}

export default App;

// Events route below
      // <Route
      //   path="/events"
      //   element={<Events gotoAbout={gotoAbout} gotoOrganizer={gotoOrganizer} />}
      // />
