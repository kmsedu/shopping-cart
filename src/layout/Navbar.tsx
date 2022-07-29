import { Link } from 'react-router-dom'

export default function Navbar (): JSX.Element {
  return (
    <nav
      className='flex justify-between items-center
                  text-white border-b-yellow-400 border-b-2
                    list-none font-nav shadow-[0_0_8px_rgba(0,0,0,0.9)] z-10'
    >
      <h1 className='text-3xl font-display flex-[3] ml-2'>
        MOON<span className='text-yellow-400'>BASE</span>
      </h1>
      <div className='flex flex-[2] justify-center'>
        <Link
          to='/'
          className='min-w-[95px] text-center hover:text-yellow-400 transition-all
          duration-150 py-2 px-6 border-r border-l border-slate-800'
        >
          Home
        </Link>
        <Link
          to='/shop'
          className='min-w-[95px] text-center hover:text-yellow-400 transition-color
          duration-150 py-2 px-6 border-r border-slate-800'
        >
          Shop
        </Link>
        <Link
          to='/about'
          className='min-w-[95px] text-center hover:text-yellow-400 transition-all
          duration-150 py-2 px-6 border-r border-slate-800'
        >
          About
        </Link>
      </div>
      <div className='flex flex-1 justify-center'>
        <li
          className='bg-slate-800
          px-4 mx-2 rounded-sm'
        >
          Cart
        </li>
      </div>
    </nav>
  )
}
