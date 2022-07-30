import ShopItem from '../components/ShopItem'
import data from '../data'
import { Link } from 'react-router-dom'

export default function Home ({
  addItemToCart
}: {
  addItemToCart: Function
}): JSX.Element {
  const shopItemElements = [data[0], data[1]].map(dataItem => {
    return (
      <ShopItem {...dataItem} addItemToCart={addItemToCart} key={dataItem.id} />
    )
  })

  return (
    <main className='flex flex-1 flex-col gap-12 bg-neutral-200 font-main'>
      <div className='hero flex items-center justify-center bg-gray-200 py-12 bg-home-hero bg-cover bg-right text-4xl text-white'>
        <span className='drop-shadow-[0_0_2px_#555] font-display'>Your laptop experts</span>
      </div>
      <h1 className='text-center text-gray-600 text-3xl font-title'>Today's deals</h1>
      <section className='mx-4 flex items-center justify-center gap-2'>
        {shopItemElements}
      </section>
      <Link
        to='/shop'
        className='font-title mx-24 my-12 flex items-center justify-center bg-home-shop bg-center bg-cover rounded text-white text-3xl hover:brightness-90 transition-all py-12'
      >
        Go to store
      </Link>
    </main>
  )
}
