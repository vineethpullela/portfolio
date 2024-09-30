import './App.css';
import About from './components/About';
import Certification from './components/Certification';
import Contact from './components/Contact';
import Footer from './components/Footer';
import Hero from './components/Hero';
import MyWork from './components/MyWork';
import Navbar from "./components/Navbar";
import Services from './components/Services';

function App() {
  return (
    <div className="App">
     <Navbar/>
     <Hero/>
     <About/>
     <Services/>
     <MyWork/>
     <Certification/>
     <Contact/>
     <Footer/>
   
    </div>
  );
}

export default App;
