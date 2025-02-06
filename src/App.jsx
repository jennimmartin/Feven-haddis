import { useState } from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import {
  About,
  Consulting,
  Contact,
  Error,
  HomeLayout,
  Landing,
  Projects,
  Writing,
} from "./pages";

import "./App.css";

const router = createBrowserRouter([
  {
    path: "/",
    element: <HomeLayout />,
    children: [
      {
        path: "about",
        element: <About />,
      },
      {
        path: "consulting",
        element: <Consulting />,
      },
      {
        path: "contact",
        element: <Contact />,
      },
      {
        path: "error",
        element: <Error />,
      },
      {
        index: true,
        element: <Landing />,
      },
      {
        path: "projects",
        element: <Projects />,
      },
      {
        path: "writing",
        element: <Writing />,
      },
    ],
  },
]);

const App = () => {
  return <RouterProvider router={router} />;
};

export default App;
