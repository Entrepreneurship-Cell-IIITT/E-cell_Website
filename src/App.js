// import './App.css';
import Home from './Pages/Home/Home';
import About from './Pages/About/About';
import Navbar from './Components/Navbar/Navbar';
import Contact from './Pages/Contact/Contact';
import Events from './Pages/Events/Events';

function App() {

  // const aboutSection = useRef(null);
  // const organizerSection = useRef(null);

  // const gotoAbout = () =>
  //   window.scrollTo({ top: aboutSection.current.offsetTop });
  // const gotoOrganizer = () =>
  //   window.scrollTo({ top: organizerSection.current.offsetTop });

  return (
    <div className="App">

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
