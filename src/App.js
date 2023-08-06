import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css'
import Home from './Pages/Home/Home';
import About from './Pages/About/About';
import Associates from './Pages/Associates/Associates';
import Gallery from './Pages/Gallery/Gallery';
import Team from './Pages/Team/Team';
import Contact from './Pages/Contact/Contact';
import Events from './Pages/Events/Events';
import Footer from './Components/Footer/Footer';
import Navbar from './Components/Navbar/Navbar';


function App() {
  return (
    <div className="App">
      <Navbar />
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/About" element={<About />} />
          <Route path="/Contact" element={<Contact />} />
          <Route path="/Associates" element={<Associates />} />
          <Route path="/Events" element={<Events />} />
          <Route path="/Gallery" element={<Gallery />} />
          <Route path="/Team" element={<Team />} />
        </Routes>
      </Router>
      <Footer />
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

{/* <Navbar/>  */ }
{/* <About /> */ }
{/* <Home />  */ }
{/* <Contact/> */ }
{/* <Events/> */ }

{/* </div>
  );
}

export default App; */}

// Events route below
      // <Route
      //   path="/events"
      //   element={<Events gotoAbout={gotoAbout} gotoOrganizer={gotoOrganizer} />}
      // />
