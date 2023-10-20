import React from 'react'
import ReactDOM from 'react-dom/client'
// import App from './App.jsx'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import App from './App';
import Home from './pages/home';
import AddProducts from './pages/AddProducts';
import MyCart from './pages/MyCart';
import Login from './pages/Login';
import Register from './pages/Register';
import Authprovider from './components/Authprovider';
import PrivateRout from './components/privaterout';
import ShowBrandCards from './pages/showbrandcards';
// import Authprovider from './components/Authprovider';

const router = createBrowserRouter([
  {
    path: "/",
    element:<App></App>,
    children:[
      {
        path:'/',
        element:<Home></Home>,
        loader:()=>fetch('http://localhost:5000/add_products')
      },
      {
        path:'/brand_card/:id',
        element:<PrivateRout><ShowBrandCards></ShowBrandCards></PrivateRout>,
        loader:()=>fetch(`http://localhost:5000/add_products`)
      },
      {
        path:'/add_products',
        element:<PrivateRout><AddProducts></AddProducts></PrivateRout>
      },
      {
        path:'/my_cart',
        element:<PrivateRout><MyCart></MyCart></PrivateRout>
      }
    ]
  },
  {
    path:'/login',
    element:<Login></Login>
  },
  {
    path:'/register',
    element:<Register></Register>
  }
]);


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Authprovider>
    <RouterProvider router={router} />

    </Authprovider>
  </React.StrictMode>,
)
