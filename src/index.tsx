import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Layout from './Layout';
import Home from './Components/Home';
import Trendings from './Components/Trendings';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);


// Router setup
const router = createBrowserRouter([
  {
    element : <Layout />,
    children : [
      {
        path : "/",
        element : <Home />
      },
      {
        path : "/trendings",
        element : <Trendings />
      }
    ]
  },

])

root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
