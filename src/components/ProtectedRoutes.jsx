import React from 'react'
import { Navigate, useNavigate } from 'react-router-dom'

const ProtectedRoutes = ({children}) => {
const isAuthenticated=localStorage.getItem('Password') ?true :false
console.log(isAuthenticated);
const router=useNavigate()
  return   isAuthenticated ? children : <Navigate to='/'/>
  
}

export default ProtectedRoutes
