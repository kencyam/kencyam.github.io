import React, { Component } from "react";

import "../aboutme.css";

import { SimpleTreeView } from "@mui/x-tree-view/SimpleTreeView";
import { TreeItem } from "@mui/x-tree-view/TreeItem";

import MusicArticleFront from "./music-articles/00001-00100/00005";

import { Link, Outlet } from "react-router-dom";
import ReturnToTopButton from "../webpage-components/ReturnToTop/ReturnToTopButton";

import TreeArchive from "./tree-archive";

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
          <ul className="links">
            <u>
              <b>Recent Posts</b>
            </u>
            <li>
              <Link to="/musicblog/00007">
                Compilation of All Public Charted Billboard Songs Sorted By Year
                (1959-Present)
              </Link>
            </li>
            <li>
              <Link to="/musicblog/00006">misery. - pupsies</Link>
            </li>
            <li>
              <Link to="/musicblog/00005">
                Bright Side Breathing - Harry Prasetya Tan
              </Link>
            </li>
            <li>
              <Link to="/musicblog/00004">Drake - Iceman</Link>
            </li>
            <li>
              <Link to="/musicblog/00003">Drop Dead - Olivia Rodrigo</Link>
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
              <Link to={"search?tag=0"}>Album Reviews (1)</Link>
            </h3>
            <h3>
              <Link to={"search?tag=1"}>Rambles (0)</Link>
            </h3>
            <h3>
              <Link to={"search?tag=2"}>Ranking Lists (2)</Link>
            </h3>
            <h3>
              <Link to={"search?tag=3"}>Singles Reviews (3)</Link>
            </h3>
            <h3>
              <Link to={"search?tag=4"}>Personal Nostalgia (0)</Link>
            </h3>
            <h3>
              <Link to={"search?tag=5"}>Artists (0)</Link>
            </h3>
            <h3>
              <Link to={"search?tag=6"}>Retrospection (0)</Link>
            </h3>
            <h3>
              <Link to={"search?tag=7"}>Miscellaneous (1)</Link>
            </h3>
            <h3>
              <Link to={"search?tag=8"}>Random Recommendations (1)</Link>
            </h3>
            <h3>
              <Link to={"search?tag=9"}>User Recommandations (0)</Link>
            </h3>
          </div>
        </div>
        <div className="box-middle">
          <Outlet key={location.pathname} context={MusicArticleFront} />
        </div>
        <div className="box-right">
          {/*Here will be the collapsible archive sorted by date */}
          {/*We are currently using a SimpleTreeView due to me hardcoding as test. Will transfer to RichTreeView once I deem how to insert info via date into this */}
          <div>
            <h3 className="title">Archives</h3>
            <TreeArchive></TreeArchive>
          </div>
          <div>
            <h3 className="title">Billboard Chart Archives</h3>
            <ul>
              <li>
                <Link to={"archives"}>Billboard Calendar Charts</Link>
              </li>
            </ul>
          </div>
        </div>

        <ReturnToTopButton />
      </div>
    );
  }
}

export default MusicBlog;
