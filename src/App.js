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
import { Provider } from "react-redux";
import store from './utils/store'
const App = () => {
  return (
    <Provider store={store}>  
      <div className=" bg-slate-100 overflow-x-hidden">
      <Outlet />
    </div>
    </Provider>

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
