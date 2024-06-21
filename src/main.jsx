import React  from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'

import { createBrowserRouter, RouterProvider, Route } from 'react-router-dom'; 

import "./index.css";
// Paginas
import Home from './Routes/Home.jsx';
import NewPots from './Routes/NewPots.jsx';
import Admin from './Routes/Admin.jsx';
import Post from './Routes/Post';
import EditPost from './Routes/EditPost.jsx';

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
    {
      path: "/posts/:id",
      element: <Post />
    },
    {
      path: "/admin",
      element: <Admin />,
    },
    {
      path:"/posts/edit/:id",
      element: <EditPost />,
    },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
  <RouterProvider router={router} />
  </React.StrictMode>,
)
