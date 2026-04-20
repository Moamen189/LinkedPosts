import React from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Layout from './components/Layout/Layout';
import Login from './components/Login/Login';
import Register from './components/Register/Register';

const router = createBrowserRouter([
  {
    path: '',
    element: <Layout/>,
    children: [
      {
        path: 'login',
        element: <Login/>,
      },
      {
        path: 'register',
        element: <Register/>,
      },
      {
        path: '*',
        element: <div>404 Not Found</div>,
      }
    ],
  },
]);
const App = () => {
  return (
    <>
      <RouterProvider router={router}></RouterProvider>
    </>
  );
}

export default App;
