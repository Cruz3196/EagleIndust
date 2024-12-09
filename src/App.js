import { Home, About, Services, Safety, Contact } from "./pages/index";
import { Navbar } from "./components/index";
import {BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    <Router>
      <Navbar/>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/About' element={<About/>}/>
        <Route path='/Services' element={<Services/>}/>
        <Route path='/Safety' element={<Safety/>}/>
        <Route path='/Contact' element={<Contact/>}/>
      </Routes>
    </Router>
  );  
}

export default App;
