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
      <div className="h-screen bg-white">
        <div className="flex flex-col items-center justify-center h-full">
          <h3 className="text-3xl mb-4">
            Thanks for visiting my GSAP example.
          </h3>
          <h3 className="text-3xl">Design copied from devaslife on YouTube</h3>
        </div>
      </div>
    </>
  );
}

export default App;
