export default function Navbar (): JSX.Element {
  return (
    <nav className='flex justify-between items-center bg-neutral-800 text-white p-4 px-12 border-b-yellow-400 border-b-8 list-none text-xl font-nav gap-24'>
      <h1 className='text-5xl font-display flex-1'>MOON<span className='text-yellow-400'>BASE</span></h1>
      <div className='flex gap-12 mr-4 justify-self-end'>
        <li>Home</li>
        <li>Shop</li>
        <li>About</li>
      </div>
      <div>
        <li>Cart</li>
      </div>
    </nav>
  )
}
