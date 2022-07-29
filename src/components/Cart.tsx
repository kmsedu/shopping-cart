import { CartProps } from '../types'

export default function Cart (props: CartProps): JSX.Element {
  const { cartItems, cartTotal } = props
  const cartItemElements = cartItems.map(cartItem => {
    return (
      <div className='flex items-center p-2' key={cartItem.id}>
        <button type='button' className='text-red-500 px-4'>
          x
        </button>
        <img src={cartItem.imgSrc} width='50px' className='h-10 w-10' />
        <div className='flex w-full flex-col p-4'>
          <p className='text-xs'>{cartItem.name}</p>
          <p className='text-[0.6rem]'>Quantity: {cartItem.quantity}</p>
          <p className='self-end text-xs'>
            ${cartItem.price * cartItem.quantity}.00
          </p>
        </div>
      </div>
    )
  })
  return (
    <div className='absolute right-0 top-10 z-20 flex flex-col border-t-2 border-yellow-400 bg-white shadow-lg shadow-gray-400'>
      {cartItemElements}
      <p className='bg-gray-200 p-2 text-right'>
        <strong>Total: </strong>${cartTotal}.00
      </p>
      <button type='button' className='bg-yellow-400 py-2 px-4'>
        Checkout
      </button>
    </div>
  )
}
