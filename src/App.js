import { Home} from "./pages/index";
import { Navbar } from "./components/index";
import Aos from "aos";
import 'aos/dist/aos.css'; // Import AOS styles globally
import { useEffect } from 'react';
import {BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  useEffect(() => {
    Aos.init({
      duration:2000,
      once: true
    });
  },[])

  return (
    <Router>
      <Navbar/>
      <Routes>
        <Route path='/' element={<Home/>}/>
        {/* <Route path='/About' element={<About/>}/>
        <Route path='/Services' element={<Services/>}/>
        <Route path='/Safety' element={<Safety/>}/>
        <Route path='/Contact' element={<Contact/>}/> */}
      </Routes>
    </Router>
  );  
}

export default App;
