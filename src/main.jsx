import React from 'react'
import ReactDOM from 'react-dom/client'
// import App from './App.jsx'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import './index.css'
import Home from './Pages/Home/Home';
import Users from './Pages/Users/Users';
import CreateUsers from './Pages/CreateUsers/CreateUsers';



const router = createBrowserRouter([
  {
    path: "/",
    element: <Home/>,
    children:[
      {
        path: "/users",
        element: <Users/>
      },
      {
        path: "/users/create",
        element: <CreateUsers/>
      }
    ]
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
      <RouterProvider router={router} />
  </React.StrictMode>,
)
