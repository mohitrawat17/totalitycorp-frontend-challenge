import React from 'react'
import { useRouteError } from 'react-router-dom'

const Error = () => {
  const err=useRouteError();
  return (
    <div className='text-6xl h-full flex flex-col justify-center items-center'>
    <h1>Oops !</h1>
    <h1>{err.status+" "+err.statusText}</h1>
    </div>
  )
}

export default Error
