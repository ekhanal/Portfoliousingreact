import Home from "./components/Home";
import NavBar from "./components/NavBar";
import About from "./components/About";
import Experience from "./components/Experience";
import Contact from "./components/Contact";
import SocialLinks from "./components/SocialLinks";



function App() {
  return (
    <div>
     <NavBar/>
     <Home />
     <About />
     <Experience/>
     <Contact />
     
     <SocialLinks/>
  
    </div>
    
  );
}

export default App;
