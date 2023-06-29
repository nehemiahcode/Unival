import * as React from "react";
import * as ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Homepage from "./Pages/Homepage";
import Aboutpage from "./Pages/Aboutpage";
import Blogpage from "./Pages/Blogpage";
import "./index.css";
import Contact from "./Pages/Contactpage";
import Facility from "./Pages/Facilitypage";
import "./App.css"

const router = createBrowserRouter([
  {
    path: "/",
    element: <Homepage />,
  },
  {
  path: "/about",
  element: <Aboutpage />,
},
{
  path: "/blog",
  element: <Blogpage />,
},
{
  path: "/contact",
  element: <Contact />,
},
{
  path: "/facility",
  element: <Facility />,
},
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
