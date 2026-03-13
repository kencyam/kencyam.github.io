import React from "react";
import * as ReactDOM from "react-dom/client";
import { createHashRouter, RouterProvider } from "react-router-dom";

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
import MusicArticle00001 from "./components/music-blog/music-articles/00001-00100/00001";
//#endregion

const router = createHashRouter([
  {
    path: "/",
    element: <Root />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "aboutme/",
        element: <AboutMe />,
      },
      {
        path: "",
        element: <Landing />,
      },
      {
        path: "projects/",
        element: <Projects />,
      },
      {
        path: "musicblog/",
        element: <MusicBlog />,
        children: [
          {
            path: "00001/",
            element: <MusicArticle00001 />,
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
