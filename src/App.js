import React from "react";
import ReactDOM from "react-dom/client";
import Home from "./components/Home";
import { Outlet, RouterProvider, createBrowserRouter } from "react-router-dom";
import Cart from "./components/Cart";
import Help from "./components/Help";
import Contact from "./components/Contact";
import Deals from "./components/Deals";
import Error from "./components/ErrorElement";
import Registration from "./components/Registration";
import Body from "./components/Body";
import Login from "./components/Login";

const App = () => {
  return (
    <div className=" bg-slate-100 overflow-x-hidden">
      <Outlet />
    </div>
  );
};

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <Error />,
    children: [
      {
        path: "/",
        element: <Registration />,
      },
      {
        path: "/login",
        element: <Login/>,
      },
      {
        path: "/home",
        element: <Home />,
        children: [
          {
            path: "",
            element: <Body />,
          },
          {
            path: "contact",
            element: <Contact />,
          },
          {
            path: "deals",
            element: <Deals />,
          },
          {
            path: "help",
            element: <Help />,
          },
          {
            path: "cart",
            element: <Cart />,
          },
        ],
      },
    ],
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={appRouter} />);
