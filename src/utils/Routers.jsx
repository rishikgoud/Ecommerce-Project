import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from '../components/Home'
import Carddetails from '../components/Carddetails'
import Create from '../components/Create'
import Edit from '../components/Edit'

function Routers() {
  return (
    <div>
        <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/create' element={<Create />}></Route>
            <Route path='/products/:id' element={<Carddetails />}/>
            <Route path='/edit/:id' element={<Edit />}/>
        </Routes>
    </div>
  )
}

export default Routers