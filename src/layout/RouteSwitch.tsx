import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Navbar from './Navbar'
import Home from '../routes/Home'
import Shop from '../routes/Shop'
import About from '../routes/About'
import Footer from './Footer'

export default function RouteSwitch (): JSX.Element {
  return (
    <BrowserRouter>
      <main className='flex flex-col justify-between h-screen'>
        <Navbar />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/shop' element={<Shop />} />
          <Route path='/about' element={<About />} />
        </Routes>
        <Footer />
      </main>
    </BrowserRouter>
  )
}
