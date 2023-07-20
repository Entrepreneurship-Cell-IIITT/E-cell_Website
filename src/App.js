<<<<<<< HEAD
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './Components/Navbar/Navbar';
=======
// import './App.css';
// import './WaterDroplet.css';
// import React, { useState, useEffect } from 'react';
import { useContext } from 'react';
import { Route, Routes } from "react-router-dom";
>>>>>>> 4686bbbc377fe23a02f83d0c0cd76d8c0c17056a
import Home from './Pages/Home/Home';
import About from './Pages/About/About';
import Associates from './Pages/Associates/Associates';
import Gallery from './Pages/Gallery/Gallery';
import Team from './Pages/Team/Team';
import Contact from './Pages/Contact/Contact';
import Events from './Pages/Events/Events';
<<<<<<< HEAD
import Footer from './Components/Footer/Footer';
=======
import Gallery from './Pages/Gallery/Gallery';
import Associates from './Pages/Associates/Associates';
import Team from './Pages/Team/Team';

>>>>>>> 4686bbbc377fe23a02f83d0c0cd76d8c0c17056a

function App() {
  return (
    <div className="App">
<<<<<<< HEAD
      <Router>
        <>
          <Navbar />
          <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/About" element={<About />} />
          <Route path="/Contact" element={<Contact />} />
          <Route path="/Associates" element={<Associates />} />
          <Route path="/Events" element={<Events />} />
          <Route path="/Gallery" element={<Gallery />} />
          <Route path="/Team" element={<Team />} />
          </Routes>
          <Footer />
        </>
      </Router>
=======

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

>>>>>>> 4686bbbc377fe23a02f83d0c0cd76d8c0c17056a
    </div>
  );
}

export default App;









// import { BrowserRouter as Router, Route, useRoutes } from 'react-router-dom';
 
// import Navbar from './Components/Navbar/Navbar';
// import Home from './Pages/Home/Home';
// import About from './Pages/About/About';
// import Associates from './Pages/Associates/Associates';
// import Gallery from './Pages/Gallery/Gallery';
// import Team from './Pages/Team/Team';
// import Contact from './Pages/Contact/Contact';
// import Events from './Pages/Events/Events';
// import Footer from './Components/Footer/Footer';

// function App() {

//   // const aboutSection = useRef(null);
//   // const organizerSection = useRef(null);

//   // const gotoAbout = () =>
//   //   window.scrollTo({ top: aboutSection.current.offsetTop });
//   // const gotoOrganizer = () =>
//   //   window.scrollTo({ top: organizerSection.current.offsetTop });

//   return (
//     <div className="App">


// <>
//             <Navbar />
//             <Routes>
//               <Route path="/" element={<Home />} />
//               <Route path="/About" element={<About />} />
//               <Route path="/Contact" element={<Contact />} />
//               <Route path="/Associates" element={<Associates />} />
//               <Route path="/Events" element={<Events />} />
//               <Route path="/Gallery" element={<Gallery />} />
//               <Route path="/Team" element={<Team />} />
//             </Routes>
//             <Footer/>
//           </>

      {/* <Navbar/>  */}
      {/* <About /> */}
      {/* <Home />  */}
      {/* <Contact/> */}
      {/* <Events/> */}

    {/* </div>
  );
}

export default App; */}

// Events route below
      // <Route
      //   path="/events"
      //   element={<Events gotoAbout={gotoAbout} gotoOrganizer={gotoOrganizer} />}
      // />
