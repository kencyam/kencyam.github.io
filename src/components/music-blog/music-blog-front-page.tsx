import React, { Component } from "react";
import "../aboutme.css";

import MusicArticle00001 from "./music-articles/00001-00100/00001";
import SideBar from "../webpage-components/Sidebar/Sidebar";
import { Link } from "react-router-dom";

//Will have Music table of contents on side, a search, and a front page of the most recent blog(s) one for now, maybe up to 5 later
class MusicBlog extends Component {
  render() {
    return (
      <div className="three-container">
        {/*This is how you comment. Has to be in a div*/}
        <div className="about-text">
          <h1>Music Blog</h1>
        </div>
        {/*Later, this will be changed to show the latest 5 by id automatically*/}
        <div className="box-left">
          <ul>
            <u>
              <b>Recent Posts</b>
            </u>
            <li>
              <Link to="/musicblog/00001">
                2025 Billboard Hit Songs I Liked
              </Link>
            </li>
          </ul>
          {/*Here will be the types of blog posts and their # of entries, coupled with updated x days/weeks/months/years ago */}
          <div style={{ textAlign: "center" }}>
            <h2>
              <u>
                <b>Topics</b>
              </u>
            </h2>
            <h3>
              <a>Album Reviews (0)</a>
            </h3>
            <h3>
              <a>Rambles (0)</a>
            </h3>
            <h3>
              <a>Ranking Lists (1)</a>
            </h3>
            <h3>
              <a>Singles Reviews (0)</a>
            </h3>
            <h3>
              <a>Personal Nostalgia (0)</a>
            </h3>
            <h3>
              <a>Artists (0)</a>
            </h3>
            <h3>
              <a>Retrospection (0)</a>
            </h3>
            <h3>
              <a>Miscellaneous (0)</a>
            </h3>
          </div>
        </div>
        <div className="box-middle">
          <p>
            <MusicArticle00001></MusicArticle00001>
          </p>
        </div>
        <div className="box-right">
          {/*Here will be the collapsible archive sorted by date */}
          <div>
            <ul>
              <u>
                <b>Archives</b>
              </u>
              <li>
                <Link to="/musicblog/00001">
                  2025 Billboard Hit Songs I Liked
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    );
  }
}

export default MusicBlog;
