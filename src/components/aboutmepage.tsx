import React, { Component } from "react";
import "./aboutme.css";

class AboutMe extends Component {
  render() {
    return (
      <div style={{ width: "100%", margin: "auto" }}>
        {/*This is how you comment. Has to be in a div*/}
        <div className="about-text">
          <h1>About Me</h1>
        </div>

        <div className="about-paragraph">
          <p>
            Hi, my name is Kenneth, and I'm a UCI graduate. I majored in
            Computer Game Science. I have worked at the University of
            California, Los Angeles as a software developer since 2021. Making
            sure that I understand is important, and I will ask to help me help
            others, from the stakeholder to colleagues. A solution for the users
            that assists and maintains is what I strive for. I also love
            listening to music and learning about the history of pop music, so I
            make sure I listen to what's popular to see how culture and tastes
            change and how I adapt with the changing climate.
          </p>
        </div>
      </div>
    );
  }
}

export default AboutMe;

/*
Went to UCI, major
Club stuff
Hobbies
What I like (world geography, how I got my DS (how I work for my goals))
extra stuff I guess
*/
