import { Link } from 'react-router-dom'
import { NavbarProps } from '../types'

export default function Navbar (props: NavbarProps): JSX.Element {
  const { toggleDisplayCart, cartDisplayed } = props
  return (
    <nav
      className='z-10 flex list-none
                  items-center justify-between 
                    font-nav text-white shadow-[0_0_8px_rgba(0,0,0,0.9)]'
    >
      <h1 className='ml-2 flex-[3] font-display text-3xl'>
        MOON<span className='text-yellow-400'>BASE</span>
      </h1>
      <div className='flex flex-[2] justify-center'>
        <Link
          to='/'
          className='min-w-[95px] border-r border-l border-slate-800
          py-2 px-6 text-center transition-all duration-150 hover:text-yellow-400'
        >
          Home
        </Link>
        <Link
          to='/shop'
          className='transition-color min-w-[95px] border-r border-slate-800
          py-2 px-6 text-center duration-150 hover:text-yellow-400'
        >
          Shop
        </Link>
        <Link
          to='/about'
          className='min-w-[95px] border-r border-slate-800 py-2
          px-6 text-center transition-all duration-150 hover:text-yellow-400'
        >
          About
        </Link>
      </div>
      <div className='flex flex-1 justify-center'>
        <button
          className={`mx-2
          rounded-sm px-4 transition-colors
          ${
            cartDisplayed
              ? 'bg-yellow-400 text-black'
              : 'bg-slate-700 text-white'
          }`}
          onClick={() => toggleDisplayCart()}
        >
          Cart
        </button>
      </div>
    </nav>
  )
}
