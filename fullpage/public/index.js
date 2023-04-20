import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";

import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./pages/home";
import '../node_modules/font-awesome/css/font-awesome.min.css'; 
 
const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
    errorElement: <h1>SORROY.........</h1>,
  },

]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);


