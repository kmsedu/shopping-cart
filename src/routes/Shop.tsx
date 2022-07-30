import { ShopProps } from '../types'
import data from '../data'
import ShopItem from '../components/ShopItem'

export default function Shop (props: ShopProps): JSX.Element {
  const { addItemToCart } = props

  const shopItemElements = data.map(dataItem => {
    return (
      <ShopItem addItemToCart={addItemToCart} key={dataItem.id} {...dataItem} />
    )
  })
  return (
    <main className='font-main flex h-full flex-col overflow-y-hidden'>
      <div className='hero flex items-center justify-center bg-shop-hero bg-cover bg-center py-16 text-3xl text-white'>
        <p> </p>
      </div>
      <section className='grid flex-[4] auto-rows-[220px] grid-cols-auto-fit gap-8 overflow-auto bg-neutral-200 p-8'>
        {shopItemElements}
      </section>
    </main>
  )
}
