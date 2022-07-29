import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Navbar from './Navbar'
import Home from './Home'
import Shop from './Shop'
import About from './About'

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
