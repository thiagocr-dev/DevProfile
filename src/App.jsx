import { useState } from 'react'
import { Route, Routes } from 'react-router'
import Home from './pages/Home'
import DevProfile from './pages/DevProfile'
import CreateDev from './pages/CreateDev'

function App() {

  return (
    <Routes>
      <Route path='/' element={<Home/>} />
      <Route path='/dev/:username' element={<DevProfile/>} />
      <Route path='/dev/crear' element={<CreateDev/>} />
    </Routes>
  )
}

export default App
