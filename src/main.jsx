import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

// import 'bootstrap/dist/css/bootstrap.css';
import About from './pages/About.jsx';
import Portfolio from './pages/Portfolio.jsx';
import Contact from './pages/Contact.jsx';
import Resume from './pages/Resume.jsx';
// import Technologies from './Technologies.jsx';
//This line below removes lots of style!!!!!!!!!!
//import "bootstrap/dist/css/bootstrap.min.css";
 import "bootstrap/dist/js/bootstrap.bundle.min.js";
import "./index.css";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App/>,
    children: [
      {
        path: "/",
        element: <About/>,
      },
      {
        path: "about",
        element: <About/>,
      },
      {
        path: "portfolio",
        element: <Portfolio/>,
      },
      {
        path: "resume",
        element: <Resume/>,
      },
      {
        path: "contact",
        element: <Contact/>,
      },
      // {
      //   path: "technologies",
      //   element: <Technologies/>,
      // }
    ],
  },
]);

// Render the RouterProvider component
ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router}>
      <App />
    </RouterProvider>
  </React.StrictMode>
);
