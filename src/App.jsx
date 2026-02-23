import { Route, Routes } from 'react-router'
import Layout from './layouts/layout'
import Home from './pages/Home'
import DevProfile from './pages/DevProfile'
import CreateDev from './pages/CreateDev'

function App() {

  return (
    <Routes>
      <Route element={<Layout />}>
        <Route path='/' element={<Home/>} />
        <Route path='/dev/:username' element={<DevProfile/>} />
        <Route path='/dev/crear' element={<CreateDev/>} />
      </Route>
    </Routes>
  )
}

export default App
