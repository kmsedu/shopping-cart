import { useEffect, useState } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { CartItem } from '../types'
import Navbar from './Navbar'
import Cart from '../components/Cart'
import Home from '../routes/Home'
import Shop from '../routes/Shop'
import About from '../routes/About'
import Footer from './Footer'
import data from '../data'
import ShopItemRoute from '../routes/ShopItemRoute'

export default function RouteSwitch (): JSX.Element {
  const [cartItems, setCartItems] = useState<CartItem[]>([])
  const [cartTotal, setCartTotal] = useState(0)
  const [cartDisplayed, setCartDisplayed] = useState(true)

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

  const toggleDisplayCart = (): void => {
    setCartDisplayed(!cartDisplayed)
  }

  return (
    <BrowserRouter>
      {cartDisplayed && <Cart cartItems={cartItems} cartTotal={cartTotal} />}
      <main
        onClick={() => {
          if (cartDisplayed) toggleDisplayCart()
        }}
        className='flex h-screen flex-col justify-between bg-slate-900'
      >
        <Navbar
          toggleDisplayCart={toggleDisplayCart}
          cartDisplayed={cartDisplayed}
        />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route
            path='/shop'
            element={<Shop addItemToCart={addItemToCart} />}
          />
          <Route
            path='/shop/:id'
            element={<ShopItemRoute addItemToCart={addItemToCart} />}
          />
          <Route path='/about' element={<About />} />
        </Routes>
        <Footer />
      </main>
    </BrowserRouter>
  )
}
