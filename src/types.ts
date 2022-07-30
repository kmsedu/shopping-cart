export interface CartItem {
  id: string
  name: string
  imgSrc: string
  price: number
  inStock: boolean
  quantity: number
}

export interface ShopProps {
  addItemToCart: Function
}

export interface ShopItemProps extends ShopProps {
  id: string
  name: string
  imgSrc: string
  price: number
  inStock: boolean
}

export interface CartProps {
  cartItems: CartItem[]
  cartTotal: number
  removeFromCart: Function
}

export interface NavbarProps {
  toggleDisplayCart: Function
  cartDisplayed: boolean
}
