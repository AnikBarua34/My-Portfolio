import { BrowserRouter,Switch,Route } from 'react-router-dom';
import './App.css';
import Home from './pages/Home/Home';
import Projects from './pages/Projects/Projects';
import Contact from './pages/Contact/Contact';
import ProductDetails from './pages/ProductDetails/ProductDetails';
import AboutMe from './pages/AboutMe/AboutMe';
import Blogs from './pages/Blogs/Blogs';
import ParticlesBackground from './ParticleBackground';


function App() {
  return (
    <div className="App">
      <ParticlesBackground></ParticlesBackground>
      <BrowserRouter>
      
      <Switch>
        <Route exact path="/">
        <Home></Home>
        </Route>
        <Route path="/home">
          <Home></Home>
        </Route>

        <Route path="/projects">
        <Projects></Projects>
        </Route>

        <Route path="/contact">
        <Contact></Contact>
        </Route>
        <Route path="/ProductDetails/:serviceId">
        <ProductDetails></ProductDetails>
        </Route>
        <Route path="/aboutMe">
      <AboutMe></AboutMe>
        </Route>
        <Route path="/blogs">
        <Blogs></Blogs>
        </Route>
      </Switch>
      </BrowserRouter>
      
    </div>
  );
}

export default App;
