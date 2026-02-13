import { Route, Routes, HashRouter, Link } from "react-router";

//Main Pages
import {
  AboutMe,
  Landing,
  Osucompare,
  Projects,
  MusicBlog,
} from "./components/index";

//CSS (the css lowest CSS file takes priority)
import "./App.css";
import "./assets/navbar.css";

//Route-Organizer
import "./route_organizer/music_blog_route";
import Music from "./route_organizer/music_blog_route";

function App() {
  const router = (
    <div className="Landing">
      <HashRouter>
        <nav className="nav-font">
          <Link to="/" className="main-nav-bar-title">
            Kenneth Yam
          </Link>
          <ul>
            <li>
              <Link to="/">Homepage</Link>
            </li>
            <li>
              <Link to="/aboutme">About Me</Link>
            </li>
            <li>
              <Link to="/projects">Projects</Link>
            </li>
            <li>
              <Link to="/musicblog">Music Blog</Link>
            </li>
          </ul>
        </nav>
        <Routes>
          <Route path="/" element={<Landing />} />
          <Route path="/aboutme" element={<AboutMe />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/musicblog" element={<MusicBlog />} />

          {/*For non organized links. Can update when there's a collection to put these under*/}
          <Route path="/osucompare" element={<Osucompare />} />
        </Routes>

        {/*Organized Routes*/}
        <Music />
      </HashRouter>
    </div>
  );
  return router;
}

export default App;
