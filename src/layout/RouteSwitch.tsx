import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Navbar from './Navbar'
import Home from '../routes/Home'
import Shop from '../routes/Shop'
import About from '../routes/About'

export default function RouteSwitch (): JSX.Element {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/shop' element={<Shop />} />
        <Route path='/about' element={<About />} />
      </Routes>
    </BrowserRouter>
  )
}
