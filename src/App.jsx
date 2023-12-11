import reactLogo from "./assets/react.svg";
import About from "./components/About";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import Services from "./components/Services";
import Tours from "./components/Tours";
import Footer from "./components/Footer";
import { Id } from "./components/Id";


function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <About />
      <Services />
      <Tours />
      <Footer/>
      <Id/>
      <script src="./js/app.js"></script>
    </>
  );
}

export default App;
