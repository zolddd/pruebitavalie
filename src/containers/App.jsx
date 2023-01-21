import React from 'react'
import { Route, BrowserRouter,Routes } from 'react-router-dom'
import Home from '../pages/Home'
import Login from '../pages/Login'
import Flexbox from '../pages/Flexbox'

export default function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<Home/>} />
      <Route path='/login' element={<Login/>} />
      <Route path='/flexbox' element={<Flexbox/>} />
        
    </Routes>
    </BrowserRouter>
  )
} 
