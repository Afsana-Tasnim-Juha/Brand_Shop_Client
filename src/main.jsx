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
import BrandShowcaseCard from './Pages/BrandShowcaseCard';


const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
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
        path: "/brandShowcase",
        element: <BrandShowcase></BrandShowcase>,
        loader: () => fetch('http://localhost:5000/product'),

      },
      {
        path: "/brandShowcaseCard",
        element: <BrandShowcaseCard></BrandShowcaseCard>,

      },
    ],
  },
]);




ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
