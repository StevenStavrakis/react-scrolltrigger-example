import About from "./components/About";
import Hero from "./components/Hero";
import ParallaxTest from "./components/ParallaxTest";
import Works from "./components/Works";

function App() {
  return (
    <>
      <Hero />
      <About />
      <Works />
      <div className="h-screen"></div>
    </>
  );
}

export default App;
