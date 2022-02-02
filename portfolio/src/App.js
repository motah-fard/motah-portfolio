import { Route } from "react-router-dom";
import Home from "./components/Home";
import Nav from "./components/Nav";
import Projects from "./components/Projects";
import ContactMe from "./components/ContactMe";

function App() {
  return (
    <div>
      <Route exact path="/">
        <Nav />
        <Home />
      </Route>
      <Route path="projects">
        <Projects />
      </Route>
      <Route path="contact-me">
        <ContactMe />
      </Route>
    </div>
  );
}

export default App;
