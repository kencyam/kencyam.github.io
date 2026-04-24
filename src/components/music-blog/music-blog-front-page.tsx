import React, { Component } from "react";

import "../aboutme.css";

import { SimpleTreeView } from "@mui/x-tree-view/SimpleTreeView";
import { TreeItem } from "@mui/x-tree-view/TreeItem";

import MusicArticle00002 from "./music-articles/00001-00100/00002";

import { Link, Outlet } from "react-router-dom";
import ReturnToTopButton from "../webpage-components/ReturnToTop/ReturnToTopButton";

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
              <Link to="/musicblog/00002">
                2025 Billboard Hit Songs I Disliked
              </Link>
            </li>
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
              <Link to={"search?tag=0"}>Album Reviews (0)</Link>
            </h3>
            <h3>
              <Link to={"search?tag=1"}>Rambles (0)</Link>
            </h3>
            <h3>
              <Link to={"search?tag=2"}>Ranking Lists (2)</Link>
            </h3>
            <h3>
              <Link to={"search?tag=3"}>Singles Reviews (0)</Link>
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
              <Link to={"search?tag=7"}>Miscellaneous (0)</Link>
            </h3>
          </div>
        </div>
        <div className="box-middle">
          <p>
            <Outlet context={MusicArticle00002} />
          </p>
        </div>
        <div className="box-right">
          {/*Here will be the collapsible archive sorted by date */}
          {/*We are currently using a SimpleTreeView due to me hardcoding as test. Will transfer to RichTreeView once I deem how to insert info via date into this */}
          <div>
            <h3 className="title">Archives</h3>
            <SimpleTreeView itemID="Archives">
              <TreeItem itemId="archive-2026" label="2026 (2)">
                <TreeItem itemId="archive-april-2026" label="April (1)">
                  <ul>
                    <li>
                      <Link to="/musicblog/00002">
                        2025 Billboard Hit Songs I Disiked
                      </Link>
                    </li>
                  </ul>
                </TreeItem>
                <TreeItem itemId="archive-march-2026" label="March (1)">
                  <ul id="ul_march_2026">
                    <li>
                      <Link to="/musicblog/00001">
                        2025 Billboard Hit Songs I Liked
                      </Link>
                    </li>
                  </ul>
                </TreeItem>
              </TreeItem>
            </SimpleTreeView>
          </div>
        </div>

        <ReturnToTopButton />
      </div>
    );
  }
}

export default MusicBlog;
