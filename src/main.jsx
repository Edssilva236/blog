import React  from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'

import { createBrowserRouter, RouterProvider, Route } from 'react-router-dom'; 

import "./index.css";
// Paginas
import Home from './Routes/Home.jsx';
import NewPots from './Routes/NewPots.jsx';

const router = createBrowserRouter([
  {
    element: <App />,
    children: [
    {
      path: "/",
      element: <Home />,
    },
    {
      path: "/new",
      element: <NewPots />,
    },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
  <RouterProvider router={router} />
  </React.StrictMode>,
)
