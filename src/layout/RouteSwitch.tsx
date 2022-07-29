import { useEffect, useState } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { CartItem } from '../types'
import Navbar from './Navbar'
import Home from '../routes/Home'
import Shop from '../routes/Shop'
import About from '../routes/About'
import Footer from './Footer'
import data from '../data'

export default function RouteSwitch (): JSX.Element {
  const [cartItems, setCartItems] = useState<CartItem[]>([])
  const [cartTotal, setCartTotal] = useState(0)

  useEffect(() => {
    let total = 0

    for (const item of cartItems) {
      const itemTotal = item.price * item.quantity
      total += itemTotal
    }

    setCartTotal(total)
  }, [cartItems])

  const addItemToCart = (id: string): void => {
    setCartItems(prevCartItems => {
      const itemToAdd = data.find(dataItem => dataItem.id === id)

      if (itemToAdd === undefined) throw new Error('Item not found')

      const isItemAlreadyAdded = cartItems.some(cartItem => {
        return cartItem.id === id
      })

      if (isItemAlreadyAdded) {
        const addedItem = cartItems.find(cartItem => {
          return cartItem.id === id
        })
        if (addedItem !== undefined) {
          addedItem.quantity += 1
          return [...prevCartItems]
        }
      }

      return [...prevCartItems, { ...itemToAdd, quantity: 1 }]
    })
  }

  return (
    <BrowserRouter>
      <main className='flex flex-col justify-between h-screen bg-slate-900'>
        <Navbar />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route
            path='/shop'
            element={<Shop addItemToCart={addItemToCart} />}
          />
          <Route path='/about' element={<About />} />
        </Routes>
        <Footer />
      </main>
    </BrowserRouter>
  )
}
