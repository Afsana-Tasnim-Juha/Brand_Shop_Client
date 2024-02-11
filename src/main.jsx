import React from 'react'
import ReactDOM from 'react-dom/client'

import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Root from './Root';
import Home from './Pages/Home';
import AddProduct from './Pages/AddProduct';
import BrandShowcase from './Pages/BrandShowcase';
import ProductDetails from './Pages/ProductDetails';

import ErrorPage from './Pages/ErrorPage';
import Login from './Pages/Login/Login';
import AuthProvider from './Components/AuthProvider';


const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/",
        element: <Home></Home>,

      },
      {
        path: "/addProduct",
        element: <AddProduct></AddProduct>

      },
      {
        path: "/Login",
        element: <Login></Login>,

      },
      {
        path: "/brandShowcase/:id",
        element: <BrandShowcase></BrandShowcase>,
        loader: ({ params }) => fetch(`http://localhost:5000/product/${params.id}`),

      },

      {
        path: "/productDetails/:id",
        element: <ProductDetails></ProductDetails>,
        loader: ({ params }) => fetch(`http://localhost:5000/product/${params.id}`),

      },

    ],
  },
]);




ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>

    <AuthProvider><RouterProvider router={router} /></AuthProvider>

  </React.StrictMode>,
)
