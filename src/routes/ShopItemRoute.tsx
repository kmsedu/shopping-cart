import { Link, useMatch } from 'react-router-dom'
import data from '../data'
import { ShopProps } from '../types'

export default function ShopItemRoute (props: ShopProps): JSX.Element {
  const id = useMatch('/shop/:id')?.params.id
  const itemData = data.find(dataItem => dataItem.id === id)

  if (itemData === undefined) {
    throw new Error('Item not found in data list')
  }

  const { addItemToCart } = props
  return (
    <main className='flex h-full'>
      <div className='flex h-full items-center bg-white'>
        <img src={`../${itemData.imgSrc}`} />
      </div>
      <div className='relative flex flex-1 flex-col justify-center bg-neutral-100 p-8'>
        <Link
          to='/shop'
          className='absolute top-8 right-8 rounded-full bg-gray-200 py-2 px-4 font-bold transition-colors hover:bg-gray-300'
        >
          X
        </Link>
        <h2 className='text-2xl'>{itemData.name}</h2>
        <p className='my-8 max-w-[600px] leading-8'>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia
          voluptate esse, enim optio consequuntur non eius totam quidem natus
          aliquam obcaecati ducimus. Quisquam, pariatur aspernatur numquam
          reiciendis suscipit aliquid atque.
        </p>
        <p className='my-8 text-4xl font-bold text-blue-900'>
          ${itemData.price}.00
        </p>
        <button
          type='button'
          className='self-start rounded-lg bg-yellow-400 py-4 px-8'
          onClick={() => addItemToCart(itemData.id)}
        >
          Add to cart
        </button>
      </div>
    </main>
  )
}
