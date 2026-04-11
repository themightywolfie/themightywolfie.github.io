import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Experience from "./components/Experience";
import ProjectsGrid from "./components/Projects/ProjectsGrid";
import Skills from "./components/Skills";
import Education from "./components/Education";

function App() {
  return (
    <div className="min-h-screen bg-background text-text-primary">
      <Navbar />
      <Hero />
      <About />
      <Experience />
      <ProjectsGrid />
      <Skills />
      <Education />
    </div>
  );
}

export default App;
