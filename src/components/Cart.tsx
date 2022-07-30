import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { solid } from '@fortawesome/fontawesome-svg-core/import.macro'
import { CartProps } from '../types'

export default function Cart (props: CartProps): JSX.Element {
  const { cartItems, cartTotal, removeFromCart } = props
  const cartItemElements = cartItems.map(cartItem => {
    return (
      <div className='flex items-center p-2' key={cartItem.id}>
        <button
          type='button'
          className='text-red-500 px-4 hover:text-red-700 transition-all'
          onClick={() => removeFromCart(cartItem.id)}
        >
          <FontAwesomeIcon icon={solid('trash-alt')} size='xs' />
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
    <div className='font-main min-w-[350px] absolute right-0 top-10 z-20 flex flex-col border-t-2 border-yellow-400 bg-white shadow-lg shadow-gray-600'>
      {cartItemElements}
      <p className='bg-gray-100 text-xs py-2 px-6 text-right'>
        {cartItemElements.length === 0
          ? <span className='text-center w-full'>Cart is empty</span>
          : <span><strong>Total:</strong> ${cartTotal}.00</span>}
      </p>
      <button type='button' className='bg-yellow-400 py-2 px-4 hover:bg-yellow-300 active:bg-yellow-500'>
        Checkout
      </button>
    </div>
  )
}
