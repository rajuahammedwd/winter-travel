import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import MainLayout from './layout/MainLayout'
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from './Pages/Home/Home';
import About from './Pages/About/About';

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/about",
        element: <About />,
      }
    ]
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
