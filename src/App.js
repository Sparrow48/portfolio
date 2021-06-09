import "./App.css";
import { BrowserRouter as Router } from "react-router-dom";

import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import NavBar from "./components/Navbar/Navbar";
import Home from "./components/Home/Home";
import AboutMe from "./components/AboutMe/AboutMe";
import Services from "./components/Services/Services";
import Skills from "./components/Skills/Skills";

function App() {
  return (
    <Router>
      <div className='div'>
        <NavBar />
        <Home />
        <AboutMe />
        <Services />
        <Skills />
      </div>
    </Router>
  );
}

export default App;
