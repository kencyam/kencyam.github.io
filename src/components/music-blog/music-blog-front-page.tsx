import React, { Component } from "react";
import "../aboutme.css";

class MusicBlog extends Component {
  render() {
    return (
      <div style={{ width: "100%", margin: "auto" }}>
        {/*This is how you comment. Has to be in a div*/}
        <div className="about-text">
          <h1>Music Blog</h1>
        </div>

        <div className="about-paragraph">
          <p>
            Coming soon! First post after the year ends for Billboard's charts
            2025 (End of November/Early December)
          </p>
        </div>
      </div>
    );
  }
}

export default MusicBlog;
