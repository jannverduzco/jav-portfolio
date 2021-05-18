import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "./App.css";
import NavBar from "./Componets/NavBar";
import Home from "./Componets/Home";
import About from "./Componets/About";
import Projects from "./Componets/Projects";
import Contact from "./Componets/Contact";
import Footer from "./Componets/Footer";
import Logo from "./images/JAVLogo.png";


function App() {
  return (
    <div className="container">
      <Router>
      <img src={Logo} alt="logo" className="logo"></img>
        <NavBar />
        <Home />
        <About />
        <Projects />
        <Contact />
        <Footer />
      </Router>
    </div>
  );
}

export default App;
