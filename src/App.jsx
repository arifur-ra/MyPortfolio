import "bootstrap/dist/css/bootstrap.min.css";
import Particles from "react-particles-js";
import "./App.css";
import AboutMe from "./components/AboutMe/AboutMe";
import ContactMe from "./components/Contact/ContactMe";
import Experience from "./components/Experience/Experience";
import Footer from "./components/Footer/Footer";
import Home from "./components/Home/Home";
import Navbar from "./components/Navbar/Navbar";
import ProjectContainer from "./components/Project/ProjectContainer";
import Skills from "./components/Skills/Skills";

function App() {
  return (
    <>
      <Particles
        className="particles-canvas"
        params={{
          particles: {
            number: {
              value: 35,
              density: {
                enable: true,
                value_area: 900,
              },
            },
            shape: "square",
            stroke: {
              width: 5,
              color: "#f9ab00",
            },
          },
        }}
      />
      <Navbar />
      <Home />
      <AboutMe />
      <Skills />
      <ProjectContainer />
      <Experience />
      <ContactMe />
      <Footer />
    </>
  );
}

export default App;
