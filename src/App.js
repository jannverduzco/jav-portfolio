import "./App.css";
import NavBar from "./Componets/NavBar";
import Home from "./Componets/Home";
import About from "./Componets/About";
import Projects from "./Componets/Projects";
import Contact from "./Componets/Contact";

function App() {
  return (
    <div className="container">
      <NavBar />
      <Home />
      <About />
      <Projects />
      <Contact />
    </div>
  );
}

export default App;
