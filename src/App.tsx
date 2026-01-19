import "./App.css";
import Layout from "./components/Layout/Layout";
import About from "./components/Sections/About/About";
import Experience from "./components/Sections/Experience/Experience";
import Education from "./components/Sections/Education/Education";
import Skills from "./components/Sections/Skills/Skills";
import Projects from "./components/Sections/Projects/Projects";
import Contact from "./components/Sections/Contact/Contact";

function App() {
  return (
    <Layout>
      <div className="content-container">
        <About />
        <Experience />
        <Education />
        <Skills />
        <Projects />
        <Contact />
      </div>
    </Layout>
  );
}

export default App;
