import { Divider } from "@mui/material";
import { Link, Outlet } from "react-router-dom";

//CSS (the css lowest CSS file takes priority)
import "../App.css";
import "../assets/navbar.css";

export default function Root() {
  return (
    <>
      <div className="Landing">
        <div>
          <nav>
            <Link to={"/"} className="main-nav-bar-title">
              Kenneth Yam
            </Link>
            <ul>
              <li>
                <Link className="header-text" to="/">
                  Homepage
                </Link>
              </li>
              <li>
                <Link className="header-text" to="/aboutme">
                  About Me
                </Link>
              </li>
              <li>
                <Link className="header-text" to="/projects">
                  Projects
                </Link>
              </li>
              <li>
                <Link className="header-text" to="/musicblog">
                  Music Blog
                </Link>
              </li>
            </ul>
          </nav>
        </div>
        <Outlet />
      </div>
    </>
  );
}
