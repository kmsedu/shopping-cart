export interface CartItem {
  id: string
  name: string
  imgSrc: string
  price: number
  inStock: boolean
  quantity: number
}

export interface ShopProps {
  cartItems: CartItem[]
  addItemToCart: Function
}
