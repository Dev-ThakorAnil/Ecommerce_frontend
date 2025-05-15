import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import Home from "./pages/Home";
import About from "./pages/About";
import Cart from "./pages/Cart";
import Collection from "./pages/Collection";
import Contact from "./pages/Contact";
import Login from "./pages/Login";
import Order from "./pages/Order";
import PlaceOrder from "./pages/PlaceOrder";
import Product from "./pages/Product";

import AppLayout from "./LayOut/AppLayout";

// Define the router configuration correctly
const router = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "about",
        element: <About />,
      },
      {
        path: "cart",
        element: <Cart />,
      },
      {
        path: "collection",
        element: <Collection />,
      },
      {
        path: "contact",
        element: <Contact />,
      },
      {
        path: "login",
        element: <Login />,
      },
      {
        path: "order",
        element: <Order />,
      },
      {
        path: "place-order",
        element: <PlaceOrder />,
      },
      {
        path: "product/:productId",
        element: <Product />,
      },
    ],
  },
]);

export default function App() {
  return <RouterProvider router={router} />;
}
