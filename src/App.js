import { BrowserRouter,Switch,Route } from 'react-router-dom';
import './App.css';
import Home from './pages/Home/Home';
import Projects from './pages/Projects/Projects';
import Contact from './pages/Contact/Contact';


function App() {
  return (
    <div className="App">
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

        <Route path="contact">
        <Contact></Contact>
        </Route>
      </Switch>
      </BrowserRouter>
      
    </div>
  );
}

export default App;
