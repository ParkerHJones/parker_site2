import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from './components/Home';
import Footer from './components/Footer'; 
import About from './components/About'; 
import NavBar from './components/NavBar'; 
import Skills from './components/Skills';
import Education from './components/Education';
import Resume from './components/Resume';
import Contact from './components/Contact';
import Tennis from './components/Tennis';
import './App.css';

function App() {
  return (
      <Router>   
    <div className="app">
      <NavBar/>
    <Switch>
    <Route exact path="/" component={Home} />
    <Route exact path="/about" component={About} />
    <Route exact path="/skills" component={Skills} />
    <Route exact path="/education" component={Education} />
    <Route exact path="/resume" component={Resume} />
    <Route exact path="/contact" component={Contact} />
    <Route exact path="/tennis" component={Tennis} />
    </Switch>
    <Footer />
    </div>
    </Router>
  );
}

export default App;
