import { ShopItemProps } from '../types'

export default function ShopItem (props: ShopItemProps): JSX.Element {
  return (
    <div className='min-w-[400px] bg-white flex rounded-lg items-center justify-evenly shadow-md hover:scale-[1.02] transition-transform transform-gpu'>
      <div className='border-r h-full z-10 flex items-center'>
        <img src={props.imgSrc} />
      </div>
      <div className='flex flex-col justify-around h-full items-start bg-slate-100 flex-1 p-6 rounded-lg'>
        <p className='text-slate-600 text-sm max-w-[200px]'>{props.name}</p>
        <p className='text-2xl font-black text-blue-900 flex-1 flex items-center self-end'>
          ${props.price}.00
        </p>
        <button
          className='bg-yellow-400 py-2 px-4 rounded text-sm text-slate-800 shadow self-end'
          type='button'
          onClick={() => props.addItemToCart(props.id)}
        >
          Add to cart
        </button>
      </div>
    </div>
  )
}
