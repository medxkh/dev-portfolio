import Navbar from "./components/Navbar";
import Sidebar from "./components/Sidebar";
import { BrowserRouter as Router, Route } from "react-router-dom";
import About from "./components/About";
import Resume from "./components/Resume";
import Projects from "./components/Projects";

function App() {
  return (
    <Router>
      <div className="App">
        <div className="container">
          <div className="row">
            <div className="col-lg-3">
              <div className="app_sidebar">
                <Sidebar />
              </div>
            </div>
            <div className="col-lg-9 app_main_content">
              <Navbar />
              <Route exact path="/">
                <About />
              </Route>
              <Route path="/resume">
                <Resume />
              </Route>
              <Route path="/projects" component={Projects}>
                <Projects />
              </Route>
            </div>
          </div>
        </div>
      </div>
    </Router>
  );
}

export default App;
