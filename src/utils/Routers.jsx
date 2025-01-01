import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from '../components/Home'
import Carddetails from '../components/Carddetails'

function Routers() {
  return (
    <div>
        <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/products/:id' element={<Carddetails />}/>
        </Routes>
    </div>
  )
}

export default Routers