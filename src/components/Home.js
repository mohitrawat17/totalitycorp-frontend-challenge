import React from "react";
import Header from "./Header";
import { Outlet } from "react-router-dom";
import Footer from "./Footer";
import { Provider } from "react-redux";
import store from "../utils/store";
import ProtectedRoutes from "./ProtectedRoutes";

const Home = () => {
  return (
    <div>
      <Provider store={store}>
        <Header />
        <ProtectedRoutes>
          <Outlet />
        </ProtectedRoutes>

        <Footer />
      </Provider>
    </div>
  );
};

export default Home;
