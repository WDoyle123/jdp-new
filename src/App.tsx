import "./App.css";
import NavBar from "./components/NavBar";
import Hero from "./components/Hero";
import Services from "./components/Services";
import ServingTheSouth from "./components/ServingTheSouth";
import AboutUs from "./components/AboutUs";
import Testimonials from "./components/Testimonials";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

function App() {
  return (
    <>
      <NavBar />
      <main>
        <Hero />
        <Services />
        <ServingTheSouth />
        <AboutUs />
        <Testimonials />
        <Contact />
      </main>
      <Footer />
    </>
  );
}

export default App;

