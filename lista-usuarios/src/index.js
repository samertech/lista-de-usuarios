import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';

import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { Home } from './components/Router/Home';

import ErrorPage from './components/Router/ErrorPage';
import Details from './components/Router/Details';






const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <ErrorPage/>,
    children: [
      {
        path: "/",
        element: <Home/>
      },
      {
        path: "details/:id",
        element: <Details/>
      },
      {
        path:"users",
        element: <data/>
      }
     
  
   

    ]
  },


]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
  <RouterProvider router={router} />
  </React.StrictMode>
);


