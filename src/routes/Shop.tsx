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
    <main className='flex flex-col h-full overflow-y-hidden'>
      <div className='hero flex justify-center items-center py-16 text-white text-3xl bg-shop-hero bg-center bg-cover'>
        <p> </p>
      </div>
      <section className='flex-[4] bg-neutral-200 p-8 grid grid-cols-auto-fit gap-8 auto-rows-[220px] overflow-auto'>
        {shopItemElements}
      </section>
    </main>
  )
}
