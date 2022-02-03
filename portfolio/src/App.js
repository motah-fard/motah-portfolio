import {Route, Switch} from "react-router-dom"
import Home from './components/Home'
import Projects from './components/Projects'
import ContactMe from './components/ContactMe'
import Nav from './components/Nav'
function App() {
  return (
    <div className="App">
   <Switch>
        <Route exact path="/">
          <Nav />
          <Home />
        </Route>
        <Route path="/projects">
        <Nav />
          <Projects />
        </Route>
        <Route path="/contact-me">
        <Nav />
          <ContactMe />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
