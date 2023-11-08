import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Body from "./pages/Body";
import ProductsPage from "./pages/ProductsPage";
import FoxNuts from "./pages/products/FoxNuts";
import Jewellery from "./pages/products/ImitationJewellery";
import CopperBottles from "./pages/products/CopperBottles";
import Denims from "./pages/products/Denims";
import Handicraft from "./pages/products/Handicraft";
import SourcingAgent from "./pages/SourcingAgent";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <Body />,
      },

      {
        path: "about-us",
        element: <About />,
      },
      {
        path: "contact-us",
        element: <Contact />,
      },
      {
        path: "sourcing-agent",
        element: <SourcingAgent />,
      },
      {
        path: "products",
        element: <ProductsPage />,
      },
      {
        path: "products/makhana",
        element: <FoxNuts />,
      },
      {
        path: "products/jewellery",
        element: <Jewellery />,
      },
      {
        path: "products/denims",
        element: <Denims />,
      },
      {
        path: "products/handicraft",
        element: <Handicraft />,
      },
      {
        path: "products/copper-bottles",
        element: <CopperBottles />,
      },
    ],
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
