import React, { Component } from "react";
//import { Grid, Cell } from 'react-mdl';
import "ag-grid-community/styles/ag-grid.css";
import "ag-grid-community/styles/ag-theme-quartz.css";
import "../App.css";

class Landing extends Component {
  render() {
    return (
      <div style={{ width: "100%", margin: "auto" }}>
        {/*This is how you comment. Has to be in a div*/}

        <div className="banner-text">
          <h1>
            Hello! My name is Kenneth Yam, and I am a Game Designer and Software
            Engineer.
          </h1>
          <p>C# · Python · SQL · React · HTML/CSS</p>

          <div className="profile-links">
            <a
              href="https://www.linkedin.com/in/kenneth-yam-b89192195/"
              rel="noopener noreferrer"
              target="_blank"
            >
              <i className="fa fa-linkedin-square" aria-hidden="true" />
            </a>
            <a
              href="https://github.com/kcyam"
              rel="noopener noreferrer"
              target="_blank"
            >
              <i className="fa fa-github-square" aria-hidden="true" />
            </a>
          </div>
        </div>
        <div className="banner-text">
          <p>e-mail: kcyam8@gmail.com</p>
        </div>
      </div>
    );
  }
}
export default Landing;
