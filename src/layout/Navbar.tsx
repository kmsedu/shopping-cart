import { Link } from 'react-router-dom'

export default function Navbar (): JSX.Element {
  return (
    <nav className='flex justify-between items-center bg-neutral-800
                  text-white p-4 px-12 border-b-yellow-400 border-b-8
                    list-none text-xl font-nav gap-24'
    >
      <h1 className='text-5xl font-display flex-1'>MOON<span className='text-yellow-400'>BASE</span></h1>
      <div className='flex gap-16 flex-1 justify-center'>
        <Link to='/' className='hover:text-yellow-400 transition-all duration-150 hover:drop-shadow-[0_0_3px_rgba(255,225,0,0.25)] py-2 px-6'>Home</Link>
        <Link to='/shop' className='hover:text-yellow-400 transition-all duration-150 hover:drop-shadow-[0_0_3px_rgba(255,225,0,0.25)] py-2 px-6'>Shop</Link>
        <Link to='/about' className='hover:text-yellow-400 transition-all duration-150 hover:drop-shadow-[0_0_3px_rgba(255,225,0,0.25)] py-2 px-6'>About</Link>
      </div>
      <div>
        <li>Cart</li>
      </div>
    </nav>
  )
}
