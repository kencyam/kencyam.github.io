import { Route, Routes, HashRouter, Link } from 'react-router';


//Main Pages
import { AboutMe, Landing, Projects } from "./components/index";

//CSS
import "./App.css";
import "./assets/navbar.css";

function App(){
  const router = (
    <div className = "Landing" style={{height: '100vh',margin: 'auto', position: 'relative', flex: 0}}>
      
    <HashRouter>
      <nav className = "nav-font">
        <Link to = "/" className = "main-nav-bar-title">Kenneth Yam</Link>
        <ul>
          <li><Link to = "/">Homepage</Link></li>
          <li><Link to = "/aboutme">About Me</Link></li>
          <li><Link to = "/projects">Projects</Link></li>
          <li><Link to = "/aboutme">Food</Link></li>
        </ul>
      </nav>
      <Routes>
        <Route path = "/" element = {<Landing />} />
        <Route path = "/aboutme" element = {<AboutMe />} />
        <Route path = "/projects" element = {<Projects />} />
      </Routes>

    </HashRouter>
    </div>
  )
  return router;
}

export default App;