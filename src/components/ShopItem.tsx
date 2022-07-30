import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { solid } from '@fortawesome/fontawesome-svg-core/import.macro'
import { Link } from 'react-router-dom'
import { ShopItemProps } from '../types'

export default function ShopItem (props: ShopItemProps): JSX.Element {
  return (
    <Link to={`/shop/${props.id}`} className='flex justify-self-center'>
      <div className='flex min-w-[400px] transform-gpu items-center justify-evenly rounded-lg bg-white shadow-md transition-transform hover:scale-[1.02]'>
        <div className='flex h-full items-center border-r'>
          <img src={props.imgSrc} className='rounded' />
        </div>
        <div className='flex h-full flex-1 flex-col items-start justify-around rounded-lg p-6'>
          <p className='max-w-[200px] text-sm text-slate-600'>{props.name}</p>
          <p className='flex flex-1 items-center self-end text-2xl font-black text-blue-900'>
            ${props.price}.00
          </p>
          <button
            className='self-end rounded bg-yellow-400 py-2 px-4
            text-sm text-slate-800 shadow
            transition-colors hover:bg-yellow-300 active:bg-yellow-500'
            type='button'
            onClick={event => {
              event?.preventDefault()
              props.addItemToCart(props.id)
            }}
          >
            <FontAwesomeIcon icon={solid('add')} />
            {' '}
            Add to cart
          </button>
        </div>
      </div>
    </Link>
  )
}
