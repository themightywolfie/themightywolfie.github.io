import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Experience from "./components/Experience";
import ProjectsGrid from "./components/Projects/ProjectsGrid";

function App() {
  return (
    <div className="min-h-screen bg-background text-text-primary">
      <Navbar />
      <Hero />
      <About />
      <Experience />
      <ProjectsGrid />
    </div>
  );
}

export default App;
