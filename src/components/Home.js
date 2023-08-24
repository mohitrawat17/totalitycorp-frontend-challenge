import React from 'react'
import Header from './Header'
import { Outlet } from 'react-router-dom'
import Footer from './Footer'
import { Provider } from "react-redux";
import store from '../utils/store'

const Home = () => {
  return (
    <div>
    <Provider store={store}>
      <Header/>
      <Outlet/>
      <Footer/>
      </Provider>
    </div>
  )
}

export default Home

