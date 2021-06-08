import "./App.css";
import { BrowserRouter as Router } from "react-router-dom";

import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import NavBar from "./components/Navbar/Navbar";
import Home from "./components/Home/Home";

function App() {
  return (
    <Router>
      <div className='div'>
        <NavBar />
        <Home />
        <div className='div'></div>
      </div>
    </Router>
  );
}

export default App;
