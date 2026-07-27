import React from "react";
import * as ReactDOM from "react-dom/client";
import {
  createHashRouter,
  RouterProvider,
  useLoaderData,
  useActionData,
} from "react-router";

import "bootstrap/dist/css/bootstrap.css";
import Root from "./route_organizer/Root";
import ErrorPage from "./route_organizer/ErrorPage";

//Main Pages
import {
  AboutMe,
  Landing,
  Osucompare,
  Projects,
  MusicBlog,
} from "./components/index";

//#region musicarticles
import MusicBlogSearch from "./components/music-blog/music-blog-search";
import MusicArticle00001 from "./components/music-blog/music-articles/00001-00100/00001";
import MusicArticle00002 from "./components/music-blog/music-articles/00001-00100/00002";
import MusicArticle00003 from "./components/music-blog/music-articles/00001-00100/00003";
import MusicArticle00004 from "./components/music-blog/music-articles/00001-00100/00004";
import MusicArticle00005 from "./components/music-blog/music-articles/00001-00100/00005";
import MusicArticle00006 from "./components/music-blog/music-articles/00001-00100/00006";
import MusicArticle00007 from "./components/music-blog/music-articles/00001-00100/00007";
import BillboardHot100CalendarByYear from "./components/music-blog/archives/billboard-hot-100-by-calendar-year";
//#endregion

const router = createHashRouter([
  {
    path: "/",
    element: <Root />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/aboutme",
        element: <AboutMe />,
      },
      {
        path: "/",
        element: <Landing />,
      },
      {
        path: "/projects",
        element: <Projects />,
      },
      {
        path: "/music-blog",
        element: <MusicBlog />,
        children: [
          { index: true, element: <MusicArticle00007 /> }, //update this for initial element (i.e. new original for front page)
          {
            path: "search/",
            element: <MusicBlogSearch />,
          },
          { path: "archives/", element: <BillboardHot100CalendarByYear /> }, //will get more in depth when more info is uploaded
          {
            path: "00001/",
            element: <MusicArticle00001 />,
          },
          {
            path: "00002/",
            element: <MusicArticle00002 />,
          },
          {
            path: "00003/",
            element: <MusicArticle00003 />,
          },
          {
            path: "00004/",
            element: <MusicArticle00004 />,
          },
          {
            path: "00005/",
            element: <MusicArticle00005 />,
          },
          {
            path: "00006/",
            element: <MusicArticle00006 />,
          },
          {
            path: "00007/",
            element: <MusicArticle00007 />,
          },
        ],
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    {/*<App />*/}
    <RouterProvider router={router} />
  </React.StrictMode>,
);

//build is npm run dev
