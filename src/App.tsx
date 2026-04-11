import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Experience from "./components/Experience";

function App() {
  return (
    <div className="min-h-screen bg-background text-text-primary">
      <Navbar />
      <Hero />
      <About />
      <Experience />
    </div>
  );
}

export default App;
